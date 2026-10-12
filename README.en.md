# Learn AI · Glossary Atlas (ai-glossary)

> 中文版：[README.md](./README.md)

> 中文 | [English](README.md)

> What are these terms, and why is it worth knowing them?

For people **who are new to AI**: terms are sorted into six layers by "what to learn first," each with its sources, and no overall rankings. (Counts see Measured size below)

<!-- INDEX:BEGIN 由 _audit/gen-repo-docs.mjs 生成，勿手改 -->

## Content index

### Read in order — the six layers

| Layer | What it settles | Terms |
|---|---|---|
| **一** | Explain AI to a human | 18 |
| **二** | Know why it can do that | 26 |
| **三** | Judge good vs bad output | 27 |
| **四** | Run it yourself | 9 |
| **五** | Know where it breaks | 14 |
| **六** | Make decisions with it | 22 |

<details><summary><b>Layer 一 · 18 terms</b> — Explain AI to a human (click to expand)</summary>

| Term | In one line | Domain | Use |
|---|---|---|---|
| [Artificial Intelligence, AI](terms/%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD.md) | 让机器做原本需要人类智能才能做的事——看图、听话、写字、决策。 | concept | learn |
| [Machine Learning, ML](terms/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0.md) | 不手写规则，直接给机器大量例子，让它自己总结规律。 | concept | learn |
| [Deep Learning](terms/%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0.md) | 用很多层「神经元」叠起来的网络，从数据里学出复杂特征。 | concept | learn |
| [Neural Network](terms/%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C.md) | 模仿大脑神经元连接方式的一类数学结构，是现代 AI 的通用积木。 | concept | learn |
| [Large Language Model, LLM](terms/%E5%A4%A7%E6%A8%A1%E5%9E%8B%20-%20%E5%A4%A7%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B.md) | 读过海量文本、学会「接着往下写」的模型，能对话、能写作、能写代码。 | concept | learn |
| [Parameter](terms/%E5%8F%82%E6%95%B0.md) | 模型里可调的数字，训练就是不断调整它们。参数越多，一般越「博学」。 | concept | learn |
| [Training](terms/%E8%AE%AD%E7%BB%83.md) | 让模型从数据里学会规律，产出这个模型。 | concept | learn |
| [Inference](terms/%E6%8E%A8%E7%90%86.md) | 训练完之后，真正拿来回答你问题的过程。 | concept | learn |
| [Prompt](terms/%E6%8F%90%E7%A4%BA%E8%AF%8D.md) | 你给模型的指令。说得越具体，模型的输出越准。 | model | apply |
| [Token](terms/Token.md) | 模型处理文本的最小单位。计费和长度限制都按它算。 | concept | apply |
| [Context Window](terms/%E4%B8%8A%E4%B8%8B%E6%96%87%E7%AA%97%E5%8F%A3.md) | 模型一次能「看见」多少内容。超出部分它就完全不知道。 | model | apply |
| [Vocabulary](terms/%E8%AF%8D%E8%A1%A8.md) | 模型认识的全部字符集合。大小决定了它懂不懂中文、懂不懂代码。 | concept | learn |
| [Product vs Model](terms/AI%20%E4%BA%A7%E5%93%81%20vs%20AI%20%E6%A8%A1%E5%9E%8B.md) | 区分「模型本身」和「你实际用的那个软件」。 | concept | learn |
| [Generative AI](terms/%E7%94%9F%E6%88%90%E5%BC%8F%20AI.md) | 能凭空产出新内容的 AI——文字、图片、音频、视频都算。 | concept | learn |
| [Agent vs Chatbot](terms/AI%20Agent%20%E4%B8%8E%E8%81%8A%E5%A4%A9%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%9A%84%E5%8C%BA%E5%88%AB.md) | 聊天的终点是回答，Agent 的终点是做完。 | concept | judge |
| [Open-source Ecosystem](terms/%E5%BC%80%E6%BA%90%E7%94%9F%E6%80%81.md) | 模型、工具、数据、文档都由社区维护，可自由组合。 | concept | learn |
| [Capability Boundary](terms/%E8%83%BD%E5%8A%9B%E8%BE%B9%E7%95%8C.md) | 知道模型明确做不到什么，比知道它能做什么更能避免踩坑。 | concept | guard |
| [Permission](terms/%E6%9D%83%E9%99%90.md) | 决定这个工具能碰你的哪些东西：读文件、改代码、发请求、花钱。 | agent | guard |

</details>

<details><summary><b>Layer 二 · 26 terms</b> — Know why it can do that (click to expand)</summary>

| Term | In one line | Domain | Use |
|---|---|---|---|
| [Hallucination](terms/%E5%B9%BB%E8%A7%89.md) | 模型用非常自信的语气说出看起来合理、但事实错误的内容。 | model | guard |
| [Multimodal](terms/%E5%A4%9A%E6%A8%A1%E6%80%81.md) | 能同时看图、读文档、听声音、生成图像，不只是处理文字。 | model | learn |
| [Reasoning Model](terms/%E6%8E%A8%E7%90%86%E6%A8%A1%E5%9E%8B.md) | 回答前先在内部「想」一串步骤，复杂问题的正确率明显更高。 | model | judge |
| [Temperature](terms/%E6%B8%A9%E5%BA%A6.md) | 控制模型输出的随机性。调低更稳，调高更有创意。 | model | apply |
| [Sampling](terms/%E9%87%87%E6%A0%B7%20-%20%E9%87%87%E6%A0%B7%E5%8F%82%E6%95%B0.md) | 模型在多个候选词里怎么挑，决定输出的发散程度。 | model | apply |
| [System Prompt](terms/%E7%B3%BB%E7%BB%9F%E6%8F%90%E7%A4%BA.md) | 给模型设定的角色和规则，决定它整个对话的基调。 | model | apply |
| [Fine-tuning](terms/%E5%BE%AE%E8%B0%83.md) | 拿一个已有的模型，用你自己的数据继续训练，让它更懂你的领域。 | model | apply |
| [RLHF / Alignment](terms/%E5%81%8F%E5%A5%BD%E5%AF%B9%E9%BD%90.md) | 让模型的输出符合人类偏好，而不是只会续写文本。 | concept | learn |
| [Knowledge Cutoff](terms/%E7%9F%A5%E8%AF%86%E6%88%AA%E6%AD%A2.md) | 模型训练数据的时间边界。边界之后的事它不知道。 | model | guard |
| [Retrieval-Augmented Generation, RAG](terms/%E8%81%94%E7%BD%91%20-%20%E6%A3%80%E7%B4%A2%E5%A2%9E%E5%BC%BA.md) | 回答之前先去查资料，把查到的内容塞进上下文里再回答。 | data | apply |
| [Embedding / Vector](terms/%E5%90%91%E9%87%8F%20-%20%E5%B5%8C%E5%85%A5.md) | 把一段文字变成一串数字，让机器能按「意思相近」而不是「字面相同」来检索。 | data | learn |
| [Vector Database](terms/%E5%90%91%E9%87%8F%E6%95%B0%E6%8D%AE%E5%BA%93.md) | 专门存和查这些数字数组的数据库，让 RAG 能在百万份文档里瞬间找到相关的那几段。 | data | apply |
| [Chunking](terms/%E5%88%86%E5%9D%97.md) | 把长文档切成小块再送进模型。切得好不好，直接决定回答准不准。 | data | apply |
| [Diffusion Model](terms/%E6%89%A9%E6%95%A3%E6%A8%A1%E5%9E%8B.md) | 生成图片的主流方法：从一片噪声一步步「擦」出图像。 | media | learn |
| [Latent Space](terms/%E6%BD%9C%E7%A9%BA%E9%97%B4.md) | 图像生成的关键机制——模型在压缩后的空间里处理，而不是原始像素。 | media | learn |
| [Contrastive Language-Image Pre-training](terms/CLIP.md) | 让模型理解「文字描述」和「图片内容」的对应关系，是文生图的基础。 | media | learn |
| [ControlNet](terms/ControlNet.md) | 让你用线稿、深度图、姿态图精确控制生成结果。 | media | apply |
| [ASR, Automatic Speech Recognition](terms/%E8%AF%AD%E9%9F%B3%E8%AF%86%E5%88%AB.md) | 把说的话转成文字。 | media | learn |
| [TTS, Text-to-Speech](terms/%E8%AF%AD%E9%9F%B3%E5%90%88%E6%88%90.md) | 把文字读出来。 | media | learn |
| [Digital Avatar](terms/%E6%95%B0%E5%AD%97%E4%BA%BA.md) | 有形象和声音的虚拟人，可用于客服、虚拟主播等场景。 | media | learn |
| [AI Search](terms/AI%20%E6%90%9C%E7%B4%A2.md) | 不用关键词，而是用一句话描述你想要什么，直接给答案。 | model | apply |
| [Video Generation](terms/%E8%A7%86%E9%A2%91%E7%94%9F%E6%88%90.md) | 从文字或图片生成短视频片段。 | media | learn |
| [Embodied AI](terms/%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD.md) | 让 AI 有身体、能感知环境并做出动作——机器人那一套。 | media | learn |
| [Computer Vision](terms/%E6%9C%BA%E5%99%A8%E8%A7%86%E8%A7%89.md) | 让摄像头「看懂」画面——识别人、物体、文字、动作。 | media | learn |
| [Autonomous Driving](terms/%E8%87%AA%E5%8A%A8%E9%A9%BE%E9%A9%B6.md) | 车辆自己识别环境、规划路线并控制方向盘。 | media | learn |
| [AI Accelerator](terms/AI%20%E8%8A%AF%E7%89%87.md) | 专门做 AI 运算的芯片，比通用 GPU 更高效但生态更封闭。 | infra | learn |

</details>

<details><summary><b>Layer 三 · 27 terms</b> — Judge good vs bad output (click to expand)</summary>

| Term | In one line | Domain | Use |
|---|---|---|---|
| [Agent](terms/%E6%99%BA%E8%83%BD%E4%BD%93%20-%20Agent.md) | 让模型不止回答，还能自己动手：调工具、查资料、写文件、循环执行直到完成。 | agent | apply |
| [Tool Calling / Function Calling](terms/%E5%B7%A5%E5%85%B7%E8%B0%83%E7%94%A8.md) | 模型自己决定「我要查一下数据库」，然后真的去调那个程序。 | agent | apply |
| [Model Context Protocol](terms/MCP.md) | 一套标准接口，让 AI 用统一的方式接外部工具和数据，不用为每个服务单独适配。 | agent | apply |
| [Multi-Agent](terms/%E5%A4%9A%20Agent%20%E5%8D%8F%E4%BD%9C.md) | 把一件复杂的事拆给多个各有所长的角色来分工完成。 | agent | apply |
| [Orchestration / Pipeline](terms/%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%BC%96%E6%8E%92.md) | 把「AI 做一步、人工确认、再做下一步」这种固定流程固定下来。 | agent | apply |
| [Memory](terms/%E8%AE%B0%E5%BF%86.md) | 让 Agent 跨对话记住事，不用每次都重新交代背景。 | agent | apply |
| [Long-running Task](terms/%E9%95%BF%E6%97%B6%E4%BB%BB%E5%8A%A1.md) | 跑几小时甚至几天、跨多个上下文的复杂工作。 | agent | apply |
| [Human-in-the-Loop](terms/%E4%BA%BA%E6%9C%BA%E5%8D%8F%E4%BD%9C.md) | 关键步骤让人确认，而不是全自动往下跑。 | agent | guard |
| [Guardrails](terms/%E6%8A%A4%E6%A0%8F.md) | 限制模型能做什么、不能做什么，防止它跑偏或做危险操作。 | agent | guard |
| [Sandbox](terms/%E6%B2%99%E7%AE%B1.md) | 把 AI 的操作关在一个受控环境里，出问题也出不到外面。 | agent | guard |
| [Evaluation, Evals](terms/%E8%AF%84%E4%BC%B0.md) | 判断一个方案到底好不好，而不是「看起来不错」。 | choice | judge |
| [Observability](terms/%E5%8F%AF%E8%A7%82%E6%B5%8B%E6%80%A7.md) | 看清模型这一趟到底做了什么、花了多少、错在哪一步。 | choice | judge |
| [Code Completion](terms/%E4%BB%A3%E7%A0%81%E8%A1%A5%E5%85%A8.md) | 在编辑器里根据上下文自动补出接下来的代码。 | dev | apply |
| [Repository-level Understanding](terms/%E4%BB%93%E5%BA%93%E7%BA%A7%E7%90%86%E8%A7%A3.md) | 让 AI 读懂整个项目，而不是只看当前打开的那一个文件。 | dev | apply |
| [CLI Agent](terms/%E7%BB%88%E7%AB%AF%20Agent.md) | 在命令行里自主执行任务：改文件、跑测试、提交代码。 | dev | apply |
| [Diff](terms/%E5%B7%AE%E5%BC%82%E5%AF%B9%E6%AF%94.md) | 看 AI 到底改了什么。这是接受 AI 代码最关键的一步。 | dev | guard |
| [App Server](terms/App%20Server.md) | 让同一个 AI 会话能在终端、编辑器、网页之间接力。 | dev | learn |
| [Agent Client Protocol](terms/ACP.md) | 让不同厂商的 AI 编码工具能挂进同一个编辑器。 | dev | apply |
| [Pair Programming](terms/%E9%85%8D%E5%AF%B9%E7%BC%96%E7%A8%8B.md) | AI 作为编程搭档，实时参与开发过程。 | dev | learn |
| [Browser Automation](terms/%E6%B5%8F%E8%A7%88%20-%20%E7%BD%91%E9%A1%B5%E6%93%8D%E4%BD%9C.md) | 让 AI 自己去点页面、填表单、截图取信息。 | agent | apply |
| [Reference Server](terms/%E5%8F%82%E8%80%83%E6%9C%8D%E5%8A%A1%E5%99%A8.md) | 官方提供的「标准示范」实现，用来告诉你协议该怎么写。 | agent | learn |
| [Version Control](terms/%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6.md) | 记录每一次改动，随时回退。这是 AI 编程的安全底座。 | dev | guard |
| [Continuous Integration, CI](terms/%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%90.md) | 代码一提交就自动跑测试和检查。 | dev | guard |
| [Prompt Injection](terms/%E6%8F%90%E7%A4%BA%E6%B3%A8%E5%85%A5.md) | 外部内容里藏着指令，骗AI 执行你没打算让它做的事。 | agent | guard |
| [Remote Execution](terms/%E8%BF%9C%E7%A8%8B%E6%89%A7%E8%A1%8C.md) | 云端 Agent 在你电脑上跑任务，关掉笔记本也不中断。 | agent | apply |
| [Skills](terms/%E6%8A%80%E8%83%BD%20-%20Skills.md) | 把重复的工作流程打包成可复用的能力。 | agent | apply |
| [Structured Output](terms/%E7%BB%93%E6%9E%84%E5%8C%96%E8%BE%93%E5%87%BA.md) | 让模型的回答是严格的格式（JSON 等），而不是一段散文。 | agent | apply |

</details>

<details><summary><b>Layer 四 · 9 terms</b> — Run it yourself (click to expand)</summary>

| Term | In one line | Domain | Use |
|---|---|---|---|
| [Transformer](terms/Transformer.md) | 当前所有主流大模型共用的底层架构。 | concept | learn |
| [Attention](terms/%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%9C%BA%E5%88%B6.md) | 让模型在处理一个词时，自动看向句子里最相关的其他词。 | concept | learn |
| [Positional Encoding](terms/%E4%BD%8D%E7%BD%AE%E7%BC%96%E7%A0%81.md) | 让模型知道每个词在句子里的先后顺序。 | concept | learn |
| [Embedding Layer](terms/%E5%B5%8C%E5%85%A5%E5%B1%82.md) | 把词变成数字向量的第一步，模型内部只认数字。 | concept | learn |
| [KV Cache](terms/KV%20%E7%BC%93%E5%AD%98.md) | 让模型逐字生成时不用每一步都重算整段话，生成速度才可用。 | infra | learn |
| [Context Cost](terms/%E4%B8%8A%E4%B8%8B%E6%96%87%E7%AA%97%E5%8F%A3%E7%9A%84%E4%BB%A3%E4%BB%B7.md) | 上下文开得越大越慢越贵，不是免费扩容。 | model | guard |
| [Pre-training](terms/%E9%A2%84%E8%AE%AD%E7%BB%83.md) | 在海量文本上做「预测下一个词」，这是模型学到世界知识的阶段。 | concept | learn |
| [Compute](terms/%E8%AE%AD%E7%BB%83%E7%AE%97%E5%8A%9B.md) | 训练和推理都要烧算力，这是 AI 最硬的资源门槛。 | infra | learn |
| [Inference Cost](terms/%E6%8E%A8%E7%90%86%E6%88%90%E6%9C%AC.md) | 模型每回答一次要花的钱，由输入和输出的 token 量决定。 | choice | judge |

</details>

<details><summary><b>Layer 五 · 14 terms</b> — Know where it breaks (click to expand)</summary>

| Term | In one line | Domain | Use |
|---|---|---|---|
| [Graphics Processing Unit](terms/GPU.md) | 真正做矩阵运算的芯片。跑大模型靠它，CPU 很慢。 | infra | learn |
| [VRAM](terms/%E6%98%BE%E5%AD%98.md) | 显卡上的内存。装不下模型就是硬装不下，跟别的无关。 | infra | judge |
| [Quantization](terms/%E9%87%8F%E5%8C%96.md) | 把模型权重从高精度压成低精度，省显存、提速，代价是质量下降。 | infra | apply |
| [Bits Per Weight](terms/bpw.md) | 量化档位的数值表示：平均每个权重占几个比特。 | infra | judge |
| [GGUF](terms/GGUF.md) | 本地跑模型的事实标准文件格式。llama.cpp 生态几乎只认它。 | infra | apply |
| [llama.cpp](terms/llama.cpp.md) | 在普通电脑上跑大模型的主流开源引擎，CPU 也能跑。 | infra | apply |
| [vLLM](terms/vLLM.md) | 在服务器上高并发跑模型的服务引擎。 | infra | learn |
| [-ngl / Offload](terms/GPU%20%E5%B1%82%E5%8D%B8%E8%BD%BD.md) | 把模型一部分交给 GPU、一部分留在 CPU，显存不够时的妥协手段。 | infra | apply |
| [Tensor Parallelism](terms/%E5%BC%A0%E9%87%8F%E5%B9%B6%E8%A1%8C.md) | 把一个模型拆到多张卡上一起算，单卡装不下时用。 | infra | learn |
| [MoE Offload / ncmoe](terms/%E4%B8%93%E5%AE%B6%E5%8D%B8%E8%BD%BD.md) | 对「专家很多但每次只激活一部分」的稀疏模型，把不常用的专家放内存里。 | infra | learn |
| [Time To First Token, TTFT](terms/%E9%A6%96%E5%AD%97%E5%BB%B6%E8%BF%9F.md) | 从发出提问到看到第一个字要多久。这个数字决定「感觉快不快」。 | infra | judge |
| [Throughput, TPS](terms/%E5%90%9E%E5%90%90.md) | 每秒能生成多少字。决定长文生成要等多久。 | infra | judge |
| [Prefill](terms/%E9%A2%84%E5%A1%AB%E5%85%85.md) | 把你输入的那一整段先读完，再开始生成回答的那一步。 | infra | learn |
| [Prompt Cache](terms/Prompt%20Cache.md) | 把重复的系统提示和资料缓存起来，重复问同一份上下文时省时间和钱。 | infra | apply |

</details>

<details><summary><b>Layer 六 · 22 terms</b> — Make decisions with it (click to expand)</summary>

| Term | In one line | Domain | Use |
|---|---|---|---|
| [Open-weight Model](terms/%E5%BC%80%E6%BA%90%E6%A8%A1%E5%9E%8B.md) | 权重公开、你可以下载下来在自己机器上跑、不用给厂商交钱。 | choice | judge |
| [Closed / Proprietary Model](terms/%E9%97%AD%E6%BA%90%E6%A8%A1%E5%9E%8B.md) | 你不拿到权重，只能通过官方接口调用。 | choice | judge |
| [License](terms/%E8%AE%B8%E5%8F%AF%E8%AF%81.md) | 规定你能不能用、能不能改、能不能商用。选型时最容易忽略的约束。 | choice | guard |
| [API](terms/API%20-%20%E6%8E%A5%E5%8F%A3%E8%B0%83%E7%94%A8.md) | 不自己搞模型，按用量付钱调用别人的。 | choice | judge |
| [Local Deployment](terms/%E6%9C%AC%E5%9C%B0%E9%83%A8%E7%BD%B2.md) | 模型下载到自己机器上跑，数据不外发。 | infra | judge |
| [Data Sovereignty](terms/%E6%95%B0%E6%8D%AE%E4%B8%8D%E5%87%BA%E7%BD%91.md) | 你的资料完全不经过第三方。这是很多场景的硬性要求。 | choice | guard |
| [Benchmark](terms/%E5%9F%BA%E5%87%86%E6%B5%8B%E8%AF%95.md) | 用统一的题库横向比较模型强弱。 | choice | judge |
| [Aggregate Score](terms/%E6%80%BB%E5%88%86%20-%20%E7%BB%BC%E5%90%88%E8%AF%84%E6%B5%8B.md) | 把多个基准的分数加权成一个总分，方便快速比较。 | choice | judge |
| [Vendor Lock-in](terms/%E4%BE%9B%E5%BA%94%E5%95%86%E9%94%81%E5%AE%9A.md) | 用得越深，换模型或换服务商越难。 | choice | guard |
| [Evaluation Limits](terms/%E6%A8%A1%E5%9E%8B%E8%AF%84%E6%B5%8B%E7%9A%84%E5%B1%80%E9%99%90.md) | 知道榜单分数不等于你的实际效果，这点很重要。 | choice | judge |
| [Privacy & Compliance](terms/%E9%9A%90%E7%A7%81%E4%B8%8E%E5%90%88%E8%A7%84.md) | 数据经过哪些机器、留存多久、有没有审计。 | choice | guard |
| [Cost per Call](terms/%E5%8D%95%E6%AC%A1%E8%B0%83%E7%94%A8%E6%88%90%E6%9C%AC.md) | 完成一次任务的实际花销，而不只是单价。 | choice | judge |
| [Caching Strategy](terms/%E7%BC%93%E5%AD%98%E7%AD%96%E7%95%A5.md) | 重复的内容不重复计算，直接复用。这是降本的第一手段。 | choice | apply |
| [Routing](terms/%E8%B7%AF%E7%94%B1.md) | 简单问题派给便宜快的模型，难问题派给强模型。 | choice | apply |
| [Self-hosting Cost](terms/%E8%87%AA%E6%89%98%E7%AE%A1%E6%88%90%E6%9C%AC.md) | 本地跑不花钱，但硬件、电费、运维都是真实成本。 | choice | judge |
| [Vendor Dependency](terms/%E6%9C%8D%E5%8A%A1%E4%B8%AD%E6%96%AD%E9%A3%8E%E9%99%A9.md) | 依赖别人的服务意味着它可能涨价、下线或限流。 | choice | guard |
| [Portability](terms/%E5%8F%AF%E6%9B%BF%E6%8D%A2%E6%80%A7.md) | 换个模型或服务商，需要改多少东西。 | choice | guard |
| [Community & Docs](terms/%E7%A4%BE%E5%8C%BA%E4%B8%8E%E6%96%87%E6%A1%A3.md) | 出问题能不能找到人问，接口有没有写清楚的文档。 | choice | judge |
| [Release Cadence](terms/%E8%BF%AD%E4%BB%A3%E9%80%9F%E5%BA%A6.md) | 项目更新有多快，版本是否稳定。 | choice | judge |
| [Exit Cost](terms/%E9%80%80%E5%87%BA%E6%88%90%E6%9C%AC.md) | 不用了，迁移走要付出多少。 | choice | guard |
| [Cost](terms/%E6%88%90%E6%9C%AC.md) | 为一个AI 方案实际要花多少钱。除了单价，还有你消耗掉的数量。 | choice | judge |
| [Transport](terms/%E4%BC%A0%E8%BE%93%E6%96%B9%E5%BC%8F.md) | 你的数据用什么方式送到模型或工具那里：留在本机还是发到第三方。 | data | learn |

</details>

### Browse by domain

- **choice** (23): [API](terms/API%20-%20%E6%8E%A5%E5%8F%A3%E8%B0%83%E7%94%A8.md) · [Vendor Lock-in](terms/%E4%BE%9B%E5%BA%94%E5%95%86%E9%94%81%E5%AE%9A.md) · [Cost per Call](terms/%E5%8D%95%E6%AC%A1%E8%B0%83%E7%94%A8%E6%88%90%E6%9C%AC.md) · [Portability](terms/%E5%8F%AF%E6%9B%BF%E6%8D%A2%E6%80%A7.md) · [Observability](terms/%E5%8F%AF%E8%A7%82%E6%B5%8B%E6%80%A7.md) · [Benchmark](terms/%E5%9F%BA%E5%87%86%E6%B5%8B%E8%AF%95.md) · [Open-weight Model](terms/%E5%BC%80%E6%BA%90%E6%A8%A1%E5%9E%8B.md) · [Aggregate Score](terms/%E6%80%BB%E5%88%86%20-%20%E7%BB%BC%E5%90%88%E8%AF%84%E6%B5%8B.md) · [Cost](terms/%E6%88%90%E6%9C%AC.md) · [Inference Cost](terms/%E6%8E%A8%E7%90%86%E6%88%90%E6%9C%AC.md) · [Data Sovereignty](terms/%E6%95%B0%E6%8D%AE%E4%B8%8D%E5%87%BA%E7%BD%91.md) · [Vendor Dependency](terms/%E6%9C%8D%E5%8A%A1%E4%B8%AD%E6%96%AD%E9%A3%8E%E9%99%A9.md) · [Evaluation Limits](terms/%E6%A8%A1%E5%9E%8B%E8%AF%84%E6%B5%8B%E7%9A%84%E5%B1%80%E9%99%90.md) · [Community & Docs](terms/%E7%A4%BE%E5%8C%BA%E4%B8%8E%E6%96%87%E6%A1%A3.md) · [Caching Strategy](terms/%E7%BC%93%E5%AD%98%E7%AD%96%E7%95%A5.md) · [Self-hosting Cost](terms/%E8%87%AA%E6%89%98%E7%AE%A1%E6%88%90%E6%9C%AC.md) · [License](terms/%E8%AE%B8%E5%8F%AF%E8%AF%81.md) · [Evaluation, Evals](terms/%E8%AF%84%E4%BC%B0.md) · [Routing](terms/%E8%B7%AF%E7%94%B1.md) · [Release Cadence](terms/%E8%BF%AD%E4%BB%A3%E9%80%9F%E5%BA%A6.md) · [Exit Cost](terms/%E9%80%80%E5%87%BA%E6%88%90%E6%9C%AC.md) · [Closed / Proprietary Model](terms/%E9%97%AD%E6%BA%90%E6%A8%A1%E5%9E%8B.md) · [Privacy & Compliance](terms/%E9%9A%90%E7%A7%81%E4%B8%8E%E5%90%88%E8%A7%84.md)
- **concept** (21): [Agent vs Chatbot](terms/AI%20Agent%20%E4%B8%8E%E8%81%8A%E5%A4%A9%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%9A%84%E5%8C%BA%E5%88%AB.md) · [Product vs Model](terms/AI%20%E4%BA%A7%E5%93%81%20vs%20AI%20%E6%A8%A1%E5%9E%8B.md) · [Token](terms/Token.md) · [Transformer](terms/Transformer.md) · [Artificial Intelligence, AI](terms/%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD.md) · [Positional Encoding](terms/%E4%BD%8D%E7%BD%AE%E7%BC%96%E7%A0%81.md) · [RLHF / Alignment](terms/%E5%81%8F%E5%A5%BD%E5%AF%B9%E9%BD%90.md) · [Parameter](terms/%E5%8F%82%E6%95%B0.md) · [Large Language Model, LLM](terms/%E5%A4%A7%E6%A8%A1%E5%9E%8B%20-%20%E5%A4%A7%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B.md) · [Embedding Layer](terms/%E5%B5%8C%E5%85%A5%E5%B1%82.md) · [Open-source Ecosystem](terms/%E5%BC%80%E6%BA%90%E7%94%9F%E6%80%81.md) · [Inference](terms/%E6%8E%A8%E7%90%86.md) · [Machine Learning, ML](terms/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0.md) · [Attention](terms/%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%9C%BA%E5%88%B6.md) · [Deep Learning](terms/%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0.md) · [Generative AI](terms/%E7%94%9F%E6%88%90%E5%BC%8F%20AI.md) · [Neural Network](terms/%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C.md) · [Capability Boundary](terms/%E8%83%BD%E5%8A%9B%E8%BE%B9%E7%95%8C.md) · [Training](terms/%E8%AE%AD%E7%BB%83.md) · [Vocabulary](terms/%E8%AF%8D%E8%A1%A8.md) · [Pre-training](terms/%E9%A2%84%E8%AE%AD%E7%BB%83.md)
- **infra** (18): [AI Accelerator](terms/AI%20%E8%8A%AF%E7%89%87.md) · [Bits Per Weight](terms/bpw.md) · [GGUF](terms/GGUF.md) · [-ngl / Offload](terms/GPU%20%E5%B1%82%E5%8D%B8%E8%BD%BD.md) · [Graphics Processing Unit](terms/GPU.md) · [KV Cache](terms/KV%20%E7%BC%93%E5%AD%98.md) · [llama.cpp](terms/llama.cpp.md) · [Prompt Cache](terms/Prompt%20Cache.md) · [vLLM](terms/vLLM.md) · [MoE Offload / ncmoe](terms/%E4%B8%93%E5%AE%B6%E5%8D%B8%E8%BD%BD.md) · [Throughput, TPS](terms/%E5%90%9E%E5%90%90.md) · [Tensor Parallelism](terms/%E5%BC%A0%E9%87%8F%E5%B9%B6%E8%A1%8C.md) · [VRAM](terms/%E6%98%BE%E5%AD%98.md) · [Local Deployment](terms/%E6%9C%AC%E5%9C%B0%E9%83%A8%E7%BD%B2.md) · [Compute](terms/%E8%AE%AD%E7%BB%83%E7%AE%97%E5%8A%9B.md) · [Quantization](terms/%E9%87%8F%E5%8C%96.md) · [Prefill](terms/%E9%A2%84%E5%A1%AB%E5%85%85.md) · [Time To First Token, TTFT](terms/%E9%A6%96%E5%AD%97%E5%BB%B6%E8%BF%9F.md)
- **agent** (17): [Model Context Protocol](terms/MCP.md) · [Human-in-the-Loop](terms/%E4%BA%BA%E6%9C%BA%E5%8D%8F%E4%BD%9C.md) · [Reference Server](terms/%E5%8F%82%E8%80%83%E6%9C%8D%E5%8A%A1%E5%99%A8.md) · [Multi-Agent](terms/%E5%A4%9A%20Agent%20%E5%8D%8F%E4%BD%9C.md) · [Orchestration / Pipeline](terms/%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%BC%96%E6%8E%92.md) · [Tool Calling / Function Calling](terms/%E5%B7%A5%E5%85%B7%E8%B0%83%E7%94%A8.md) · [Skills](terms/%E6%8A%80%E8%83%BD%20-%20Skills.md) · [Guardrails](terms/%E6%8A%A4%E6%A0%8F.md) · [Prompt Injection](terms/%E6%8F%90%E7%A4%BA%E6%B3%A8%E5%85%A5.md) · [Agent](terms/%E6%99%BA%E8%83%BD%E4%BD%93%20-%20Agent.md) · [Permission](terms/%E6%9D%83%E9%99%90.md) · [Sandbox](terms/%E6%B2%99%E7%AE%B1.md) · [Browser Automation](terms/%E6%B5%8F%E8%A7%88%20-%20%E7%BD%91%E9%A1%B5%E6%93%8D%E4%BD%9C.md) · [Structured Output](terms/%E7%BB%93%E6%9E%84%E5%8C%96%E8%BE%93%E5%87%BA.md) · [Memory](terms/%E8%AE%B0%E5%BF%86.md) · [Remote Execution](terms/%E8%BF%9C%E7%A8%8B%E6%89%A7%E8%A1%8C.md) · [Long-running Task](terms/%E9%95%BF%E6%97%B6%E4%BB%BB%E5%8A%A1.md)
- **model** (12): [AI Search](terms/AI%20%E6%90%9C%E7%B4%A2.md) · [Context Window](terms/%E4%B8%8A%E4%B8%8B%E6%96%87%E7%AA%97%E5%8F%A3.md) · [Context Cost](terms/%E4%B8%8A%E4%B8%8B%E6%96%87%E7%AA%97%E5%8F%A3%E7%9A%84%E4%BB%A3%E4%BB%B7.md) · [Multimodal](terms/%E5%A4%9A%E6%A8%A1%E6%80%81.md) · [Hallucination](terms/%E5%B9%BB%E8%A7%89.md) · [Fine-tuning](terms/%E5%BE%AE%E8%B0%83.md) · [Reasoning Model](terms/%E6%8E%A8%E7%90%86%E6%A8%A1%E5%9E%8B.md) · [Prompt](terms/%E6%8F%90%E7%A4%BA%E8%AF%8D.md) · [Temperature](terms/%E6%B8%A9%E5%BA%A6.md) · [Knowledge Cutoff](terms/%E7%9F%A5%E8%AF%86%E6%88%AA%E6%AD%A2.md) · [System Prompt](terms/%E7%B3%BB%E7%BB%9F%E6%8F%90%E7%A4%BA.md) · [Sampling](terms/%E9%87%87%E6%A0%B7%20-%20%E9%87%87%E6%A0%B7%E5%8F%82%E6%95%B0.md)
- **media** (11): [Contrastive Language-Image Pre-training](terms/CLIP.md) · [ControlNet](terms/ControlNet.md) · [Embodied AI](terms/%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD.md) · [Diffusion Model](terms/%E6%89%A9%E6%95%A3%E6%A8%A1%E5%9E%8B.md) · [Digital Avatar](terms/%E6%95%B0%E5%AD%97%E4%BA%BA.md) · [Computer Vision](terms/%E6%9C%BA%E5%99%A8%E8%A7%86%E8%A7%89.md) · [Latent Space](terms/%E6%BD%9C%E7%A9%BA%E9%97%B4.md) · [Autonomous Driving](terms/%E8%87%AA%E5%8A%A8%E9%A9%BE%E9%A9%B6.md) · [Video Generation](terms/%E8%A7%86%E9%A2%91%E7%94%9F%E6%88%90.md) · [TTS, Text-to-Speech](terms/%E8%AF%AD%E9%9F%B3%E5%90%88%E6%88%90.md) · [ASR, Automatic Speech Recognition](terms/%E8%AF%AD%E9%9F%B3%E8%AF%86%E5%88%AB.md)
- **dev** (9): [Agent Client Protocol](terms/ACP.md) · [App Server](terms/App%20Server.md) · [Repository-level Understanding](terms/%E4%BB%93%E5%BA%93%E7%BA%A7%E7%90%86%E8%A7%A3.md) · [Code Completion](terms/%E4%BB%A3%E7%A0%81%E8%A1%A5%E5%85%A8.md) · [Diff](terms/%E5%B7%AE%E5%BC%82%E5%AF%B9%E6%AF%94.md) · [Continuous Integration, CI](terms/%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%90.md) · [Version Control](terms/%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6.md) · [CLI Agent](terms/%E7%BB%88%E7%AB%AF%20Agent.md) · [Pair Programming](terms/%E9%85%8D%E5%AF%B9%E7%BC%96%E7%A8%8B.md)
- **data** (5): [Transport](terms/%E4%BC%A0%E8%BE%93%E6%96%B9%E5%BC%8F.md) · [Chunking](terms/%E5%88%86%E5%9D%97.md) · [Embedding / Vector](terms/%E5%90%91%E9%87%8F%20-%20%E5%B5%8C%E5%85%A5.md) · [Vector Database](terms/%E5%90%91%E9%87%8F%E6%95%B0%E6%8D%AE%E5%BA%93.md) · [Retrieval-Augmented Generation, RAG](terms/%E8%81%94%E7%BD%91%20-%20%E6%A3%80%E7%B4%A2%E5%A2%9E%E5%BC%BA.md)

<!-- INDEX:END -->

## Measured size (A8)

<!-- STATS:BEGIN 由 _audit/gen-repo-docs.mjs 生成，勿手改 -->
| Item | Measured value |
|---|---|
| Terms | 116 |
| Layers | 1 18 · 2 26 · 3 27 · 4 9 · 5 14 · 6 22 |
| Domain | choice 23 · concept 21 · infra 18 · agent 17 · model 12 · media 11 · dev 9 · data 5 |
| Purpose (purposeTag) | learn 42 · apply 34 · judge 21 · guard 19 |
| Source entries (refs) | 187 |
| English coverage | 116 / 116 |
<!-- STATS:END -->

## Why a glossary and not a list

Most "AI terms" pages are a wall of definitions with no order. This one is built around a
different question: **what do I need to understand first, and what can I safely skip?**

- Six layers, ordered by dependency — not alphabetically, not by how trendy a term is
- Every term carries its sources (`refs`), so any claim can be traced back
- No scoring, no ranking. A score hides the tradeoff, and the tradeoff is the decision

## Where the English lives

English is **not** machine-translated from the Chinese. Each term has an independently
maintained English entry in `terms.en.json` (key = the Markdown filename).

Both sets are covered by the `bilingual-coverage` gate; a term missing English fails the build.

## Licensing

Content is [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) (free to reuse and adapt,
including commercially, with attribution); source code is MIT.
Where our own content ends and third-party content begins: <https://specul.com/legal.html>.

## Related

- Live site: <https://learn.specul.com>
- Repo: <https://github.com/speculcom/ai-glossary>