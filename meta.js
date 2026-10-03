/* AI 名词地图 · 维度元数据
 *
 * 页面支持三种排布方式（方块墙的分组依据），都从这份 meta 读：
 *   domain  按功能域——这个词属于哪一片
 *   purpose 按用途——它帮你解决什么
 *   level   按难度——该从哪一层开始读
 *
 * color 不用写死十六进制：页面把 --dc 设为 color 变量名，
 * 由 CSS 按 data-theme 分别给深/浅两套实际色值（见 html[data-theme] 块）。
 * 这样浅色模式下自动换成深色系，文字对比度才够。
 */
var META = {
  domains: {
    concept: { name:'核心概念', desc:'最基础的名词。不懂这些，后面的都看不懂。', color:'var(--d-concept)' },
    model:   { name:'模型能力', desc:'模型本身有什么特性、能做什么、边界在哪。', color:'var(--d-model)' },
    dev:     { name:'AI 编程', desc:'用 AI 写代码、做自动化。四个图谱站在讲这一片。', color:'var(--d-dev)' },
    agent:   { name:'智能体', desc:'让 AI 自己动手完成多步骤任务，而不只是回答。', color:'var(--d-agent)' },
    data:    { name:'数据与检索', desc:'怎么让模型知道你的私有资料，并正确引用它。', color:'var(--d-data)' },
    media:   { name:'图像语音视频', desc:'非文字的生成与理解：生图、语音、视频、机器人。', color:'var(--d-media)' },
    infra:   { name:'硬件与部署', desc:'跑起来需要什么硬件与软件，本地部署必看。', color:'var(--d-infra)' },
    choice:  { name:'选型与成本', desc:'怎么选、多少钱、有哪些坑。决策在这一片。', color:'var(--d-choice)' }
  },
  purposes: {
    learn: { name:'搞懂概念', desc:'先知道这个词指什么、解决什么。入门从这里开始。' },
    apply: { name:'动手做出来', desc:'照着做能实现某个功能。偏工程实践。' },
    guard: { name:'不出事', desc:'避开坑、限制风险。涉及安全、数据、权限的必看。' },
    judge: { name:'做决定', desc:'支撑选型、采购与预算判断。偏成本与取舍。' }
  },
  levels: {
    '1': { name:'一', short:'入门层', desc:'不需要任何技术基础。先建立直觉，读完能跟人聊明白 AI 在做什么。' },
    '2': { name:'二', short:'使用层', desc:'认清 AI 的能力与边界。知道它什么时候会出错，比知道它多强更重要。' },
    '3': { name:'三', short:'应用层', desc:'决定 AI 好不好用的那些具体做法。看完能判断一个方案靠不靠谱。' },
    '4': { name:'四', short:'原理层', desc:'理解为什么会有这些表现。看不懂这层，前面的词你都只能背。' },
    '5': { name:'五', short:'部署层', desc:'让模型跑在自己机器上。你会关心显存够不够、跑得多快。' },
    '6': { name:'六', short:'选型层', desc:'把前面学到的东西变成一个决定。这是这一页的终点。' }
  }
};
if (typeof module !== 'undefined') module.exports = META;
