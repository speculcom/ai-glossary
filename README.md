# 学 AI · 术语图谱

> English version: [README.en.md](./README.en.md)

AI 圈的黑话，一天不听十遍，听一百遍还是不知道人家在讲什么。
这个仓把 116 个高频词拆开来讲：**它是什么、为什么需要知道、这话从哪来的**。

**适合谁**：刚接触 AI、不想先啃论文的人。
**不适合谁**：想找「哪个模型最强」的人 —— 这里没有排名，也不打算有。

站上的版本：<https://learn.specul.com/>

---

## 我该怎么读

三选一，看你现在的处境：

| 你现在的处境 | 走哪条路 |
|---|---|
| 完全不懂，想从头开始 | 顺着**六层**一层层读。别跳 —— 第四层的词看不懂，多半是因为第三层没读 |
| 只关心某一类东西 | 按 **8 个领域**查（概念 / 模型 / 开发 / 智能体 / 数据 / 多媒体 / 基建 / 选型） |
| 带着具体问题来的 | 按 **4 种用途**查：学（搞懂）· 动手（要做）· 避坑（别踩）· 选型（挑） |

三种走法通向同一批词条，只是入口不同。

---

## 六层是怎么排的

排的依据只有一条：**后面的词，需要前面的词做铺垫**。

| 层 | 这层在解决什么 | 词数 |
|---|---|---|
| 一 | 能跟人聊明白 AI 到底在干嘛 | 18 |
| 二 | 知道它凭什么能做到 | 26 |
| 三 | 看懂模型输出的好坏 | 27 |
| 四 | 动手把它跑起来 | 9 |
| 五 | 知道它哪儿不行 | 14 |
| 六 | 拿它做决策 | 22 |

有个真实的例子：第一层有「上下文窗口」，第二层才有「Transformer」。
直接跳到第二层去读 Transformers 那篇，卡住不是你的问题，是铺垫没到位。

---

## 这个仓不做的事

先说清楚免得你找错地方：

- **不给排名。** 一个总分把取舍全抹平了 —— 便宜的和强的不能加成一个数。取舍才是你做决定的依据。
- **不编数字。** 查不到就写「未知」，并说明为什么查不到。
- **不收没出处的词条。** 每个词至少挂一条出处（refs），所以每条结论你都能自己回去核。

---

## 这些文件是什么

```
ai-glossary/
├── terms/              116 个词条，一词一文件（frontmatter + 固定骨架正文）
│   └── INDEX.md        构建产物 · 分层索引，不要手改
├── terms.en.json       英文正文（键 = 词条名）
├── meta.js             层级 / 领域 / 用途 三套分类的定义
├── dims.js             三个观察维度（模型接入 / 运行位置 / 传输方式）
├── SCHEMA.md           词条格式规范
└── scripts/build.mjs   构建脚本（含逐字段等价门禁）
```

改内容：编辑 `terms/*.md`，跑 `node scripts/build.mjs`。
加词条：照着 `SCHEMA.md` 写，别抄一个改一改 —— 骨架不一致的话校验会拦。

---

## 内容索引

<!-- INDEX:BEGIN generated, do not edit -->

## 内容索引

### 按顺序读 —— 六层学习路径

| 层 | 这层在解决什么 | 词数 |
|---|---|---|
| **一** | 能跟人聊明白 AI 在干嘛 | 18 |
| **二** | 知道它凭什么能做到 | 26 |
| **三** | 看懂模型输出的好坏 | 27 |
| **四** | 动手把它跑起来 | 9 |
| **五** | 知道它哪儿不行 | 14 |
| **六** | 拿它做决策 | 22 |

<details><summary><b>一层 · 18 词</b> —— 能跟人聊明白 AI 在干嘛（点击展开）</summary>

| 词条 | 一句话说清 | 领域 | 用途 |
|---|---|---|---|
| [人工智能](terms/%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD.md) | 让机器做原本需要人类智能才能做的事——看图、听话、写字、决策。 | 概念 | 学 |
| [机器学习](terms/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0.md) | 不手写规则，直接给机器大量例子，让它自己总结规律。 | 概念 | 学 |
| [深度学习](terms/%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0.md) | 用很多层「神经元」叠起来的网络，从数据里学出复杂特征。 | 概念 | 学 |
| [神经网络](terms/%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C.md) | 模仿大脑神经元连接方式的一类数学结构，是现代 AI 的通用积木。 | 概念 | 学 |
| [大模型 / 大语言模型](terms/%E5%A4%A7%E6%A8%A1%E5%9E%8B%20-%20%E5%A4%A7%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B.md) | 读过海量文本、学会「接着往下写」的模型，能对话、能写作、能写代码。 | 概念 | 学 |
| [参数](terms/%E5%8F%82%E6%95%B0.md) | 模型里可调的数字，训练就是不断调整它们。参数越多，一般越「博学」。 | 概念 | 学 |
| [训练](terms/%E8%AE%AD%E7%BB%83.md) | 让模型从数据里学会规律，产出这个模型。 | 概念 | 学 |
| [推理](terms/%E6%8E%A8%E7%90%86.md) | 训练完之后，真正拿来回答你问题的过程。 | 概念 | 学 |
| [提示词](terms/%E6%8F%90%E7%A4%BA%E8%AF%8D.md) | 你给模型的指令。说得越具体，模型的输出越准。 | 模型 | 动手 |
| [Token](terms/Token.md) | 模型处理文本的最小单位。计费和长度限制都按它算。 | 概念 | 动手 |
| [上下文窗口](terms/%E4%B8%8A%E4%B8%8B%E6%96%87%E7%AA%97%E5%8F%A3.md) | 模型一次能「看见」多少内容。超出部分它就完全不知道。 | 模型 | 动手 |
| [词表](terms/%E8%AF%8D%E8%A1%A8.md) | 模型认识的全部字符集合。大小决定了它懂不懂中文、懂不懂代码。 | 概念 | 学 |
| [AI 产品 vs AI 模型](terms/AI%20%E4%BA%A7%E5%93%81%20vs%20AI%20%E6%A8%A1%E5%9E%8B.md) | 区分「模型本身」和「你实际用的那个软件」。 | 概念 | 学 |
| [生成式 AI](terms/%E7%94%9F%E6%88%90%E5%BC%8F%20AI.md) | 能凭空产出新内容的 AI——文字、图片、音频、视频都算。 | 概念 | 学 |
| [AI Agent 与聊天机器人的区别](terms/AI%20Agent%20%E4%B8%8E%E8%81%8A%E5%A4%A9%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%9A%84%E5%8C%BA%E5%88%AB.md) | 聊天的终点是回答，Agent 的终点是做完。 | 概念 | 选型 |
| [开源生态](terms/%E5%BC%80%E6%BA%90%E7%94%9F%E6%80%81.md) | 模型、工具、数据、文档都由社区维护，可自由组合。 | 概念 | 学 |
| [能力边界](terms/%E8%83%BD%E5%8A%9B%E8%BE%B9%E7%95%8C.md) | 知道模型明确做不到什么，比知道它能做什么更能避免踩坑。 | 概念 | 避坑 |
| [权限](terms/%E6%9D%83%E9%99%90.md) | 决定这个工具能碰你的哪些东西：读文件、改代码、发请求、花钱。 | 智能体 | 避坑 |

</details>

<details><summary><b>二层 · 26 词</b> —— 知道它凭什么能做到（点击展开）</summary>

| 词条 | 一句话说清 | 领域 | 用途 |
|---|---|---|---|
| [幻觉](terms/%E5%B9%BB%E8%A7%89.md) | 模型用非常自信的语气说出看起来合理、但事实错误的内容。 | 模型 | 避坑 |
| [多模态](terms/%E5%A4%9A%E6%A8%A1%E6%80%81.md) | 能同时看图、读文档、听声音、生成图像，不只是处理文字。 | 模型 | 学 |
| [推理模型](terms/%E6%8E%A8%E7%90%86%E6%A8%A1%E5%9E%8B.md) | 回答前先在内部「想」一串步骤，复杂问题的正确率明显更高。 | 模型 | 选型 |
| [温度](terms/%E6%B8%A9%E5%BA%A6.md) | 控制模型输出的随机性。调低更稳，调高更有创意。 | 模型 | 动手 |
| [采样 / 采样参数](terms/%E9%87%87%E6%A0%B7%20-%20%E9%87%87%E6%A0%B7%E5%8F%82%E6%95%B0.md) | 模型在多个候选词里怎么挑，决定输出的发散程度。 | 模型 | 动手 |
| [系统提示](terms/%E7%B3%BB%E7%BB%9F%E6%8F%90%E7%A4%BA.md) | 给模型设定的角色和规则，决定它整个对话的基调。 | 模型 | 动手 |
| [微调](terms/%E5%BE%AE%E8%B0%83.md) | 拿一个已有的模型，用你自己的数据继续训练，让它更懂你的领域。 | 模型 | 动手 |
| [偏好对齐](terms/%E5%81%8F%E5%A5%BD%E5%AF%B9%E9%BD%90.md) | 让模型的输出符合人类偏好，而不是只会续写文本。 | 概念 | 学 |
| [知识截止](terms/%E7%9F%A5%E8%AF%86%E6%88%AA%E6%AD%A2.md) | 模型训练数据的时间边界。边界之后的事它不知道。 | 模型 | 避坑 |
| [联网 / 检索增强](terms/%E8%81%94%E7%BD%91%20-%20%E6%A3%80%E7%B4%A2%E5%A2%9E%E5%BC%BA.md) | 回答之前先去查资料，把查到的内容塞进上下文里再回答。 | 数据 | 动手 |
| [向量 / 嵌入](terms/%E5%90%91%E9%87%8F%20-%20%E5%B5%8C%E5%85%A5.md) | 把一段文字变成一串数字，让机器能按「意思相近」而不是「字面相同」来检索。 | 数据 | 学 |
| [向量数据库](terms/%E5%90%91%E9%87%8F%E6%95%B0%E6%8D%AE%E5%BA%93.md) | 专门存和查这些数字数组的数据库，让 RAG 能在百万份文档里瞬间找到相关的那几段。 | 数据 | 动手 |
| [分块](terms/%E5%88%86%E5%9D%97.md) | 把长文档切成小块再送进模型。切得好不好，直接决定回答准不准。 | 数据 | 动手 |
| [扩散模型](terms/%E6%89%A9%E6%95%A3%E6%A8%A1%E5%9E%8B.md) | 生成图片的主流方法：从一片噪声一步步「擦」出图像。 | 多媒体 | 学 |
| [潜空间](terms/%E6%BD%9C%E7%A9%BA%E9%97%B4.md) | 图像生成的关键机制——模型在压缩后的空间里处理，而不是原始像素。 | 多媒体 | 学 |
| [CLIP](terms/CLIP.md) | 让模型理解「文字描述」和「图片内容」的对应关系，是文生图的基础。 | 多媒体 | 学 |
| [ControlNet](terms/ControlNet.md) | 让你用线稿、深度图、姿态图精确控制生成结果。 | 多媒体 | 动手 |
| [语音识别](terms/%E8%AF%AD%E9%9F%B3%E8%AF%86%E5%88%AB.md) | 把说的话转成文字。 | 多媒体 | 学 |
| [语音合成](terms/%E8%AF%AD%E9%9F%B3%E5%90%88%E6%88%90.md) | 把文字读出来。 | 多媒体 | 学 |
| [数字人](terms/%E6%95%B0%E5%AD%97%E4%BA%BA.md) | 有形象和声音的虚拟人，可用于客服、虚拟主播等场景。 | 多媒体 | 学 |
| [AI 搜索](terms/AI%20%E6%90%9C%E7%B4%A2.md) | 不用关键词，而是用一句话描述你想要什么，直接给答案。 | 模型 | 动手 |
| [视频生成](terms/%E8%A7%86%E9%A2%91%E7%94%9F%E6%88%90.md) | 从文字或图片生成短视频片段。 | 多媒体 | 学 |
| [具身智能](terms/%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD.md) | 让 AI 有身体、能感知环境并做出动作——机器人那一套。 | 多媒体 | 学 |
| [机器视觉](terms/%E6%9C%BA%E5%99%A8%E8%A7%86%E8%A7%89.md) | 让摄像头「看懂」画面——识别人、物体、文字、动作。 | 多媒体 | 学 |
| [自动驾驶](terms/%E8%87%AA%E5%8A%A8%E9%A9%BE%E9%A9%B6.md) | 车辆自己识别环境、规划路线并控制方向盘。 | 多媒体 | 学 |
| [AI 芯片](terms/AI%20%E8%8A%AF%E7%89%87.md) | 专门做 AI 运算的芯片，比通用 GPU 更高效但生态更封闭。 | 基建 | 学 |

</details>

<details><summary><b>三层 · 27 词</b> —— 看懂模型输出的好坏（点击展开）</summary>

| 词条 | 一句话说清 | 领域 | 用途 |
|---|---|---|---|
| [智能体 / Agent](terms/%E6%99%BA%E8%83%BD%E4%BD%93%20-%20Agent.md) | 让模型不止回答，还能自己动手：调工具、查资料、写文件、循环执行直到完成。 | 智能体 | 动手 |
| [工具调用](terms/%E5%B7%A5%E5%85%B7%E8%B0%83%E7%94%A8.md) | 模型自己决定「我要查一下数据库」，然后真的去调那个程序。 | 智能体 | 动手 |
| [MCP](terms/MCP.md) | 一套标准接口，让 AI 用统一的方式接外部工具和数据，不用为每个服务单独适配。 | 智能体 | 动手 |
| [多 Agent 协作](terms/%E5%A4%9A%20Agent%20%E5%8D%8F%E4%BD%9C.md) | 把一件复杂的事拆给多个各有所长的角色来分工完成。 | 智能体 | 动手 |
| [工作流编排](terms/%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%BC%96%E6%8E%92.md) | 把「AI 做一步、人工确认、再做下一步」这种固定流程固定下来。 | 智能体 | 动手 |
| [记忆](terms/%E8%AE%B0%E5%BF%86.md) | 让 Agent 跨对话记住事，不用每次都重新交代背景。 | 智能体 | 动手 |
| [长时任务](terms/%E9%95%BF%E6%97%B6%E4%BB%BB%E5%8A%A1.md) | 跑几小时甚至几天、跨多个上下文的复杂工作。 | 智能体 | 动手 |
| [人机协作](terms/%E4%BA%BA%E6%9C%BA%E5%8D%8F%E4%BD%9C.md) | 关键步骤让人确认，而不是全自动往下跑。 | 智能体 | 避坑 |
| [护栏](terms/%E6%8A%A4%E6%A0%8F.md) | 限制模型能做什么、不能做什么，防止它跑偏或做危险操作。 | 智能体 | 避坑 |
| [沙箱](terms/%E6%B2%99%E7%AE%B1.md) | 把 AI 的操作关在一个受控环境里，出问题也出不到外面。 | 智能体 | 避坑 |
| [评估](terms/%E8%AF%84%E4%BC%B0.md) | 判断一个方案到底好不好，而不是「看起来不错」。 | 选型 | 选型 |
| [可观测性](terms/%E5%8F%AF%E8%A7%82%E6%B5%8B%E6%80%A7.md) | 看清模型这一趟到底做了什么、花了多少、错在哪一步。 | 选型 | 选型 |
| [代码补全](terms/%E4%BB%A3%E7%A0%81%E8%A1%A5%E5%85%A8.md) | 在编辑器里根据上下文自动补出接下来的代码。 | 开发 | 动手 |
| [仓库级理解](terms/%E4%BB%93%E5%BA%93%E7%BA%A7%E7%90%86%E8%A7%A3.md) | 让 AI 读懂整个项目，而不是只看当前打开的那一个文件。 | 开发 | 动手 |
| [终端 Agent](terms/%E7%BB%88%E7%AB%AF%20Agent.md) | 在命令行里自主执行任务：改文件、跑测试、提交代码。 | 开发 | 动手 |
| [差异对比](terms/%E5%B7%AE%E5%BC%82%E5%AF%B9%E6%AF%94.md) | 看 AI 到底改了什么。这是接受 AI 代码最关键的一步。 | 开发 | 避坑 |
| [App Server](terms/App%20Server.md) | 让同一个 AI 会话能在终端、编辑器、网页之间接力。 | 开发 | 学 |
| [ACP](terms/ACP.md) | 让不同厂商的 AI 编码工具能挂进同一个编辑器。 | 开发 | 动手 |
| [配对编程](terms/%E9%85%8D%E5%AF%B9%E7%BC%96%E7%A8%8B.md) | AI 作为编程搭档，实时参与开发过程。 | 开发 | 学 |
| [浏览 / 网页操作](terms/%E6%B5%8F%E8%A7%88%20-%20%E7%BD%91%E9%A1%B5%E6%93%8D%E4%BD%9C.md) | 让 AI 自己去点页面、填表单、截图取信息。 | 智能体 | 动手 |
| [参考服务器](terms/%E5%8F%82%E8%80%83%E6%9C%8D%E5%8A%A1%E5%99%A8.md) | 官方提供的「标准示范」实现，用来告诉你协议该怎么写。 | 智能体 | 学 |
| [版本控制](terms/%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6.md) | 记录每一次改动，随时回退。这是 AI 编程的安全底座。 | 开发 | 避坑 |
| [持续集成](terms/%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%90.md) | 代码一提交就自动跑测试和检查。 | 开发 | 避坑 |
| [提示注入](terms/%E6%8F%90%E7%A4%BA%E6%B3%A8%E5%85%A5.md) | 外部内容里藏着指令，骗AI 执行你没打算让它做的事。 | 智能体 | 避坑 |
| [远程执行](terms/%E8%BF%9C%E7%A8%8B%E6%89%A7%E8%A1%8C.md) | 云端 Agent 在你电脑上跑任务，关掉笔记本也不中断。 | 智能体 | 动手 |
| [技能 / Skills](terms/%E6%8A%80%E8%83%BD%20-%20Skills.md) | 把重复的工作流程打包成可复用的能力。 | 智能体 | 动手 |
| [结构化输出](terms/%E7%BB%93%E6%9E%84%E5%8C%96%E8%BE%93%E5%87%BA.md) | 让模型的回答是严格的格式（JSON 等），而不是一段散文。 | 智能体 | 动手 |

</details>

<details><summary><b>四层 · 9 词</b> —— 动手把它跑起来（点击展开）</summary>

| 词条 | 一句话说清 | 领域 | 用途 |
|---|---|---|---|
| [Transformer](terms/Transformer.md) | 当前所有主流大模型共用的底层架构。 | 概念 | 学 |
| [注意力机制](terms/%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%9C%BA%E5%88%B6.md) | 让模型在处理一个词时，自动看向句子里最相关的其他词。 | 概念 | 学 |
| [位置编码](terms/%E4%BD%8D%E7%BD%AE%E7%BC%96%E7%A0%81.md) | 让模型知道每个词在句子里的先后顺序。 | 概念 | 学 |
| [嵌入层](terms/%E5%B5%8C%E5%85%A5%E5%B1%82.md) | 把词变成数字向量的第一步，模型内部只认数字。 | 概念 | 学 |
| [KV 缓存](terms/KV%20%E7%BC%93%E5%AD%98.md) | 让模型逐字生成时不用每一步都重算整段话，生成速度才可用。 | 基建 | 学 |
| [上下文窗口的代价](terms/%E4%B8%8A%E4%B8%8B%E6%96%87%E7%AA%97%E5%8F%A3%E7%9A%84%E4%BB%A3%E4%BB%B7.md) | 上下文开得越大越慢越贵，不是免费扩容。 | 模型 | 避坑 |
| [预训练](terms/%E9%A2%84%E8%AE%AD%E7%BB%83.md) | 在海量文本上做「预测下一个词」，这是模型学到世界知识的阶段。 | 概念 | 学 |
| [训练算力](terms/%E8%AE%AD%E7%BB%83%E7%AE%97%E5%8A%9B.md) | 训练和推理都要烧算力，这是 AI 最硬的资源门槛。 | 基建 | 学 |
| [推理成本](terms/%E6%8E%A8%E7%90%86%E6%88%90%E6%9C%AC.md) | 模型每回答一次要花的钱，由输入和输出的 token 量决定。 | 选型 | 选型 |

</details>

<details><summary><b>五层 · 14 词</b> —— 知道它哪儿不行（点击展开）</summary>

| 词条 | 一句话说清 | 领域 | 用途 |
|---|---|---|---|
| [GPU](terms/GPU.md) | 真正做矩阵运算的芯片。跑大模型靠它，CPU 很慢。 | 基建 | 学 |
| [显存](terms/%E6%98%BE%E5%AD%98.md) | 显卡上的内存。装不下模型就是硬装不下，跟别的无关。 | 基建 | 选型 |
| [量化](terms/%E9%87%8F%E5%8C%96.md) | 把模型权重从高精度压成低精度，省显存、提速，代价是质量下降。 | 基建 | 动手 |
| [bpw](terms/bpw.md) | 量化档位的数值表示：平均每个权重占几个比特。 | 基建 | 选型 |
| [GGUF](terms/GGUF.md) | 本地跑模型的事实标准文件格式。llama.cpp 生态几乎只认它。 | 基建 | 动手 |
| [llama.cpp](terms/llama.cpp.md) | 在普通电脑上跑大模型的主流开源引擎，CPU 也能跑。 | 基建 | 动手 |
| [vLLM](terms/vLLM.md) | 在服务器上高并发跑模型的服务引擎。 | 基建 | 学 |
| [GPU 层卸载](terms/GPU%20%E5%B1%82%E5%8D%B8%E8%BD%BD.md) | 把模型一部分交给 GPU、一部分留在 CPU，显存不够时的妥协手段。 | 基建 | 动手 |
| [张量并行](terms/%E5%BC%A0%E9%87%8F%E5%B9%B6%E8%A1%8C.md) | 把一个模型拆到多张卡上一起算，单卡装不下时用。 | 基建 | 学 |
| [专家卸载](terms/%E4%B8%93%E5%AE%B6%E5%8D%B8%E8%BD%BD.md) | 对「专家很多但每次只激活一部分」的稀疏模型，把不常用的专家放内存里。 | 基建 | 学 |
| [首字延迟](terms/%E9%A6%96%E5%AD%97%E5%BB%B6%E8%BF%9F.md) | 从发出提问到看到第一个字要多久。这个数字决定「感觉快不快」。 | 基建 | 选型 |
| [吞吐](terms/%E5%90%9E%E5%90%90.md) | 每秒能生成多少字。决定长文生成要等多久。 | 基建 | 选型 |
| [预填充](terms/%E9%A2%84%E5%A1%AB%E5%85%85.md) | 把你输入的那一整段先读完，再开始生成回答的那一步。 | 基建 | 学 |
| [Prompt Cache](terms/Prompt%20Cache.md) | 把重复的系统提示和资料缓存起来，重复问同一份上下文时省时间和钱。 | 基建 | 动手 |

</details>

<details><summary><b>六层 · 22 词</b> —— 拿它做决策（点击展开）</summary>

| 词条 | 一句话说清 | 领域 | 用途 |
|---|---|---|---|
| [开源模型](terms/%E5%BC%80%E6%BA%90%E6%A8%A1%E5%9E%8B.md) | 权重公开、你可以下载下来在自己机器上跑、不用给厂商交钱。 | 选型 | 选型 |
| [闭源模型](terms/%E9%97%AD%E6%BA%90%E6%A8%A1%E5%9E%8B.md) | 你不拿到权重，只能通过官方接口调用。 | 选型 | 选型 |
| [许可证](terms/%E8%AE%B8%E5%8F%AF%E8%AF%81.md) | 规定你能不能用、能不能改、能不能商用。选型时最容易忽略的约束。 | 选型 | 避坑 |
| [API / 接口调用](terms/API%20-%20%E6%8E%A5%E5%8F%A3%E8%B0%83%E7%94%A8.md) | 不自己搞模型，按用量付钱调用别人的。 | 选型 | 选型 |
| [本地部署](terms/%E6%9C%AC%E5%9C%B0%E9%83%A8%E7%BD%B2.md) | 模型下载到自己机器上跑，数据不外发。 | 基建 | 选型 |
| [数据不出网](terms/%E6%95%B0%E6%8D%AE%E4%B8%8D%E5%87%BA%E7%BD%91.md) | 你的资料完全不经过第三方。这是很多场景的硬性要求。 | 选型 | 避坑 |
| [基准测试](terms/%E5%9F%BA%E5%87%86%E6%B5%8B%E8%AF%95.md) | 用统一的题库横向比较模型强弱。 | 选型 | 选型 |
| [总分 / 综合评测](terms/%E6%80%BB%E5%88%86%20-%20%E7%BB%BC%E5%90%88%E8%AF%84%E6%B5%8B.md) | 把多个基准的分数加权成一个总分，方便快速比较。 | 选型 | 选型 |
| [供应商锁定](terms/%E4%BE%9B%E5%BA%94%E5%95%86%E9%94%81%E5%AE%9A.md) | 用得越深，换模型或换服务商越难。 | 选型 | 避坑 |
| [模型评测的局限](terms/%E6%A8%A1%E5%9E%8B%E8%AF%84%E6%B5%8B%E7%9A%84%E5%B1%80%E9%99%90.md) | 知道榜单分数不等于你的实际效果，这点很重要。 | 选型 | 选型 |
| [隐私与合规](terms/%E9%9A%90%E7%A7%81%E4%B8%8E%E5%90%88%E8%A7%84.md) | 数据经过哪些机器、留存多久、有没有审计。 | 选型 | 避坑 |
| [单次调用成本](terms/%E5%8D%95%E6%AC%A1%E8%B0%83%E7%94%A8%E6%88%90%E6%9C%AC.md) | 完成一次任务的实际花销，而不只是单价。 | 选型 | 选型 |
| [缓存策略](terms/%E7%BC%93%E5%AD%98%E7%AD%96%E7%95%A5.md) | 重复的内容不重复计算，直接复用。这是降本的第一手段。 | 选型 | 动手 |
| [路由](terms/%E8%B7%AF%E7%94%B1.md) | 简单问题派给便宜快的模型，难问题派给强模型。 | 选型 | 动手 |
| [自托管成本](terms/%E8%87%AA%E6%89%98%E7%AE%A1%E6%88%90%E6%9C%AC.md) | 本地跑不花钱，但硬件、电费、运维都是真实成本。 | 选型 | 选型 |
| [服务中断风险](terms/%E6%9C%8D%E5%8A%A1%E4%B8%AD%E6%96%AD%E9%A3%8E%E9%99%A9.md) | 依赖别人的服务意味着它可能涨价、下线或限流。 | 选型 | 避坑 |
| [可替换性](terms/%E5%8F%AF%E6%9B%BF%E6%8D%A2%E6%80%A7.md) | 换个模型或服务商，需要改多少东西。 | 选型 | 避坑 |
| [社区与文档](terms/%E7%A4%BE%E5%8C%BA%E4%B8%8E%E6%96%87%E6%A1%A3.md) | 出问题能不能找到人问，接口有没有写清楚的文档。 | 选型 | 选型 |
| [迭代速度](terms/%E8%BF%AD%E4%BB%A3%E9%80%9F%E5%BA%A6.md) | 项目更新有多快，版本是否稳定。 | 选型 | 选型 |
| [退出成本](terms/%E9%80%80%E5%87%BA%E6%88%90%E6%9C%AC.md) | 不用了，迁移走要付出多少。 | 选型 | 避坑 |
| [成本](terms/%E6%88%90%E6%9C%AC.md) | 为一个AI 方案实际要花多少钱。除了单价，还有你消耗掉的数量。 | 选型 | 选型 |
| [传输方式](terms/%E4%BC%A0%E8%BE%93%E6%96%B9%E5%BC%8F.md) | 你的数据用什么方式送到模型或工具那里：留在本机还是发到第三方。 | 数据 | 学 |

</details>

### 按领域查 —— 「我只想搞懂某一类」

- **选型**（23）：[API / 接口调用](terms/API%20-%20%E6%8E%A5%E5%8F%A3%E8%B0%83%E7%94%A8.md) · [供应商锁定](terms/%E4%BE%9B%E5%BA%94%E5%95%86%E9%94%81%E5%AE%9A.md) · [单次调用成本](terms/%E5%8D%95%E6%AC%A1%E8%B0%83%E7%94%A8%E6%88%90%E6%9C%AC.md) · [可替换性](terms/%E5%8F%AF%E6%9B%BF%E6%8D%A2%E6%80%A7.md) · [可观测性](terms/%E5%8F%AF%E8%A7%82%E6%B5%8B%E6%80%A7.md) · [基准测试](terms/%E5%9F%BA%E5%87%86%E6%B5%8B%E8%AF%95.md) · [开源模型](terms/%E5%BC%80%E6%BA%90%E6%A8%A1%E5%9E%8B.md) · [总分 / 综合评测](terms/%E6%80%BB%E5%88%86%20-%20%E7%BB%BC%E5%90%88%E8%AF%84%E6%B5%8B.md) · [成本](terms/%E6%88%90%E6%9C%AC.md) · [推理成本](terms/%E6%8E%A8%E7%90%86%E6%88%90%E6%9C%AC.md) · [数据不出网](terms/%E6%95%B0%E6%8D%AE%E4%B8%8D%E5%87%BA%E7%BD%91.md) · [服务中断风险](terms/%E6%9C%8D%E5%8A%A1%E4%B8%AD%E6%96%AD%E9%A3%8E%E9%99%A9.md) · [模型评测的局限](terms/%E6%A8%A1%E5%9E%8B%E8%AF%84%E6%B5%8B%E7%9A%84%E5%B1%80%E9%99%90.md) · [社区与文档](terms/%E7%A4%BE%E5%8C%BA%E4%B8%8E%E6%96%87%E6%A1%A3.md) · [缓存策略](terms/%E7%BC%93%E5%AD%98%E7%AD%96%E7%95%A5.md) · [自托管成本](terms/%E8%87%AA%E6%89%98%E7%AE%A1%E6%88%90%E6%9C%AC.md) · [许可证](terms/%E8%AE%B8%E5%8F%AF%E8%AF%81.md) · [评估](terms/%E8%AF%84%E4%BC%B0.md) · [路由](terms/%E8%B7%AF%E7%94%B1.md) · [迭代速度](terms/%E8%BF%AD%E4%BB%A3%E9%80%9F%E5%BA%A6.md) · [退出成本](terms/%E9%80%80%E5%87%BA%E6%88%90%E6%9C%AC.md) · [闭源模型](terms/%E9%97%AD%E6%BA%90%E6%A8%A1%E5%9E%8B.md) · [隐私与合规](terms/%E9%9A%90%E7%A7%81%E4%B8%8E%E5%90%88%E8%A7%84.md)
- **概念**（21）：[AI Agent 与聊天机器人的区别](terms/AI%20Agent%20%E4%B8%8E%E8%81%8A%E5%A4%A9%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%9A%84%E5%8C%BA%E5%88%AB.md) · [AI 产品 vs AI 模型](terms/AI%20%E4%BA%A7%E5%93%81%20vs%20AI%20%E6%A8%A1%E5%9E%8B.md) · [Token](terms/Token.md) · [Transformer](terms/Transformer.md) · [人工智能](terms/%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD.md) · [位置编码](terms/%E4%BD%8D%E7%BD%AE%E7%BC%96%E7%A0%81.md) · [偏好对齐](terms/%E5%81%8F%E5%A5%BD%E5%AF%B9%E9%BD%90.md) · [参数](terms/%E5%8F%82%E6%95%B0.md) · [大模型 / 大语言模型](terms/%E5%A4%A7%E6%A8%A1%E5%9E%8B%20-%20%E5%A4%A7%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B.md) · [嵌入层](terms/%E5%B5%8C%E5%85%A5%E5%B1%82.md) · [开源生态](terms/%E5%BC%80%E6%BA%90%E7%94%9F%E6%80%81.md) · [推理](terms/%E6%8E%A8%E7%90%86.md) · [机器学习](terms/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0.md) · [注意力机制](terms/%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%9C%BA%E5%88%B6.md) · [深度学习](terms/%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0.md) · [生成式 AI](terms/%E7%94%9F%E6%88%90%E5%BC%8F%20AI.md) · [神经网络](terms/%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C.md) · [能力边界](terms/%E8%83%BD%E5%8A%9B%E8%BE%B9%E7%95%8C.md) · [训练](terms/%E8%AE%AD%E7%BB%83.md) · [词表](terms/%E8%AF%8D%E8%A1%A8.md) · [预训练](terms/%E9%A2%84%E8%AE%AD%E7%BB%83.md)
- **基建**（18）：[AI 芯片](terms/AI%20%E8%8A%AF%E7%89%87.md) · [bpw](terms/bpw.md) · [GGUF](terms/GGUF.md) · [GPU 层卸载](terms/GPU%20%E5%B1%82%E5%8D%B8%E8%BD%BD.md) · [GPU](terms/GPU.md) · [KV 缓存](terms/KV%20%E7%BC%93%E5%AD%98.md) · [llama.cpp](terms/llama.cpp.md) · [Prompt Cache](terms/Prompt%20Cache.md) · [vLLM](terms/vLLM.md) · [专家卸载](terms/%E4%B8%93%E5%AE%B6%E5%8D%B8%E8%BD%BD.md) · [吞吐](terms/%E5%90%9E%E5%90%90.md) · [张量并行](terms/%E5%BC%A0%E9%87%8F%E5%B9%B6%E8%A1%8C.md) · [显存](terms/%E6%98%BE%E5%AD%98.md) · [本地部署](terms/%E6%9C%AC%E5%9C%B0%E9%83%A8%E7%BD%B2.md) · [训练算力](terms/%E8%AE%AD%E7%BB%83%E7%AE%97%E5%8A%9B.md) · [量化](terms/%E9%87%8F%E5%8C%96.md) · [预填充](terms/%E9%A2%84%E5%A1%AB%E5%85%85.md) · [首字延迟](terms/%E9%A6%96%E5%AD%97%E5%BB%B6%E8%BF%9F.md)
- **智能体**（17）：[MCP](terms/MCP.md) · [人机协作](terms/%E4%BA%BA%E6%9C%BA%E5%8D%8F%E4%BD%9C.md) · [参考服务器](terms/%E5%8F%82%E8%80%83%E6%9C%8D%E5%8A%A1%E5%99%A8.md) · [多 Agent 协作](terms/%E5%A4%9A%20Agent%20%E5%8D%8F%E4%BD%9C.md) · [工作流编排](terms/%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%BC%96%E6%8E%92.md) · [工具调用](terms/%E5%B7%A5%E5%85%B7%E8%B0%83%E7%94%A8.md) · [技能 / Skills](terms/%E6%8A%80%E8%83%BD%20-%20Skills.md) · [护栏](terms/%E6%8A%A4%E6%A0%8F.md) · [提示注入](terms/%E6%8F%90%E7%A4%BA%E6%B3%A8%E5%85%A5.md) · [智能体 / Agent](terms/%E6%99%BA%E8%83%BD%E4%BD%93%20-%20Agent.md) · [权限](terms/%E6%9D%83%E9%99%90.md) · [沙箱](terms/%E6%B2%99%E7%AE%B1.md) · [浏览 / 网页操作](terms/%E6%B5%8F%E8%A7%88%20-%20%E7%BD%91%E9%A1%B5%E6%93%8D%E4%BD%9C.md) · [结构化输出](terms/%E7%BB%93%E6%9E%84%E5%8C%96%E8%BE%93%E5%87%BA.md) · [记忆](terms/%E8%AE%B0%E5%BF%86.md) · [远程执行](terms/%E8%BF%9C%E7%A8%8B%E6%89%A7%E8%A1%8C.md) · [长时任务](terms/%E9%95%BF%E6%97%B6%E4%BB%BB%E5%8A%A1.md)
- **模型**（12）：[AI 搜索](terms/AI%20%E6%90%9C%E7%B4%A2.md) · [上下文窗口](terms/%E4%B8%8A%E4%B8%8B%E6%96%87%E7%AA%97%E5%8F%A3.md) · [上下文窗口的代价](terms/%E4%B8%8A%E4%B8%8B%E6%96%87%E7%AA%97%E5%8F%A3%E7%9A%84%E4%BB%A3%E4%BB%B7.md) · [多模态](terms/%E5%A4%9A%E6%A8%A1%E6%80%81.md) · [幻觉](terms/%E5%B9%BB%E8%A7%89.md) · [微调](terms/%E5%BE%AE%E8%B0%83.md) · [推理模型](terms/%E6%8E%A8%E7%90%86%E6%A8%A1%E5%9E%8B.md) · [提示词](terms/%E6%8F%90%E7%A4%BA%E8%AF%8D.md) · [温度](terms/%E6%B8%A9%E5%BA%A6.md) · [知识截止](terms/%E7%9F%A5%E8%AF%86%E6%88%AA%E6%AD%A2.md) · [系统提示](terms/%E7%B3%BB%E7%BB%9F%E6%8F%90%E7%A4%BA.md) · [采样 / 采样参数](terms/%E9%87%87%E6%A0%B7%20-%20%E9%87%87%E6%A0%B7%E5%8F%82%E6%95%B0.md)
- **多媒体**（11）：[CLIP](terms/CLIP.md) · [ControlNet](terms/ControlNet.md) · [具身智能](terms/%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD.md) · [扩散模型](terms/%E6%89%A9%E6%95%A3%E6%A8%A1%E5%9E%8B.md) · [数字人](terms/%E6%95%B0%E5%AD%97%E4%BA%BA.md) · [机器视觉](terms/%E6%9C%BA%E5%99%A8%E8%A7%86%E8%A7%89.md) · [潜空间](terms/%E6%BD%9C%E7%A9%BA%E9%97%B4.md) · [自动驾驶](terms/%E8%87%AA%E5%8A%A8%E9%A9%BE%E9%A9%B6.md) · [视频生成](terms/%E8%A7%86%E9%A2%91%E7%94%9F%E6%88%90.md) · [语音合成](terms/%E8%AF%AD%E9%9F%B3%E5%90%88%E6%88%90.md) · [语音识别](terms/%E8%AF%AD%E9%9F%B3%E8%AF%86%E5%88%AB.md)
- **开发**（9）：[ACP](terms/ACP.md) · [App Server](terms/App%20Server.md) · [仓库级理解](terms/%E4%BB%93%E5%BA%93%E7%BA%A7%E7%90%86%E8%A7%A3.md) · [代码补全](terms/%E4%BB%A3%E7%A0%81%E8%A1%A5%E5%85%A8.md) · [差异对比](terms/%E5%B7%AE%E5%BC%82%E5%AF%B9%E6%AF%94.md) · [持续集成](terms/%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%90.md) · [版本控制](terms/%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6.md) · [终端 Agent](terms/%E7%BB%88%E7%AB%AF%20Agent.md) · [配对编程](terms/%E9%85%8D%E5%AF%B9%E7%BC%96%E7%A8%8B.md)
- **数据**（5）：[传输方式](terms/%E4%BC%A0%E8%BE%93%E6%96%B9%E5%BC%8F.md) · [分块](terms/%E5%88%86%E5%9D%97.md) · [向量 / 嵌入](terms/%E5%90%91%E9%87%8F%20-%20%E5%B5%8C%E5%85%A5.md) · [向量数据库](terms/%E5%90%91%E9%87%8F%E6%95%B0%E6%8D%AE%E5%BA%93.md) · [联网 / 检索增强](terms/%E8%81%94%E7%BD%91%20-%20%E6%A3%80%E7%B4%A2%E5%A2%9E%E5%BC%BA.md)

### 带着目的查 —— 「我现在想解决什么」

- **学**（42）：[AI 产品 vs AI 模型](terms/AI%20%E4%BA%A7%E5%93%81%20vs%20AI%20%E6%A8%A1%E5%9E%8B.md) · [AI 芯片](terms/AI%20%E8%8A%AF%E7%89%87.md) · [App Server](terms/App%20Server.md) · [CLIP](terms/CLIP.md) · [GPU](terms/GPU.md) · [KV 缓存](terms/KV%20%E7%BC%93%E5%AD%98.md) · [Transformer](terms/Transformer.md) · [vLLM](terms/vLLM.md) · [专家卸载](terms/%E4%B8%93%E5%AE%B6%E5%8D%B8%E8%BD%BD.md) · [人工智能](terms/%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD.md) · [传输方式](terms/%E4%BC%A0%E8%BE%93%E6%96%B9%E5%BC%8F.md) · [位置编码](terms/%E4%BD%8D%E7%BD%AE%E7%BC%96%E7%A0%81.md) · [偏好对齐](terms/%E5%81%8F%E5%A5%BD%E5%AF%B9%E9%BD%90.md) · [具身智能](terms/%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD.md) · [参数](terms/%E5%8F%82%E6%95%B0.md) · [参考服务器](terms/%E5%8F%82%E8%80%83%E6%9C%8D%E5%8A%A1%E5%99%A8.md) · [向量 / 嵌入](terms/%E5%90%91%E9%87%8F%20-%20%E5%B5%8C%E5%85%A5.md) · [多模态](terms/%E5%A4%9A%E6%A8%A1%E6%80%81.md) · [大模型 / 大语言模型](terms/%E5%A4%A7%E6%A8%A1%E5%9E%8B%20-%20%E5%A4%A7%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B.md) · [嵌入层](terms/%E5%B5%8C%E5%85%A5%E5%B1%82.md) · [开源生态](terms/%E5%BC%80%E6%BA%90%E7%94%9F%E6%80%81.md) · [张量并行](terms/%E5%BC%A0%E9%87%8F%E5%B9%B6%E8%A1%8C.md) · [扩散模型](terms/%E6%89%A9%E6%95%A3%E6%A8%A1%E5%9E%8B.md) · [推理](terms/%E6%8E%A8%E7%90%86.md) · [数字人](terms/%E6%95%B0%E5%AD%97%E4%BA%BA.md) · [机器学习](terms/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0.md) · [机器视觉](terms/%E6%9C%BA%E5%99%A8%E8%A7%86%E8%A7%89.md) · [注意力机制](terms/%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%9C%BA%E5%88%B6.md) · [深度学习](terms/%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0.md) · [潜空间](terms/%E6%BD%9C%E7%A9%BA%E9%97%B4.md) · [生成式 AI](terms/%E7%94%9F%E6%88%90%E5%BC%8F%20AI.md) · [神经网络](terms/%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C.md) · [自动驾驶](terms/%E8%87%AA%E5%8A%A8%E9%A9%BE%E9%A9%B6.md) · [视频生成](terms/%E8%A7%86%E9%A2%91%E7%94%9F%E6%88%90.md) · [训练](terms/%E8%AE%AD%E7%BB%83.md) · [训练算力](terms/%E8%AE%AD%E7%BB%83%E7%AE%97%E5%8A%9B.md) · [词表](terms/%E8%AF%8D%E8%A1%A8.md) · [语音合成](terms/%E8%AF%AD%E9%9F%B3%E5%90%88%E6%88%90.md) · [语音识别](terms/%E8%AF%AD%E9%9F%B3%E8%AF%86%E5%88%AB.md) · [配对编程](terms/%E9%85%8D%E5%AF%B9%E7%BC%96%E7%A8%8B.md) …等 42 词
- **动手**（34）：[ACP](terms/ACP.md) · [AI 搜索](terms/AI%20%E6%90%9C%E7%B4%A2.md) · [ControlNet](terms/ControlNet.md) · [GGUF](terms/GGUF.md) · [GPU 层卸载](terms/GPU%20%E5%B1%82%E5%8D%B8%E8%BD%BD.md) · [llama.cpp](terms/llama.cpp.md) · [MCP](terms/MCP.md) · [Prompt Cache](terms/Prompt%20Cache.md) · [Token](terms/Token.md) · [上下文窗口](terms/%E4%B8%8A%E4%B8%8B%E6%96%87%E7%AA%97%E5%8F%A3.md) · [仓库级理解](terms/%E4%BB%93%E5%BA%93%E7%BA%A7%E7%90%86%E8%A7%A3.md) · [代码补全](terms/%E4%BB%A3%E7%A0%81%E8%A1%A5%E5%85%A8.md) · [分块](terms/%E5%88%86%E5%9D%97.md) · [向量数据库](terms/%E5%90%91%E9%87%8F%E6%95%B0%E6%8D%AE%E5%BA%93.md) · [多 Agent 协作](terms/%E5%A4%9A%20Agent%20%E5%8D%8F%E4%BD%9C.md) · [工作流编排](terms/%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%BC%96%E6%8E%92.md) · [工具调用](terms/%E5%B7%A5%E5%85%B7%E8%B0%83%E7%94%A8.md) · [微调](terms/%E5%BE%AE%E8%B0%83.md) · [技能 / Skills](terms/%E6%8A%80%E8%83%BD%20-%20Skills.md) · [提示词](terms/%E6%8F%90%E7%A4%BA%E8%AF%8D.md) · [智能体 / Agent](terms/%E6%99%BA%E8%83%BD%E4%BD%93%20-%20Agent.md) · [浏览 / 网页操作](terms/%E6%B5%8F%E8%A7%88%20-%20%E7%BD%91%E9%A1%B5%E6%93%8D%E4%BD%9C.md) · [温度](terms/%E6%B8%A9%E5%BA%A6.md) · [系统提示](terms/%E7%B3%BB%E7%BB%9F%E6%8F%90%E7%A4%BA.md) · [终端 Agent](terms/%E7%BB%88%E7%AB%AF%20Agent.md) · [结构化输出](terms/%E7%BB%93%E6%9E%84%E5%8C%96%E8%BE%93%E5%87%BA.md) · [缓存策略](terms/%E7%BC%93%E5%AD%98%E7%AD%96%E7%95%A5.md) · [联网 / 检索增强](terms/%E8%81%94%E7%BD%91%20-%20%E6%A3%80%E7%B4%A2%E5%A2%9E%E5%BC%BA.md) · [记忆](terms/%E8%AE%B0%E5%BF%86.md) · [路由](terms/%E8%B7%AF%E7%94%B1.md) · [远程执行](terms/%E8%BF%9C%E7%A8%8B%E6%89%A7%E8%A1%8C.md) · [采样 / 采样参数](terms/%E9%87%87%E6%A0%B7%20-%20%E9%87%87%E6%A0%B7%E5%8F%82%E6%95%B0.md) · [量化](terms/%E9%87%8F%E5%8C%96.md) · [长时任务](terms/%E9%95%BF%E6%97%B6%E4%BB%BB%E5%8A%A1.md)
- **选型**（21）：[AI Agent 与聊天机器人的区别](terms/AI%20Agent%20%E4%B8%8E%E8%81%8A%E5%A4%A9%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%9A%84%E5%8C%BA%E5%88%AB.md) · [API / 接口调用](terms/API%20-%20%E6%8E%A5%E5%8F%A3%E8%B0%83%E7%94%A8.md) · [bpw](terms/bpw.md) · [单次调用成本](terms/%E5%8D%95%E6%AC%A1%E8%B0%83%E7%94%A8%E6%88%90%E6%9C%AC.md) · [可观测性](terms/%E5%8F%AF%E8%A7%82%E6%B5%8B%E6%80%A7.md) · [吞吐](terms/%E5%90%9E%E5%90%90.md) · [基准测试](terms/%E5%9F%BA%E5%87%86%E6%B5%8B%E8%AF%95.md) · [开源模型](terms/%E5%BC%80%E6%BA%90%E6%A8%A1%E5%9E%8B.md) · [总分 / 综合评测](terms/%E6%80%BB%E5%88%86%20-%20%E7%BB%BC%E5%90%88%E8%AF%84%E6%B5%8B.md) · [成本](terms/%E6%88%90%E6%9C%AC.md) · [推理成本](terms/%E6%8E%A8%E7%90%86%E6%88%90%E6%9C%AC.md) · [推理模型](terms/%E6%8E%A8%E7%90%86%E6%A8%A1%E5%9E%8B.md) · [显存](terms/%E6%98%BE%E5%AD%98.md) · [本地部署](terms/%E6%9C%AC%E5%9C%B0%E9%83%A8%E7%BD%B2.md) · [模型评测的局限](terms/%E6%A8%A1%E5%9E%8B%E8%AF%84%E6%B5%8B%E7%9A%84%E5%B1%80%E9%99%90.md) · [社区与文档](terms/%E7%A4%BE%E5%8C%BA%E4%B8%8E%E6%96%87%E6%A1%A3.md) · [自托管成本](terms/%E8%87%AA%E6%89%98%E7%AE%A1%E6%88%90%E6%9C%AC.md) · [评估](terms/%E8%AF%84%E4%BC%B0.md) · [迭代速度](terms/%E8%BF%AD%E4%BB%A3%E9%80%9F%E5%BA%A6.md) · [闭源模型](terms/%E9%97%AD%E6%BA%90%E6%A8%A1%E5%9E%8B.md) · [首字延迟](terms/%E9%A6%96%E5%AD%97%E5%BB%B6%E8%BF%9F.md)
- **避坑**（19）：[上下文窗口的代价](terms/%E4%B8%8A%E4%B8%8B%E6%96%87%E7%AA%97%E5%8F%A3%E7%9A%84%E4%BB%A3%E4%BB%B7.md) · [人机协作](terms/%E4%BA%BA%E6%9C%BA%E5%8D%8F%E4%BD%9C.md) · [供应商锁定](terms/%E4%BE%9B%E5%BA%94%E5%95%86%E9%94%81%E5%AE%9A.md) · [可替换性](terms/%E5%8F%AF%E6%9B%BF%E6%8D%A2%E6%80%A7.md) · [差异对比](terms/%E5%B7%AE%E5%BC%82%E5%AF%B9%E6%AF%94.md) · [幻觉](terms/%E5%B9%BB%E8%A7%89.md) · [护栏](terms/%E6%8A%A4%E6%A0%8F.md) · [持续集成](terms/%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%90.md) · [提示注入](terms/%E6%8F%90%E7%A4%BA%E6%B3%A8%E5%85%A5.md) · [数据不出网](terms/%E6%95%B0%E6%8D%AE%E4%B8%8D%E5%87%BA%E7%BD%91.md) · [服务中断风险](terms/%E6%9C%8D%E5%8A%A1%E4%B8%AD%E6%96%AD%E9%A3%8E%E9%99%A9.md) · [权限](terms/%E6%9D%83%E9%99%90.md) · [沙箱](terms/%E6%B2%99%E7%AE%B1.md) · [版本控制](terms/%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6.md) · [知识截止](terms/%E7%9F%A5%E8%AF%86%E6%88%AA%E6%AD%A2.md) · [能力边界](terms/%E8%83%BD%E5%8A%9B%E8%BE%B9%E7%95%8C.md) · [许可证](terms/%E8%AE%B8%E5%8F%AF%E8%AF%81.md) · [退出成本](terms/%E9%80%80%E5%87%BA%E6%88%90%E6%9C%AC.md) · [隐私与合规](terms/%E9%9A%90%E7%A7%81%E4%B8%8E%E5%90%88%E8%A7%84.md)

<!-- INDEX:END -->

## 实测规模（A8）

<!-- STATS:BEGIN generated, do not edit -->
| 项 | 实测值 |
|---|---|
| 词条 | 116 词 |
| 分层 | 一 18 · 二 26 · 三 27 · 四 9 · 五 14 · 六 22 |
| 领域（domain） | choice 23 · concept 21 · infra 18 · agent 17 · model 12 · media 11 · dev 9 · data 5 |
| 用途（purposeTag） | learn 42 · apply 34 · judge 21 · guard 19 |
| 出处条目（refs） | 187 条 |
| 英文覆盖 | 116 / 116 |
<!-- STATS:END -->