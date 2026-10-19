/* AI 名词地图 · 微型指南（S24）
 * **这是产物，不要手改。** 源在 guides/*.md 的 frontmatter。
 * 每篇：id（slug=文件名）/ zh / en / kind / station / ord / span / lead / points / myth / fact。
 */
var GUIDES = [
 {
  "id": "AI 真的读懂了你的话吗",
  "zh": "AI 真的读懂了你的话吗",
  "en": "Does AI Really Understand You",
  "kind": "myth",
  "station": 1,
  "ord": 1,
  "span": 4,
  "lead": {
   "zh": "回答贴切不等于理解——它在做的是另一件事。",
   "en": "A fitting answer is not understanding — it is doing something else."
  },
  "points": null,
  "pointsEn": null,
  "myth": "它答得贴切、接得上话，说明它读懂了你的意思。",
  "mythEn": "It answers aptly and keeps up with the conversation, so it must have understood what you meant.",
  "fact": "它在按概率预测下一个词。贴切说明训练里见过相似的模式，不说明它理解你的处境。",
  "factEn": "It predicts the next word by probability. An apt answer shows it saw similar patterns in training, not that it grasps your situation."
 },
 {
  "id": "参数越多就越聪明",
  "zh": "参数越多就越聪明",
  "en": "More Parameters Always Means Smarter",
  "kind": "myth",
  "station": 1,
  "ord": 2,
  "span": 5,
  "lead": {
   "zh": "参数量只是其中一个变量，不是聪明程度的刻度。",
   "en": "Parameter count is one variable, not a dial for intelligence."
  },
  "points": null,
  "pointsEn": null,
  "myth": "参数量决定模型有多聪明，越大就一定越强。",
  "mythEn": "Parameter count decides how smart a model is — bigger is always stronger.",
  "fact": "训练数据的质量与数量同样决定表现；小模型在合适的任务上能追平大模型。",
  "factEn": "The quality and amount of training data decide performance just as much; small models match larger ones on suitable tasks."
 },
 {
  "id": "通用人工智能快到了",
  "zh": "通用人工智能快到了",
  "en": "AGI Is Just Around the Corner",
  "kind": "myth",
  "station": 1,
  "ord": 3,
  "span": 5,
  "lead": {
   "zh": "「临近」是说法，不是可核对的里程碑。",
   "en": "\"Soon\" is a claim, not a verifiable milestone."
  },
  "points": null,
  "pointsEn": null,
  "myth": "各家都在说 AGI 临近，说明它有一个可核对的到达时间。",
  "mythEn": "Everyone says AGI is near, so there must be a checkable date when it arrives.",
  "fact": "AGI 没有统一定义，各家口径不同；没有定义，也就没有「到达」这回事。",
  "factEn": "There is no agreed definition of AGI; the houses mean different things. Without a definition, \"arrived\" has no test."
 },
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
  "id": "怎么保护自己的数据",
  "zh": "怎么保护自己的数据",
  "en": "How to Protect Your Data",
  "kind": "guide",
  "station": 2,
  "ord": 2,
  "span": 6,
  "lead": {
   "zh": "把资料交给 AI 之前，先想清楚它会去哪里、会留下什么。这份指南讲六个动作。",
   "en": "Before handing material to an AI, be clear about where it goes and what it leaves behind. Six moves."
  },
  "points": [
   "先分清资料能不能出门：个人身份、公司机密、客户数据各算一类。",
   "看不懂的条款别默认同意，重点看数据会不会用于训练。",
   "能匿名化就先匿名化：去掉姓名、编号、联系方式再贴进去。",
   "敏感场景优先选本地或私有部署，数据不出自己的网。",
   "用完检查留存：对话记录和上传文件能不能删、多久删。",
   "给团队定规矩：哪些资料能进 AI，哪些必须走内部工具。"
  ],
  "pointsEn": [
   "Sort material by whether it may leave: personal identity, company secrets, and customer data are three different categories.",
   "Do not accept terms you cannot read; check specifically whether your data is used for training.",
   "Anonymize first: strip names, IDs, and contact details before pasting anything in.",
   "For sensitive work, prefer local or private deployment so data never leaves your own network.",
   "Afterwards, check retention: can the chat history and uploaded files be deleted, and how soon?",
   "Set team rules: which materials may go into an AI, and which must stay in internal tools."
  ],
  "myth": null,
  "mythEn": null,
  "fact": null,
  "factEn": null
 },
 {
  "id": "它说得笃定，所以可信",
  "zh": "它说得笃定，所以可信",
  "en": "Confident Tone Means Correct",
  "kind": "myth",
  "station": 2,
  "ord": 1,
  "span": 4,
  "lead": {
   "zh": "流畅与正确是两件事，笃定的语气不增加可靠性。",
   "en": "Fluency and correctness are separate; a confident tone adds no reliability."
  },
  "points": null,
  "pointsEn": null,
  "myth": "语气肯定、结构完整，说明内容可靠。",
  "mythEn": "A confident tone and a tidy structure mean the content is trustworthy.",
  "fact": "幻觉综述里统计的错误，大多正是这种读起来很顺的编造。",
  "factEn": "In the hallucination surveys, most recorded errors are exactly this kind of smoothly written fabrication."
 },
 {
  "id": "温度调高会更聪明",
  "zh": "温度调高会更聪明",
  "en": "Higher Temperature Means Smarter",
  "kind": "myth",
  "station": 2,
  "ord": 2,
  "span": 4,
  "lead": {
   "zh": "温度只改变随机性，不改变它知道多少。",
   "en": "Temperature changes randomness only, not how much the model knows."
  },
  "points": null,
  "pointsEn": null,
  "myth": "温度调高，模型就更有想法、更聪明。",
  "mythEn": "Raising temperature makes the model more imaginative, therefore smarter.",
  "fact": "温度只改变取词的随机性；调高会增加偏离和出错，模型知道的东西一点没多。",
  "factEn": "Temperature only changes how randomly it picks tokens; raising it adds drift and errors while the model knows no more."
 },
 {
  "id": "它记得你之前说过的",
  "zh": "它记得你之前说过的",
  "en": "It Remembers What You Said Earlier",
  "kind": "myth",
  "station": 2,
  "ord": 3,
  "span": 4,
  "lead": {
   "zh": "它能看到的范围叫上下文窗口，超出部分不在输入里。",
   "en": "What it can see is the context window; anything outside is not in its input."
  },
  "points": null,
  "pointsEn": null,
  "myth": "一次对话里，它始终记得前面说过的所有内容。",
  "mythEn": "Within one conversation it always remembers everything said earlier.",
  "fact": "它只能看到上下文窗口内的内容；超出的部分不在它的输入里，与记不记得无关。",
  "factEn": "It only sees what fits the context window; anything beyond it is simply not in the input, which has nothing to do with remembering."
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
 },
 {
  "id": "AI 常犯什么错",
  "zh": "AI 常犯什么错",
  "en": "What AI Gets Wrong",
  "kind": "guide",
  "station": 3,
  "ord": 2,
  "span": 6,
  "lead": {
   "zh": "AI 的错误有固定套路。认出这几类，就能提前防住大半。",
   "en": "AI mistakes follow fixed patterns. Recognizing these categories prevents most of them in advance."
  },
  "points": [
   "编造事实：它会给出看似合理的假引用、假数字、假日期。",
   "顺着你说：你暗示一个错误前提，它多半不纠正，直接往下推。",
   "算不准：精确计数、多位数算术、复杂日期换算最容易错。",
   "答得太满：它很少说「我不知道」，宁可给一个含糊的答案。",
   "被措辞带偏：同一问题换个问法，答案可能不同。"
  ],
  "pointsEn": [
   "Inventing facts: it produces plausible-looking fake citations, numbers, and dates.",
   "Agreeing with you: imply a wrong premise and it usually will not correct it, just build on it.",
   "Bad at exact math: precise counts, multi-digit arithmetic, and tricky date conversions fail most often.",
   "Over-answering: it rarely says \"I do not know\", preferring a vague answer instead.",
   "Swayed by phrasing: the same question asked differently can produce a different answer."
  ],
  "myth": null,
  "mythEn": null,
  "fact": null,
  "factEn": null
 },
 {
  "id": "榜单分数高就是好用",
  "zh": "榜单分数高就是好用",
  "en": "A High Benchmark Score Means It Works For You",
  "kind": "myth",
  "station": 3,
  "ord": 1,
  "span": 5,
  "lead": {
   "zh": "基准只覆盖它测的那几项，与你的场景是两件事。",
   "en": "A benchmark covers only what it measures — your task is a different question."
  },
  "points": null,
  "pointsEn": null,
  "myth": "评测分数高的模型，在你的任务上也一定好。",
  "mythEn": "A model that scores high on the leaderboards must also be good at your task.",
  "fact": "HELM 的结论正是单一榜单不完备；分数高只说明它在被测项上强。",
  "factEn": "HELM concludes precisely that a single leaderboard is incomplete; a high score only means strength on the items tested."
 },
 {
  "id": "上下文窗口越大越好",
  "zh": "上下文窗口越大越好",
  "en": "Bigger Context Is Always Better",
  "kind": "myth",
  "station": 3,
  "ord": 2,
  "span": 5,
  "lead": {
   "zh": "窗口大小有代价，够用比拉满更划算。",
   "en": "Window size has a price; enough beats maximum."
  },
  "points": null,
  "pointsEn": null,
  "myth": "上下文窗口越大，长文档就处理得越好。",
  "mythEn": "The larger the context window, the better long documents get handled.",
  "fact": "窗口变大会推高显存与延迟。长输入里，中段内容的利用也不均匀。按需要选比选最大更划算。",
  "factEn": "A larger window raises VRAM and latency. In a long input, the middle is used unevenly. Choosing by need beats choosing the maximum."
 },
 {
  "id": "它拒绝，是因为做不到",
  "zh": "它拒绝，是因为做不到",
  "en": "Refusal Means Inability",
  "kind": "myth",
  "station": 3,
  "ord": 3,
  "span": 4,
  "lead": {
   "zh": "拒答多半是训练出来的选择，不是能力上限。",
   "en": "Most refusals are a trained choice, not a capability ceiling."
  },
  "points": null,
  "pointsEn": null,
  "myth": "它说「我不能做这个」，说明它没有这个能力。",
  "mythEn": "When it says \"I cannot do that\", it lacks the capability.",
  "fact": "多数拒答来自对齐训练的选择；有没有能力与愿不愿意输出是两回事。",
  "factEn": "Most refusals come from alignment training; having the capability and being willing to output it are different things."
 },
 {
  "id": "它逐字读懂你的文字",
  "zh": "它逐字读懂你的文字",
  "en": "It Reads Your Words One By One",
  "kind": "myth",
  "station": 4,
  "ord": 1,
  "span": 5,
  "lead": {
   "zh": "它看到的不是字，是词表里的编号。",
   "en": "What it sees is not characters but ids from a vocabulary."
  },
  "points": null,
  "pointsEn": null,
  "myth": "它像你一样按字和词理解输入。",
  "mythEn": "It reads your input word by word, the way you do.",
  "fact": "输入先被切成词表里的 token 编号。不常见的词可能被拆成几段。它处理的是编号，不是字。",
  "factEn": "The input is first cut into token ids from a vocabulary. An uncommon word may be split into pieces. What it works on is the ids, not the characters."
 },
 {
  "id": "它在一步步推理",
  "zh": "它在一步步推理",
  "en": "It Reasons Step By Step",
  "kind": "myth",
  "station": 4,
  "ord": 2,
  "span": 5,
  "lead": {
   "zh": "写出来的步骤，不保证是产生答案的实际路径。",
   "en": "The steps it writes are not guaranteed to be the path that produced the answer."
  },
  "points": null,
  "pointsEn": null,
  "myth": "它给出的推理过程，就是它实际的思考步骤。",
  "mythEn": "The reasoning it shows you is the reasoning it actually performed.",
  "fact": "它按概率逐词生成；写出来的中间步骤与产生答案的实际路径不一定一致。",
  "factEn": "It generates word by word by probability; the intermediate steps it writes need not match the path that produced the answer."
 },
 {
  "id": "注意力就是它注意到重点",
  "zh": "注意力就是它注意到重点",
  "en": "Attention Means It Notices What Matters",
  "kind": "myth",
  "station": 4,
  "ord": 3,
  "span": 5,
  "lead": {
   "zh": "注意力是一种加权计算，不是「它在留意」。",
   "en": "Attention is a weighted computation, not the model paying heed."
  },
  "points": null,
  "pointsEn": null,
  "myth": "「注意力机制」说明它会像人一样挑重点看。",
  "mythEn": "\"Attention mechanism\" means it picks out what matters, like a person would.",
  "fact": "注意力按相关性给不同位置加权；权重高不等于它认为那部分重要。",
  "factEn": "Attention weights positions by relatedness; a high weight does not mean it judged that part important."
 },
 {
  "id": "量化会让模型变笨一半",
  "zh": "量化会让模型变笨一半",
  "en": "Quantisation Halves the Quality",
  "kind": "myth",
  "station": 5,
  "ord": 1,
  "span": 5,
  "lead": {
   "zh": "影响随档位而变，量尺是每权重比特数。",
   "en": "The impact varies by tier; the ruler is bits per weight."
  },
  "points": null,
  "pointsEn": null,
  "myth": "量化就是把模型质量砍掉一半。",
  "mythEn": "Quantising cuts model quality in half.",
  "fact": "影响随档位与模型而变。bpw 才是量尺，也就是每个权重占多少比特。各档差别要逐项看。",
  "factEn": "The impact varies by tier and by model. The ruler is bpw, meaning bits per weight. The differences between tiers have to be read item by item."
 },
 {
  "id": "显存不够就跑不了",
  "zh": "显存不够就跑不了",
  "en": "Not Enough VRAM Means It Will Not Run",
  "kind": "myth",
  "station": 5,
  "ord": 2,
  "span": 5,
  "lead": {
   "zh": "能不能跑与跑多快，是两个问题。",
   "en": "Whether it runs and how fast it runs are two questions."
  },
  "points": null,
  "pointsEn": null,
  "myth": "显存装不下，就只能换显卡。",
  "mythEn": "If it does not fit in VRAM, the only option is a better graphics card.",
  "fact": "可以把部分层放到内存或 CPU 上跑。代价是速度。能不能跑与跑多快是两个问题。",
  "factEn": "Some layers can be moved to system memory or to the CPU. The price is speed. Whether it runs at all and how fast it runs are separate questions."
 },
 {
  "id": "接口兼容就等于行为一致",
  "zh": "接口兼容就等于行为一致",
  "en": "A Compatible API Means Identical Behaviour",
  "kind": "myth",
  "station": 5,
  "ord": 3,
  "span": 5,
  "lead": {
   "zh": "兼容保证的是请求与响应的形状。",
   "en": "Compatibility guarantees the shape of requests and responses, nothing more."
  },
  "points": null,
  "pointsEn": null,
  "myth": "只要接口兼容 OpenAI，换过去效果就一样。",
  "mythEn": "If the API is OpenAI-compatible, switching over gives the same behaviour.",
  "fact": "兼容保证的是请求与响应的形状；参数默认值、报错行为和输出质量各家不同。",
  "factEn": "Compatibility covers the shape of requests and responses; parameter defaults, error behaviour and output quality differ between implementations."
 },
 {
  "id": "怎么读模型卡",
  "zh": "怎么读模型卡",
  "en": "How to Read a Model Card",
  "kind": "guide",
  "station": 6,
  "ord": 1,
  "span": 6,
  "lead": {
   "zh": "模型卡是厂商给模型的说明书。这份指南讲读它时该看哪几栏、哪些话要打折。",
   "en": "A model card is the manufacturer's spec sheet for a model. This guide covers which sections to read and which claims to discount."
  },
  "points": [
   "先看用途与限制栏：官方写明「适合什么、不适合什么」，比宣传语可靠。",
   "看评测栏时先问「在哪些基准上测的」，没有基准的分数等于没有分数。",
   "看训练数据栏：数据构成决定它可能带哪些偏见。",
   "看许可栏：能不能商用、要不要署名、衍生模型要不要同许可。",
   "看已知局限栏：厂商主动写的失败场景，比「效果拔群」更值得信。",
   "对比多家时只比同口径：同一基准、同一设置，否则数字没有可比性。"
  ],
  "pointsEn": [
   "Start with intended-use and limitations: what the maker says it is and is not good for beats marketing copy.",
   "When reading benchmarks, first ask which ones were tested; a score without a benchmark is no score.",
   "Read the training-data section: the data mix determines which biases it may carry.",
   "Read the license: commercial use, attribution duties, and whether derivatives must share the same license.",
   "Trust the known-limitations section: failure modes the maker admits are worth more than \"state-of-the-art\".",
   "Compare vendors only on equal terms: same benchmark, same settings, or the numbers are not comparable."
  ],
  "myth": null,
  "mythEn": null,
  "fact": null,
  "factEn": null
 },
 {
  "id": "预览版不能用于生产",
  "zh": "预览版不能用于生产",
  "en": "Preview Models Are Toys",
  "kind": "myth",
  "station": 6,
  "ord": 1,
  "span": 5,
  "lead": {
   "zh": "能不能用看条款与时间表，不看名字。",
   "en": "Judge it by the terms and the timeline, not by the word \"preview\"."
  },
  "points": null,
  "pointsEn": null,
  "myth": "带「预览」字样的模型只是试验品，不能上生产。",
  "mythEn": "Anything labelled \"preview\" is an experiment and cannot go to production.",
  "fact": "各家的生命周期与支持政策不同。判断依据是该家的条款和弃用时间表。名字里有没有预览不算依据。",
  "factEn": "Lifecycle and support policies differ between providers. The basis is that provider's terms and deprecation schedule. Whether the name says \"preview\" is not evidence."
 },
 {
  "id": "开源模型一定更省钱",
  "zh": "开源模型一定更省钱",
  "en": "Open Models Are Always Cheaper",
  "kind": "myth",
  "station": 6,
  "ord": 2,
  "span": 5,
  "lead": {
   "zh": "开源保证的是使用权与可改性，不是免费。",
   "en": "Open guarantees the right to use and modify, not that it is free."
  },
  "points": null,
  "pointsEn": null,
  "myth": "模型开源了，成本就一定比调用 API 低。",
  "mythEn": "Once a model is open, running it is necessarily cheaper than calling an API.",
  "fact": "自建要算硬件、运维和人力；开源保证的是使用权与可改性，不是「免费」。",
  "factEn": "Self-hosting costs hardware, operations and people; open concerns the right to use and modify, not price."
 },
 {
  "id": "换模型只是改个名字",
  "zh": "换模型只是改个名字",
  "en": "Switching Models Is Just Renaming",
  "kind": "myth",
  "station": 6,
  "ord": 3,
  "span": 5,
  "lead": {
   "zh": "接口兼容不等于迁移成本为零。",
   "en": "A compatible interface does not mean a zero-cost migration."
  },
  "points": null,
  "pointsEn": null,
  "myth": "换模型只是把配置里的名字改一下。",
  "mythEn": "Switching models is just changing a name in the config.",
  "fact": "换模型要重测行为、成本和合规；接口兼容不等于迁移成本为零。",
  "factEn": "Switching means retesting behaviour, cost and compliance; a compatible interface does not make the migration free."
 }
];
