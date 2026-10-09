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
/* 词条释义英文（2026-10-04 起分批补），键 = md 文件名（不含扩展名）。
 * 缺键 → 页面英文态回退中文（可接受降级）。 */
let TERMS_EN = {};
try {
  TERMS_EN = JSON.parse(fs.readFileSync(path.join(repoRoot, 'terms.en.json'), 'utf8'));
} catch (e) {
  console.warn('  ! terms.en.json 读不到，词条释义保持中文：' + e.message);
}

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
  /* 记住源文件名，供注入英文字段时按名索引 terms.en.json。
   * 用 **不可枚举** 属性 —— JSON.stringify 会跳过它，所以它不会进产物，
   * 「逐字段等价」门禁与产物结构都不受影响。用 __ 前缀 + 普通赋值会把它写进 terms.all.js。 */
  Object.defineProperty(t, '__file', { value: file, enumerable: false, writable: true });
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

/* 注入英文字段（2026-10-04）。
 * 键 = md 文件名（不含扩展名），见 terms.en.json。
 * **不改那10 个中文字段** —— 构建末尾的「逐字段等价」门禁以它们为基准
 * （见下方 FIELDS），加新字段不影响那条门禁。
 * 缺键时不写该字段 → 页面英文态回退中文（可接受降级）。 */
let enCovered = 0, enTotal = 0;
for (const t of parsed) {
  enTotal++;
  const base = path.basename(t.__file || '').replace(/\.md$/, '');
  const en = TERMS_EN[base];
  if (!en) continue;
  enCovered++;
  if (en.purpose) t.purposeEn = en.purpose;
  if (en.def) t.defEn = en.def;
  if (en.why) t.whyEn = en.why;
  if (en.alias) t.aliasEn = en.alias;
}

/* B1（2026-10-09）：给每个词条加 `slug` —— 独立页的 URL 段，取自 **md 文件名**。
 * 为什么不能用 `zh` 推：实测 9 个词条的 zh 与文件名不同（文件名用 `-`、zh 用 `/`，
 *   如 `API - 接口调用.md` 的 zh 是「API / 接口调用」）—— 用 zh 拼 URL 会 404。
 * 为什么会进产物：页面（learn.specul/index.html）要靠它生成「独立页面」链接，
 *   而 `__file` 是不可枚举的（刻意不进产物），页面拿不到 —— 所以必须显式写一个字段。
 * 逐字段等价门禁只比 FIELDS 里那 10 个中文字段，**新增字段不影响它**（见上方注释）。 */
for (const t of parsed) {
  const base = path.basename(t.__file || '').replace(/\.md$/, '');
  if (!base) throw new Error(`词条缺少文件名，无法定 slug：${t.zh}`);
  t.slug = base;
}
{
  const seen = new Set();
  for (const t of parsed) {
    if (seen.has(t.slug)) throw new Error(`slug 重复：${t.slug}（会出现两个同 URL 的词条页）`);
    seen.add(t.slug);
  }
}

const out = layers.map(n => {
  const key = String(n);
  const lv = levels[key];
  const terms = (byLayerNum[lv.name] || []).slice().sort((a, b) => a.ord - b.ord);
  return { num: lv.name, name: lv.short, desc: lv.desc, terms };
});

const enRate = enTotal ? Math.round(enCovered / enTotal * 100) : 0;
console.log(`  · 词条英文覆盖：${enRate}%（${enCovered} / ${enTotal} 条）`);

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
/* `--accept` = 承认这次字段变化是**有意的**，把新产物刷成新基准。
 * 为什么需要它：门禁的默认职责是拦住「少词 / 丢 refs」这类静默损坏，
 * 但它同样会拦住**故意**改字段（比如 2026-10-08 把 3 个词的 level 与所在层对齐）。
 * 以前只能手改/删 .baseline.terms.all.js 绕过——那等于把门禁永久关掉，
 * 下一次真正的意外损坏也就拦不住了。显式开关把这个决定留在命令行里。
 */
const ACCEPT = process.argv.includes('--accept');

const oldFile = path.join(repoRoot, '.baseline.terms.all.js');
if (ACCEPT) {
  console.log('--accept：跳过等价校验，构建后将刷新基准');
} else if (fs.existsSync(oldFile)) {
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

if (ACCEPT) {
  fs.writeFileSync(oldFile, header + JSON.stringify(out, null, 1) + ';\n', 'utf8');
  console.log('已刷新基准 → ' + path.relative(repoRoot, oldFile) + '（下次构建恢复逐字段门禁）');
}

/* ---------- 同步到部署目录 ----------
 * 为什么必须在这里做（2026-10-03 发现）：
 *   站点真正的部署目录是仓库外的 `learn.specul/`（GitHub Pages 从那儿取文件），
 *   而本脚本只写 `_data/glossary/site/data/` —— 中间隔着一次**手工复制**。
 *   后果：改完词跑完 build，脚本报「构建完成」，但线上还是旧词，
 *   而且**没有任何检查会报错**（这跟 agent 站的「静默丢内容」是同一类问题）。
 *   把同步收进构建流程之后，「改词 → build → 站点到位」才是一条命令。
 */
const deployDir = path.resolve(repoRoot, '..', '..', 'learn.specul', 'data');
/* B5（2026-10-09）：learn 站的 brand.css / brand.js 也纳入同步。
 * 起因：改品牌 token 做对比度达标时发现 `learn.specul/brand.css` 是**旧版**——
 *   它既不在 `_tmp/vendor-brand.mjs` 的列表里，也不在 `_audit/brand-sync.mjs` 的守卫里，
 *   于是四个 `_data/` 仓都同步了，只有 learn 站在**静默漂移**（35.3KB vs 36.4KB）。
 *   现在：本仓 `brand/` 存 vendored 副本（有 MANIFEST 哈希），构建时同步到部署目录，
 *   守卫覆盖本仓 —— 与其他四仓同一套路。 */
const brandDir = path.resolve(repoRoot, '..', '..', 'learn.specul');
if (fs.existsSync(path.dirname(deployDir))) {
  fs.mkdirSync(deployDir, { recursive: true });
  for (const f of ['brand.css', 'brand.js']) {
    const from = path.join(repoRoot, 'brand', f);
    const to = path.join(brandDir, f);
    if (!fs.existsSync(from)) { console.log('跳过同步（仓内缺 vendored 副本）：brand/' + f); continue; }
    const a = fs.readFileSync(from);
    const b = fs.existsSync(to) ? fs.readFileSync(to) : null;
    if (b && b.equals(a)) { console.log(`  品牌 ${f}（未变）`); continue; }
    fs.writeFileSync(to, a);
    console.log(`  品牌 ${f} 已同步 → learn.specul/`);
  }
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

/* ═══════════════════════════════════════════════════════════════════════
 * B1 · 让内容可寻址：生成 116 个词条独立页 + 重写 sitemap（2026-10-09）
 *
 * 为什么 slug 用**文件名**而不是 `zh` 字段：
 *   实测 9 个词条的 zh 与文件名不同（文件名用 `-`，zh 用 `/`，如
 *   `API - 接口调用.md` 的 zh 是「API / 接口调用」）。文件名是 URL 的稳定身份，
 *   zh 是可变的展示名 —— 所以 slug 取文件名，并且**不断言两者相等**（它们本来就不等）。
 *
 * URL 约定沿用 vg 站：中文 slug 原样作目录名，sitemap 里百分号编码
 *   （实测 vg 的 `ai-生成内容的版权.html` 在 sitemap 里就是 `ai-%E7%94%9F…`）。
 *   路径：`learn.specul/term/<slug>/index.html`
 *
 * 双语：与站上一致，用 `data-zh` / `data-en` 双 span（brand.js 负责切换），
 *   所以词条页**不需要**额外的翻译文件（R2 在同一份产物里满足）。
 * ═══════════════════════════════════════════════════════════════════════ */
const learnDir = path.resolve(repoRoot, '..', '..', 'learn.specul');
if (fs.existsSync(learnDir)) {
  /* 展示名映射来自 meta.js（与页面同一个真相源）——**不要在这里重抄一份中文名**，
   * 那正是「两处口径并存」的老毛病。 */
  const metaCtx = { module: { exports: {} }, console };
  vm.createContext(metaCtx);
  vm.runInContext(fs.readFileSync(metaPath, 'utf8'), metaCtx);
  const META = metaCtx.META;

  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  /* 双 span 双语（与站上一致，brand.js 负责切换）。参数已是纯文本，用 esc。 */
  const bi = (zh, en) => `<span data-zh>${esc(zh)}</span><span data-en>${esc(en == null || en === '' ? zh : en)}</span>`;
  /* 与 learn 首页的 escMd 同规则：先 esc，再把 **粗体** 变成 <strong> */
  const escMd = (s) => {
    const slots = [];
    let out = esc(s).replace(/\*\*([^*]+)\*\*/g, (_, inner) => {
      slots.push(inner);
      return '\u0000' + (slots.length - 1) + '\u0000';
    });
    out = out.replace(/\u0000(\d+)\u0000/g, (_, i) => '<strong>' + slots[Number(i)] + '</strong>');
    return out;
  };
  const ENC = (s) => encodeURIComponent(s);

  /* B5（2026-10-09）：meta description 与 JSON-LD。
   * 描述原先只取 purpose —— 实测大量词条的 purpose 短于 50 字符（「让不同厂商的 AI 编码工具能挂进同一个编辑器。」
   * 只有 24 字），搜索结果里等于没写。现在按 purpose → def[0] → why 依次拼到够长为止，
   * 仍然只写词条自己已有的内容，不堆关键词。
   * ⚠ 截断要按**转义之后**的长度算：`&` → `&amp;` 会变长（agent 那边就因此从 150 变 170）。 */
  const plainTxt = (s) => String(s == null ? '' : s).replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
  const metaDesc = (t) => {
    const parts = [plainTxt(t.purpose), plainTxt((t.def || [])[0]), plainTxt(t.why)];
    let out = '';
    for (const p of parts) {
      if (!p) continue;
      out = out ? out + ' ' + p : p;
      if (esc(out).length >= 70) break;          // 够长就停，不硬塞
    }
    if (esc(out).length < 50) out = (out + ' —— 学 AI 词条：它是什么、为什么需要知道、原始出处。').trim();
    let n = out.length;
    while (n > 0 && esc(out.slice(0, n) + '…').length > 158) n -= Math.max(1, esc(out.slice(0, n) + '…').length - 158);
    return n < out.length ? out.slice(0, n).replace(/[\s,，、;；:：\-—]+$/, '') + '…' : out;
  };

  /* JSON-LD：词条页用 DefinedTerm（schema.org 里就是为「术语表条目」定义的），
   * 并指回 isPartOf（词条集）与同层词条集。中英两个名字都写进 alternateName。 */
  const termJsonLd = (t, slug, layerName) => JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: t.zh,
    alternateName: t.en || undefined,
    description: plainTxt(t.purpose),
    url: `https://learn.specul.com/term/${ENC(slug)}/`,
    inLanguage: 'zh-Hans',
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: `学 AI · 第${t.layer}层（${layerName}）`,
      url: `https://learn.specul.com/#layer-${t.level}`,
    },
    isPartOf: { '@type': 'WebSite', name: '学 AI', url: 'https://learn.specul.com/' },
  });

  // 扁平顺序：out 已按 layer 排序、层内按 ord 排序 → 直接铺平就是「有序路径」
  const flat = [];
  for (const L of out) for (const t of L.terms) flat.push({ t, layer: L });
  const slugOf = (t) => t.slug || path.basename(t.__file || '').replace(/\.md$/, '');

  /* ═══ B3（2026-10-09）· 站间骨架 ═══
   * 每个词条页加两节：
   *   「现在能做什么」—— 一条**跨站**动作（去哪个站、能拿到什么）+ 一条站内动作（同层其他词）
   *   「相关词条」    —— 3 个邻近词条（先同 domain、再同层，按邻近度取），站内互链
   *
   * 跨站目标怎么定（R4/R5：从内容推，不靠手感，也不人工逐条拍）：
   *   ① 词条自己的 refs 里已经指向本站群的 → **优先用作者自己写的那条**（最准）
   *   ② 否则按 purpose + def + why + alias 的关键词规则（依据是「那个站真的能回答
   *      这个词引出的下一步问题」，不是「词里出现了某个字」）
   *   ③ 都推不出 → 指向 specul.com 看站群分工（诚实但价值最低，实测只有 9 个词条落到这里）
   * 推不出来的**不硬凑**：宁可少一条，也不指一个对不上的站。 */
  const SITE_ACTION = {
    models: { href: 'https://models.specul.com/', zh: '去 Models 图谱：看这个模型有哪些量化版、按你的显存该下哪一档', en: 'Models atlas: which quantisations exist and which tier fits your VRAM' },
    agent: { href: 'https://agent.specul.com/', zh: '去 Agent 图谱：看有哪些装得上的客户端、运行时与工具', en: 'Agent atlas: which clients, runtimes and tools you can install' },
    vg: { href: 'https://vg.specul.com/', zh: '去「AI 做游戏」：看这一步在真实项目里会卡在哪', en: 'AI for games: where this step breaks down in a real project' },
    nav: { href: 'https://nav.specul.com/', zh: '去导航：找现成的工具、平台、评测与学习资源', en: 'Directory: ready-made tools, platforms, benchmarks and courses' },
    www: { href: 'https://specul.com/', zh: '看站群怎么分工：这一站回答「是什么」，其他站回答「选哪个」', en: 'How the site family divides the work' },
  };
  const HOST2SITE = { 'agent.specul.com': 'agent', 'models.specul.com': 'models', 'vg.specul.com': 'vg', 'nav.specul.com': 'nav', 'specul.com': 'www' };
  const CROSS_RULES = [
    ['models', /量化|显存|bpw|gguf|权重|参数量|推理成本|调用成本|缓存|kv ?缓存|上下文窗口|长上下文|分词|token|词表|微调|蒸馏|预训练|训练|卸载|吞吐|并发|路由|gpu|芯片|算力/i],
    ['agent', /agent|智能体|工具调用|mcp|提示词|编码助手|代码补全|仓库级|终端|ide|cli|编排|工作流|人机协作|可观测|监控|服务中断|迭代速度|退出成本|迁移/i],
    ['vg', /游戏|引擎|帧率|手感|素材|玩法|关卡/i],
    ['nav', /网站|导航|平台|服务商|开源项目|数据集|评测|基准|benchmark|课程|论文|社区|资讯/i],
  ];
  const DOMAIN_FALLBACK = { infra: 'models', model: 'models', agent: 'agent', dev: 'agent', media: 'nav', concept: 'www', choice: 'www', data: 'www' };
  function crossTarget(t) {
    for (const r of t.refs || []) {
      const m = String(r[1] || '').match(/^https?:\/\/([^/]+)/i);
      if (m) { const s = HOST2SITE[m[1].replace(/^www\./, '')]; if (s) return s; }
    }
    const text = [t.purpose, (t.def || []).join(' '), t.why, (t.alias || []).join(' ')].join(' ');
    for (const [s, re] of CROSS_RULES) if (re.test(text)) return s;
    return DOMAIN_FALLBACK[t.domain] || 'www';
  }

  const FAVICON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%238b7cf8'/%3E%3Cstop offset='1' stop-color='%2322d3c5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='48' height='48' rx='12' fill='%2305080f'/%3E%3Cpath d='M14 32 L24 12 L34 32' fill='none' stroke='url(%23g)' stroke-width='2.4' stroke-linejoin='round'/%3E%3Ccircle cx='24' cy='27' r='2.4' fill='%2322d3c5'/%3E%3C/svg%3E";

  const HEADER = (cur) => `  <a class="t-skip" href="#main"><span data-zh>跳到主要内容</span><span data-en>Skip to main content</span></a>
  <header class="site-header">
    <div class="container site-bar">
      <a class="brand" href="https://specul.com/" title="投机取巧">
        <span class="brand-dot" aria-hidden="true"></span>
        <span class="brand-text">
          <span class="brand-name" id="markName" data-zh-name="投机取巧" data-en-name="Speculative Speculation">投机取巧</span>
        </span>
      </a>
      <nav class="nav-links" aria-label="站点导航">
        <a href="https://specul.com/"><span data-zh>首页</span><span data-en>Home</span></a>
        <a href="https://learn.specul.com/"${cur === 'learn' ? ' aria-current="page"' : ''}><span data-zh>学 AI</span><span data-en>Learn</span></a>
        <a href="https://agent.specul.com/"><span data-zh>Agent</span><span data-en>Agent</span></a>
        <a href="https://models.specul.com/"><span data-zh>本地模型</span><span data-en>Models</span></a>
        <a href="https://vg.specul.com/"><span data-zh>AI 做游戏</span><span data-en>Vibe Gaming</span></a>
        <a href="https://nav.specul.com/"><span data-zh>导航</span><span data-en>Directory</span></a>
        <span class="nav-tools">
          <button class="icon-btn" id="themeBtn" type="button" aria-label="切换明暗主题" title="切换明暗主题">☾</button>
          <button class="icon-btn" id="langBtn" type="button" aria-label="Switch language" title="Switch language">EN</button>
        </span>
      </nav>
      <!-- B6（2026-10-09）：窄屏导航入口（样式与行为在共享 brand.css / brand.js）。 -->
      <button class="nav-burger" type="button" aria-label="打开菜单" aria-expanded="false" aria-controls="navDrawer">
        <i></i><i></i><i></i>
      </button>
    </div>
  </header>
  <div class="nav-scrim"></div>
  <aside class="nav-drawer" id="navDrawer" aria-hidden="true" aria-label="站点导航">
    <div class="nav-drawer-h">
      <span class="brand-name"><span data-zh>投机取巧</span><span data-en>Speculative Speculation</span></span>
      <button class="nav-dclose" type="button" aria-label="关闭">×</button>
    </div>
    <nav class="nav-drawer-list">
      <a href="https://specul.com/"><span><span data-zh>首页</span><span data-en>Home</span></span><span class="ar" aria-hidden="true">→</span></a>
      <a href="https://learn.specul.com/"><span><span data-zh>学 AI</span><span data-en>Learn</span></span><span class="ar" aria-hidden="true">→</span></a>
      <a href="https://agent.specul.com/"><span><span data-zh>Agent</span><span data-en>Agent</span></span><span class="ar" aria-hidden="true">→</span></a>
      <a href="https://models.specul.com/"><span><span data-zh>本地模型</span><span data-en>Models</span></span><span class="ar" aria-hidden="true">→</span></a>
      <a href="https://vg.specul.com/"><span><span data-zh>AI 做游戏</span><span data-en>Vibe Gaming</span></span><span class="ar" aria-hidden="true">→</span></a>
      <a href="https://nav.specul.com/"><span><span data-zh>导航</span><span data-en>Directory</span></span><span class="ar" aria-hidden="true">→</span></a>
    </nav>
    <div class="nav-drawer-foot">
      <p><span data-zh>6 个站，各管一件事</span><span data-en>Six sites, one job each</span></p>
      <nav><a href="https://specul.com/legal.html"><span data-zh>法律条款</span><span data-en>Legal terms</span></a></nav>
    </div>
  </aside>`;

  const FOOTER = `  <footer class="site-footer">
    <div class="container foot-row">
      <div class="foot-brand">
        <span class="brand-dot" aria-hidden="true"></span>
        <span class="foot-copy">© 2026 Specul · <span data-zh>投机</span><span data-en>Specul</span> · <span data-zh>推演</span><span data-en>Speculate</span></span>
      </div>
      <nav class="foot-links" aria-label="页脚导航">
          <a href="https://specul.com/"><span data-zh>首页</span><span data-en>Home</span></a>
          <a href="https://learn.specul.com/"><span data-zh>学 AI</span><span data-en>Learn</span></a>
          <a href="https://agent.specul.com/"><span data-zh>Agent</span><span data-en>Agent</span></a>
          <a href="https://models.specul.com/"><span data-zh>本地模型</span><span data-en>Models</span></a>
          <a href="https://vg.specul.com/"><span data-zh>AI 做游戏</span><span data-en>Vibe Gaming</span></a>
          <a href="https://nav.specul.com/"><span data-zh>导航</span><span data-en>Directory</span></a>
          <a href="https://github.com/speculcom/learn" target="_blank" rel="noopener">GitHub</a>
      </nav>
      <nav class="foot-legal-links" aria-label="法律">
        <a href="https://specul.com/legal.html"><span data-zh>法律条款</span><span data-en>Legal terms</span></a>
        <a href="https://specul.com/legal.html#s6"><span data-zh>免责声明</span><span data-en>Disclaimer</span></a>
        <a href="https://specul.com/legal.html#s8"><span data-zh>隐私与本地存储</span><span data-en>Privacy</span></a>
      </nav>
    </div>
  </footer>`;

  /* 词条页自带的一小段样式：只用 brand.css 的变量（带兜底值），
   * 不依赖抽屉（.drawer）作用域下的类，避免「类名在别的容器里没样式」。 */
  const TP_CSS = `<style>
.tp-wrap{max-width:52rem;margin:0 auto}
.tp-crumbs{font-size:.82rem;opacity:.7;margin:1.6rem 0 .4rem;display:flex;gap:.5rem;flex-wrap:wrap}
.tp-crumbs a{text-decoration:none;border-bottom:1px dotted currentColor}
.tp h1{font-size:clamp(1.6rem,4vw,2.3rem);line-height:1.25;margin:.6rem 0 .3rem}
.tp-en{opacity:.65;font-size:1rem;margin:0 0 .9rem}
.tp-tags{display:flex;gap:.4rem;flex-wrap:wrap;margin:0 0 1.8rem;padding:0;list-style:none}
.tp-tag{border:1px solid var(--line,rgba(127,127,127,.28));border-radius:999px;padding:.14rem .62rem;font-size:.76rem;opacity:.9}
.tp-sec{margin:1.7rem 0}
.tp-lab{font-size:.76rem;letter-spacing:.09em;text-transform:uppercase;opacity:.55;margin-bottom:.45rem}
.tp-p{line-height:1.9;margin:.5rem 0}
.tp-li{line-height:1.9;margin:.5rem 0;padding-left:1.05rem;position:relative}
.tp-li::before{content:'·';position:absolute;left:.15rem;opacity:.5}
.tp-refs{list-style:none;padding:0;margin:.5rem 0}
.tp-refs li{margin:.45rem 0;line-height:1.7}
.tp-refs a{text-decoration:none;border-bottom:1px solid var(--line,rgba(127,127,127,.35))}
.tp-pn{display:flex;justify-content:space-between;gap:1rem;margin:3rem 0 1rem;padding-top:1.4rem;border-top:1px solid var(--line,rgba(127,127,127,.25));font-size:.9rem}
.tp-pn a{text-decoration:none;max-width:46%}
.tp-pn .tp-ph{opacity:.55;display:block;font-size:.75rem}
@media(max-width:520px){.tp-pn{flex-direction:column}.tp-pn a{max-width:100%}}
</style>`;

  const DEPLOY_TERM = path.join(learnDir, 'term');
  let pageChanged = 0, pageTotal = 0;
  const wantSlugs = new Set();

  for (let i = 0; i < flat.length; i++) {
    const { t, layer } = flat[i];
    const slug = slugOf(t);
    if (!slug) throw new Error(`词条缺少文件名，无法定 slug：${t.zh}`);
    if (wantSlugs.has(slug)) throw new Error(`slug 重复：${slug}`);
    wantSlugs.add(slug);
    pageTotal++;

    const prev = flat[i - 1], next = flat[i + 1];
    const lv = META.levels[String(t.level)] || {};
    const tagZh = `第${t.layer || layer.num}层 · ${layer.name}`;
    const tagEn = `Layer ${t.level} · ${lv.shortEn || lv.nameEn || layer.name}`;

    const refs = (t.refs || []).map((r) => {
      const lab = bi(r[0], r[2]);
      return `      <li>${lab} <a href="${esc(r[1])}" target="_blank" rel="noopener">↗</a></li>`;
    }).join('\n');

    const defList = (t.def || []).map((d) => `      <p class="tp-li">${escMd(d)}</p>`).join('\n');
    const defListEn = (t.defEn && t.defEn.length ? t.defEn : t.def).map((d) => `      <p class="tp-li" data-en>${escMd(d)}</p>`).join('\n');

    const aliasZh = (t.alias && t.alias.length)
      ? `      <div class="tp-sec"><div class="tp-lab">别名</div><p class="tp-p"><span data-zh>${esc(t.alias.join(' · '))}</span></p></div>\n`
      : '';

    /* B3：跨站动作（一条）+ 站内动作（同层其他词）。
     * 跨站那条的措辞是「去哪个站**能拿到什么**」，不是一个光秃秃的站名。 */
    const target = crossTarget(t);
    const act = SITE_ACTION[target];
    const layerCount = layer.terms.length;
    const crossLink = `      <div class="tp-sec">
        <div class="tp-lab">${bi('现在能做什么', 'What you can do now')}</div>
        <p class="tp-p"><a href="${esc(act.href)}">${bi(act.zh, act.en)} ↗</a></p>
        <p class="tp-p"><a href="../../#layer-${esc(String(t.level))}">${bi(`回到名词地图看第${t.level}层的其他 ${layerCount - 1} 个词 →`, `Back to the map: the other ${layerCount - 1} terms in layer ${t.level} →`)}</a></p>
      </div>
`;

    /* B3：相关词条 —— 3 个邻近词条（先同 domain 优先，再按层级/序号邻近度）。
     * 排序必须**确定**（同分按 slug），否则每次构建产物都不同、diff 全是噪声。 */
    const near = flat
      .filter((x) => x.t !== t)
      .map((x) => ({
        x,
        sameDomain: x.t.domain === t.domain ? 0 : 1,
        dLayer: Math.abs(Number(x.t.level) - Number(t.level)),
        dOrd: Math.abs(Number(x.t.ord) - Number(t.ord)),
      }))
      .sort((a, b) => (a.sameDomain - b.sameDomain) || (a.dLayer - b.dLayer) || (a.dOrd - b.dOrd) || slugOf(a.x.t).localeCompare(slugOf(b.x.t), 'zh'))
      .slice(0, 3);
    const related = `      <div class="tp-sec">
        <div class="tp-lab">${bi('相关词条', 'Related terms')}</div>
        <p class="tp-p">${near.map(({ x }) => `<a href="../${ENC(slugOf(x.t))}/">${esc(x.t.zh)}</a>`).join(' · ')}</p>
      </div>
`;

    const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(t.zh)} · 学 AI | 投机取巧</title>
  <meta name="description" content="${esc(metaDesc(t))}" />
  <link rel="canonical" href="https://learn.specul.com/term/${ENC(slug)}/" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="学 AI" />
  <meta property="og:url" content="https://learn.specul.com/term/${ENC(slug)}/" />
  <meta property="og:title" content="${esc(t.zh)} · 学 AI" />
  <meta property="og:description" content="${esc(metaDesc(t))}" />
  <meta name="theme-color" content="#16121f" />
  <link rel="icon" type="image/svg+xml" href="${FAVICON}" />
  <link rel="stylesheet" href="../../brand.css" />
  <link rel="stylesheet" href="../../learn.css" />
  <style>:root { --accent: var(--cyan); }</style>
${TP_CSS}
  <!-- B5：词条页的结构性数据（DefinedTerm） -->
  <script type="application/ld+json">${termJsonLd(t, slug, layer.name)}</script>
</head>
<body class="brand-ambient" style="--accent:var(--cyan)">
${HEADER('learn')}
  <main id="main">
    <div class="container">
      <article class="tp tp-wrap">
        <nav class="tp-crumbs" aria-label="面包屑">
          <a href="../../"><span data-zh>← 名词地图</span><span data-en>← Term map</span></a>
          <span aria-hidden="true">·</span>
          <a href="../../#layer-${esc(String(t.level))}">${bi(layer.name, lv.shortEn || lv.nameEn || layer.name)}</a>
        </nav>
        <h1>${esc(t.zh)}</h1>
        <p class="tp-en">${esc(t.en || '')}</p>
        <ul class="tp-tags">
          <li class="tp-tag">${bi((META.domains[t.domain] || {}).name || t.domain, (META.domains[t.domain] || {}).nameEn || t.domain)}</li>
          <li class="tp-tag">${bi(tagZh, tagEn)}</li>
        </ul>

        <div class="tp-sec">
          <div class="tp-lab">${bi('解决什么问题', 'What problem it solves')}</div>
          <p class="tp-p"><span data-zh>${escMd(t.purpose)}</span><span data-en>${escMd(t.purposeEn || t.purpose)}</span></p>
        </div>

        <div class="tp-sec">
          <div class="tp-lab">${bi('这是什么', 'What it is')}</div>
<span data-zh>
${defList}
</span>
<span data-en>
${defListEn}
</span>
        </div>

        <div class="tp-sec">
          <div class="tp-lab">${bi('为什么需要知道', 'Why it matters')}</div>
          <p class="tp-p"><span data-zh>${escMd(t.why)}</span><span data-en>${escMd(t.whyEn || t.why)}</span></p>
        </div>
${aliasZh}
${related}
${crossLink}
        <div class="tp-sec">
          <div class="tp-lab">${bi('出处', 'Sources')}</div>
          <ul class="tp-refs">
${refs || '        <li class="tp-p">—</li>'}
          </ul>
        </div>

        <nav class="tp-pn" aria-label="上下篇">
${prev ? `          <a href="../${ENC(slugOf(prev.t))}/"><span class="tp-ph">${bi('上一篇', 'Previous')}</span>${esc(prev.t.zh)}</a>` : '          <span></span>'}
${next ? `          <a href="../${ENC(slugOf(next.t))}/" style="text-align:right"><span class="tp-ph">${bi('下一篇', 'Next')}</span>${esc(next.t.zh)}</a>` : '          <span></span>'}
        </nav>
      </article>
    </div>
  </main>
${FOOTER}
  <script src="../../brand.js"></script>
</body>
</html>
`;

    const dir = path.join(DEPLOY_TERM, slug);
    const file = path.join(dir, 'index.html');
    const old = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null;
    if (old === html) continue;
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(file, html, 'utf8');
    pageChanged++;
  }

  /* 清掉不再存在的词条页（改名/删除词条留下的孤儿目录） */
  let removed = 0;
  if (fs.existsSync(DEPLOY_TERM)) {
    for (const e of fs.readdirSync(DEPLOY_TERM, { withFileTypes: true })) {
      if (!e.isDirectory() || wantSlugs.has(e.name)) continue;
      fs.rmSync(path.join(DEPLOY_TERM, e.name), { recursive: true, force: true });
      removed++;
    }
  }

  /* sitemap：1（地图）+ 116（词条）= 117 条。
   * ⚠ 不写 lastmod —— 它推不出来（与 www/llms.txt 同一个理由：不能从内容推导的日期
   *   会让「产物 == 数据」这类比对失去意义）。changefreq / priority 是声明性字段，可以写。 */
  const urls = ['https://learn.specul.com/'];
  for (const { t } of flat) urls.push(`https://learn.specul.com/term/${ENC(slugOf(t))}/`);
  const sm = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u, i) => `  <url><loc>${u}</loc><changefreq>weekly</changefreq><priority>${i === 0 ? '1.0' : '0.7'}</priority></url>`).join('\n')}
</urlset>
`;
  const smFile = path.join(learnDir, 'sitemap.xml');
  const smOld = fs.existsSync(smFile) ? fs.readFileSync(smFile, 'utf8') : null;
  if (smOld !== sm) { fs.writeFileSync(smFile, sm, 'utf8'); }
  console.log(`词条页：${pageTotal} 个（写入 ${pageChanged} · 清理孤儿 ${removed}）· sitemap ${urls.length} 条${smOld === sm ? '（未变）' : '（已更新）'}`);
}
