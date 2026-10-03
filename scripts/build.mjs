/**
 * 学 AI 站构建器：terms/*.md + meta.js → data/terms.all.js
 *
 * 这个仓的真相源是 terms/*.md（GitHub 上可读可改），
 * data/terms.all.js 是**产物**（跟 .gitignore 走，不手改）。
 *
 * 为什么要做这个脚本而不是手写 JS
 *   手写JS 时正文里的 ** 和引号要手动转义，改一个词要在代码里找位置；
 *   有了 md 源，改词就是改一个文件，GitHub 上能直接 diff、能提 PR。
 *
 * frontmatter 用的是**自研极简解析器**，不是完整 YAML。原因：
 *   词条字段是固定的 10 个（zh/en/alias/purpose/def/why/refs/domain/purposeTag/level），
 *   全部是标量或标量数组，没有嵌套、没有多行块——用完整 YAML 只会多背一个依赖。
 *   但要小心两个陷阱（都已处理，见 parseValue）：
 *   1. 值里含 ** 、" : # 时必须走双引号串并转义 \ 与 "
 *   2. refs 是对象数组（[标签, 链接] 对），要单独按行解析，不能当标量读
 *
 * 验收（硬门禁）：构建产物与旧的 terms.all.js **逐字段等价**。
 *   等价不等就报错退出，不许写出半成品——见 main()末尾的 diff。
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '..');
const termsDir = path.join(repoRoot, 'terms');
const metaPath = path.join(repoRoot, 'meta.js');
const outFile = path.join(repoRoot, 'site', 'data', 'terms.all.js');
const outDir = path.dirname(outFile);

/* ---------- frontmatter 解析 ---------- */

/** 解析双引号串的值（含 \\ 和 \" 转义）。返回原始字符串，不含两侧引号。 */
function readQuoted(s, i) {
  let out = '';
  i++; // 跳过起始引号
  while (i < s.length) {
    const c = s[i];
    if (c === '\\' && (s[i + 1] === '"' || s[i + 1] === '\\')) { out += s[i + 1]; i += 2; continue; }
    if (c === '"') return { val: out, end: i + 1 };
    out += c; i++;
  }
  throw new Error('未闭合的引号');
}

/** 解析行内数组 ["a", "b"]。元素必须是双引号串。 */
function parseInlineArray(raw) {
  const s = raw.trim();
  if (s === '[]') return [];
  if (s[0] !== '[' || s[s.length - 1] !== ']') throw new Error('不是行内数组: ' + raw);
  const inner = s.slice(1, -1).trim();
  if (!inner) return [];
  const out = [];
  let i = 0;
  while (i < inner.length) {
    while (i < inner.length && /\s/.test(inner[i])) i++;
    if (i >= inner.length) break;
    if (inner[i] === ',') { i++; continue; }
    if (inner[i] !== '"') throw new Error('数组元素必须是双引号串: ' + inner.slice(i, i + 20));
    const r = readQuoted(inner, i);
    out.push(r.val);
    i = r.end;
  }
  return out;
}

/** 解析一行 key: value。value 是双引号串则去引号，其余按原样。 */
function parseValue(raw) {
  const s = raw.trim();
  if (!s) return '';
  if (s[0] === '"') return readQuoted(s, 0).val;
  if (s[0] === '[') return parseInlineArray(s);
  // 非引号值：本仓不会产出（导出脚本全加引号），但容错处理
  return s;
}

function parseTermFile(text, file) {
  const m = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(text);
  if (!m) throw new Error(file + ': 缺 frontmatter');
  const fmRaw = m[1];
  const lines = fmRaw.split('\n');
  const t = {};
  let curKey = null;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) continue;
    // 对象数组元素：'  - ["x", "y"]'
    const asArrItem = /^\s+-\s+(.*)$/.exec(line);
    if (asArrItem && curKey === 'refs') {
      const v = parseInlineArray(asArrItem[1]);
      (t.refs ||= []).push(v);
      continue;
    }
    const kv = /^([A-Za-z_][A-Za-z0-9_]*):\s*(.*)$/.exec(line);
    if (!kv) throw new Error(file + ': 第' + (i + 1) + '行无法解析: ' + line);
    curKey = kv[1];
    if (kv[2].trim() === '') { t[curKey] = []; continue; }  // 形如 'refs:' 的块头
    t[curKey] = parseValue(kv[2]);
  }
  t.level = Number(t.level);
  t.ord = Number(t.ord);
  if (!t.zh) throw new Error(file + ': 缺 zh');
  if (!t.layer) throw new Error(file + ': 缺 layer（源文件所属物理层，见导出脚本注释）');
  if (!Number.isFinite(t.ord)) throw new Error(file + ': 缺 ord（同层内编排顺序，见导出脚本注释）');
  // 归一化：可选字段缺失时给空数组，保证与产物结构一致
  if (!t.alias) t.alias = [];
  if (!t.def) t.def = [];
  if (!t.refs) t.refs = [];
  return t;
}

/* ---------- 层定义来自 meta.js（页面唯一真相源） ---------- */
function loadLevels() {
  const ctx = { module: { exports: {} }, console };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(metaPath, 'utf8'), ctx);
  return ctx.META.levels;
}

/* ---------- 主流程 ---------- */
const levels = loadLevels();
const files = fs.readdirSync(termsDir).filter(f => f.endsWith('.md') && f !== 'INDEX.md').sort();

const parsed = [];
for (const f of files) {
  const t = parseTermFile(fs.readFileSync(path.join(termsDir, f), 'utf8'), f);
  parsed.push(t);
}

/* ---------- 组装成分层结构 ----------
 * **按 frontmatter 的 layer 分层、按 ord 排序**——
 * 不能按 level 分层：实测 level 字段与源文件的物理分层不一致
 * （第 3 层物理位置里有词的 level 是 2 或 4）。
 * 两者用途不同：level 给页面分组（groupsOf('level')），layer 定产物顺序。
 * 分层错会让等价门禁拿A 层比 B 层，报出一堆假差异。
 *
 * 层标题与描述来自 meta.js——**页面渲染读的就是 LEVELS**，
 * terms.all.js 里那 6 条 desc 是死数据（且已与 meta.js 漂移）。
 */
const layers = Object.keys(levels).map(Number).sort((a, b) => a - b);
const NUM2KEY = {};           // 一 → 1
Object.keys(levels).forEach(k => { NUM2KEY[levels[k].name] = Number(k); });

const byLayerNum = {};         // 一..六 → 词[]
for (const t of parsed) {
  const n = NUM2KEY[t.layer];
  if (!n) throw new Error(`未知 layer: ${t.layer}（${t.zh}）`);
  (byLayerNum[t.layer] ||= []).push(t);
}

const out = layers.map(n => {
  const key = String(n);
  const lv = levels[key];
  const terms = (byLayerNum[lv.name] || []).slice().sort((a, b) => a.ord - b.ord);
  return { num: lv.name, name: lv.short, desc: lv.desc, terms };
});

const total = out.reduce((a, L) => a + L.terms.length, 0);

/* ---------- 等价校验（硬门禁） ----------
 * 拿旧产物作基准逐字段比。**不等就退出，不写文件**——
 * 写出一个字段有差的产物，页面会静默少词或丢 refs，比构建失败更难查。
 *
 * **比对时统一补齐可选字段**（alias/def/refs 缺失视作[]）：
 * 旧产物里并非每个词都有refs 键（只有 54/116 个有），
 * 而解析器会给每个词补 refs: []。若直接比JSON 会因为「键是否存在」
 * 而报 95 处假差异——内容其实完全一样。
 */
const oldFile = path.join(repoRoot, '.baseline.terms.all.js');
if (fs.existsSync(oldFile)) {
  const ctx = { module: { exports: {} }, console };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(oldFile, 'utf8'), ctx);
  const old = ctx.TERMS;

  // 归一化：只保留有语义的字段，可选数组一律补齐
  const FIELDS = ['zh', 'en', 'alias', 'purpose', 'def', 'why', 'refs', 'domain', 'purposeTag', 'level'];
  /*层级的 num / name / desc **故意不参与比对**。
   * 原因：页面的分层标题与描述来自 meta.js 的 LEVELS（见 groupsOf('level')），
   * 而旧 terms.all.js 里那 6 条 desc 是**死数据——页面从不读它**，
   * 且已与 meta.js 漂移（第三层「看完这层，」vs「看完能」；第六层少了「也是下一站」）。
   * 所以层的真相源是 meta.js，产物里的 desc 由 levels 重新生成即可，
   * 拿死数据当基准比对只会报假差异。真正的门禁是**词条字段全等+ 顺序一致**（116 词）。
   */
  const norm = list => list.map(L => ({
    terms: L.terms.map(t => {
      const o = { level: Number(t.level) };
      FIELDS.forEach(k => {
        o[k] = (k === 'alias' || k === 'def' || k === 'refs')
          ? (t[k] || [])
          : (t[k] || '');
      });
      return o;
    })
  }));
  /* 顺序敏感、不排序：门禁要验的正是「编排顺序没被打乱」，
   * 排序后再比等于把最该验的那件事放过了。 */
  const a = JSON.stringify(norm(old)), b = JSON.stringify(norm(out));

  if (a !== b) {
    // 逐词定位，给出可执行的错误信息
    const pick = list => { const m = {}; list.forEach(L => L.terms.forEach(t => {
      const o = {}; FIELDS.forEach(k => o[k] = (k === 'alias' || k === 'def' || k === 'refs') ? (t[k] || []) : (t[k] || ''));
      o.level = Number(t.level); m[t.zh] = o;
    })); return m; };
    const oldByZh = pick(old), newByZh = pick(out);
    const diffs = [];
    Object.keys(oldByZh).forEach(zh => {
      if (!newByZh[zh]) { diffs.push('缺失词: ' + zh); return; }
      FIELDS.concat(['level']).forEach(k => {
        const x = JSON.stringify(oldByZh[zh][k]), y = JSON.stringify(newByZh[zh][k]);
        if (x !== y) diffs.push(`字段 ${k} 变化: ${zh}  旧=${String(x).slice(0, 60)}  新=${String(y).slice(0, 60)}`);
      });
    });
    Object.keys(newByZh).forEach(zh => { if (!oldByZh[zh]) diffs.push('新增词: ' + zh); });
    // 顺序差异单独报：按 zh 查字典查不出顺序问题，必须逐层比对词序
    const seqOf = list => list.map(L => L.terms.map(t => t.zh));
    seqOf(old).forEach((seq, i) => {
      const s2 = seqOf(out)[i] || [];
      const n = Math.max(seq.length, s2.length);
      for (let k = 0; k < n; k++) {
        if (seq[k] !== s2[k]) {
          diffs.push(`第 ${i + 1} 层第 ${k + 1} 位不同：旧=「${seq[k] || '(无)'}」新=「${s2[k] || '(无)'}」`);
          break;
        }
      }
    });
    console.error('等价校验失败，未写出产物：');
    diffs.slice(0, 20).forEach(d => console.error('  ' + d));
    if (diffs.length > 20) console.error('  ...另 ' + (diffs.length - 20) + ' 处');
    process.exit(1);
  }
  console.log('等价校验通过（对照 .baseline.terms.all.js）');
} else {
  console.log('无基准文件，跳过等价校验（首次构建）');
}

/* ---------- 写产物 ---------- */
const header = `/* AI 名词地图 · 词条数据
 *
 * **这是产物，不要手改。** 源在 terms/*.md。
 * 改词：编辑 terms/<slug>.md，然后跑 node scripts/build.mjs。
 *
 * 结构：6 层，每层 { num, name, desc, terms[] }
 * 每词字段：zh / en / alias / purpose / def / why / refs / domain / purposeTag / level
 */
var TERMS = `;
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, header + JSON.stringify(out, null, 1) + ';\n', 'utf8');

console.log('构建完成：' + total + ' 词 / ' + out.length + ' 层 → ' + path.relative(repoRoot, outFile));

/* ---------- 同步到部署目录 ----------
 * 为什么必须在这里做（2026-10-03 发现）：
 *   站点真正的部署目录是仓库外的 `learn.specul/`（GitHub Pages 从那儿取文件），
 *   而本脚本只写 `_data/glossary/site/data/` —— 中间隔着一次**手工复制**。
 *   后果：改完词跑完 build，脚本报「构建完成」，但线上还是旧词，
 *   而且**没有任何检查会报错**（这跟 agent 站的「静默丢内容」是同一类问题）。
 *   把同步收进构建流程之后，「改词 → build → 站点到位」才是一条命令。
 */
const deployDir = path.resolve(repoRoot, '..', '..', 'learn.specul', 'data');
if (fs.existsSync(path.dirname(deployDir))) {
  fs.mkdirSync(deployDir, { recursive: true });
  const copies = [
    ['terms.all.js', outFile],                 // 词条：产物 → 部署
    ['meta.js', path.join(repoRoot, 'meta.js')], // 元信息：仓内源 → 部署
    // dims.js 的真相源就是仓内这份（2026-10-03 从「两份无源手写副本」升为有源）。
    ['dims.js', path.join(repoRoot, 'dims.js')],
  ];
  const synced = [];
  let changed = 0;
  for (const [name, from] of copies) {
    if (!fs.existsSync(from)) {
      console.log('跳过同步（源不存在）：' + path.relative(repoRoot, from));
      continue;
    }
    const to = path.join(deployDir, name);
    const a = fs.readFileSync(from);
    const b = fs.existsSync(to) ? fs.readFileSync(to) : null;
    if (b && b.equals(a)) { synced.push(name + '（未变）'); continue; }
    fs.writeFileSync(to, a);
    synced.push(name + (b ? '（已更新）' : '（新建）'));
    changed++;
  }
  console.log('同步到 learn.specul/data/：' + synced.join('、'));
  // 2026-10-03：原先这里还会把 dims.js 同步到 `_sites/_preview/data`，
  // 给learn 站前身的那份演示页喂数据。那份演示页连同数据已归档到
  // `_tmp-scripts/_retired-2026-10-03/`，所以这段一并去掉 ——
  // 留着就是「给一个归档物持续供给」的下一个人，照样会把它当输入。
  if (!changed) console.log('（部署目录已是最新，无需改动）');
}