/* AI 名词地图 · 词条数据
 *
 * **这是产物，不要手改。** 源在 terms/*.md。
 * 改词：编辑 terms/<slug>.md，然后跑 node scripts/build.mjs。
 *
 * 结构：6 层，每层 { num, name, desc, terms[] }
 * 每词字段：zh / en / alias / purpose / def / why / refs / domain / purposeTag / level
 */
var TERMS = [
 {
  "num": "一",
  "name": "入门层",
  "desc": "不需要任何技术基础。先建立直觉，读完能跟人聊明白 AI 在做什么。",
  "terms": [
   {
    "zh": "人工智能",
    "en": "Artificial Intelligence, AI",
    "alias": [
     "AI"
    ],
    "purpose": "让机器做原本需要人类智能才能做的事——看图、听话、写字、决策。",
    "def": [
     "一个宽泛的领域，指让机器表现出类似人类智能的能力。它本身不是一门具体技术，而是很多技术的统称。",
     "「人工智能」这个词日常里被用来指大模型聊天，但严格说大模型只是其中一支。"
    ],
    "why": "你只需要知道它是个大筐。别人说「用了 AI」时，先问一句具体是哪支技术，答案往往差很远。",
    "refs": [
     [
      "AIMA《人工智能：一种现代方法》官网",
      "https://aima.cs.berkeley.edu/",
      "Artificial Intelligence: A Modern Approach (AIMA)"
     ]
    ],
    "domain": "concept",
    "purposeTag": "learn",
    "level": 1,
    "layer": "一",
    "ord": 1,
    "purposeEn": "Let machines do what used to need human intelligence — see images, understand speech, write, and decide.",
    "defEn": [
     "A broad field: making machines behave in ways we recognise as intelligent. It is not one technology but many, and today's chatbots are only a branch of it."
    ],
    "whyEn": "People often use \"AI\" to mean a chat model. Strictly speaking a large language model is one approach inside AI, not AI itself — most claims about \"AI\" are really claims about one kind of model.",
    "slug": "人工智能"
   },
   {
    "zh": "机器学习",
    "en": "Machine Learning, ML",
    "purpose": "不手写规则，直接给机器大量例子，让它自己总结规律。",
    "def": [
     "让计算机从数据里自动找出规律、并用规律对新情况做预测或分类的一类方法。",
     "和传统编程的区别：传统是你写「规则」，机器学习是你给「例子」，规则由它自己总结。"
    ],
    "why": "它解释了 AI 为什么需要大量数据和算力——不是玄学，是这类方法的本质要求。",
    "refs": [
     [
      "斯坦福 CS229 机器学习课程",
      "https://cs229.stanford.edu/",
      "Stanford CS229: Machine Learning"
     ],
     [
      "Google 机器学习速成课程",
      "https://developers.google.com/machine-learning/crash-course",
      "Google Machine Learning Crash Course"
     ]
    ],
    "domain": "concept",
    "purposeTag": "learn",
    "level": 1,
    "layer": "一",
    "ord": 2,
    "alias": [],
    "purposeEn": "Instead of writing rules by hand, let the machine find patterns in data.",
    "defEn": [
     "A method where a system improves at a task by fitting parameters to examples, rather than following rules a programmer wrote."
    ],
    "whyEn": "It is the foundation under essentially everything called AI today. Knowing where the rules came from tells you what the system can and cannot do.",
    "slug": "机器学习"
   },
   {
    "zh": "深度学习",
    "en": "Deep Learning",
    "purpose": "用很多层「神经元」叠起来的网络，从数据里学出复杂特征。",
    "def": [
     "机器学习的一个分支，核心是层数很深的人工神经网络。",
     "「深度」指网络的层数多，不是指它更深奥。"
    ],
    "why": "你现在用的所有大模型都属于这一类。看到这个词就知道：背后是数据 + 算力堆出来的。",
    "refs": [
     [
      "《深度学习》(花书) 官网",
      "https://www.deeplearningbook.org/",
      "Deep Learning (MIT Press, Goodfellow et al.)"
     ],
     [
      "Nature 深度学习论文",
      "https://www.nature.com/articles/nature14539",
      "Deep Learning (Nature, LeCun, Bengio & Hinton)"
     ]
    ],
    "domain": "concept",
    "purposeTag": "learn",
    "level": 1,
    "layer": "一",
    "ord": 3,
    "alias": [],
    "purposeEn": "Stack many layers so the network learns its own features instead of being told them.",
    "defEn": [
     "Machine learning using multi-layer neural networks, where representations are learned from raw data rather than hand-designed."
    ],
    "whyEn": "It is what made image, speech and language tasks leap forward. Understanding it helps you judge which claims about \"deep learning\" are real.",
    "slug": "深度学习"
   },
   {
    "zh": "神经网络",
    "en": "Neural Network",
    "purpose": "模仿大脑神经元连接方式的一类数学结构，是现代 AI 的通用积木。",
    "def": [
     "由大量简单计算单元（神经元）分层连接、互相协作完成计算的结构。",
     "每个单元做的事很简单（加权求和 + 激活），难的是整体如何调参数。"
    ],
    "why": "它是「原理层」的基础设施。理解了它，后面的 Transformer 才好理解——那是它的一个变种。",
    "refs": [
     [
      "CS231n：神经网络（一）讲义",
      "https://cs231n.github.io/neural-networks-1/",
      "CS231n: Neural Networks Part 1 (notes)"
     ],
     [
      "《深度学习》第6章：深度前馈网络",
      "https://www.deeplearningbook.org/contents/mlp.html",
      "Deep Learning, Ch.6: Deep Feedforward Networks"
     ]
    ],
    "domain": "concept",
    "purposeTag": "learn",
    "level": 1,
    "layer": "一",
    "ord": 4,
    "alias": [],
    "purposeEn": "A network of simple units whose combined output can approximate very complex functions.",
    "defEn": [
     "Layers of connected units, each applying a small transformation, whose overall behaviour is learned from data rather than specified."
    ],
    "whyEn": "It is the mechanism behind deep learning. You do not need the maths to use it, but it explains both what it can do and why it fails in particular ways.",
    "slug": "神经网络"
   },
   {
    "zh": "大模型 / 大语言模型",
    "en": "Large Language Model, LLM",
    "alias": [
     "大语言模型",
     "LLM",
     "语言模型"
    ],
    "purpose": "读过海量文本、学会「接着往下写」的模型，能对话、能写作、能写代码。",
    "def": [
     "参数量极大、在海量文本上训练出来的模型，通常几十亿到数千亿参数。",
     "它的核心能力只有一句话：给定前面的文字，预测下一个最可能的词。"
    ],
    "why": "这是你日常接触最多的东西。选模型、选档位、算成本，都围绕它。",
    "refs": [
     [
      "按设备选量化档位（千问 3.8）",
      "https://models.specul.com/series/qwen3-8/#b0",
      "Pick tiers by device (Qwen3.8)"
     ],
     [
      "哪个模型适合编程",
      "https://agent.specul.com/",
      "Which models suit coding"
     ]
    ],
    "domain": "concept",
    "purposeTag": "learn",
    "level": 1,
    "layer": "一",
    "ord": 5,
    "purposeEn": "After training, the learned parameters that let a system generalise to inputs it has never seen.",
    "defEn": [
     "The trained artefact: parameters plus the architecture that produced them. \"Loading a model\" means loading these, not running a program."
    ],
    "whyEn": "Model and product are different things. Many misunderstandings about AI products come from treating a model as if it were an application.",
    "slug": "大模型 - 大语言模型"
   },
   {
    "zh": "参数",
    "en": "Parameter",
    "purpose": "模型里可调的数字，训练就是不断调整它们。参数越多，一般越「博学」。",
    "def": [
     "模型内部的数值参数，是模型学到的知识与能力的载体。",
     "常说的「70 亿参数」指可训练参数的数量级，不等于质量。"
    ],
    "why": "它是你理解「为什么本地跑不动大模型」的关键——参数量直接决定要占多少显存。",
    "refs": [
     [
      "11 系列 16 规格的实测体积",
      "https://models.specul.com/",
      "Measured sizes: 16 specs, 11 series"
     ]
    ],
    "domain": "concept",
    "purposeTag": "learn",
    "level": 1,
    "layer": "一",
    "ord": 6,
    "alias": [],
    "purposeEn": "The numbers the training process adjusts; everything the model knows lives in them.",
    "defEn": [
     "Weights and biases inside the network. Model size usually refers to how many there are, and larger counts generally mean more capacity."
    ],
    "whyEn": "It grounds abstract claims: a \"7B model\" is a statement about parameter count, not about being better than everything else.",
    "slug": "参数"
   },
   {
    "zh": "训练",
    "en": "Training",
    "purpose": "让模型从数据里学会规律，产出这个模型。",
    "def": [
     "用数据反复调整模型参数的过程。跑完训练得到的是一个「模型」。",
     "训练成本极高，普通公司和个人基本不可能从头训一个大模型。"
    ],
    "why": "它和「推理」是一对概念，分清这两个词，你就明白为什么模型能下载但没人能「训」你手里这个。",
    "refs": [
     [
      "PyTorch 官方教程：训练模型",
      "https://docs.pytorch.org/tutorials/beginner/introyt/trainingyt.html",
      "PyTorch tutorial: Training with PyTorch"
     ],
     [
      "《深度学习》第8章：训练优化",
      "https://www.deeplearningbook.org/contents/optimization.html",
      "Deep Learning, Ch.8: Optimization for Training"
     ]
    ],
    "domain": "concept",
    "purposeTag": "learn",
    "level": 1,
    "layer": "一",
    "ord": 7,
    "alias": [],
    "purposeEn": "Let the system learn its parameters from data by repeated exposure.",
    "defEn": [
     "Fitting parameters so predictions match targets, usually by minimising a loss over many examples."
    ],
    "whyEn": "Training determines what the model knows. It is also where cost and bias enter — training data is not neutral.",
    "slug": "训练"
   },
   {
    "zh": "推理",
    "en": "Inference",
    "purpose": "训练完之后，真正拿来回答你问题的过程。",
    "def": [
     "用一个已经训练好的模型做计算、产出结果的过程。",
     "和训练相反：训练需要大量算力，推理是持续的小规模计算。"
    ],
    "why": "你每次和模型对话、每次它在本地生成内容，用的都是推理。算速度和成本时说的也是它。",
    "refs": [
     [
      "本地推理的速度受什么影响",
      "https://models.specul.com/",
      "What affects local inference speed"
     ]
    ],
    "domain": "concept",
    "purposeTag": "learn",
    "level": 1,
    "layer": "一",
    "ord": 8,
    "alias": [],
    "purposeEn": "The model you trained is now answering real queries — a different phase with different costs.",
    "defEn": [
     "Running a trained model to produce an answer. Often confused with \"reasoning\", but inference simply means using the model."
    ],
    "whyEn": "Training and inference have different cost structures. It explains why a model can be cheap to make and expensive to serve.",
    "slug": "推理"
   },
   {
    "zh": "提示词",
    "en": "Prompt",
    "alias": [
     "Prompt"
    ],
    "purpose": "你给模型的指令。说得越具体，模型的输出越准。",
    "def": [
     "输入给模型的那段文字。模型只根据你写的来推断意图。",
     "同一个模型，提示词不同，效果差距可以非常大。"
    ],
    "why": "这是投入产出比最高的一个词——不用换模型，光改提示词就能明显变好。",
    "refs": [
     [
      "OpenAI 提示工程指南",
      "https://platform.openai.com/docs/guides/prompt-engineering",
      "OpenAI Prompt engineering guide"
     ],
     [
      "Anthropic 提示工程总览",
      "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview",
      "Anthropic Prompt engineering overview"
     ]
    ],
    "domain": "model",
    "purposeTag": "apply",
    "level": 1,
    "layer": "一",
    "ord": 9,
    "purposeEn": "The instructions you give the model, and often the main lever you actually control.",
    "defEn": [
     "The input text shaping the model's behaviour. In a chat interface it is what you type; in an API it is part of the request."
    ],
    "whyEn": "For using models, prompt quality often matters more than model choice — the same model behaves very differently under different phrasing.",
    "slug": "提示词"
   },
   {
    "zh": "Token",
    "en": "Token",
    "alias": [
     "词元"
    ],
    "purpose": "模型处理文本的最小单位。计费和长度限制都按它算。",
    "def": [
     "模型把文本切成的片段，一个 token 大约是四分之一个英文单词，或一到两个汉字。",
     "上下文长度、API 报价都以 token 为单位。"
    ],
    "why": "这是最容易被忽略却最影响账单的词。「我的上下文够不够」「为什么这么贵」，答案都在它。",
    "refs": [
     [
      "Anthropic 官方：Token 计数",
      "https://platform.claude.com/docs/en/build-with-claude/token-counting",
      "Anthropic: token counting docs"
     ]
    ],
    "domain": "concept",
    "purposeTag": "apply",
    "level": 1,
    "layer": "一",
    "ord": 10,
    "purposeEn": "The smallest unit a model processes text in. Both billing and length limits are measured in it.",
    "defEn": [
     "The pieces a model splits text into. One token is roughly a quarter of an English word, or one to two Chinese characters.",
     "Context length and API pricing are both denominated in tokens."
    ],
    "whyEn": "The most easily overlooked word that most affects your bill. \"Is my context enough\" and \"why is this so expensive\" are both answered here.",
    "slug": "Token"
   },
   {
    "zh": "上下文窗口",
    "en": "Context Window",
    "alias": [
     "上下文",
     "Context"
    ],
    "purpose": "模型一次能「看见」多少内容。超出部分它就完全不知道。",
    "def": [
     "模型单次能处理的 token 总量上限，包含你的指令、给它的资料和它的回答。",
     "超出的内容会被截断，不是「记不住」，是「这次没看见」。"
    ],
    "why": "这是最容易让人误判模型能力的地方。塞了 500 页文档进去却答不出来，往往是超窗了。",
    "refs": [
     [
      "各成员的上下文长度（千问 3.8）",
      "https://models.specul.com/series/qwen3-8/",
      "Context length per member (Qwen3.8)"
     ],
     [
      "MCP 怎么解决喂资料的问题",
      "https://agent.specul.com/tools/context7.html",
      "How MCP feeds documents (context7)"
     ]
    ],
    "domain": "model",
    "purposeTag": "apply",
    "level": 1,
    "layer": "一",
    "ord": 11,
    "purposeEn": "How much the model can see at once — the page of text it can keep in mind while answering.",
    "defEn": [
     "The token budget for one request: system prompt, documents, conversation history and the reply all draw from it."
    ],
    "whyEn": "It sets a hard ceiling on what can be asked. \"It forgot what I told it\" is usually a context-window limit, not a memory bug.",
    "slug": "上下文窗口"
   },
   {
    "zh": "词表",
    "en": "Vocabulary",
    "purpose": "模型认识的全部字符集合。大小决定了它懂不懂中文、懂不懂代码。",
    "def": [
     "模型输出时能用的所有字符或片段的集合。",
     "词表越大，模型需要学的概念越多，对冷门语言和代码的支持通常越好。"
    ],
    "why": "解释了一个常见现象：为什么小模型对中文和代码的表现明显变差——词表里根本没有足够的碎片可用。",
    "refs": [
     [
      "Hugging Face 分词器课程",
      "https://huggingface.co/learn/nlp-course/zh-CN/chapter2/4",
      "Hugging Face NLP Course: Tokenizers chapter"
     ],
     [
      "Cornell CS5740：分词讲义",
      "https://www.cs.cornell.edu/courses/cs5740/2024sp/slides/06%20-%20tokenization.pdf",
      "Cornell CS 5740: Tokenization lecture slides"
     ]
    ],
    "domain": "concept",
    "purposeTag": "learn",
    "level": 1,
    "layer": "一",
    "ord": 12,
    "alias": [],
    "purposeEn": "The full set of characters a model knows. Its size decides whether it handles Chinese or code well.",
    "defEn": [
     "The set of characters or pieces a model can use when producing output.",
     "The larger the vocabulary, the more concepts the model must learn, and usually the better support for rare languages and code."
    ],
    "whyEn": "It explains a common observation: small models get markedly worse at Chinese and code — there simply are not enough pieces in the vocabulary.",
    "slug": "词表"
   },
   {
    "zh": "AI 产品 vs AI 模型",
    "en": "Product vs Model",
    "purpose": "区分「模型本身」和「你实际用的那个软件」。",
    "def": [
     "模型是底层的计算能力，产品是包装它的应用：界面、计费、协作功能、权限管理。",
     "同一个模型可以出现在很多不同产品里，体验差别很大。"
    ],
    "why": "这解释了为什么「模型排行榜第一」不等于「你用的那个工具最好用」。",
    "refs": [
     [
      "OpenAI Model Spec（官方）",
      "https://model-spec.openai.com/",
      "OpenAI Model Spec"
     ]
    ],
    "domain": "concept",
    "purposeTag": "learn",
    "level": 1,
    "layer": "一",
    "ord": 13,
    "alias": [],
    "purposeEn": "Separate the model itself from the piece of software you actually use.",
    "defEn": [
     "The model is the underlying capability; the product wraps it with interface, billing, collaboration features and permission management.",
     "One model can appear inside many products, and the experience varies widely."
    ],
    "whyEn": "It explains why \"top of the model leaderboard\" does not mean \"the tool you use is the best\".",
    "slug": "AI 产品 vs AI 模型"
   },
   {
    "zh": "生成式 AI",
    "en": "Generative AI",
    "purpose": "能凭空产出新内容的 AI——文字、图片、音频、视频都算。",
    "def": [
     "从已有数据分布中采样并生成新内容的 AI，与「判别式」（只做判断分类）相对。"
    ],
    "why": "你现在接触的绝大多数 AI 都是生成式。它和「识别」「分类」类AI 的能力边界很不一样。",
    "refs": [
     [
      "Google 生成式 AI 入门指南",
      "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/learn/overview",
      "Google Cloud: Generative AI beginner's guide"
     ],
     [
      "生成式 AI 论文（arXiv）",
      "https://arxiv.org/abs/2309.07930",
      "Generative AI (arXiv:2309.07930)"
     ]
    ],
    "domain": "concept",
    "purposeTag": "learn",
    "level": 1,
    "layer": "一",
    "ord": 14,
    "alias": [],
    "purposeEn": "AI that produces new content from nothing — text, images, audio, video all count.",
    "defEn": [
     "AI that samples from an existing data distribution to generate new content, as opposed to discriminative AI which only judges or classifies."
    ],
    "whyEn": "Nearly all AI you encounter is generative. Its capability boundary differs sharply from recognition and classification.",
    "slug": "生成式 AI"
   },
   {
    "zh": "AI Agent 与聊天机器人的区别",
    "en": "Agent vs Chatbot",
    "purpose": "聊天的终点是回答，Agent 的终点是做完。",
    "def": [
     "聊天机器人是「一问一答」；Agent 会自己规划步骤、调工具、检查结果、循环直到完成。"
    ],
    "why": "判断一个工具是哪种，决定了它值不值得你花时间配置。",
    "refs": [
     [
      "Agent 框架对照",
      "https://agent.specul.com/",
      "Agent profiles & comparisons"
     ]
    ],
    "domain": "concept",
    "purposeTag": "judge",
    "level": 1,
    "layer": "一",
    "ord": 15,
    "alias": [],
    "purposeEn": "A chatbot's job ends with an answer; an agent's ends with the work being done.",
    "defEn": [
     "A chatbot is question and answer. An agent plans its own steps, calls tools, checks results and loops until finished."
    ],
    "whyEn": "Which of the two you are looking at decides whether it is worth your time to configure.",
    "slug": "AI Agent 与聊天机器人的区别"
   },
   {
    "zh": "开源生态",
    "en": "Open-source Ecosystem",
    "purpose": "模型、工具、数据、文档都由社区维护，可自由组合。",
    "def": [
     "由公开代码与社区贡献构成的协作体系，模型和量化版本尤其活跃。"
    ],
    "why": "选择本地部署时，这个生态的活跃度直接决定你能拿到多少现成方案。",
    "refs": [
     [
      "导航站的开发框架分类",
      "https://nav.specul.com/",
      "Nav directory: dev frameworks"
     ]
    ],
    "domain": "concept",
    "purposeTag": "learn",
    "level": 1,
    "layer": "一",
    "ord": 16,
    "alias": [],
    "purposeEn": "Models, tools, data and documentation all maintained by the community, freely combinable.",
    "defEn": [
     "A collaborative system built on public code and community contribution, especially active around models and quantisations."
    ],
    "whyEn": "When choosing local deployment, this ecosystem's activity directly determines how many ready-made solutions you can get.",
    "slug": "开源生态"
   },
   {
    "zh": "能力边界",
    "en": "Capability Boundary",
    "purpose": "知道模型明确做不到什么，比知道它能做什么更能避免踩坑。",
    "def": [
     "一个系统在特定输入下可靠产出的范围之外的部分。"
    ],
    "why": "这是使用 AI 的核心素养——把重要任务放在可靠区间内。",
    "refs": [
     [
      "Model Cards（论文）",
      "https://arxiv.org/abs/1810.03993",
      "Model Cards for Model Reporting (paper)"
     ],
     [
      "Anthropic 透明度中心（官方）",
      "https://www.anthropic.com/transparency",
      "Anthropic Transparency Hub (Model Report)"
     ]
    ],
    "domain": "concept",
    "purposeTag": "guard",
    "level": 1,
    "layer": "一",
    "ord": 17,
    "alias": [],
    "purposeEn": "Knowing precisely what a model cannot do prevents more mistakes than knowing what it can.",
    "defEn": [
     "The region outside the range in which a system reliably produces correct output for a given input."
    ],
    "whyEn": "It is core literacy for using AI — keep important tasks inside the reliable range.",
    "slug": "能力边界"
   },
   {
    "zh": "权限",
    "en": "Permission",
    "purpose": "决定这个工具能碰你的哪些东西：读文件、改代码、发请求、花钱。",
    "def": [
     "指一个工具被允许做的操作范围。范围越大越方便，也越容易出事。",
     "好的工具会分级授权：读要批准、写要批准、删要二次确认。"
    ],
    "why": "这是AI 工具安全的第一道闸门。**给一个能写文件和跑命令的工具不给权限限制，等于把电脑交出去**。",
    "refs": [
     [
      "FileSystem server 为什么强制声明目录",
      "https://agent.specul.com/tools/filesystem.html",
      "Why Filesystem requires declared dirs"
     ],
     [
      "OpenHands 的受限模式",
      "https://agent.specul.com/harness/openhands.html",
      "OpenHands Restricted Mode"
     ],
     [
      "CLI 的权限询问机制",
      "https://agent.specul.com/opencode.html",
      "CLI permission prompts"
     ]
    ],
    "domain": "agent",
    "purposeTag": "guard",
    "level": 1,
    "layer": "一",
    "ord": 18,
    "alias": [],
    "purposeEn": "The set of operations a tool is allowed to perform. Wider is more convenient and more dangerous.",
    "defEn": [
     "The permitted action scope of a tool. A wider scope is easier to use and easier to get into trouble with.",
     "Good tools authorise in tiers: reading needs approval, writing needs approval, deleting needs confirmation."
    ],
    "whyEn": "It is the first gate on AI tool safety. **Giving a tool that writes files and runs commands no permission limits is handing over the machine.**",
    "slug": "权限"
   }
  ]
 },
 {
  "num": "二",
  "name": "使用层",
  "desc": "认清 AI 的能力与边界。知道它什么时候会出错，比知道它多强更重要。",
  "terms": [
   {
    "zh": "幻觉",
    "en": "Hallucination",
    "alias": [
     "胡说八道",
     "一本正经地编"
    ],
    "purpose": "模型用非常自信的语气说出看起来合理、但事实错误的内容。",
    "def": [
     "模型生成的内容不来自「查询」，而来自「预测下一个词」，所以会编。",
     "它在不熟悉的领域、以及需要精确数字和引用的地方尤其容易发生。"
    ],
    "why": "这是使用 AI 最需要防的一件事。规则很简单：**涉及事实、数字、法律、医疗的部分，必须另找来源核对**。",
    "refs": [
     [
      "幻觉综述（NLG）",
      "https://arxiv.org/abs/2202.03629",
      "Survey of Hallucination in Natural Language Generation"
     ],
     [
      "Anthropic 减少幻觉指南",
      "https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations",
      "Reduce hallucinations – Claude Docs"
     ]
    ],
    "domain": "model",
    "purposeTag": "guard",
    "level": 2,
    "layer": "二",
    "ord": 1,
    "purposeEn": "The model states something plausible and confident that is simply not true.",
    "defEn": [
     "Output that is fluent and confident but factually wrong. It comes from producing likely-sounding text rather than retrieving verified facts."
    ],
    "whyEn": "It is the single biggest practical risk with language models, and the reason fact-checking matters more than ever.",
    "slug": "幻觉"
   },
   {
    "zh": "多模态",
    "en": "Multimodal",
    "alias": [
     "多模态模型"
    ],
    "purpose": "能同时看图、读文档、听声音、生成图像，不只是处理文字。",
    "def": [
     "能接收和产出多种模态（文字、图片、音频、视频）的模型或系统。"
    ],
    "why": "决定了你能不能把界面截图、设计稿、报错截图直接丢给它问，而不用先转成文字。",
    "refs": [
     [
      "OpenAI 视觉能力指南",
      "https://platform.openai.com/docs/guides/vision",
      "OpenAI Vision guide"
     ],
     [
      "Claude 视觉能力文档",
      "https://platform.claude.com/docs/en/build-with-claude/vision",
      "Claude Vision documentation"
     ]
    ],
    "domain": "model",
    "purposeTag": "learn",
    "level": 2,
    "layer": "二",
    "ord": 2,
    "purposeEn": "Handle text, images, audio and video in one system rather than bolting separate models together.",
    "defEn": [
     "A model that takes or produces more than one kind of input or output, so images and text can be reasoned about together."
    ],
    "whyEn": "It is what makes document Q&A, screenshot understanding and video generation practical rather than staged pipelines.",
    "slug": "多模态"
   },
   {
    "zh": "推理模型",
    "en": "Reasoning Model",
    "alias": [
     "思考模型",
     "带思考的模型"
    ],
    "purpose": "回答前先在内部「想」一串步骤，复杂问题的正确率明显更高。",
    "def": [
     "先产生一段中间推理过程、再给结论的模型。典型代表是带 thinking / reasoning 档位的那种。",
     "代价是速度更慢、输出更多 token。"
    ],
    "why": "选型时最该关注的一个属性：要写代码、算数、做规划，用推理模型；要快、成本低，用普通模型。",
    "refs": [
     [
      "OpenAI 推理模型指南",
      "https://platform.openai.com/docs/guides/reasoning",
      "OpenAI Reasoning models guide"
     ],
     [
      "Claude 思考机制",
      "https://platform.claude.com/docs/en/build-with-claude/thinking",
      "Thinking – Claude Docs"
     ]
    ],
    "domain": "model",
    "purposeTag": "judge",
    "level": 2,
    "layer": "二",
    "ord": 3,
    "purposeEn": "Works through a chain of internal steps before answering, which markedly improves accuracy on hard problems.",
    "defEn": [
     "A model that produces intermediate reasoning before its conclusion — typically one with a thinking or reasoning mode.",
     "The cost is slower responses and more output tokens."
    ],
    "whyEn": "The single most important attribute when choosing a model: reasoning models for coding, arithmetic and planning; ordinary models for speed and cost.",
    "slug": "推理模型"
   },
   {
    "zh": "温度",
    "en": "Temperature",
    "purpose": "控制模型输出的随机性。调低更稳，调高更有创意。",
    "def": [
     "采样时控制「每次是否选最高概率的词」这个随机程度的参数。温度为0 时输出最确定。"
    ],
    "why": "写代码、抽取信息要低温；起名字、写文案可以高温。这是你能直接调的少数参数之一。",
    "refs": [
     [
      "OpenAI 温度参数说明",
      "https://platform.openai.com/docs/guides/text-generation",
      "OpenAI temperature parameter guide"
     ],
     [
      "Gemini 模型参数（温度）",
      "https://ai.google.dev/gemini-api/docs/models/generative-models",
      "Gemini model parameters (temperature)"
     ]
    ],
    "domain": "model",
    "purposeTag": "apply",
    "level": 2,
    "layer": "二",
    "ord": 4,
    "alias": [],
    "purposeEn": "Controls how random the output is. Lower is steadier; higher is more creative.",
    "defEn": [
     "A sampling parameter controlling how often the highest-probability token is chosen. A temperature of 0 gives the most deterministic output."
    ],
    "whyEn": "Low temperature for code and extraction; high temperature for naming and copywriting. It is one of the few parameters you can adjust directly.",
    "slug": "温度"
   },
   {
    "zh": "采样 / 采样参数",
    "en": "Sampling",
    "purpose": "模型在多个候选词里怎么挑，决定输出的发散程度。",
    "def": [
     "一组控制生成过程的参数统称：温度、Top-p、Top-k 等。",
     "它们只影响「怎么挑词」，不影响模型本身的智商。"
    ],
    "why": "知道这组参数后，模型输出的不稳定就有了可解释的原因，而不是「它今天抽风」。",
    "refs": [
     [
      "Gemini 采样参数（topK/topP）",
      "https://ai.google.dev/gemini-api/docs/models/generative-models",
      "Gemini sampling parameters (topK/topP)"
     ],
     [
      "Anthropic Messages 采样参数",
      "https://platform.claude.com/docs/en/build-with-claude/working-with-messages",
      "Anthropic Messages API sampling parameters"
     ]
    ],
    "domain": "model",
    "purposeTag": "apply",
    "level": 2,
    "layer": "二",
    "ord": 5,
    "alias": [],
    "purposeEn": "How the model picks among candidate tokens — this determines how far the output diverges.",
    "defEn": [
     "A collective term for parameters controlling generation: temperature, Top-p, Top-k and so on.",
     "They affect only how a token is chosen, not the intelligence of the model itself."
    ],
    "whyEn": "Once you know these parameters, unstable output has an explainable cause instead of \"it was feeling odd today\".",
    "slug": "采样 - 采样参数"
   },
   {
    "zh": "系统提示",
    "en": "System Prompt",
    "purpose": "给模型设定的角色和规则，决定它整个对话的基调。",
    "def": [
     "在用户输入之外，由应用开发者预设的一段指令，用来约束行为和输出格式。"
    ],
    "why": "它是「同一个模型，不同应用表现完全不同」的原因。你用的每个 AI 产品背后都有一份系统提示。",
    "refs": [
     [
      "Anthropic 系统提示修改指南",
      "https://platform.claude.com/docs/en/agent-sdk/modifying-system-prompts",
      "Anthropic Modifying system prompts"
     ],
     [
      "OpenAI 消息角色（system）说明",
      "https://help.openai.com/zh-hans-cn/articles/7042661-moving-from-completions-to-chat-completions-in-the-openai-api",
      "OpenAI chat roles / system message"
     ]
    ],
    "domain": "model",
    "purposeTag": "apply",
    "level": 2,
    "layer": "二",
    "ord": 6,
    "alias": [],
    "purposeEn": "The role and rules set for a model, which determine the tone of the whole conversation.",
    "defEn": [
     "Instructions preset by the application developer, outside the user's input, constraining behaviour and output format."
    ],
    "whyEn": "It is why the same model behaves so differently across applications. Every AI product you use has one behind it.",
    "slug": "系统提示"
   },
   {
    "zh": "微调",
    "en": "Fine-tuning",
    "purpose": "拿一个已有的模型，用你自己的数据继续训练，让它更懂你的领域。",
    "def": [
     "在已有模型的权重基础上继续训练，通常用较少的数据和时间。",
     "它和「提示词」是两种不同手段：提示词改行为，微调改能力倾向。"
    ],
    "why": "多数场景你**不需要**微调——先用提示词和 RAG，不够再考虑微调，成本差一个量级。",
    "refs": [
     [
      "OpenAI 微调指南",
      "https://platform.openai.com/docs/guides/fine-tuning",
      "OpenAI model optimization / fine-tuning guide"
     ],
     [
      "Azure OpenAI 微调",
      "https://learn.microsoft.com/en-AU/azure/ai-services/openai/how-to/fine-tuning",
      "Customize a model with fine-tuning – Azure OpenAI"
     ]
    ],
    "domain": "model",
    "purposeTag": "apply",
    "level": 2,
    "layer": "二",
    "ord": 7,
    "alias": [],
    "purposeEn": "Teach an existing model a specific task or style, rather than describing the task in the prompt.",
    "defEn": [
     "Further training of an already-trained model on task-specific data, changing its weights rather than its instructions."
    ],
    "whyEn": "It can beat prompting for a narrow task, but it costs more and is harder to maintain. Prompting first is usually the right order.",
    "slug": "微调"
   },
   {
    "zh": "偏好对齐",
    "en": "RLHF / Alignment",
    "purpose": "让模型的输出符合人类偏好，而不是只会续写文本。",
    "def": [
     "用人类对多个候选回答的排序来训练模型，让它更倾向于给出有帮助、无害、诚实的回答。"
    ],
    "why": "它解释了为什么模型有时候会「不肯回答」或「过度客气」——那是训练出来的，不是技术限制。",
    "refs": [
     [
      "InstructGPT（RLHF 论文）",
      "https://arxiv.org/abs/2203.02155",
      "Training LMs to follow instructions with human feedback"
     ]
    ],
    "domain": "concept",
    "purposeTag": "learn",
    "level": 2,
    "layer": "二",
    "ord": 8,
    "alias": [],
    "purposeEn": "Makes a model's output match human preference, rather than merely continuing text.",
    "defEn": [
     "Training a model on human rankings of several candidate answers so it tends to be helpful, harmless and honest."
    ],
    "whyEn": "It explains why a model sometimes refuses or is excessively agreeable — that is trained behaviour, not a technical limit.",
    "slug": "偏好对齐"
   },
   {
    "zh": "知识截止",
    "en": "Knowledge Cutoff",
    "purpose": "模型训练数据的时间边界。边界之后的事它不知道。",
    "def": [
     "模型训练数据截止的日期。晚于这个日期的信息，它没有学过。"
    ],
    "why": "问它最近的事件、今天的新闻、价格，它要么不知道要么会编。涉及最新信息必须配搜索。",
    "refs": [
     [
      "OpenAI 模型目录（知识截止）",
      "https://developers.openai.com/api/docs/models",
      "OpenAI models catalog (knowledge cutoff)"
     ],
     [
      "Anthropic 模型概览（知识截止）",
      "https://platform.claude.com/docs/en/about-claude/models/overview",
      "Anthropic models overview (knowledge cutoff)"
     ]
    ],
    "domain": "model",
    "purposeTag": "guard",
    "level": 2,
    "layer": "二",
    "ord": 9,
    "alias": [],
    "purposeEn": "The date boundary of a model's training data. Anything after it, the model does not know.",
    "defEn": [
     "The cut-off date of the training corpus. Information later than that was never learned."
    ],
    "whyEn": "Ask it about recent events, today's news or current prices and it either does not know or makes something up. Anything current needs search.",
    "slug": "知识截止"
   },
   {
    "zh": "联网 / 检索增强",
    "en": "Retrieval-Augmented Generation, RAG",
    "alias": [
     "RAG",
     "检索增强"
    ],
    "purpose": "回答之前先去查资料，把查到的内容塞进上下文里再回答。",
    "def": [
     "一种做法：先从你的文档或数据库里检索相关片段，再让模型基于这些片段作答。",
     "它解决的是「模型不知道你的私有资料」和「知识会过时」两个问题。"
    ],
    "why": "这是让模型用上你的私有文档最实用的手段，通常比微调更便宜也更安全。",
    "refs": [
     [
      "context7 用 MCP 喂文档的方案",
      "https://agent.specul.com/tools/context7.html",
      "Feeding docs via MCP (context7)"
     ],
     [
      "LlamaIndex 文档解析",
      "https://agent.specul.com/harness/llamaindex.html",
      "LlamaIndex document parsing"
     ],
     [
      "Pinecone RAG 指南",
      "https://www.pinecone.io/learn/retrieval-augmented-generation/",
      "Retrieval-Augmented Generation (RAG) – Pinecone"
     ]
    ],
    "domain": "data",
    "purposeTag": "apply",
    "level": 2,
    "layer": "二",
    "ord": 10,
    "purposeEn": "Let the model look things up before answering, instead of answering from memory alone.",
    "defEn": [
     "Retrieval-augmented generation: fetch relevant passages first, then have the model answer using them, ideally with citations."
    ],
    "whyEn": "It is the most practical way to reduce hallucination and give a model private or current knowledge.",
    "slug": "联网 - 检索增强"
   },
   {
    "zh": "向量 / 嵌入",
    "en": "Embedding / Vector",
    "purpose": "把一段文字变成一串数字，让机器能按「意思相近」而不是「字面相同」来检索。",
    "def": [
     "把文本映射成高维数字数组，相近含义的文本会得到相近的向量。",
     "它是「语义搜索」的实现基础——搜「怎么退货」能命中讲「退款流程」的文档，靠的是这个。"
    ],
    "why": "它解释了 RAG 里的「检索」到底在检索什么，也是向量数据库存在的原因。",
    "refs": [
     [
      "向量与上下文",
      "https://agent.specul.com/tools/context7.html",
      "Vectors and context (context7)"
     ]
    ],
    "domain": "data",
    "purposeTag": "learn",
    "level": 2,
    "layer": "二",
    "ord": 11,
    "alias": [],
    "purposeEn": "Represent text as coordinates, so meaning can be compared by geometry rather than by string match.",
    "defEn": [
     "Turning text into a list of numbers where closer vectors mean closer meaning. It is how semantic search and retrieval work."
    ],
    "whyEn": "Most retrieval systems are built on it. It also explains why keyword search still matters alongside vector search.",
    "slug": "向量 - 嵌入"
   },
   {
    "zh": "向量数据库",
    "en": "Vector Database",
    "purpose": "专门存和查这些数字数组的数据库，让 RAG 能在百万份文档里瞬间找到相关的那几段。",
    "def": [
     "为「按相似度检索」设计的存储引擎，传统数据库做不了这种查询。"
    ],
    "why": "如果你要做 RAG，这就是必需件。理解它能帮你判断一个方案为什么快、为什么慢。",
    "refs": [
     [
      "Qdrant 什么是向量数据库",
      "https://qdrant.tech/documentation/overview/what-is-qdrant/",
      "What is Qdrant? Vector databases"
     ],
     [
      "向量数据库概念",
      "https://qdrant.tech/articles/what-is-a-vector-database/",
      "What is a Vector Database? – Qdrant"
     ]
    ],
    "domain": "data",
    "purposeTag": "apply",
    "level": 2,
    "layer": "二",
    "ord": 12,
    "alias": [],
    "purposeEn": "A database built to store and search those numeric arrays, so RAG can find the relevant passages among millions of documents in an instant.",
    "defEn": [
     "Storage engines designed for similarity search — a query traditional databases cannot serve."
    ],
    "whyEn": "If you are building RAG this is a must-have. Understanding it tells you why an approach is fast or slow.",
    "slug": "向量数据库"
   },
   {
    "zh": "分块",
    "en": "Chunking",
    "purpose": "把长文档切成小块再送进模型。切得好不好，直接决定回答准不准。",
    "def": [
     "RAG 流程里把文档切成段落的过程。切太小丢上下文，切太大塞不进上下文窗口。"
    ],
    "why": "它是 RAG 里最容易被忽略、却最影响效果的环节。很多「AI 答得不准」的原因是切块切坏了。",
    "refs": [
     [
      "Chroma 分块指南",
      "https://docs.trychroma.com/guides/build/chunking",
      "Chunking – Chroma Docs"
     ]
    ],
    "domain": "data",
    "purposeTag": "apply",
    "level": 2,
    "layer": "二",
    "ord": 13,
    "alias": [],
    "purposeEn": "Cut a long document into pieces before feeding it to the model. How you chunk decides how accurate the answer is.",
    "defEn": [
     "The step in a RAG pipeline that splits a document into passages. Too small loses context; too large does not fit the context window."
    ],
    "whyEn": "The most overlooked yet most consequential step in RAG. Many \"the AI answered wrongly\" cases trace back to bad chunking.",
    "slug": "分块"
   },
   {
    "zh": "扩散模型",
    "en": "Diffusion Model",
    "purpose": "生成图片的主流方法：从一片噪声一步步「擦」出图像。",
    "def": [
     "从随机噪声开始，通过多步去噪逐步生成图像的生成模型。",
     "现在绝大多数图像生成工具（包括开源的 Stable Diffusion 系列）都基于它。"
    ],
    "why": "它是图像生成的技术底座。理解它就理解了为什么生图要等一会儿、以及为什么「步数」是个参数。",
    "refs": [
     [
      "DDPM 去噪扩散概率模型论文",
      "https://arxiv.org/abs/2006.11239",
      "Denoising Diffusion Probabilistic Models (DDPM)"
     ]
    ],
    "domain": "media",
    "purposeTag": "learn",
    "level": 2,
    "layer": "二",
    "ord": 14,
    "alias": [],
    "purposeEn": "The dominant method for image generation: \"wipe\" an image out of noise step by step.",
    "defEn": [
     "A generative model that starts from random noise and produces an image through many denoising steps.",
     "Almost every image-generation tool today, including the open-source Stable Diffusion family, is built on it."
    ],
    "whyEn": "It is the technical base of image generation. Understanding it explains why generation takes a moment and why \"steps\" is a parameter.",
    "slug": "扩散模型"
   },
   {
    "zh": "潜空间",
    "en": "Latent Space",
    "purpose": "图像生成的关键机制——模型在压缩后的空间里处理，而不是原始像素。",
    "def": [
     "先用编码器把图像压缩到低维空间，生成过程在这个空间进行，最后解码回图像。"
    ],
    "why": "它解释了为什么生图模型要「加载 VAE」，以及为什么压缩过程会影响细节。",
    "refs": [
     [
      "潜扩散模型（LDM）原论文",
      "https://arxiv.org/abs/2112.10752",
      "High-Resolution Image Synthesis with Latent Diffusion Models"
     ]
    ],
    "domain": "media",
    "purposeTag": "learn",
    "level": 2,
    "layer": "二",
    "ord": 15,
    "alias": [],
    "purposeEn": "The key mechanism in image generation — the model works in a compressed space, not on raw pixels.",
    "defEn": [
     "An encoder first compresses an image into a lower-dimensional space; generation happens there and a decoder restores it."
    ],
    "whyEn": "It explains why image models need to load a VAE, and why that compression affects fine detail.",
    "slug": "潜空间"
   },
   {
    "zh": "CLIP",
    "en": "Contrastive Language-Image Pre-training",
    "purpose": "让模型理解「文字描述」和「图片内容」的对应关系，是文生图的基础。",
    "def": [
     "把图片和文字映射到同一空间，让「一只猫」这句话能对应到猫的图像特征。"
    ],
    "why": "几乎所有文生图工具都内置它。它决定了模型对提示词的理解能力上限。",
    "refs": [
     [
      "CLIP 原论文（OpenAI）",
      "https://arxiv.org/abs/2103.00020",
      "CLIP: Learning Transferable Visual Models"
     ]
    ],
    "domain": "media",
    "purposeTag": "learn",
    "level": 2,
    "layer": "二",
    "ord": 16,
    "alias": [],
    "purposeEn": "Lets a model relate text descriptions to image content — the foundation of text-to-image generation.",
    "defEn": [
     "Maps images and text into the same space, so the phrase \"a cat\" lands near the visual features of cats."
    ],
    "whyEn": "Nearly every text-to-image tool ships it. It sets the ceiling on how well a model understands a prompt.",
    "slug": "CLIP"
   },
   {
    "zh": "ControlNet",
    "en": "ControlNet",
    "purpose": "让你用线稿、深度图、姿态图精确控制生成结果。",
    "def": [
     "附加在扩散模型上的控制网络，用结构图约束生成内容的形状和姿态。"
    ],
    "why": "它是图像生成里最实用的控制手段，做精确构图时的必需品。",
    "refs": [
     [
      "ControlNet 原论文（Stanford）",
      "https://arxiv.org/abs/2302.05543",
      "Adding Conditional Control to Text-to-Image Diffusion Models"
     ]
    ],
    "domain": "media",
    "purposeTag": "apply",
    "level": 2,
    "layer": "二",
    "ord": 17,
    "alias": [],
    "purposeEn": "Gives precise control over the result using line art, depth maps or pose skeletons.",
    "defEn": [
     "A control network attached to a diffusion model, constraining the shape and pose of what gets generated."
    ],
    "whyEn": "The most practical control mechanism in image generation, and essential when you need an exact composition.",
    "slug": "ControlNet"
   },
   {
    "zh": "语音识别",
    "en": "ASR, Automatic Speech Recognition",
    "alias": [
     "ASR",
     "语音转文字"
    ],
    "purpose": "把说的话转成文字。",
    "def": [
     "将音频信号转换为文本的技术，也叫语音转写。"
    ],
    "why": "它是所有语音交互的入口。转写质量直接决定后续理解质量。",
    "refs": [
     [
      "Whisper 语音识别论文",
      "https://arxiv.org/abs/2212.04356",
      "Robust Speech Recognition via Large-Scale Weak Supervision"
     ],
     [
      "OpenAI 官方博客：Whisper",
      "https://openai.com/index/whisper/",
      "OpenAI: Introducing Whisper"
     ]
    ],
    "domain": "media",
    "purposeTag": "learn",
    "level": 2,
    "layer": "二",
    "ord": 18,
    "purposeEn": "Turn what was said into text.",
    "defEn": [
     "Technology converting an audio signal into text, also called speech-to-text."
    ],
    "whyEn": "It is the entry point for all voice interaction, and transcription quality directly caps how well the rest of the system understands.",
    "slug": "语音识别"
   },
   {
    "zh": "语音合成",
    "en": "TTS, Text-to-Speech",
    "alias": [
     "TTS",
     "文字转语音"
    ],
    "purpose": "把文字读出来。",
    "def": [
     "把文本转换为自然语音的技术。"
    ],
    "why": "做语音功能时的输出端。现在可以生成接近真人的语气和情感。",
    "refs": [
     [
      "Tacotron 2 语音合成论文",
      "https://arxiv.org/abs/1712.05884",
      "Natural TTS Synthesis (Tacotron 2)"
     ],
     [
      "VITS 端到端语音合成论文",
      "https://arxiv.org/abs/2106.06103",
      "VITS: Conditional VAE for End-to-End TTS"
     ]
    ],
    "domain": "media",
    "purposeTag": "learn",
    "level": 2,
    "layer": "二",
    "ord": 19,
    "purposeEn": "Read text out loud.",
    "defEn": [
     "Technology converting text into natural-sounding speech."
    ],
    "whyEn": "It is the output side of any voice feature. It can now produce tone and emotion close to a real person.",
    "slug": "语音合成"
   },
   {
    "zh": "数字人",
    "en": "Digital Avatar",
    "purpose": "有形象和声音的虚拟人，可用于客服、虚拟主播等场景。",
    "def": [
     "结合了语音合成、图像生成与驱动技术的虚拟人物形态。"
    ],
    "why": "它是多模态能力的综合应用，也是导航站里一个独立的内容分类。",
    "refs": [
     [
      "NVIDIA ACE 数字人平台",
      "https://developer.nvidia.com/omniverse/ace",
      "NVIDIA ACE (Avatar Cloud Engine)"
     ],
     [
      "NVIDIA Tokkio 数字人定制文档",
      "https://docs.nvidia.com/ace/tokkio/5.0/customization/customization-options.html",
      "NVIDIA Tokkio Digital Human Customization Docs"
     ]
    ],
    "domain": "media",
    "purposeTag": "learn",
    "level": 2,
    "layer": "二",
    "ord": 20,
    "alias": [],
    "purposeEn": "A virtual person with an appearance and a voice, used for customer service, virtual presenters and similar.",
    "defEn": [
     "A virtual human form combining speech synthesis, image generation and animation."
    ],
    "whyEn": "It is a combined application of multimodal capability, and a category of its own in this directory.",
    "slug": "数字人"
   },
   {
    "zh": "AI 搜索",
    "en": "AI Search",
    "purpose": "不用关键词，而是用一句话描述你想要什么，直接给答案。",
    "def": [
     "理解自然语言查询、直接生成回答的搜索产品。"
    ],
    "why": "它改变了「找资料」的方式，也部分替代了传统搜索引擎。",
    "refs": [
     [
      "OpenAI 网页搜索工具指南",
      "https://platform.openai.com/docs/guides/tools-web-search",
      "OpenAI Web Search tool guide"
     ],
     [
      "Google 搜索接地",
      "https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/grounding/grounding-with-google-search",
      "Grounding with Google Search – Google Cloud"
     ]
    ],
    "domain": "model",
    "purposeTag": "apply",
    "level": 2,
    "layer": "二",
    "ord": 21,
    "alias": [],
    "purposeEn": "Describe what you want in a sentence instead of keywords, and get an answer directly.",
    "defEn": [
     "Search products that understand natural-language queries and generate an answer instead of returning links."
    ],
    "whyEn": "It changes how you look things up, and partly replaces conventional search engines.",
    "slug": "AI 搜索"
   },
   {
    "zh": "视频生成",
    "en": "Video Generation",
    "purpose": "从文字或图片生成短视频片段。",
    "def": [
     "用扩散或自回归方式生成视频序列的模型，能产出数秒到数十秒的片段。"
    ],
    "why": "这是当前生成式 AI 里最不成熟的方向，时长与一致性仍是主要限制。",
    "refs": [
     [
      "导航站的多模态生成分类",
      "https://nav.specul.com/",
      "Nav directory: multimodal generation"
     ]
    ],
    "domain": "media",
    "purposeTag": "learn",
    "level": 2,
    "layer": "二",
    "ord": 22,
    "alias": [],
    "purposeEn": "Generating short video clips from text or images.",
    "defEn": [
     "Producing video content conditioned on a text prompt or a still image."
    ],
    "whyEn": "It is the next step beyond image generation, and the gap between a striking demo and controllable output is still wide.",
    "slug": "视频生成"
   },
   {
    "zh": "具身智能",
    "en": "Embodied AI",
    "purpose": "让 AI 有身体、能感知环境并做出动作——机器人那一套。",
    "def": [
     "把 AI 能力延伸到物理世界的技术体系，包含感知、控制与规划。"
    ],
    "why": "这是 AI 里离日常生活最远的一支，也是导航站条目最多的分类（87 条）。",
    "refs": [
     [
      "导航站的机器人分类",
      "https://nav.specul.com/",
      "Nav directory: robotics"
     ]
    ],
    "domain": "media",
    "purposeTag": "learn",
    "level": 2,
    "layer": "二",
    "ord": 23,
    "alias": [],
    "purposeEn": "Giving AI a body so it can sense its surroundings and act — the robotics side of things.",
    "defEn": [
     "A technology system extending AI into the physical world, covering perception, control and planning."
    ],
    "whyEn": "It is the branch of AI furthest from everyday life, and also the largest category in this directory (87 entries).",
    "slug": "具身智能"
   },
   {
    "zh": "机器视觉",
    "en": "Computer Vision",
    "purpose": "让摄像头「看懂」画面——识别人、物体、文字、动作。",
    "def": [
     "让计算机从图像和视频中提取并理解信息的技术。"
    ],
    "why": "它是自动驾驶、安防、医疗影像的技术基础，与多模态大模型是同一方向的两个阶段。",
    "refs": [
     [
      "斯坦福 CS231n 计算机视觉课程",
      "https://cs231n.stanford.edu/",
      "Stanford CS231n: Deep Learning for Computer Vision"
     ],
     [
      "AlexNet 论文（ImageNet）",
      "https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks.pdf",
      "ImageNet Classification with Deep CNNs"
     ]
    ],
    "domain": "media",
    "purposeTag": "learn",
    "level": 2,
    "layer": "二",
    "ord": 24,
    "alias": [],
    "purposeEn": "Lets a camera \"see\" — recognise people, objects, text and actions.",
    "defEn": [
     "Technology that extracts and understands information from images and video."
    ],
    "whyEn": "The technical foundation of autonomous driving, security and medical imaging — two stages along the same direction as multimodal models.",
    "slug": "机器视觉"
   },
   {
    "zh": "自动驾驶",
    "en": "Autonomous Driving",
    "purpose": "车辆自己识别环境、规划路线并控制方向盘。",
    "def": [
     "用传感器融合与 AI 决策实现车辆自主行驶的技术体系。"
    ],
    "why": "它是具身智能里最成熟、最有明确分级标准的应用场景。",
    "refs": [
     [
      "Waymo 官方：车辆如何行驶",
      "https://support.google.com/waymo/answer/9190838",
      "Waymo: How our cars drive"
     ]
    ],
    "domain": "media",
    "purposeTag": "learn",
    "level": 2,
    "layer": "二",
    "ord": 25,
    "alias": [],
    "purposeEn": "The vehicle senses its surroundings, plans a route and controls the steering itself.",
    "defEn": [
     "A technology system for autonomous driving using sensor fusion and AI decision-making."
    ],
    "whyEn": "The most mature application of embodied AI, and the one with clear established grading levels.",
    "slug": "自动驾驶"
   },
   {
    "zh": "AI 芯片",
    "en": "AI Accelerator",
    "alias": [
     "AI 加速卡"
    ],
    "purpose": "专门做 AI 运算的芯片，比通用 GPU 更高效但生态更封闭。",
    "def": [
     "为矩阵运算优化的处理器，通常指各类 AI 专用加速硬件。"
    ],
    "why": "它决定了你能把多大的模型塞进多少钱的设备里。",
    "refs": [
     [
      "导航站的算力与芯片分类",
      "https://nav.specul.com/",
      "Nav directory: compute & chips"
     ]
    ],
    "domain": "infra",
    "purposeTag": "learn",
    "level": 2,
    "layer": "二",
    "ord": 26,
    "purposeEn": "Chips built specifically for AI computation — more efficient than general GPUs, but with a more closed ecosystem.",
    "defEn": [
     "Processors optimised for matrix computation, usually referring to AI-specific accelerator hardware of various kinds."
    ],
    "whyEn": "It determines how large a model you can fit onto a device at a given price.",
    "slug": "AI 芯片"
   }
  ]
 },
 {
  "num": "三",
  "name": "应用层",
  "desc": "决定 AI 好不好用的那些具体做法。看完能判断一个方案靠不靠谱。",
  "terms": [
   {
    "zh": "智能体 / Agent",
    "en": "Agent",
    "alias": [
     "智能体",
     "代理"
    ],
    "purpose": "让模型不止回答，还能自己动手：调工具、查资料、写文件、循环执行直到完成。",
    "def": [
     "给模型配上目标、工具和循环，让它自主执行多步骤任务的一套做法。",
     "关键区别：普通问答是「你问一句它答一句」，Agent 是「给它一件事，它自己走到完成」。"
    ],
    "why": "这是本站 harness 分区存在的全部理由。如果你只需要问答，不需要 Agent。",
    "refs": [
     [
      "10 份 Agent 框架档案",
      "https://agent.specul.com/",
      "10 agent framework profiles"
     ],
     [
      "CrewAI 的角色分工",
      "https://agent.specul.com/harness/crewai.html",
      "CrewAI role division"
     ]
    ],
    "domain": "agent",
    "purposeTag": "apply",
    "level": 3,
    "layer": "三",
    "ord": 1,
    "purposeEn": "Stop answering and start acting: let the model take multi-step actions on its own.",
    "defEn": [
     "A system where a model plans, calls tools, reads results and repeats until the task is done, rather than replying once."
    ],
    "whyEn": "It is the difference between \"it tells you how\" and \"it does it for you\". Most of the practical value in agents comes from tool use, not conversation.",
    "slug": "智能体 - Agent"
   },
   {
    "zh": "工具调用",
    "en": "Tool Calling / Function Calling",
    "purpose": "模型自己决定「我要查一下数据库」，然后真的去调那个程序。",
    "def": [
     "模型输出一个结构化的调用意图，由你的程序执行后把结果喂回去。",
     "模型本身不执行任何东西，它只是输出「要调哪个函数、传什么参数」。"
    ],
    "why": "这是 Agent 能「真的做事」而不是「只是说要做」的分界线。没有它，模型只能空谈。",
    "refs": [
     [
      "OpenAI 函数调用指南",
      "https://platform.openai.com/docs/guides/function-calling",
      "OpenAI Function Calling Guide"
     ],
     [
      "Anthropic 工具调用文档",
      "https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview",
      "Anthropic Tool Use with Claude"
     ]
    ],
    "domain": "agent",
    "purposeTag": "apply",
    "level": 3,
    "layer": "三",
    "ord": 2,
    "alias": [],
    "purposeEn": "Let the model actually do things — search, run code, edit files — rather than only describe them.",
    "defEn": [
     "A mechanism where the model emits a structured request for a function, the system runs it, and the result goes back into the conversation."
    ],
    "whyEn": "It is what turns a language model into a usable assistant. It also introduces real risk: the model can act wrongly, not just speak wrongly.",
    "slug": "工具调用"
   },
   {
    "zh": "MCP",
    "en": "Model Context Protocol",
    "alias": [
     "模型上下文协议"
    ],
    "purpose": "一套标准接口，让 AI 用统一的方式接外部工具和数据，不用为每个服务单独适配。",
    "def": [
     "Anthropic 提出的开放协议，用统一规范描述「AI 可以调哪些工具、可以读哪些资源」。",
     "它的作用类似 AI 世界的 USB-C：接什么设备都能用同一套接口。"
    ],
    "why": "如果你要给 AI 接数据，这是当前最省事、最通用的做法。本站 MCP 分区专讲这个。",
    "refs": [
     [
      "MCP 是什么·9 份 server 档案",
      "https://agent.specul.com/tools/index.html",
      "What MCP is · 9 server profiles"
     ],
     [
      "文件操作 server",
      "https://agent.specul.com/tools/filesystem.html",
      "Filesystem server"
     ],
     [
      "网页抓取 server",
      "https://agent.specul.com/tools/fetch.html",
      "Fetch server"
     ]
    ],
    "domain": "agent",
    "purposeTag": "apply",
    "level": 3,
    "layer": "三",
    "ord": 3,
    "purposeEn": "A standard interface for connecting AI to external tools and data in one uniform way, without a bespoke integration per service.",
    "defEn": [
     "An open protocol proposed by Anthropic describing, in one specification, which tools an AI may call and which resources it may read.",
     "It plays the role of USB-C for AI: whatever device you plug in, the interface is the same."
    ],
    "whyEn": "If you want to connect data to an AI, this is the least-effort and most general approach today. This site's MCP track covers it.",
    "slug": "MCP"
   },
   {
    "zh": "多 Agent 协作",
    "en": "Multi-Agent",
    "purpose": "把一件复杂的事拆给多个各有所长的角色来分工完成。",
    "def": [
     "让多个各自带不同工具和提示的 Agent 分工协作，典型模式是「规划者 + 执行者 + 审查者」。",
     "代价是 token 消耗和延迟都会成倍上升。"
    ],
    "why": "不是所有事都该多 Agent。任务简单时，一个 Agent 加工具更快也更可靠。",
    "refs": [
     [
      "CrewAI 的角色分工模式",
      "https://agent.specul.com/harness/crewai.html",
      "CrewAI role division"
     ],
     [
      "LangGraph 低层编排",
      "https://agent.specul.com/harness/langgraph.html",
      "LangGraph low-level orchestration"
     ]
    ],
    "domain": "agent",
    "purposeTag": "apply",
    "level": 3,
    "layer": "三",
    "ord": 4,
    "alias": [],
    "purposeEn": "Split a complex job across several roles, each strong at something different.",
    "defEn": [
     "Multiple agents with different tools and prompts working together — the classic pattern is planner plus executor plus reviewer.",
     "The cost is that token consumption and latency both multiply."
    ],
    "whyEn": "Not everything needs multiple agents. On simple tasks one agent with tools is faster and more reliable.",
    "slug": "多 Agent 协作"
   },
   {
    "zh": "工作流编排",
    "en": "Orchestration / Pipeline",
    "purpose": "把「AI 做一步、人工确认、再做下一步」这种固定流程固定下来。",
    "def": [
     "用代码明确写出步骤顺序和分支条件，而不是全交给模型自己决定。"
    ],
    "why": "可靠的生产系统大多是人机协作的工作流，不是全自动 Agent。这是控制风险的关键设计。",
    "refs": [
     [
      "Google ADK 的图执行引擎",
      "https://agent.specul.com/harness/google-adk.html",
      "Google ADK graph engine"
     ],
     [
      "OpenAI Agents SDK",
      "https://agent.specul.com/harness/openai-agents-sdk.html",
      "OpenAI Agents SDK"
     ]
    ],
    "domain": "agent",
    "purposeTag": "apply",
    "level": 3,
    "layer": "三",
    "ord": 5,
    "alias": [],
    "purposeEn": "Fix a repeated pattern: the AI does a step, a human confirms, the next step runs.",
    "defEn": [
     "Writing the step order and branch conditions explicitly in code, rather than leaving every decision to the model."
    ],
    "whyEn": "Reliable production systems are mostly human-in-the-loop workflows, not fully autonomous agents. This is the key design decision for controlling risk.",
    "slug": "工作流编排"
   },
   {
    "zh": "记忆",
    "en": "Memory",
    "purpose": "让 Agent 跨对话记住事，不用每次都重新交代背景。",
    "def": [
     "把历史信息持久化保存，让后续会话能取回使用。",
     "两种做法：存在程序里（可控），或存在模型外部的存储里（灵活但要管权限）。"
    ],
    "why": "「AI 每次都忘事」是使用中最常见的抱怨，答案就是要有记忆层。",
    "refs": [
     [
      "知识图谱记忆 server",
      "https://agent.specul.com/tools/memory.html",
      "Knowledge-graph memory server"
     ]
    ],
    "domain": "agent",
    "purposeTag": "apply",
    "level": 3,
    "layer": "三",
    "ord": 6,
    "alias": [],
    "purposeEn": "Let an agent remember things across conversations instead of restating the background every time.",
    "defEn": [
     "Persisting historical information so later sessions can retrieve it.",
     "Two approaches: store it in the program (controllable), or in external storage the model can reach (flexible, but then permissions matter)."
    ],
    "whyEn": "\"The AI forgets everything every time\" is the most common complaint in use, and the answer is a memory layer.",
    "slug": "记忆"
   },
   {
    "zh": "长时任务",
    "en": "Long-running Task",
    "purpose": "跑几小时甚至几天、跨多个上下文的复杂工作。",
    "def": [
     "超出单次上下文或单次会话时长的任务，需要外部存储进度、阶段性恢复。"
    ],
    "why": "这是 Agent 能力的天花板所在。宣称能跑长任务的框架，值得重点核实它怎么存进度。",
    "refs": [
     [
      "Hermes 的学习闭环",
      "https://agent.specul.com/harness/hermes-agent.html",
      "Hermes learning loop"
     ],
     [
      "Deep Agents 长任务设计",
      "https://agent.specul.com/harness/deepagents.html",
      "Deep Agents long-task design"
     ]
    ],
    "domain": "agent",
    "purposeTag": "apply",
    "level": 3,
    "layer": "三",
    "ord": 7,
    "alias": [],
    "purposeEn": "Work running for hours or days across many contexts.",
    "defEn": [
     "Tasks exceeding a single context window or session, requiring external progress storage and staged resumption."
    ],
    "whyEn": "This is the ceiling on agent capability. For a framework claiming long-running tasks, check how it stores progress.",
    "slug": "长时任务"
   },
   {
    "zh": "人机协作",
    "en": "Human-in-the-Loop",
    "purpose": "关键步骤让人确认，而不是全自动往下跑。",
    "def": [
     "在流程的特定节点插入人工审核，由人决定是否继续或怎么改。"
    ],
    "why": "涉及写文件、发请求、花钱、改数据库的动作，都应该留人工确认。这是控制事故的主要手段。",
    "refs": [
     [
      "CLI 的权限询问机制",
      "https://agent.specul.com/opencode.html",
      "CLI permission prompts"
     ]
    ],
    "domain": "agent",
    "purposeTag": "guard",
    "level": 3,
    "layer": "三",
    "ord": 8,
    "alias": [],
    "purposeEn": "A human confirms the key steps instead of the system running on unattended.",
    "defEn": [
     "Inserting human review at specific points in a flow, so a person decides whether to continue or how to change it."
    ],
    "whyEn": "Anything that writes files, sends requests, spends money or modifies a database should have a human checkpoint. This is the main lever against accidents.",
    "slug": "人机协作"
   },
   {
    "zh": "护栏",
    "en": "Guardrails",
    "purpose": "限制模型能做什么、不能做什么，防止它跑偏或做危险操作。",
    "def": [
     "在输入和输出两侧加的一层检查规则，可以是关键词、权限、也可以是另一个模型判断。"
    ],
    "why": "给 Agent 配了写文件和跑命令的能力，就必须配护栏。这是能力与风险的直接交换。",
    "refs": [
     [
      "OpenHands 的受限模式",
      "https://agent.specul.com/harness/openhands.html",
      "OpenHands Restricted Mode"
     ]
    ],
    "domain": "agent",
    "purposeTag": "guard",
    "level": 3,
    "layer": "三",
    "ord": 9,
    "alias": [],
    "purposeEn": "Constrain what the model may and may not do, so it does not drift or take dangerous actions.",
    "defEn": [
     "A layer of checks on the input and output side — keywords, permissions, or another model's judgement."
    ],
    "whyEn": "If you give an agent the ability to write files and run commands, you must give it guardrails. This is a direct trade of capability for risk.",
    "slug": "护栏"
   },
   {
    "zh": "沙箱",
    "en": "Sandbox",
    "purpose": "把 AI 的操作关在一个受控环境里，出问题也出不到外面。",
    "def": [
     "隔离的执行环境，比如容器或受限目录，限制它能碰哪些文件和命令。"
    ],
    "why": "判断一个 Agent 工具是否可靠，先看它默认在不在沙箱里跑。",
    "refs": [
     [
      "Docker 沙箱隔离层",
      "https://docs.docker.com/ai/sandboxes/security/isolation/",
      "Docker Sandboxes: Isolation layers"
     ],
     [
      "Claude Code 沙箱",
      "https://www.anthropic.com/engineering/claude-code-sandboxing",
      "Beyond permission prompts: sandboxing"
     ]
    ],
    "domain": "agent",
    "purposeTag": "guard",
    "level": 3,
    "layer": "三",
    "ord": 10,
    "alias": [],
    "purposeEn": "Confine what the AI does to a controlled environment so a mistake stays contained.",
    "defEn": [
     "An isolated execution environment — a container or restricted directory — limiting which files and commands it can touch."
    ],
    "whyEn": "When judging whether an agent tool is trustworthy, first check whether it runs sandboxed by default.",
    "slug": "沙箱"
   },
   {
    "zh": "评估",
    "en": "Evaluation, Evals",
    "purpose": "判断一个方案到底好不好，而不是「看起来不错」。",
    "def": [
     "用一批固定题目和评分标准，量化比较不同模型、不同提示词、不同方案的效果。"
    ],
    "why": "没有评估就没有改进依据。这是区分「认真做的产品」和「说得好听的产品」的分水岭。",
    "refs": [
     [
      "OpenAI Evals 官方指南",
      "https://platform.openai.com/docs/guides/evals",
      "OpenAI Working with Evals"
     ],
     [
      "HELM 论文",
      "https://arxiv.org/abs/2211.09110",
      "Holistic Evaluation of Language Models (HELM)"
     ]
    ],
    "domain": "choice",
    "purposeTag": "judge",
    "level": 3,
    "layer": "三",
    "ord": 11,
    "alias": [],
    "purposeEn": "Decide whether an approach is actually good, rather than merely plausible-sounding.",
    "defEn": [
     "A fixed set of questions plus scoring criteria, to compare models, prompts or approaches quantitatively."
    ],
    "whyEn": "Without evaluation there is no basis for improvement. It is the dividing line between a product built seriously and one that merely sounds good.",
    "slug": "评估"
   },
   {
    "zh": "可观测性",
    "en": "Observability",
    "purpose": "看清模型这一趟到底做了什么、花了多少、错在哪一步。",
    "def": [
     "记录调用链、每步输入输出、token 消耗和耗时，让问题可追溯。"
    ],
    "why": "模型行为有随机性，不记录就永远查不出问题。这是把 Demo 变成生产系统的必备条件。",
    "refs": [
     [
      "OpenTelemetry 可观测性入门",
      "https://opentelemetry.io/docs/concepts/observability-primer/",
      "OpenTelemetry Observability Primer"
     ],
     [
      "LangSmith 可观测性文档",
      "https://docs.langchain.com/langsmith/observability",
      "LangSmith Observability"
     ]
    ],
    "domain": "choice",
    "purposeTag": "judge",
    "level": 3,
    "layer": "三",
    "ord": 12,
    "alias": [],
    "purposeEn": "See what the model actually did this run, what it cost, and which step went wrong.",
    "defEn": [
     "Recording the call chain, each step's input and output, token usage and latency so problems can be traced."
    ],
    "whyEn": "Model behaviour is probabilistic; without records you can never diagnose a problem. This is what separates a demo from a production system.",
    "slug": "可观测性"
   },
   {
    "zh": "代码补全",
    "en": "Code Completion",
    "purpose": "在编辑器里根据上下文自动补出接下来的代码。",
    "def": [
     "根据光标位置和已有代码推测并插入后续代码的功能。"
    ],
    "why": "这是 AI 编程工具最早也最基础的能力——所有 IDE 类工具都从它开始。",
    "refs": [
     [
      "8 份 IDE 对照",
      "https://agent.specul.com/",
      "8 IDE tools compared"
     ]
    ],
    "domain": "dev",
    "purposeTag": "apply",
    "level": 3,
    "layer": "三",
    "ord": 13,
    "alias": [],
    "purposeEn": "Complete the following code automatically in the editor, based on context.",
    "defEn": [
     "Inferring and inserting the code that follows, from the cursor position and what is already written."
    ],
    "whyEn": "The earliest and most basic AI coding capability — every IDE-class tool started here.",
    "slug": "代码补全"
   },
   {
    "zh": "仓库级理解",
    "en": "Repository-level Understanding",
    "purpose": "让 AI 读懂整个项目，而不是只看当前打开的那一个文件。",
    "def": [
     "AI 建立整个代码库的索引与结构认知，能跨文件回答问题、影响范围分析。"
    ],
    "why": "这是「Copilot 类工具」与「简单补全」的分水岭。做重构类任务时必须要有它。",
    "refs": [
     [
      "Cursor 代码库索引",
      "https://cursor.com/blog/secure-codebase-indexing",
      "Securely indexing large codebases – Cursor"
     ]
    ],
    "domain": "dev",
    "purposeTag": "apply",
    "level": 3,
    "layer": "三",
    "ord": 14,
    "alias": [],
    "purposeEn": "Let the AI read the whole project, not just the file that happens to be open.",
    "defEn": [
     "The AI builds an index and structural model of the entire codebase, so it can answer across files and reason about blast radius."
    ],
    "whyEn": "This is the dividing line between Copilot-class tools and simple completion. Refactoring tasks require it.",
    "slug": "仓库级理解"
   },
   {
    "zh": "终端 Agent",
    "en": "CLI Agent",
    "purpose": "在命令行里自主执行任务：改文件、跑测试、提交代码。",
    "def": [
     "运行在终端中的 AI 智能体，能直接操作开发环境。"
    ],
    "why": "它比 IDE 类工具更适合自动化和脚本化场景，也是脚本/CI 环境的唯一选择。",
    "refs": [
     [
      "6 份 CLI 对照",
      "https://agent.specul.com/",
      "6 CLI agents compared"
     ]
    ],
    "domain": "dev",
    "purposeTag": "apply",
    "level": 3,
    "layer": "三",
    "ord": 15,
    "alias": [],
    "purposeEn": "Run tasks autonomously in the command line: edit files, run tests, commit code.",
    "defEn": [
     "An AI agent running in the terminal, able to operate the development environment directly."
    ],
    "whyEn": "It suits automation and scripting better than IDE-class tools, and is the only option in scripted or CI environments.",
    "slug": "终端 Agent"
   },
   {
    "zh": "差异对比",
    "en": "Diff",
    "purpose": "看 AI 到底改了什么。这是接受 AI 代码最关键的一步。",
    "def": [
     "逐行比较改动前后的差异，是审查 AI 产出的基本手段。"
    ],
    "why": "官方资料里有个反复出现的模式：AI 的改动始终保持在版本控制里、可 diff 可撤销。这是安全前提。",
    "refs": [
     [
      "Aider 的 Git 集成设计",
      "https://agent.specul.com/aider-cli.html",
      "Aider's Git integration"
     ]
    ],
    "domain": "dev",
    "purposeTag": "guard",
    "level": 3,
    "layer": "三",
    "ord": 16,
    "alias": [],
    "purposeEn": "See exactly what the AI changed — the most important step when accepting AI-written code.",
    "defEn": [
     "Comparing before and after line by line, the basic means of reviewing AI output."
    ],
    "whyEn": "A pattern that recurs in official guidance: keep AI changes under version control, diffable and revertible. That is a precondition for safety.",
    "slug": "差异对比"
   },
   {
    "zh": "App Server",
    "en": "App Server",
    "purpose": "让同一个 AI 会话能在终端、编辑器、网页之间接力。",
    "def": [
     "把 AI 会话状态抽成独立服务，供多个前端接入的设计。"
    ],
    "why": "它解释了为什么有的工具「关掉终端换个界面继续聊」——会话不在终端里而在服务里。",
    "refs": [
     [
      "Codex 的 app server 架构",
      "https://agent.specul.com/codex-cli.html",
      "Codex app-server architecture"
     ],
     [
      "Codex IDE 扩展",
      "https://agent.specul.com/codex-ide.html",
      "Codex IDE extension"
     ]
    ],
    "domain": "dev",
    "purposeTag": "learn",
    "level": 3,
    "layer": "三",
    "ord": 17,
    "alias": [],
    "purposeEn": "Let one AI session hand off between terminal, editor and web.",
    "defEn": [
     "A design where AI session state lives in a standalone service that several front ends can attach to."
    ],
    "whyEn": "It explains why some tools let you close the terminal and carry on in another interface: the session lives in a service, not in the terminal.",
    "slug": "App Server"
   },
   {
    "zh": "ACP",
    "en": "Agent Client Protocol",
    "purpose": "让不同厂商的 AI 编码工具能挂进同一个编辑器。",
    "def": [
     "一种协议约定，使编辑器能加载各家不同的 Agent 实现。"
    ],
    "why": "它和 MCP 是同一类思路——用标准接口替代逐个适配。",
    "refs": [
     [
      "Zed 的三种 agent path 编排",
      "https://agent.specul.com/zed.html",
      "Zed's three agent-path orchestration"
     ]
    ],
    "domain": "dev",
    "purposeTag": "apply",
    "level": 3,
    "layer": "三",
    "ord": 18,
    "alias": [],
    "purposeEn": "Let AI coding tools from different vendors plug into the same editor.",
    "defEn": [
     "A protocol agreement that lets an editor load agent implementations from any vendor."
    ],
    "whyEn": "It is the same idea as MCP — a standard interface instead of per-vendor integration.",
    "slug": "ACP"
   },
   {
    "zh": "配对编程",
    "en": "Pair Programming",
    "purpose": "AI 作为编程搭档，实时参与开发过程。",
    "def": [
     "两个人共同写代码的实践，被扩展为「人 + AI」协作的模式。"
    ],
    "why": "这是理解所有 AI 编程工具定位的原始概念——它们都在不同程度的自动化这个模式。",
    "refs": [
     [
      "Aider 的设计理念",
      "https://agent.specul.com/aider-cli.html",
      "Aider's design philosophy"
     ]
    ],
    "domain": "dev",
    "purposeTag": "learn",
    "level": 3,
    "layer": "三",
    "ord": 19,
    "alias": [],
    "purposeEn": "AI as a programming partner taking part in development in real time.",
    "defEn": [
     "The practice of two people writing code together, extended to a human plus AI collaboration model."
    ],
    "whyEn": "It is the original concept behind every AI coding tool — they all automate this pattern to different degrees.",
    "slug": "配对编程"
   },
   {
    "zh": "浏览 / 网页操作",
    "en": "Browser Automation",
    "purpose": "让 AI 自己去点页面、填表单、截图取信息。",
    "def": [
     "用程序控制浏览器执行操作的技术，是很多 Agent 获取信息的手段。"
    ],
    "why": "它既是最有用的能力之一，也是最容易出安全风险的能力——它能操作真实账号。",
    "refs": [
     [
      "Playwright MCP server",
      "https://agent.specul.com/tools/playwright.html",
      "Playwright MCP server"
     ],
     [
      "网页抓取 server 的安全警告",
      "https://agent.specul.com/tools/fetch.html",
      "Fetch server's security warning"
     ]
    ],
    "domain": "agent",
    "purposeTag": "apply",
    "level": 3,
    "layer": "三",
    "ord": 20,
    "alias": [],
    "purposeEn": "Let the AI click pages, fill forms and take screenshots to gather information.",
    "defEn": [
     "Technology controlling a browser programmatically, used by many agents to collect information."
    ],
    "whyEn": "It is both one of the most useful capabilities and one of the most security-sensitive, because it can operate real accounts.",
    "slug": "浏览 - 网页操作"
   },
   {
    "zh": "参考服务器",
    "en": "Reference Server",
    "purpose": "官方提供的「标准示范」实现，用来告诉你协议该怎么写。",
    "def": [
     "MCP 官方提供的一批最小实现，不是给普通用户用的，是给开发者参考和测试的。"
    ],
    "why": "看官方实现是理解一个协议最快的办法——比读文档直接得多。",
    "refs": [
     [
      "Everything 是测试用 server",
      "https://agent.specul.com/tools/everything.html",
      "The Everything test server"
     ],
     [
      "Filesystem 实现",
      "https://agent.specul.com/tools/filesystem.html",
      "Filesystem server"
     ]
    ],
    "domain": "agent",
    "purposeTag": "learn",
    "level": 3,
    "layer": "三",
    "ord": 21,
    "alias": [],
    "purposeEn": "Official \"reference\" implementations showing how the protocol should be written.",
    "defEn": [
     "Minimal implementations published by the MCP project — not for end users, but for developers to reference and test against."
    ],
    "whyEn": "Reading the official implementation is the fastest way to understand a protocol — far quicker than the documentation.",
    "slug": "参考服务器"
   },
   {
    "zh": "版本控制",
    "en": "Version Control",
    "alias": [
     "Git"
    ],
    "purpose": "记录每一次改动，随时回退。这是 AI 编程的安全底座。",
    "def": [
     "管理文件变更历史、支撑多人协作与回滚的机制。"
    ],
    "why": "AI 会犯错、会删错文件。有版本控制才有胆量让它动手。",
    "refs": [
     [
      "Git MCP server 的作用域",
      "https://agent.specul.com/tools/git.html",
      "Git MCP server scope"
     ]
    ],
    "domain": "dev",
    "purposeTag": "guard",
    "level": 3,
    "layer": "三",
    "ord": 22,
    "purposeEn": "Record every change and roll back at will — the safety foundation of AI-assisted coding.",
    "defEn": [
     "A mechanism tracking the history of file changes, supporting collaboration and rollback."
    ],
    "whyEn": "AI makes mistakes and deletes the wrong file. Without version control you cannot afford to let it act.",
    "slug": "版本控制"
   },
   {
    "zh": "持续集成",
    "en": "Continuous Integration, CI",
    "purpose": "代码一提交就自动跑测试和检查。",
    "def": [
     "自动化的代码验证流程，在提交时触发构建与测试。"
    ],
    "why": "它决定了 AI 的产出能否被自动验证——能验证才能放心批量使用。",
    "refs": [
     [
      "GitHub Actions 持续集成",
      "https://docs.github.com/en/actions/get-started/continuous-integration",
      "GitHub Actions: Continuous integration"
     ],
     [
      "GitHub Actions 概念介绍",
      "https://docs.github.com/en/actions/get-started/understand-github-actions",
      "Understanding GitHub Actions"
     ]
    ],
    "domain": "dev",
    "purposeTag": "guard",
    "level": 3,
    "layer": "三",
    "ord": 23,
    "alias": [],
    "purposeEn": "Tests and checks run automatically as soon as code is committed.",
    "defEn": [
     "An automated verification pipeline that triggers a build and tests on commit."
    ],
    "whyEn": "It decides whether AI output can be verified automatically — and verifiable output is what makes batch use safe.",
    "slug": "持续集成"
   },
   {
    "zh": "提示注入",
    "en": "Prompt Injection",
    "purpose": "外部内容里藏着指令，骗AI 执行你没打算让它做的事。",
    "def": [
     "攻击者把指令藏在模型会读取的内容里（网页、文档、邮件），让模型把它当成用户指令执行。",
     "这是 Agent 时代最重要的安全风险之一。"
    ],
    "why": "这解释了为什么让AI 读网页或邮件有风险，也解释了权限确认机制为什么必须保留。",
    "refs": [
     [
      "Fetch server 的安全警告",
      "https://agent.specul.com/tools/fetch.html",
      "Fetch server's security warning"
     ]
    ],
    "domain": "agent",
    "purposeTag": "guard",
    "level": 3,
    "layer": "三",
    "ord": 24,
    "alias": [],
    "purposeEn": "The main security risk in agent systems: content that talks the model into doing something you did not intend.",
    "defEn": [
     "An attack where instructions hidden in retrieved documents, tool output or a web page hijack the model's behaviour."
    ],
    "whyEn": "It is the single most important thing to understand before deploying an agent that reads untrusted content.",
    "slug": "提示注入"
   },
   {
    "zh": "远程执行",
    "en": "Remote Execution",
    "purpose": "云端 Agent 在你电脑上跑任务，关掉笔记本也不中断。",
    "def": [
     "把执行放到远端服务器，本机只作为查看界面。"
    ],
    "why": "这是「长时间任务」的实现基础，也是自托管方案的核心差异点。",
    "refs": [
     [
      "Cursor 的云端 Agent 与自托管",
      "https://agent.specul.com/cursor.html",
      "Cursor cloud agent & self-hosting"
     ]
    ],
    "domain": "agent",
    "purposeTag": "apply",
    "level": 3,
    "layer": "三",
    "ord": 25,
    "alias": [],
    "purposeEn": "A cloud agent runs tasks on your machine, so closing the laptop does not stop it.",
    "defEn": [
     "Moving execution to a remote server, with the local machine acting only as a viewer."
    ],
    "whyEn": "It is the basis for long-running tasks and the core difference between hosted and self-hosted setups.",
    "slug": "远程执行"
   },
   {
    "zh": "技能 / Skills",
    "en": "Skills",
    "purpose": "把重复的工作流程打包成可复用的能力。",
    "def": [
     "把一套提示词、工具配置和执行步骤封装起来，供多次任务调用。"
    ],
    "why": "这是从「每次重新交代」到「一次配置反复用」的关键机制。",
    "refs": [
     [
      "Agent Skills 工程博客",
      "https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills",
      "Anthropic Agent Skills engineering blog"
     ],
     [
      "Agent Skills API 指南",
      "https://platform.claude.com/docs/en/build-with-claude/skills-guide",
      "Using Agent Skills with the API"
     ]
    ],
    "domain": "agent",
    "purposeTag": "apply",
    "level": 3,
    "layer": "三",
    "ord": 26,
    "alias": [],
    "purposeEn": "Package a repetitive workflow into a reusable capability.",
    "defEn": [
     "Wrapping a set of prompts, tool configuration and execution steps so they can be called across many tasks."
    ],
    "whyEn": "It is the mechanism that moves you from re-explaining every time to configuring once and reusing.",
    "slug": "技能 - Skills"
   },
   {
    "zh": "结构化输出",
    "en": "Structured Output",
    "purpose": "让模型的回答是严格的格式（JSON 等），而不是一段散文。",
    "def": [
     "约束模型输出为机器可解析的结构，供程序直接使用。"
    ],
    "why": "工具调用的前提。没有它，模型没法可靠地告诉程序「该调什么、传什么参数」。",
    "refs": [
     [
      "OpenAI 结构化输出指南",
      "https://platform.openai.com/docs/guides/structured-outputs",
      "OpenAI Structured Outputs Guide"
     ],
     [
      "Pydantic AI 结构化输出",
      "https://pydantic.dev/docs/ai/core-concepts/output",
      "Pydantic AI: Output"
     ]
    ],
    "domain": "agent",
    "purposeTag": "apply",
    "level": 3,
    "layer": "三",
    "ord": 27,
    "alias": [],
    "purposeEn": "Make the model's answer a strict format (JSON and the like) rather than a paragraph of prose.",
    "defEn": [
     "Constraining the model to output machine-parsable structure that a program can consume directly."
    ],
    "whyEn": "A precondition for tool calling. Without it a model cannot reliably tell a program what to call or which arguments to pass.",
    "slug": "结构化输出"
   }
  ]
 },
 {
  "num": "四",
  "name": "原理层",
  "desc": "理解为什么会有这些表现。看不懂这层，前面的词你都只能背。",
  "terms": [
   {
    "zh": "Transformer",
    "en": "Transformer",
    "purpose": "当前所有主流大模型共用的底层架构。",
    "def": [
     "一种神经网络结构，核心是「注意力机制」，用来处理一整段文本之间的关系。",
     "它能并行处理整句话，而不是一个词一个词往后读——这是它能训练出万亿参数规模的原因。"
    ],
    "why": "它是大模型的「根」。理解它，你才能理解上下文窗口、幻觉、KV 缓存这些概念从哪来。",
    "refs": [
     [
      "Attention Is All You Need（论文）",
      "https://arxiv.org/abs/1706.03762",
      "Attention Is All You Need (paper)"
     ],
     [
      "Hugging Face 课程（Transformer）",
      "https://huggingface.co/learn/nlp-course/chapter1/4",
      "How do Transformers work? (Hugging Face NLP course)"
     ]
    ],
    "domain": "concept",
    "purposeTag": "learn",
    "level": 4,
    "layer": "四",
    "ord": 1,
    "alias": [],
    "purposeEn": "The architecture underneath every mainstream large model today.",
    "defEn": [
     "A neural network structure built around the attention mechanism, handling the relationships across a whole passage of text.",
     "It processes a sentence in parallel rather than one word at a time — which is why it scales to trillions of parameters."
    ],
    "whyEn": "It is the root of large models. Understand it and the origin of context windows, hallucination and the KV cache becomes clear.",
    "slug": "Transformer"
   },
   {
    "zh": "注意力机制",
    "en": "Attention",
    "purpose": "让模型在处理一个词时，自动看向句子里最相关的其他词。",
    "def": [
     "计算每个词与句中所有其他词的关联程度，据此加权聚合信息。",
     "「Transformer 里的注意力」和「模型注意力不集中」的日常说法，是同一个词的不同含义。"
    ],
    "why": "它解释了为什么模型能理解长句里的指代关系——也是它上下文长度受限的技术根源之一。",
    "refs": [
     [
      "Attention Is All You Need（论文）",
      "https://arxiv.org/abs/1706.03762",
      "Attention Is All You Need (paper)"
     ],
     [
      "Bahdanau 注意力论文（ICLR 2015）",
      "https://arxiv.org/abs/1409.0473",
      "Bahdanau Attention (Neural Machine Translation)"
     ]
    ],
    "domain": "concept",
    "purposeTag": "learn",
    "level": 4,
    "layer": "四",
    "ord": 2,
    "alias": [],
    "purposeEn": "When processing one word, the model automatically looks at the most relevant other words in the sentence.",
    "defEn": [
     "Computing how related each word is to every other word, and aggregating information weighted by that.",
     "\"Attention\" inside a Transformer and \"the model isn't paying attention\" in everyday speech are the same word meaning different things."
    ],
    "whyEn": "It explains why models can resolve references across a long sentence — and is one technical root of the context length limit.",
    "slug": "注意力机制"
   },
   {
    "zh": "位置编码",
    "en": "Positional Encoding",
    "purpose": "让模型知道每个词在句子里的先后顺序。",
    "def": [
     "给每个位置附加一组数字，使模型能分辨「猫追狗」和「狗追猫」。"
    ],
    "why": "它解释了为什么上下文窗口超了之后，模型对长文的理解会明显退化。",
    "refs": [
     [
      "RoFormer / RoPE（论文）",
      "https://arxiv.org/abs/2104.09864",
      "RoFormer: Rotary Position Embedding (paper)"
     ],
     [
      "Attention Is All You Need（正余弦编码）",
      "https://arxiv.org/abs/1706.03762",
      "Attention Is All You Need (sinusoidal encoding, paper)"
     ]
    ],
    "domain": "concept",
    "purposeTag": "learn",
    "level": 4,
    "layer": "四",
    "ord": 3,
    "alias": [],
    "purposeEn": "Lets the model know the order of words in a sentence.",
    "defEn": [
     "Attaching a set of numbers to each position so the model can tell \"the cat chased the dog\" from \"the dog chased the cat\"."
    ],
    "whyEn": "It explains why comprehension of long passages degrades noticeably once you exceed the context window.",
    "slug": "位置编码"
   },
   {
    "zh": "嵌入层",
    "en": "Embedding Layer",
    "purpose": "把词变成数字向量的第一步，模型内部只认数字。",
    "def": [
     "模型内部把每个 token 映射成高维向量的那一层，是向量检索技术的源头。"
    ],
    "why": "它连接了「原理层」和「应用层」——你理解的 embedding 概念，和这里的实现是同一个东西。",
    "refs": [
     [
      "Word2Vec（论文）",
      "https://arxiv.org/abs/1301.3781",
      "Word2Vec: Efficient Estimation of Word Representations"
     ]
    ],
    "domain": "concept",
    "purposeTag": "learn",
    "level": 4,
    "layer": "四",
    "ord": 4,
    "alias": [],
    "purposeEn": "The first step of turning words into numeric vectors — models only work in numbers internally.",
    "defEn": [
     "The layer mapping each token to a high-dimensional vector inside the model — the origin of vector retrieval."
    ],
    "whyEn": "It connects the conceptual layer to the applied one: the embedding you use in practice is this.",
    "slug": "嵌入层"
   },
   {
    "zh": "KV 缓存",
    "en": "KV Cache",
    "purpose": "让模型逐字生成时不用每一步都重算整段话，生成速度才可用。",
    "def": [
     "把已经算过的注意力中间结果缓存起来，只为新 token 计算增量。",
     "代价是它**持续占用显存**——这直接决定了你的显存能撑多长的上下文。"
    ],
    "why": "这是本地部署时最常见的 OOM（显存不够）原因。上下文开大就先撞它。",
    "refs": [
     [
      "vLLM 前缀缓存设计",
      "https://docs.vllm.ai/en/stable/design/prefix_caching/",
      "Automatic Prefix Caching – vLLM design docs"
     ],
     [
      "vLLM KV 缓存管理",
      "https://docs.vllm.ai/en/latest/design/hybrid_kv_cache_manager/",
      "Hybrid KV Cache Manager – vLLM design docs"
     ]
    ],
    "domain": "infra",
    "purposeTag": "learn",
    "level": 4,
    "layer": "四",
    "ord": 5,
    "alias": [],
    "purposeEn": "Stops the model recomputing the whole passage on every token it generates — this is what makes generation speed usable.",
    "defEn": [
     "Caching the attention intermediates already computed, so only new tokens need incremental work.",
     "The cost is that it **occupies VRAM continuously** — which directly caps how long a context you can afford."
    ],
    "whyEn": "It is the most common cause of OOM when deploying locally. Raise the context size and you hit this first.",
    "slug": "KV 缓存"
   },
   {
    "zh": "上下文窗口的代价",
    "en": "Context Cost",
    "purpose": "上下文开得越大越慢越贵，不是免费扩容。",
    "def": [
     "窗口变大意味着注意力计算量和 KV 缓存占用同步上升。"
    ],
    "why": "解释了一个反直觉现象：把所有资料一次性塞进去，往往不如做 RAG 分批检索。",
    "refs": [
     [
      "RAG server 的做法",
      "https://agent.specul.com/tools/context7.html",
      "How a RAG server does it (context7)"
     ]
    ],
    "domain": "model",
    "purposeTag": "guard",
    "level": 4,
    "layer": "四",
    "ord": 6,
    "alias": [],
    "purposeEn": "A larger context window is slower and more expensive — it is not free capacity.",
    "defEn": [
     "A bigger window means attention computation and KV cache memory both grow."
    ],
    "whyEn": "It explains a counter-intuitive result: pasting in everything at once is often worse than retrieving in batches with RAG.",
    "slug": "上下文窗口的代价"
   },
   {
    "zh": "预训练",
    "en": "Pre-training",
    "purpose": "在海量文本上做「预测下一个词」，这是模型学到世界知识的阶段。",
    "def": [
     "第一批训练，目标单一：续写文本。成本以亿计。"
    ],
    "why": "它解释了为什么模型「什么都知道一点」——那是泛读的结果，不是为你的任务专门学的。",
    "refs": [
     [
      "BERT（论文）",
      "https://arxiv.org/abs/1810.04805",
      "BERT: Pre-training of Deep Bidirectional Transformers"
     ],
     [
      "Hugging Face 课程（Transformer）",
      "https://huggingface.co/learn/nlp-course/chapter1/4",
      "How do Transformers work? (Hugging Face NLP course)"
     ]
    ],
    "domain": "concept",
    "purposeTag": "learn",
    "level": 4,
    "layer": "四",
    "ord": 7,
    "alias": [],
    "purposeEn": "Predicting the next token over vast text — the stage where a model absorbs world knowledge.",
    "defEn": [
     "The first training run, with a single objective: continue the text. It costs hundreds of millions."
    ],
    "whyEn": "It explains why a model \"knows a bit about everything\": that is the result of reading widely, not learning for your task.",
    "slug": "预训练"
   },
   {
    "zh": "训练算力",
    "en": "Compute",
    "purpose": "训练和推理都要烧算力，这是 AI 最硬的资源门槛。",
    "def": [
     "训练需要大量 GPU 和时间；推理便宜得多但持续消耗。"
    ],
    "why": "它解释了为什么大模型公司烧钱、为什么本地跑大模型要先算显存账。",
    "refs": [
     [
      "算力与芯片相关站点",
      "https://nav.specul.com/",
      "Nav: compute & chips sites"
     ]
    ],
    "domain": "infra",
    "purposeTag": "learn",
    "level": 4,
    "layer": "四",
    "ord": 8,
    "alias": [],
    "purposeEn": "Both training and inference burn compute. This is AI's hardest resource threshold.",
    "defEn": [
     "Training needs many GPUs and a lot of time; inference is far cheaper but costs continuously."
    ],
    "whyEn": "It explains why large-model companies burn money, and why running one locally means doing the VRAM arithmetic first.",
    "slug": "训练算力"
   },
   {
    "zh": "推理成本",
    "en": "Inference Cost",
    "purpose": "模型每回答一次要花的钱，由输入和输出的 token 量决定。",
    "def": [
     "通常按输入 token 和输出 token 分别计价，输出更贵。",
     "同一个模型，问法不同，账单可以差一个量级。"
    ],
    "why": "这是把 AI 用在日常场景时最容易踩的坑，也是「选模型」必须考虑的成本项。",
    "refs": [
     [
      "OpenAI 官方 API 定价",
      "https://openai.com/api/pricing/",
      "OpenAI API Pricing"
     ],
     [
      "OpenAI 官方模型文档",
      "https://platform.openai.com/docs/models",
      "OpenAI Models Documentation"
     ]
    ],
    "domain": "choice",
    "purposeTag": "judge",
    "level": 4,
    "layer": "四",
    "ord": 9,
    "alias": [],
    "purposeEn": "What a model costs per answer, determined by how many tokens go in and come out.",
    "defEn": [
     "Usually priced separately for input and output tokens, with output more expensive.",
     "The same model can cost an order of magnitude more depending on how you phrase the question."
    ],
    "whyEn": "The easiest trap to fall into when using AI day to day, and a cost item any model choice has to account for.",
    "slug": "推理成本"
   }
  ]
 },
 {
  "num": "五",
  "name": "部署层",
  "desc": "让模型跑在自己机器上。你会关心显存够不够、跑得多快。",
  "terms": [
   {
    "zh": "GPU",
    "en": "Graphics Processing Unit",
    "alias": [
     "显卡",
     "图形处理器"
    ],
    "purpose": "真正做矩阵运算的芯片。跑大模型靠它，CPU 很慢。",
    "def": [
     "擅长大规模并行计算的处理器，最初为图形渲染设计，现在是大模型训练与推理的主力。"
    ],
    "why": "决定你「能不能跑、跑多快」。同一张卡，显存大小比算力型号更卡脖子。",
    "refs": [
     [
      "NVIDIA CUDA 工具包文档",
      "https://docs.nvidia.com/cuda/",
      "CUDA Toolkit documentation"
     ],
     [
      "CUDA C++ 编程指南",
      "https://docs.nvidia.com/cuda/cuda-programming-guide/index.html",
      "CUDA C++ Programming Guide"
     ]
    ],
    "domain": "infra",
    "purposeTag": "learn",
    "level": 5,
    "layer": "五",
    "ord": 1,
    "purposeEn": "The chip that actually does the matrix arithmetic. Large models run on it; a CPU is far too slow.",
    "defEn": [
     "A processor built for large-scale parallel computation, originally designed for graphics rendering and now the workhorse of model training and inference."
    ],
    "whyEn": "It decides whether a model runs and how fast. On the same card, VRAM capacity matters more than the compute tier.",
    "slug": "GPU"
   },
   {
    "zh": "显存",
    "en": "VRAM",
    "purpose": "显卡上的内存。装不下模型就是硬装不下，跟别的无关。",
    "def": [
     "GPU 上的高速内存。模型权重和 KV 缓存都要放进去，超了就无法运行。",
     "显存是本地部署的第一道硬门槛，不是性能问题而是「能不能跑」问题。"
    ],
    "why": "这是本地跑模型唯一需要先算清楚的账。选量化档位本质上就是为了塞进显存。",
    "refs": [
     [
      "按显存倒推选档位（千问 3.8）",
      "https://models.specul.com/series/qwen3-8/#b0",
      "Choosing by VRAM, backwards (Qwen3.8)"
     ]
    ],
    "domain": "infra",
    "purposeTag": "judge",
    "level": 5,
    "layer": "五",
    "ord": 2,
    "alias": [],
    "purposeEn": "Memory on the graphics card. If the model does not fit, it simply does not run — nothing else matters.",
    "defEn": [
     "High-speed memory on the GPU. Model weights and the KV cache both live there, and overflowing means it cannot run.",
     "VRAM is the first hard threshold for local deployment — not a performance question but a can-it-run-at-all question."
    ],
    "whyEn": "It is the only budget you must settle before running a model locally. Choosing a quantisation tier is essentially about fitting inside VRAM.",
    "slug": "显存"
   },
   {
    "zh": "量化",
    "en": "Quantization",
    "purpose": "把模型权重从高精度压成低精度，省显存、提速，代价是质量下降。",
    "def": [
     "用更少的位数表示每个权重数值。常见单位是 bpw（每个权重平均占多少比特）。",
     "位数越低越省，但质量损失越大。"
    ],
    "why": "这是本地部署最核心的技术手段。同样一个模型，选对量化档能决定能不能跑起来。",
    "refs": [
     [
      "五档量化规则的说明",
      "https://models.specul.com/",
      "The five quantisation tiers explained"
     ]
    ],
    "domain": "infra",
    "purposeTag": "apply",
    "level": 5,
    "layer": "五",
    "ord": 3,
    "alias": [],
    "purposeEn": "Compress model weights from high to low precision, saving VRAM and speeding things up at the cost of quality.",
    "defEn": [
     "Representing each weight value with fewer bits. The common unit is bpw — average bits per weight.",
     "Fewer bits saves more but loses more quality."
    ],
    "whyEn": "The core technique in local deployment. For the same model, choosing the right quantisation tier often decides whether it runs at all.",
    "slug": "量化"
   },
   {
    "zh": "bpw",
    "en": "Bits Per Weight",
    "purpose": "量化档位的数值表示：平均每个权重占几个比特。",
    "def": [
     "衡量量化程度的指标。本站按 bpw 分成五档：极限压缩 / 长上下文优先 / 平衡档 / 保守档 / 近似无损。",
     "数值越低，模型体积越小。"
    ],
    "why": "它把「Q4、Q8、Q3」这些各家不同的叫法统一成可比较的数字，是选型时最实用的标尺。",
    "refs": [
     [
      "量化档位横向对比（千问 3.8）",
      "https://models.specul.com/series/qwen3-8/#c0",
      "Quant tiers side by side (Qwen3.8)"
     ]
    ],
    "domain": "infra",
    "purposeTag": "judge",
    "level": 5,
    "layer": "五",
    "ord": 4,
    "alias": [],
    "purposeEn": "The numeric form of a quantisation level: how many bits each weight averages.",
    "defEn": [
     "A measure of how aggressively a model is quantised. This site groups them into five tiers: extreme compression, long context first, balanced, conservative and near-lossless.",
     "Lower numbers mean a smaller model."
    ],
    "whyEn": "It unifies vendor-specific names like Q4, Q8 and Q3 into one comparable number — the most practical yardstick when choosing.",
    "slug": "bpw"
   },
   {
    "zh": "GGUF",
    "en": "GGUF",
    "purpose": "本地跑模型的事实标准文件格式。llama.cpp 生态几乎只认它。",
    "def": [
     "llama.cpp 项目定义的模型文件格式，把模型结构与量化参数打包在一起。",
     "目前社区量化版本绝大多数产出这个格式。"
    ],
    "why": "如果你要本地跑模型，下载到的基本就是它。非 GGUF 格式往往需要额外转换步骤。",
    "refs": [
     [
      "GGUF 格式规范",
      "https://github.com/ggml-org/ggml/blob/master/docs/gguf.md",
      "GGUF format specification"
     ]
    ],
    "domain": "infra",
    "purposeTag": "apply",
    "level": 5,
    "layer": "五",
    "ord": 5,
    "alias": [],
    "purposeEn": "The de facto standard file format for running models locally. The llama.cpp ecosystem accepts little else.",
    "defEn": [
     "The model file format defined by the llama.cpp project, packaging the model structure together with its quantisation parameters.",
     "The vast majority of community quantisations ship in this format."
    ],
    "whyEn": "If you run models locally, this is what you download. Other formats usually need an extra conversion step.",
    "slug": "GGUF"
   },
   {
    "zh": "llama.cpp",
    "en": "llama.cpp",
    "purpose": "在普通电脑上跑大模型的主流开源引擎，CPU 也能跑。",
    "def": [
     "用 C/C++ 写的推理引擎，强调轻量与跨平台，支持 CPU + GPU 混合推理。",
     "它是本地部署生态的底座——大量量化版本是为它准备的。"
    ],
    "why": "本地部署的默认选项。选它意味着你能用上最多的量化版本和社区支持。",
    "refs": [
     [
      "llama.cpp 官方仓库",
      "https://github.com/ggml-org/llama.cpp",
      "llama.cpp GitHub repository"
     ]
    ],
    "domain": "infra",
    "purposeTag": "apply",
    "level": 5,
    "layer": "五",
    "ord": 6,
    "alias": [],
    "purposeEn": "The mainstream open-source engine for running large models on an ordinary computer, CPU included.",
    "defEn": [
     "An inference engine written in C/C++ that emphasises lightness and cross-platform support, with mixed CPU and GPU inference.",
     "It is the foundation of the local deployment ecosystem — many quantisations exist specifically for it."
    ],
    "whyEn": "The default choice for local deployment. Picking it means access to the largest set of quantisations and community support.",
    "slug": "llama.cpp"
   },
   {
    "zh": "vLLM",
    "en": "vLLM",
    "purpose": "在服务器上高并发跑模型的服务引擎。",
    "def": [
     "面向生产的高吞吐推理引擎，通过连续批处理等手段提升并发效率。"
    ],
    "why": "个人本地部署用不上它，但如果你要给别人提供 API，就需要这一类工具。",
    "refs": [
     [
      "vLLM 官方文档",
      "https://docs.vllm.ai/en/latest/",
      "vLLM documentation"
     ]
    ],
    "domain": "infra",
    "purposeTag": "learn",
    "level": 5,
    "layer": "五",
    "ord": 7,
    "alias": [],
    "purposeEn": "A serving engine for running models at high concurrency on a server.",
    "defEn": [
     "A production-oriented high-throughput inference engine that improves concurrency via techniques such as continuous batching."
    ],
    "whyEn": "You will not need it for a personal local setup, but you do need something like it to offer an API to others.",
    "slug": "vLLM"
   },
   {
    "zh": "GPU 层卸载",
    "en": "-ngl / Offload",
    "purpose": "把模型一部分交给 GPU、一部分留在 CPU，显存不够时的妥协手段。",
    "def": [
     "按层分配计算位置：显存够的部分放 GPU，剩下的放 CPU 由内存承担。",
     "llama.cpp 里通常用 `-ngl` 参数控制。"
    ],
    "why": "它让「显存差一点」的模型也能跑起来，代价是速度下降明显。这是权衡，不是免费午餐。",
    "refs": [
     [
      "按显存倒推选档位（千问 3.8）",
      "https://models.specul.com/series/qwen3-8/#b0",
      "Choosing by VRAM, backwards (Qwen3.8)"
     ]
    ],
    "domain": "infra",
    "purposeTag": "apply",
    "level": 5,
    "layer": "五",
    "ord": 8,
    "alias": [],
    "purposeEn": "Give part of the model to the GPU and keep the rest on the CPU — the compromise when VRAM falls short.",
    "defEn": [
     "Assigning layers across devices: whatever fits in VRAM goes to the GPU, the rest runs on the CPU backed by system memory.",
     "In llama.cpp this is usually controlled with the `-ngl` flag."
    ],
    "whyEn": "It lets models that \"almost\" fit run at all, at a clear cost in speed. A trade-off, not a free lunch.",
    "slug": "GPU 层卸载"
   },
   {
    "zh": "张量并行",
    "en": "Tensor Parallelism",
    "alias": [
     "TP"
    ],
    "purpose": "把一个模型拆到多张卡上一起算，单卡装不下时用。",
    "def": [
     "把模型权重按维度切分到多张 GPU，每张算一部分，需要卡间通信。"
    ],
    "why": "多卡部署的主要手段。显存够就优先单卡——通信开销会拖慢速度。",
    "refs": [
     [
      "PyTorch 张量并行文档",
      "https://docs.pytorch.org/docs/2.3/distributed.tensor.parallel.html",
      "PyTorch Tensor Parallelism docs"
     ],
     [
      "Megatron-LM 论文",
      "https://arxiv.org/abs/1909.08053",
      "Megatron-LM (arXiv paper)"
     ]
    ],
    "domain": "infra",
    "purposeTag": "learn",
    "level": 5,
    "layer": "五",
    "ord": 9,
    "purposeEn": "Split one model across several GPUs when it does not fit on a single card.",
    "defEn": [
     "Partitioning model weights across multiple GPUs by dimension, each computing part, with inter-card communication required."
    ],
    "whyEn": "The main technique for multi-GPU deployment. Prefer a single card when VRAM allows — communication overhead slows things down.",
    "slug": "张量并行"
   },
   {
    "zh": "专家卸载",
    "en": "MoE Offload / ncmoe",
    "purpose": "对「专家很多但每次只激活一部分」的稀疏模型，把不常用的专家放内存里。",
    "def": [
     "混合专家（MoE）模型每次推理只激活少数专家，其余权重可放在较慢的存储上按需调取。"
    ],
    "why": "它解释了为什么有些超大模型在单卡上也能跑——因为不是所有权重都同时参与计算。",
    "refs": [
     [
      "llama.cpp CLI 参数文档",
      "https://github.com/ggml-org/llama.cpp/blob/master/tools/cli/README.md",
      "llama.cpp CLI arguments"
     ]
    ],
    "domain": "infra",
    "purposeTag": "learn",
    "level": 5,
    "layer": "五",
    "ord": 10,
    "alias": [],
    "purposeEn": "For sparse models with many experts where only a few activate per token, keep the rarely-used experts in memory.",
    "defEn": [
     "A mixture-of-experts (MoE) model activates only a few experts per inference, so the remaining weights can sit on slower storage and be fetched as needed."
    ],
    "whyEn": "It explains why some very large models run on a single card: not all weights participate at once.",
    "slug": "专家卸载"
   },
   {
    "zh": "首字延迟",
    "en": "Time To First Token, TTFT",
    "purpose": "从发出提问到看到第一个字要多久。这个数字决定「感觉快不快」。",
    "def": [
     "生成第一个 token 所花的时间。它主要由提示词长度和是否需要预填充决定。"
    ],
    "why": "这是感知速度的关键指标。一个模型每字都很快但首字要等3 秒，用起来依然会觉得慢。",
    "refs": [
     [
      "vLLM 指标设计文档",
      "https://docs.vllm.ai/en/latest/design/metrics/",
      "vLLM metrics design"
     ],
     [
      "vLLM 性能基准套件",
      "https://docs.vllm.ai/en/stable/contributing/benchmarks.html",
      "vLLM benchmark suites"
     ]
    ],
    "domain": "infra",
    "purposeTag": "judge",
    "level": 5,
    "layer": "五",
    "ord": 11,
    "alias": [],
    "purposeEn": "How long from sending a question to seeing the first word. This number decides whether it feels fast.",
    "defEn": [
     "The time taken to produce the first token, driven mainly by prompt length and whether prefill is needed."
    ],
    "whyEn": "The key metric for perceived speed. A model that generates fast per token but waits three seconds for the first one still feels slow.",
    "slug": "首字延迟"
   },
   {
    "zh": "吞吐",
    "en": "Throughput, TPS",
    "alias": [
     "tokens per second",
     "tok/s"
    ],
    "purpose": "每秒能生成多少字。决定长文生成要等多久。",
    "def": [
     "每秒输出的 token 数量。吞吐高则长文本生成快。"
    ],
    "why": "它和首字延迟是两个独立指标，要一起看。只看其中一个容易误判实际体验。",
    "refs": [
     [
      "NVIDIA AIPerf 指标参考",
      "https://docs.nvidia.com/aiperf/server-metrics/ai-perf-server-metrics-reference",
      "NVIDIA AIPerf server metrics reference"
     ],
     [
      "vLLM 性能基准套件",
      "https://docs.vllm.ai/en/stable/contributing/benchmarks.html",
      "vLLM benchmark suites"
     ]
    ],
    "domain": "infra",
    "purposeTag": "judge",
    "level": 5,
    "layer": "五",
    "ord": 12,
    "purposeEn": "How many tokens per second come out. It determines how long you wait for a long generation.",
    "defEn": [
     "Tokens produced per second. Higher throughput means faster long-form generation."
    ],
    "whyEn": "It is a separate metric from time-to-first-token, and the two must be read together — looking at only one misleads the actual experience.",
    "slug": "吞吐"
   },
   {
    "zh": "预填充",
    "en": "Prefill",
    "purpose": "把你输入的那一整段先读完，再开始生成回答的那一步。",
    "def": [
     "模型处理输入部分的阶段。输入越长，预填充越慢，首字延迟越大。"
    ],
    "why": "解释了一个常见现象：塞了一大段资料后，模型「想」很久才开始回答——那是预填充在算。",
    "refs": [
     [
      "NVIDIA AIPerf 指标参考",
      "https://docs.nvidia.com/aiperf/server-metrics/ai-perf-server-metrics-reference",
      "NVIDIA AIPerf server metrics reference"
     ],
     [
      "vLLM 指标设计文档",
      "https://docs.vllm.ai/en/latest/design/metrics/",
      "vLLM metrics design"
     ]
    ],
    "domain": "infra",
    "purposeTag": "learn",
    "level": 5,
    "layer": "五",
    "ord": 13,
    "alias": [],
    "purposeEn": "The step where your whole input is read through before generation begins.",
    "defEn": [
     "The stage where the model processes the input portion. Longer input means slower prefill and higher time to first token."
    ],
    "whyEn": "It explains a common observation: after you paste a long document the model \"thinks\" for a long time before answering — that is prefill computing.",
    "slug": "预填充"
   },
   {
    "zh": "Prompt Cache",
    "en": "Prompt Cache",
    "alias": [
     "提示词缓存",
     "前缀缓存"
    ],
    "purpose": "把重复的系统提示和资料缓存起来，重复问同一份上下文时省时间和钱。",
    "def": [
     "复用已处理过的相同前缀，跳过重复计算。"
    ],
    "why": "做 Agent 时系统提示通常很长，缓存能显著降低成本。这也是本站不自己托管模型的一个原因。",
    "refs": [
     [
      "Claude 提示词缓存文档",
      "https://platform.claude.com/docs/en/build-with-claude/prompt-caching",
      "Anthropic prompt caching docs"
     ],
     [
      "OpenAI 提示词缓存指南",
      "https://developers.openai.com/api/docs/guides/prompt-caching",
      "OpenAI prompt caching guide"
     ]
    ],
    "domain": "infra",
    "purposeTag": "apply",
    "level": 5,
    "layer": "五",
    "ord": 14,
    "purposeEn": "Cache repeated system prompts and documents, saving time and money when asking about the same context again.",
    "defEn": [
     "Reusing processing already done for an identical prefix so it is not computed twice."
    ],
    "whyEn": "System prompts in agent work are usually long, so caching meaningfully lowers cost. It is also why this site does not host models itself.",
    "slug": "Prompt Cache"
   }
  ]
 },
 {
  "num": "六",
  "name": "选型层",
  "desc": "把前面学到的东西变成一个决定。这是这一页的终点。",
  "terms": [
   {
    "zh": "开源模型",
    "en": "Open-weight Model",
    "alias": [
     "开放权重"
    ],
    "purpose": "权重公开、你可以下载下来在自己机器上跑、不用给厂商交钱。",
    "def": [
     "参数权重对外公开的模型。注意：代码开源和权重开源是两回事，权重开源才意味着你能自部署。"
    ],
    "why": "它决定了「能不能离线」「能不能微调」「隐私数据要不要外发」。",
    "refs": [
     [
      "7 个可本地运行的开源系列",
      "https://models.specul.com/",
      "7 open series you can run locally"
     ]
    ],
    "domain": "choice",
    "purposeTag": "judge",
    "level": 6,
    "layer": "六",
    "ord": 1,
    "purposeEn": "The weights are public: you can download them, run them on your own machine, and pay nobody.",
    "defEn": [
     "Models whose parameter weights are published. Note that open code and open weights are different things — only open weights mean you can self-host."
    ],
    "whyEn": "It decides whether you can work offline, whether you can fine-tune, and whether private data has to leave.",
    "slug": "开源模型"
   },
   {
    "zh": "闭源模型",
    "en": "Closed / Proprietary Model",
    "purpose": "你不拿到权重，只能通过官方接口调用。",
    "def": [
     "模型不公开权重，只能走官方提供的 API 或产品使用。"
    ],
    "why": "通常更强、更新更快，但数据要外发、成本按量付费、有服务中断风险。",
    "refs": [
     [
      "FAccT 论文：开放权重 vs 闭源",
      "https://arxiv.org/abs/2405.16820",
      "Laboratory-Scale AI: Open-Weight vs Closed Models (FAccT)"
     ],
     [
      "OpenAI 官方模型文档",
      "https://platform.openai.com/docs/models",
      "OpenAI Models Documentation"
     ]
    ],
    "domain": "choice",
    "purposeTag": "judge",
    "level": 6,
    "layer": "六",
    "ord": 2,
    "alias": [],
    "purposeEn": "You do not get the weights; you can only call it through the official interface.",
    "defEn": [
     "Models whose weights are not published, usable only through the provider's API or product."
    ],
    "whyEn": "Usually stronger and updated faster, but data leaves your machine, you pay per use, and you carry outage risk.",
    "slug": "闭源模型"
   },
   {
    "zh": "许可证",
    "en": "License",
    "purpose": "规定你能不能用、能不能改、能不能商用。选型时最容易忽略的约束。",
    "def": [
     "模型的使用许可条款，各家宽严不一。",
     "要注意的点：能否商用、能否二次分发、衍生模型能否继承原许可。"
    ],
    "why": "这是法务层面的硬约束。技术再好，许可不允许就不能用。",
    "refs": [
     [
      "本站如何处理许可继承",
      "https://models.specul.com/",
      "How this site handles licence inheritance"
     ]
    ],
    "domain": "choice",
    "purposeTag": "guard",
    "level": 6,
    "layer": "六",
    "ord": 3,
    "alias": [],
    "purposeEn": "What you may do with it: use, modify, or commercialise. The constraint most often overlooked during selection.",
    "defEn": [
     "The licence terms attached to a model; providers vary widely in strictness.",
     "The points to check: commercial use allowed? Redistribution allowed? Do derivatives inherit the original licence?"
    ],
    "whyEn": "A hard legal constraint. However good the technology is, if the licence forbids it, you cannot use it.",
    "slug": "许可证"
   },
   {
    "zh": "API / 接口调用",
    "en": "API",
    "purpose": "不自己搞模型，按用量付钱调用别人的。",
    "def": [
     "通过网络接口把提示词发给模型服务方，返回结果。"
    ],
    "why": "这是绝大多数人用 AI 的实际方式。不需要显卡，按量付费，代价是数据外发和长期成本。",
    "refs": [
     [
      "OpenAI API 快速开始",
      "https://platform.openai.com/docs/quickstart",
      "OpenAI API Quickstart"
     ]
    ],
    "domain": "choice",
    "purposeTag": "judge",
    "level": 6,
    "layer": "六",
    "ord": 4,
    "alias": [],
    "purposeEn": "Do not run a model yourself — pay per use for someone else's.",
    "defEn": [
     "Send the prompt to a model provider over a network interface and get the result back."
    ],
    "whyEn": "This is how most people actually use AI. No graphics card needed and you pay as you go; the cost is that data leaves your machine and the bill keeps going.",
    "slug": "API - 接口调用"
   },
   {
    "zh": "本地部署",
    "en": "Local Deployment",
    "purpose": "模型下载到自己机器上跑，数据不外发。",
    "def": [
     "在本机或自有服务器上运行模型推理，不经过第三方接口。"
    ],
    "why": "隐私敏感、要用专门的量化版本、或者长期高频调用时，这通常是更划算的选择。",
    "refs": [
     [
      "按设备选量化档位（千问 3.8）",
      "https://models.specul.com/series/qwen3-8/#b0",
      "Pick tiers by device (Qwen3.8)"
     ],
     [
      "本地引擎怎么选",
      "https://nav.specul.com/",
      "Nav: how to pick a local engine"
     ]
    ],
    "domain": "infra",
    "purposeTag": "judge",
    "level": 6,
    "layer": "六",
    "ord": 5,
    "alias": [],
    "purposeEn": "Download the model and run it on your own machine, so data never leaves.",
    "defEn": [
     "Running model inference on your own hardware or server, without going through a third-party API."
    ],
    "whyEn": "Usually the better choice when data is sensitive, when you need a specific quantisation, or when calling at high volume long-term.",
    "slug": "本地部署"
   },
   {
    "zh": "数据不出网",
    "en": "Data Sovereignty",
    "purpose": "你的资料完全不经过第三方。这是很多场景的硬性要求。",
    "def": [
     "所有数据都在自己控制的机器上处理，不上传到外部服务。"
    ],
    "why": "涉及合同、个人隐私、源代码的场景，这是能不能用的分界线，不是加分项。",
    "refs": [
     [
      "自托管方案对照",
      "https://agent.specul.com/",
      "Self-hosted options compared"
     ],
     [
      "Cursor 的自托管支持",
      "https://agent.specul.com/cursor.html",
      "Cursor's self-hosted support"
     ]
    ],
    "domain": "choice",
    "purposeTag": "guard",
    "level": 6,
    "layer": "六",
    "ord": 6,
    "alias": [],
    "purposeEn": "Your material never passes through a third party. This is a hard requirement in many situations.",
    "defEn": [
     "All data processed on machines you control, never uploaded to an external service."
    ],
    "whyEn": "Where contracts, personal data or source code are involved, this is the line between usable and not — not a nice-to-have.",
    "slug": "数据不出网"
   },
   {
    "zh": "基准测试",
    "en": "Benchmark",
    "purpose": "用统一的题库横向比较模型强弱。",
    "def": [
     "标准化评测集（如 MMLU、HumanEval 等）给出的分数。"
    ],
    "why": "重要但不可尽信——公开榜单容易过时，也可能与你的实际任务无关。",
    "refs": [
     [
      "MMLU 论文",
      "https://arxiv.org/abs/2009.03300",
      "Measuring Massive Multitask Language Understanding (MMLU)"
     ],
     [
      "HELM 评测榜",
      "https://crfm.stanford.edu/helm/",
      "Holistic Evaluation of Language Models (HELM)"
     ]
    ],
    "domain": "choice",
    "purposeTag": "judge",
    "level": 6,
    "layer": "六",
    "ord": 7,
    "alias": [],
    "purposeEn": "Compare models head to head using a shared question set.",
    "defEn": [
     "Scores from standardised evaluation suites such as MMLU or HumanEval."
    ],
    "whyEn": "Important but not to be trusted blindly — public leaderboards go stale and may have little relation to your actual task.",
    "slug": "基准测试"
   },
   {
    "zh": "总分 / 综合评测",
    "en": "Aggregate Score",
    "purpose": "把多个基准的分数加权成一个总分，方便快速比较。",
    "def": [
     "多个评测维度的加权汇总。不同机构的加权方式差别很大。"
    ],
    "why": "看到「综合分 XX」要先问：怎么加权的、用的哪套题、什么时候的数据。",
    "refs": [
     [
      "HELM 论文",
      "https://arxiv.org/abs/2211.09110",
      "Holistic Evaluation of Language Models (HELM)"
     ],
     [
      "Project MPG：多基准聚合",
      "https://arxiv.org/abs/2410.22368",
      "Project MPG: generalized LLM benchmark"
     ]
    ],
    "domain": "choice",
    "purposeTag": "judge",
    "level": 6,
    "layer": "六",
    "ord": 8,
    "alias": [],
    "purposeEn": "Collapse several benchmark scores into one number for quick comparison.",
    "defEn": [
     "A weighted aggregate across several evaluation dimensions. Weighting differs substantially between providers."
    ],
    "whyEn": "When you see \"an overall score of X\", ask first: how was it weighted, which question set, and when was the data collected.",
    "slug": "总分 - 综合评测"
   },
   {
    "zh": "供应商锁定",
    "en": "Vendor Lock-in",
    "purpose": "用得越深，换模型或换服务商越难。",
    "def": [
     "依赖某个模型专有的提示格式、工具调用约定或微调方式，导致迁移成本高。"
    ],
    "why": "这是选型时最容易被忽略的长期成本。判断方法：你换模型要改多少代码？",
    "refs": [
     [
      "OpenTelemetry 官方文档",
      "https://opentelemetry.io/docs/what-is-opentelemetry/",
      "What is OpenTelemetry?"
     ],
     [
      "Anthropic 模型弃用政策",
      "https://console.anthropic.com/docs/en/about-claude/model-deprecations",
      "Anthropic Model Deprecations"
     ]
    ],
    "domain": "choice",
    "purposeTag": "guard",
    "level": 6,
    "layer": "六",
    "ord": 9,
    "alias": [],
    "purposeEn": "The deeper you go, the harder it is to switch models or providers.",
    "defEn": [
     "Depending on a vendor's proprietary prompt formats, tool-calling conventions or fine-tuning formats, so migrating costs a lot."
    ],
    "whyEn": "The long-term cost most easily missed during selection. The test: how much code changes if you swap models?",
    "slug": "供应商锁定"
   },
   {
    "zh": "模型评测的局限",
    "en": "Evaluation Limits",
    "purpose": "知道榜单分数不等于你的实际效果，这点很重要。",
    "def": [
     "公开评测难以覆盖你的具体任务，且存在数据污染、过时等问题。"
    ],
    "why": "正确的做法是拿自己的真实任务去小样本实测，而不是只看榜单。",
    "refs": [
     [
      "涌现能力是幻象？论文",
      "https://arxiv.org/abs/2304.15004",
      "Are Emergent Abilities a Mirage?"
     ],
     [
      "HELM 论文（不完备性）",
      "https://arxiv.org/abs/2211.09110",
      "Holistic Evaluation of Language Models (HELM)"
     ]
    ],
    "domain": "choice",
    "purposeTag": "judge",
    "level": 6,
    "layer": "六",
    "ord": 10,
    "alias": [],
    "purposeEn": "A leaderboard score is not the same as your actual result — this matters.",
    "defEn": [
     "Public evaluations struggle to cover your specific task, and suffer from data contamination and staleness."
    ],
    "whyEn": "The right approach is a small-scale test with your own real tasks rather than reading leaderboards alone.",
    "slug": "模型评测的局限"
   },
   {
    "zh": "隐私与合规",
    "en": "Privacy & Compliance",
    "purpose": "数据经过哪些机器、留存多久、有没有审计。",
    "def": [
     "涉及个人信息、商业机密、行业监管要求的约束条件。"
    ],
    "why": "这是选型的**否决项**而非加分项——不合规的方案再好也不能用。",
    "refs": [
     [
      "MCP server 的权限边界",
      "https://agent.specul.com/tools/filesystem.html",
      "MCP server permission boundary"
     ]
    ],
    "domain": "choice",
    "purposeTag": "guard",
    "level": 6,
    "layer": "六",
    "ord": 11,
    "alias": [],
    "purposeEn": "Which machines data passes through, how long it is retained, and whether it is audited.",
    "defEn": [
     "Constraints around personal information, commercial secrets and industry regulation."
    ],
    "whyEn": "This is a **veto item** in selection rather than a bonus — a non-compliant option cannot be used however good it is.",
    "slug": "隐私与合规"
   },
   {
    "zh": "单次调用成本",
    "en": "Cost per Call",
    "purpose": "完成一次任务的实际花销，而不只是单价。",
    "def": [
     "单价 × 实际消耗的 token 数。不同任务的消耗量可以差几个量级。"
    ],
    "why": "按单价选模型容易出错。同样便宜，消耗量不同的模型总成本可能相反。",
    "refs": [
     [
      "OpenAI 官方 API 定价",
      "https://openai.com/api/pricing/",
      "OpenAI API Pricing"
     ],
     [
      "Anthropic Claude 定价",
      "https://platform.claude.com/docs/en/about-claude/pricing",
      "Anthropic Claude Pricing"
     ]
    ],
    "domain": "choice",
    "purposeTag": "judge",
    "level": 6,
    "layer": "六",
    "ord": 12,
    "alias": [],
    "purposeEn": "What a task actually costs to run, not just the unit price.",
    "defEn": [
     "Unit price times the tokens actually consumed. Consumption can differ by orders of magnitude between tasks."
    ],
    "whyEn": "Choosing a model on unit price alone is easy to get wrong. Two models can cost the same per token and end up in the opposite order overall.",
    "slug": "单次调用成本"
   },
   {
    "zh": "缓存策略",
    "en": "Caching Strategy",
    "purpose": "重复的内容不重复计算，直接复用。这是降本的第一手段。",
    "def": [
     "缓存重复的输入与结果，减少重复调用与计算。"
    ],
    "why": "它对成本的影响往往大于选一个更便宜的模型。",
    "refs": [
     [
      "Claude 提示词缓存",
      "https://platform.claude.com/docs/en/build-with-claude/prompt-caching",
      "Anthropic prompt caching docs"
     ]
    ],
    "domain": "choice",
    "purposeTag": "apply",
    "level": 6,
    "layer": "六",
    "ord": 13,
    "alias": [],
    "purposeEn": "Do not recompute repeated content; reuse it directly. The first lever for cutting cost.",
    "defEn": [
     "Caching repeated inputs and results to avoid duplicate calls and computation."
    ],
    "whyEn": "Its effect on cost is often larger than choosing a cheaper model.",
    "slug": "缓存策略"
   },
   {
    "zh": "路由",
    "en": "Routing",
    "purpose": "简单问题派给便宜快的模型，难问题派给强模型。",
    "def": [
     "按任务复杂度自动选择模型的机制。"
    ],
    "why": "这是同时控制成本与质量最有效的手段，也是当前产品设计的主流做法。",
    "refs": [
     [
      "OpenRouter 提供方路由文档",
      "https://openrouter.ai/docs/guides/routing/provider-selection",
      "OpenRouter Provider Routing"
     ],
     [
      "LangChain 模型文档（动态选型）",
      "https://docs.langchain.com/oss/javascript/langchain/models",
      "LangChain Models: dynamic model selection"
     ]
    ],
    "domain": "choice",
    "purposeTag": "apply",
    "level": 6,
    "layer": "六",
    "ord": 14,
    "alias": [],
    "purposeEn": "Send easy questions to a cheap fast model and hard ones to a strong model.",
    "defEn": [
     "Mechanism that picks a model automatically based on task complexity."
    ],
    "whyEn": "The most effective way to control cost and quality together, and standard practice in current product design.",
    "slug": "路由"
   },
   {
    "zh": "自托管成本",
    "en": "Self-hosting Cost",
    "purpose": "本地跑不花钱，但硬件、电费、运维都是真实成本。",
    "def": [
     "设备购置、电力、显存扩容与维护工作构成的总成本。"
    ],
    "why": "它让「本地一定比 API 便宜」这个常见假设变得可验证——要按你的实际使用量算。",
    "refs": [
     [
      "按设备选量化档位（千问 3.8）",
      "https://models.specul.com/series/qwen3-8/#b0",
      "Pick tiers by device (Qwen3.8)"
     ]
    ],
    "domain": "choice",
    "purposeTag": "judge",
    "level": 6,
    "layer": "六",
    "ord": 15,
    "alias": [],
    "purposeEn": "Running locally costs no per-token fee, but hardware, electricity and operations are real costs.",
    "defEn": [
     "The total of hardware purchase, power, VRAM expansion and the ongoing maintenance work."
    ],
    "whyEn": "It makes the common assumption \"local is always cheaper than an API\" testable — compute it against your actual usage.",
    "slug": "自托管成本"
   },
   {
    "zh": "服务中断风险",
    "en": "Vendor Dependency",
    "purpose": "依赖别人的服务意味着它可能涨价、下线或限流。",
    "def": [
     "第三方服务不可用导致工作受阻的风险。"
    ],
    "why": "关键流程如果完全依赖单一供应商，这是很实际的运营风险。",
    "refs": [
     [
      "OpenAI 官方状态页",
      "https://status.openai.com/",
      "OpenAI Status"
     ],
     [
      "Anthropic 模型弃用政策",
      "https://console.anthropic.com/docs/en/about-claude/model-deprecations",
      "Anthropic Model Deprecations"
     ]
    ],
    "domain": "choice",
    "purposeTag": "guard",
    "level": 6,
    "layer": "六",
    "ord": 16,
    "alias": [],
    "purposeEn": "Depending on someone else's service means it may raise prices, shut down, or rate-limit you.",
    "defEn": [
     "The risk that an unavailable third-party service blocks your work."
    ],
    "whyEn": "If a critical process depends entirely on one provider, this is a very real operational risk.",
    "slug": "服务中断风险"
   },
   {
    "zh": "可替换性",
    "en": "Portability",
    "purpose": "换个模型或服务商，需要改多少东西。",
    "def": [
     "方案对特定供应商的依赖程度，通用协议与开放格式能显著提高可替换性。"
    ],
    "why": "这是长期成本里最容易被忽略的一项，也是抗中断能力的基础。",
    "refs": [
     [
      "MCP 作为标准接口的价值",
      "https://agent.specul.com/tools/index.html",
      "MCP as a standard interface"
     ],
     [
      "ACP 协议",
      "https://agent.specul.com/zed.html",
      "The ACP protocol (Zed)"
     ]
    ],
    "domain": "choice",
    "purposeTag": "guard",
    "level": 6,
    "layer": "六",
    "ord": 17,
    "alias": [],
    "purposeEn": "How much has to change if you swap models or providers.",
    "defEn": [
     "How dependent a design is on a particular provider. Open protocols and formats raise substitutability substantially."
    ],
    "whyEn": "The most easily overlooked item in long-term cost, and the basis of resilience when something breaks.",
    "slug": "可替换性"
   },
   {
    "zh": "社区与文档",
    "en": "Community & Docs",
    "purpose": "出问题能不能找到人问，接口有没有写清楚的文档。",
    "def": [
     "项目活跃度、文档质量、问题响应速度等非技术因素。"
    ],
    "why": "它是选型里权重很高但最容易被忽略的一项——文档差会长期消耗你的时间。",
    "refs": [
     [
      "站点如何逐条核实并写来源",
      "https://agent.specul.com/harness/claude-agent-sdk.html",
      "How sources are verified item by item"
     ]
    ],
    "domain": "choice",
    "purposeTag": "judge",
    "level": 6,
    "layer": "六",
    "ord": 18,
    "alias": [],
    "purposeEn": "When something breaks, can you find someone to ask, and is the API properly documented.",
    "defEn": [
     "Non-technical factors: project activity, documentation quality, responsiveness to issues."
    ],
    "whyEn": "It carries heavy weight in selection while being the easiest to overlook — poor documentation consumes your time for a long time.",
    "slug": "社区与文档"
   },
   {
    "zh": "迭代速度",
    "en": "Release Cadence",
    "purpose": "项目更新有多快，版本是否稳定。",
    "def": [
     "发布频率与稳定性。频繁更新意味着改进快但也可能引入 breaking change。"
    ],
    "why": "它决定你是在追一个快速发展的东西，还是一个趋于稳定的工具。",
    "refs": [
     [
      "OpenAI 模型发布说明",
      "https://help.openai.com/en/articles/9624314-model-release-notes",
      "OpenAI Model Release Notes"
     ],
     [
      "OpenTelemetry 版本与稳定性",
      "https://opentelemetry.io/docs/specs/otel/versioning-and-stability/",
      "OpenTelemetry Versioning and Stability"
     ]
    ],
    "domain": "choice",
    "purposeTag": "judge",
    "level": 6,
    "layer": "六",
    "ord": 19,
    "alias": [],
    "purposeEn": "How fast the project moves and how stable its versions are.",
    "defEn": [
     "Release frequency and stability. Frequent updates mean faster improvement but also possible breaking changes."
    ],
    "whyEn": "It decides whether you are chasing something moving quickly or using a tool that is settling down.",
    "slug": "迭代速度"
   },
   {
    "zh": "退出成本",
    "en": "Exit Cost",
    "purpose": "不用了，迁移走要付出多少。",
    "def": [
     "停止使用某方案时，把数据与流程迁走的代价。"
    ],
    "why": "和可替换性是同一件事的两面。它在选型当下看不见，出问题时最痛。",
    "refs": [
     [
      "Anthropic 迁移指南",
      "https://console.anthropic.com/docs/en/about-claude/models/migration-guide",
      "Anthropic Claude Migration Guide"
     ],
     [
      "OpenAI 导出数据帮助页",
      "https://help.openai.com/zh-hans-cn/articles/7260999",
      "OpenAI – Export Your Data"
     ]
    ],
    "domain": "choice",
    "purposeTag": "guard",
    "level": 6,
    "layer": "六",
    "ord": 20,
    "alias": [],
    "purposeEn": "What it costs to migrate away when you stop using it.",
    "defEn": [
     "The cost of moving your data and workflow elsewhere when you abandon a given approach."
    ],
    "whyEn": "Two sides of the same coin as substitutability. Invisible at selection time, most painful when something breaks.",
    "slug": "退出成本"
   },
   {
    "zh": "成本",
    "en": "Cost",
    "purpose": "为一个AI 方案实际要花多少钱。除了单价，还有你消耗掉的数量。",
    "def": [
     "把费用摊到一次任务上得到的真实开销。",
     "构成：调用单价 × 实际消耗量（token 次数、时长、并发数）。"
    ],
    "why": "**按单价选模型容易出错**——同样便宜，消耗量不同的模型总成本可能相反。",
    "refs": [
     [
      "官方定价逐条核实",
      "https://agent.specul.com/harness/crewai.html",
      "Pricing verified item by item"
     ],
     [
      "提示词缓存如何降本",
      "https://platform.claude.com/docs/en/build-with-claude/prompt-caching",
      "How prompt caching cuts cost"
     ]
    ],
    "domain": "choice",
    "purposeTag": "judge",
    "level": 6,
    "layer": "六",
    "ord": 21,
    "alias": [],
    "purposeEn": "What an AI approach actually costs. Beyond unit price there is also how much you consume.",
    "defEn": [
     "The real expense once costs are amortised across a task.",
     "It comprises unit price times actual consumption (token count, duration, concurrency)."
    ],
    "whyEn": "**Choosing a model on unit price alone is easy to get wrong** — two models with identical prices can invert once real consumption differs.",
    "slug": "成本"
   },
   {
    "zh": "传输方式",
    "en": "Transport",
    "purpose": "你的数据用什么方式送到模型或工具那里：留在本机还是发到第三方。",
    "def": [
     "数据在组件之间移动的通道。本地进程内传输与跨网络传输安全性完全不同。",
     "常见的两种：本地进程间通信，以及远程 HTTP 请求。"
    ],
    "why": "这是判断「我的数据会不会外流」的第一道判断。**发到远程的方案，天然不适合敏感资料**。",
    "refs": [
     [
      "MCP 三维里的传输方式",
      "https://agent.specul.com/tools/index.html",
      "Transport in MCP's three axes"
     ],
     [
      "远程托管 vs 本地 server",
      "https://agent.specul.com/tools/context7.html",
      "Remote vs local servers (context7)"
     ]
    ],
    "domain": "data",
    "purposeTag": "learn",
    "level": 6,
    "layer": "六",
    "ord": 22,
    "alias": [],
    "purposeEn": "How your data actually reaches the model or tool: staying on your machine, or going to a third party.",
    "defEn": [
     "The channel data moves through between components. In-process local transfer and cross-network transfer have very different safety properties.",
     "The two common forms: local inter-process communication, and remote HTTP requests."
    ],
    "whyEn": "It is the first question to ask when deciding whether your data can leak. **Anything sent to a remote service is inherently unsuitable for sensitive material.**",
    "slug": "传输方式"
   }
  ]
 }
];
