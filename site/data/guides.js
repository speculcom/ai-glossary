/* AI 名词地图 · 微型指南（S24）
 * **这是产物，不要手改。** 源在 guides/*.md 的 frontmatter。
 * 每篇：id（slug=文件名）/ zh / en / kind / station / ord / span / lead / points / myth / fact。
 */
var GUIDES = [
 {
  "id": "怎么向 AI 提问",
  "zh": "怎么向 AI 提问",
  "en": "How to Ask AI",
  "kind": "guide",
  "station": 2,
  "ord": 1,
  "span": 6,
  "lead": {
   "zh": "同样问 AI，问法不同，答案的可用性差很多。这份指南讲提问前要交代的五件事。",
   "en": "The same question asked differently produces very different answers. This guide covers the five things to state before you ask."
  },
  "points": [
   "先说清目标和完成标准：不是「写篇文章」，而是「写篇 300 字的零基础介绍」。",
   "给上下文：你是谁、读者是谁、有哪些限制，比如字数、格式、语气。",
   "把要处理的原文贴进对话，不要让 AI 猜你指的是哪一段。",
   "先要提纲再要正文：让它先列结构，你确认后再展开。",
   "不满意就指出具体哪里不对，比笼统的「重新回答」更有效。"
  ],
  "pointsEn": [
   "State the goal and the done-criteria: not \"write an article\" but \"write a 300-word intro for absolute beginners\".",
   "Give context: who you are, who the audience is, and what constraints apply — length, format, tone.",
   "Paste the source text into the conversation; don't make the AI guess which passage you mean.",
   "Ask for an outline first: have it list the structure, you approve it, then expand.",
   "When unhappy, point out exactly what is wrong — more effective than a vague \"try again\"."
  ],
  "myth": null,
  "mythEn": null,
  "fact": null,
  "factEn": null
 },
 {
  "id": "怎么验证 AI 的输出",
  "zh": "怎么验证 AI 的输出",
  "en": "How to Verify AI Output",
  "kind": "guide",
  "station": 3,
  "ord": 1,
  "span": 7,
  "lead": {
   "zh": "AI 会一本正经地编造事实。这份指南讲怎么把「它说的」变成「你能核对的」。",
   "en": "AI will state fabricated facts with full confidence. This guide turns \"what it said\" into \"what you can check\"."
  },
  "points": [
   "把输出里的事实拆成一条条可核对的断言：数字、日期、人名、引用。",
   "凡是引用（论文、法条、接口名），去原始出处核对，别信它给的链接标题。",
   "关键数字要求它给出处；给不出处的数字当假设处理。",
   "让它自查会漏掉大半错误，交叉核对（换来源、换工具）才可靠。",
   "越具体的领域（本地法规、自家数据）越要人来核，通用模型没有这些事实。"
  ],
  "pointsEn": [
   "Break the output into individual checkable claims: numbers, dates, names, citations.",
   "For every citation (paper, statute, API name), verify at the original source — never trust the title it gives you.",
   "Demand sources for key numbers; treat numbers without sources as assumptions.",
   "Self-review catches only a fraction of errors; cross-checking (different source, different tool) is what works.",
   "The more specific the domain (local law, your own data), the more a human must check — general models don't have these facts."
  ],
  "myth": null,
  "mythEn": null,
  "fact": null,
  "factEn": null
 }
];
