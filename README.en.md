# Learn AI · Glossary Atlas (ai-glossary)

> 中文版：[README.md](./README.md)

AI jargon has a way of going over your head — you hear a term ten times in a day and
still can't say what anyone just said. This repo takes 116 of the most common ones
apart: **what it is, why you'd need it, and where the claim comes from.**

**Who it's for**: people meeting AI for the first time, who'd rather not start with a paper.
**Who it's not for**: people looking for "which model is the best" — there are no
rankings here, and there won't be.

Live version: <https://learn.specul.com/>

---

## How to read this

Pick one, based on where you are right now:

| Where you are | Which path |
|---|---|
| I know nothing, I want a start | Read the **six layers** in order. Don't skip — if a layer-four term makes no sense, it's usually layer three you skipped |
| I only care about one kind of thing | Browse by the **8 domains** (concept / model / development / agent / data / media / infrastructure / choice) |
| I came here with a specific problem | Browse by the **4 purposes**: Learn · Build · Avoid · Choose |

All three routes lead to the same terms. Only the entrance differs.

---

## How the six layers are ordered

One rule decides the order: **later terms lean on earlier ones.**

| Layer | What it settles | Terms |
|---|---|---|
| 1 | Explain to a human what AI is doing | 18 |
| 2 | Know why it's able to do that | 26 |
| 3 | Tell good output from bad | 27 |
| 4 | Run it yourself | 9 |
| 5 | Know where it falls over | 14 |
| 6 | Make decisions with it | 22 |

A concrete case: "context window" sits in layer one, "Transformer" in layer two.
Start at layer two with the Transformer paper and you will stall — not because you
are slow, because the groundwork isn't there.

---

## What this repo does not do

Saying it up front so you don't go hunting for something that isn't here:

- **No rankings.** One total score flattens every trade-off into a single number —
  and trade-offs are exactly what your decision depends on.
- **No invented numbers.** If we couldn't find it, we write "unknown" and say why.
- **No terms without sources.** Every entry carries at least one reference, so you
  can always go back and check us.

---

## What's in these files

```
ai-glossary/
├── terms/              116 terms, one file each (frontmatter + a fixed body skeleton)
│   └── INDEX.md        build output · layered index, do not edit by hand
├── terms.en.json       English text (keyed by the Chinese term name)
├── meta.js             the three classification schemes: layer / domain / purpose
├── dims.js             three observation dimensions (model access / runtime / transport)
├── SCHEMA.md           term format spec
└── scripts/build.mjs   the build script (includes a field-by-field equivalence gate)
```

To change content: edit `terms/*.md`, then run `node scripts/build.mjs`.
To add a term: follow `SCHEMA.md` rather than copying one and nudging it — an
inconsistent skeleton gets caught by the validator.

---

## Content index

<!-- INDEX:BEGIN generated, do not edit -->

## Content index

### Read in order — the six layers

| Layer | What it settles | Terms |
|---|---|---|
| **1** | Explain AI to a human | 18 |
| **2** | Know why it can do that | 26 |
| **3** | Judge good vs bad output | 27 |
| **4** | Run it yourself | 9 |
| **5** | Know where it breaks | 14 |
| **6** | Make decisions with it | 22 |

<details><summary><b>Layer 1 · 18 terms</b> — Explain AI to a human (click to expand)</summary>

| Term | In one line | Domain | Use |
|---|---|---|---|
| [Artificial Intelligence, AI](terms/%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD.md) | Let machines do what used to need human intelligence — see … | Concept | Learn |
| [Machine Learning, ML](terms/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0.md) | Instead of writing rules by hand, let the machine find patt… | Concept | Learn |
| [Deep Learning](terms/%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0.md) | Stack many layers so the network learns its own features in… | Concept | Learn |
| [Neural Network](terms/%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C.md) | A network of simple units whose combined output can approxi… | Concept | Learn |
| [Large Language Model, LLM](terms/%E5%A4%A7%E6%A8%A1%E5%9E%8B%20-%20%E5%A4%A7%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B.md) | After training, the learned parameters that let a system ge… | Concept | Learn |
| [Parameter](terms/%E5%8F%82%E6%95%B0.md) | The numbers the training process adjusts; everything the mo… | Concept | Learn |
| [Training](terms/%E8%AE%AD%E7%BB%83.md) | Let the system learn its parameters from data by repeated e… | Concept | Learn |
| [Inference](terms/%E6%8E%A8%E7%90%86.md) | The model you trained is now answering real queries — a dif… | Concept | Learn |
| [Prompt](terms/%E6%8F%90%E7%A4%BA%E8%AF%8D.md) | The instructions you give the model, and often the main lev… | Model | Build |
| [Token](terms/Token.md) | The smallest unit a model processes text in. Both billing a… | Concept | Build |
| [Context Window](terms/%E4%B8%8A%E4%B8%8B%E6%96%87%E7%AA%97%E5%8F%A3.md) | How much the model can see at once — the page of text it ca… | Model | Build |
| [Vocabulary](terms/%E8%AF%8D%E8%A1%A8.md) | The full set of characters a model knows. Its size decides … | Concept | Learn |
| [Product vs Model](terms/AI%20%E4%BA%A7%E5%93%81%20vs%20AI%20%E6%A8%A1%E5%9E%8B.md) | Separate the model itself from the piece of software you ac… | Concept | Learn |
| [Generative AI](terms/%E7%94%9F%E6%88%90%E5%BC%8F%20AI.md) | AI that produces new content from nothing — text, images, a… | Concept | Learn |
| [Agent vs Chatbot](terms/AI%20Agent%20%E4%B8%8E%E8%81%8A%E5%A4%A9%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%9A%84%E5%8C%BA%E5%88%AB.md) | A chatbot's job ends with an answer; an agent's ends with t… | Concept | Choose |
| [Open-source Ecosystem](terms/%E5%BC%80%E6%BA%90%E7%94%9F%E6%80%81.md) | Models, tools, data and documentation all maintained by the… | Concept | Learn |
| [Capability Boundary](terms/%E8%83%BD%E5%8A%9B%E8%BE%B9%E7%95%8C.md) | Knowing precisely what a model cannot do prevents more mist… | Concept | Avoid |
| [Permission](terms/%E6%9D%83%E9%99%90.md) | The set of operations a tool is allowed to perform. Wider i… | Agent | Avoid |

</details>

<details><summary><b>Layer 2 · 26 terms</b> — Know why it can do that (click to expand)</summary>

| Term | In one line | Domain | Use |
|---|---|---|---|
| [Hallucination](terms/%E5%B9%BB%E8%A7%89.md) | The model states something plausible and confident that is … | Model | Avoid |
| [Multimodal](terms/%E5%A4%9A%E6%A8%A1%E6%80%81.md) | Handle text, images, audio and video in one system rather t… | Model | Learn |
| [Reasoning Model](terms/%E6%8E%A8%E7%90%86%E6%A8%A1%E5%9E%8B.md) | Works through a chain of internal steps before answering, w… | Model | Choose |
| [Temperature](terms/%E6%B8%A9%E5%BA%A6.md) | Controls how random the output is. Lower is steadier; highe… | Model | Build |
| [Sampling](terms/%E9%87%87%E6%A0%B7%20-%20%E9%87%87%E6%A0%B7%E5%8F%82%E6%95%B0.md) | How the model picks among candidate tokens — this determine… | Model | Build |
| [System Prompt](terms/%E7%B3%BB%E7%BB%9F%E6%8F%90%E7%A4%BA.md) | The role and rules set for a model, which determine the ton… | Model | Build |
| [Fine-tuning](terms/%E5%BE%AE%E8%B0%83.md) | Teach an existing model a specific task or style, rather th… | Model | Build |
| [RLHF / Alignment](terms/%E5%81%8F%E5%A5%BD%E5%AF%B9%E9%BD%90.md) | Makes a model's output match human preference, rather than … | Concept | Learn |
| [Knowledge Cutoff](terms/%E7%9F%A5%E8%AF%86%E6%88%AA%E6%AD%A2.md) | The date boundary of a model's training data. Anything afte… | Model | Avoid |
| [Retrieval-Augmented Generation, RAG](terms/%E8%81%94%E7%BD%91%20-%20%E6%A3%80%E7%B4%A2%E5%A2%9E%E5%BC%BA.md) | Let the model look things up before answering, instead of a… | Data | Build |
| [Embedding / Vector](terms/%E5%90%91%E9%87%8F%20-%20%E5%B5%8C%E5%85%A5.md) | Represent text as coordinates, so meaning can be compared b… | Data | Learn |
| [Vector Database](terms/%E5%90%91%E9%87%8F%E6%95%B0%E6%8D%AE%E5%BA%93.md) | A database built to store and search those numeric arrays, … | Data | Build |
| [Chunking](terms/%E5%88%86%E5%9D%97.md) | Cut a long document into pieces before feeding it to the mo… | Data | Build |
| [Diffusion Model](terms/%E6%89%A9%E6%95%A3%E6%A8%A1%E5%9E%8B.md) | The dominant method for image generation: "wipe" an image o… | Media | Learn |
| [Latent Space](terms/%E6%BD%9C%E7%A9%BA%E9%97%B4.md) | The key mechanism in image generation — the model works in … | Media | Learn |
| [Contrastive Language-Image Pre-training](terms/CLIP.md) | Lets a model relate text descriptions to image content — th… | Media | Learn |
| [ControlNet](terms/ControlNet.md) | Gives precise control over the result using line art, depth… | Media | Build |
| [ASR, Automatic Speech Recognition](terms/%E8%AF%AD%E9%9F%B3%E8%AF%86%E5%88%AB.md) | Turn what was said into text. | Media | Learn |
| [TTS, Text-to-Speech](terms/%E8%AF%AD%E9%9F%B3%E5%90%88%E6%88%90.md) | Read text out loud. | Media | Learn |
| [Digital Avatar](terms/%E6%95%B0%E5%AD%97%E4%BA%BA.md) | A virtual person with an appearance and a voice, used for c… | Media | Learn |
| [AI Search](terms/AI%20%E6%90%9C%E7%B4%A2.md) | Describe what you want in a sentence instead of keywords, a… | Model | Build |
| [Video Generation](terms/%E8%A7%86%E9%A2%91%E7%94%9F%E6%88%90.md) | Generating short video clips from text or images. | Media | Learn |
| [Embodied AI](terms/%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD.md) | Giving AI a body so it can sense its surroundings and act —… | Media | Learn |
| [Computer Vision](terms/%E6%9C%BA%E5%99%A8%E8%A7%86%E8%A7%89.md) | Lets a camera "see" — recognise people, objects, text and a… | Media | Learn |
| [Autonomous Driving](terms/%E8%87%AA%E5%8A%A8%E9%A9%BE%E9%A9%B6.md) | The vehicle senses its surroundings, plans a route and cont… | Media | Learn |
| [AI Accelerator](terms/AI%20%E8%8A%AF%E7%89%87.md) | Chips built specifically for AI computation — more efficien… | Infrastructure | Learn |

</details>

<details><summary><b>Layer 3 · 27 terms</b> — Judge good vs bad output (click to expand)</summary>

| Term | In one line | Domain | Use |
|---|---|---|---|
| [Agent](terms/%E6%99%BA%E8%83%BD%E4%BD%93%20-%20Agent.md) | Stop answering and start acting: let the model take multi-s… | Agent | Build |
| [Tool Calling / Function Calling](terms/%E5%B7%A5%E5%85%B7%E8%B0%83%E7%94%A8.md) | Let the model actually do things — search, run code, edit f… | Agent | Build |
| [Model Context Protocol](terms/MCP.md) | A standard interface for connecting AI to external tools an… | Agent | Build |
| [Multi-Agent](terms/%E5%A4%9A%20Agent%20%E5%8D%8F%E4%BD%9C.md) | Split a complex job across several roles, each strong at so… | Agent | Build |
| [Orchestration / Pipeline](terms/%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%BC%96%E6%8E%92.md) | Fix a repeated pattern: the AI does a step, a human confirm… | Agent | Build |
| [Memory](terms/%E8%AE%B0%E5%BF%86.md) | Let an agent remember things across conversations instead o… | Agent | Build |
| [Long-running Task](terms/%E9%95%BF%E6%97%B6%E4%BB%BB%E5%8A%A1.md) | Work running for hours or days across many contexts. | Agent | Build |
| [Human-in-the-Loop](terms/%E4%BA%BA%E6%9C%BA%E5%8D%8F%E4%BD%9C.md) | A human confirms the key steps instead of the system runnin… | Agent | Avoid |
| [Guardrails](terms/%E6%8A%A4%E6%A0%8F.md) | Constrain what the model may and may not do, so it does not… | Agent | Avoid |
| [Sandbox](terms/%E6%B2%99%E7%AE%B1.md) | Confine what the AI does to a controlled environment so a m… | Agent | Avoid |
| [Evaluation, Evals](terms/%E8%AF%84%E4%BC%B0.md) | Decide whether an approach is actually good, rather than me… | Choice | Choose |
| [Observability](terms/%E5%8F%AF%E8%A7%82%E6%B5%8B%E6%80%A7.md) | See what the model actually did this run, what it cost, and… | Choice | Choose |
| [Code Completion](terms/%E4%BB%A3%E7%A0%81%E8%A1%A5%E5%85%A8.md) | Complete the following code automatically in the editor, ba… | Development | Build |
| [Repository-level Understanding](terms/%E4%BB%93%E5%BA%93%E7%BA%A7%E7%90%86%E8%A7%A3.md) | Let the AI read the whole project, not just the file that h… | Development | Build |
| [CLI Agent](terms/%E7%BB%88%E7%AB%AF%20Agent.md) | Run tasks autonomously in the command line: edit files, run… | Development | Build |
| [Diff](terms/%E5%B7%AE%E5%BC%82%E5%AF%B9%E6%AF%94.md) | See exactly what the AI changed — the most important step w… | Development | Avoid |
| [App Server](terms/App%20Server.md) | Let one AI session hand off between terminal, editor and we… | Development | Learn |
| [Agent Client Protocol](terms/ACP.md) | Let AI coding tools from different vendors plug into the sa… | Development | Build |
| [Pair Programming](terms/%E9%85%8D%E5%AF%B9%E7%BC%96%E7%A8%8B.md) | AI as a programming partner taking part in development in r… | Development | Learn |
| [Browser Automation](terms/%E6%B5%8F%E8%A7%88%20-%20%E7%BD%91%E9%A1%B5%E6%93%8D%E4%BD%9C.md) | Let the AI click pages, fill forms and take screenshots to … | Agent | Build |
| [Reference Server](terms/%E5%8F%82%E8%80%83%E6%9C%8D%E5%8A%A1%E5%99%A8.md) | Official "reference" implementations showing how the protoc… | Agent | Learn |
| [Version Control](terms/%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6.md) | Record every change and roll back at will — the safety foun… | Development | Avoid |
| [Continuous Integration, CI](terms/%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%90.md) | Tests and checks run automatically as soon as code is commi… | Development | Avoid |
| [Prompt Injection](terms/%E6%8F%90%E7%A4%BA%E6%B3%A8%E5%85%A5.md) | The main security risk in agent systems: content that talks… | Agent | Avoid |
| [Remote Execution](terms/%E8%BF%9C%E7%A8%8B%E6%89%A7%E8%A1%8C.md) | A cloud agent runs tasks on your machine, so closing the la… | Agent | Build |
| [Skills](terms/%E6%8A%80%E8%83%BD%20-%20Skills.md) | Package a repetitive workflow into a reusable capability. | Agent | Build |
| [Structured Output](terms/%E7%BB%93%E6%9E%84%E5%8C%96%E8%BE%93%E5%87%BA.md) | Make the model's answer a strict format (JSON and the like)… | Agent | Build |

</details>

<details><summary><b>Layer 4 · 9 terms</b> — Run it yourself (click to expand)</summary>

| Term | In one line | Domain | Use |
|---|---|---|---|
| [Transformer](terms/Transformer.md) | The architecture underneath every mainstream large model to… | Concept | Learn |
| [Attention](terms/%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%9C%BA%E5%88%B6.md) | When processing one word, the model automatically looks at … | Concept | Learn |
| [Positional Encoding](terms/%E4%BD%8D%E7%BD%AE%E7%BC%96%E7%A0%81.md) | Lets the model know the order of words in a sentence. | Concept | Learn |
| [Embedding Layer](terms/%E5%B5%8C%E5%85%A5%E5%B1%82.md) | The first step of turning words into numeric vectors — mode… | Concept | Learn |
| [KV Cache](terms/KV%20%E7%BC%93%E5%AD%98.md) | Stops the model recomputing the whole passage on every toke… | Infrastructure | Learn |
| [Context Cost](terms/%E4%B8%8A%E4%B8%8B%E6%96%87%E7%AA%97%E5%8F%A3%E7%9A%84%E4%BB%A3%E4%BB%B7.md) | A larger context window is slower and more expensive — it i… | Model | Avoid |
| [Pre-training](terms/%E9%A2%84%E8%AE%AD%E7%BB%83.md) | Predicting the next token over vast text — the stage where … | Concept | Learn |
| [Compute](terms/%E8%AE%AD%E7%BB%83%E7%AE%97%E5%8A%9B.md) | Both training and inference burn compute. This is AI's hard… | Infrastructure | Learn |
| [Inference Cost](terms/%E6%8E%A8%E7%90%86%E6%88%90%E6%9C%AC.md) | What a model costs per answer, determined by how many token… | Choice | Choose |

</details>

<details><summary><b>Layer 5 · 14 terms</b> — Know where it breaks (click to expand)</summary>

| Term | In one line | Domain | Use |
|---|---|---|---|
| [Graphics Processing Unit](terms/GPU.md) | The chip that actually does the matrix arithmetic. Large mo… | Infrastructure | Learn |
| [VRAM](terms/%E6%98%BE%E5%AD%98.md) | Memory on the graphics card. If the model does not fit, it … | Infrastructure | Choose |
| [Quantization](terms/%E9%87%8F%E5%8C%96.md) | Compress model weights from high to low precision, saving V… | Infrastructure | Build |
| [Bits Per Weight](terms/bpw.md) | The numeric form of a quantisation level: how many bits eac… | Infrastructure | Choose |
| [GGUF](terms/GGUF.md) | The de facto standard file format for running models locall… | Infrastructure | Build |
| [llama.cpp](terms/llama.cpp.md) | The mainstream open-source engine for running large models … | Infrastructure | Build |
| [vLLM](terms/vLLM.md) | A serving engine for running models at high concurrency on … | Infrastructure | Learn |
| [-ngl / Offload](terms/GPU%20%E5%B1%82%E5%8D%B8%E8%BD%BD.md) | Give part of the model to the GPU and keep the rest on the … | Infrastructure | Build |
| [Tensor Parallelism](terms/%E5%BC%A0%E9%87%8F%E5%B9%B6%E8%A1%8C.md) | Split one model across several GPUs when it does not fit on… | Infrastructure | Learn |
| [MoE Offload / ncmoe](terms/%E4%B8%93%E5%AE%B6%E5%8D%B8%E8%BD%BD.md) | For sparse models with many experts where only a few activa… | Infrastructure | Learn |
| [Time To First Token, TTFT](terms/%E9%A6%96%E5%AD%97%E5%BB%B6%E8%BF%9F.md) | How long from sending a question to seeing the first word. … | Infrastructure | Choose |
| [Throughput, TPS](terms/%E5%90%9E%E5%90%90.md) | How many tokens per second come out. It determines how long… | Infrastructure | Choose |
| [Prefill](terms/%E9%A2%84%E5%A1%AB%E5%85%85.md) | The step where your whole input is read through before gene… | Infrastructure | Learn |
| [Prompt Cache](terms/Prompt%20Cache.md) | Cache repeated system prompts and documents, saving time an… | Infrastructure | Build |

</details>

<details><summary><b>Layer 6 · 22 terms</b> — Make decisions with it (click to expand)</summary>

| Term | In one line | Domain | Use |
|---|---|---|---|
| [Open-weight Model](terms/%E5%BC%80%E6%BA%90%E6%A8%A1%E5%9E%8B.md) | The weights are public: you can download them, run them on … | Choice | Choose |
| [Closed / Proprietary Model](terms/%E9%97%AD%E6%BA%90%E6%A8%A1%E5%9E%8B.md) | You do not get the weights; you can only call it through th… | Choice | Choose |
| [License](terms/%E8%AE%B8%E5%8F%AF%E8%AF%81.md) | What you may do with it: use, modify, or commercialise. The… | Choice | Avoid |
| [API](terms/API%20-%20%E6%8E%A5%E5%8F%A3%E8%B0%83%E7%94%A8.md) | Do not run a model yourself — pay per use for someone else'… | Choice | Choose |
| [Local Deployment](terms/%E6%9C%AC%E5%9C%B0%E9%83%A8%E7%BD%B2.md) | Download the model and run it on your own machine, so data … | Infrastructure | Choose |
| [Data Sovereignty](terms/%E6%95%B0%E6%8D%AE%E4%B8%8D%E5%87%BA%E7%BD%91.md) | Your material never passes through a third party. This is a… | Choice | Avoid |
| [Benchmark](terms/%E5%9F%BA%E5%87%86%E6%B5%8B%E8%AF%95.md) | Compare models head to head using a shared question set. | Choice | Choose |
| [Aggregate Score](terms/%E6%80%BB%E5%88%86%20-%20%E7%BB%BC%E5%90%88%E8%AF%84%E6%B5%8B.md) | Collapse several benchmark scores into one number for quick… | Choice | Choose |
| [Vendor Lock-in](terms/%E4%BE%9B%E5%BA%94%E5%95%86%E9%94%81%E5%AE%9A.md) | The deeper you go, the harder it is to switch models or pro… | Choice | Avoid |
| [Evaluation Limits](terms/%E6%A8%A1%E5%9E%8B%E8%AF%84%E6%B5%8B%E7%9A%84%E5%B1%80%E9%99%90.md) | A leaderboard score is not the same as your actual result —… | Choice | Choose |
| [Privacy & Compliance](terms/%E9%9A%90%E7%A7%81%E4%B8%8E%E5%90%88%E8%A7%84.md) | Which machines data passes through, how long it is retained… | Choice | Avoid |
| [Cost per Call](terms/%E5%8D%95%E6%AC%A1%E8%B0%83%E7%94%A8%E6%88%90%E6%9C%AC.md) | What a task actually costs to run, not just the unit price. | Choice | Choose |
| [Caching Strategy](terms/%E7%BC%93%E5%AD%98%E7%AD%96%E7%95%A5.md) | Do not recompute repeated content; reuse it directly. The f… | Choice | Build |
| [Routing](terms/%E8%B7%AF%E7%94%B1.md) | Send easy questions to a cheap fast model and hard ones to … | Choice | Build |
| [Self-hosting Cost](terms/%E8%87%AA%E6%89%98%E7%AE%A1%E6%88%90%E6%9C%AC.md) | Running locally costs no per-token fee, but hardware, elect… | Choice | Choose |
| [Vendor Dependency](terms/%E6%9C%8D%E5%8A%A1%E4%B8%AD%E6%96%AD%E9%A3%8E%E9%99%A9.md) | Depending on someone else's service means it may raise pric… | Choice | Avoid |
| [Portability](terms/%E5%8F%AF%E6%9B%BF%E6%8D%A2%E6%80%A7.md) | How much has to change if you swap models or providers. | Choice | Avoid |
| [Community & Docs](terms/%E7%A4%BE%E5%8C%BA%E4%B8%8E%E6%96%87%E6%A1%A3.md) | When something breaks, can you find someone to ask, and is … | Choice | Choose |
| [Release Cadence](terms/%E8%BF%AD%E4%BB%A3%E9%80%9F%E5%BA%A6.md) | How fast the project moves and how stable its versions are. | Choice | Choose |
| [Exit Cost](terms/%E9%80%80%E5%87%BA%E6%88%90%E6%9C%AC.md) | What it costs to migrate away when you stop using it. | Choice | Avoid |
| [Cost](terms/%E6%88%90%E6%9C%AC.md) | What an AI approach actually costs. Beyond unit price there… | Choice | Choose |
| [Transport](terms/%E4%BC%A0%E8%BE%93%E6%96%B9%E5%BC%8F.md) | How your data actually reaches the model or tool: staying o… | Data | Learn |

</details>

### Browse by domain — "I only care about one kind of thing"

- **Choice** (23): [API](terms/API%20-%20%E6%8E%A5%E5%8F%A3%E8%B0%83%E7%94%A8.md) · [Vendor Lock-in](terms/%E4%BE%9B%E5%BA%94%E5%95%86%E9%94%81%E5%AE%9A.md) · [Cost per Call](terms/%E5%8D%95%E6%AC%A1%E8%B0%83%E7%94%A8%E6%88%90%E6%9C%AC.md) · [Portability](terms/%E5%8F%AF%E6%9B%BF%E6%8D%A2%E6%80%A7.md) · [Observability](terms/%E5%8F%AF%E8%A7%82%E6%B5%8B%E6%80%A7.md) · [Benchmark](terms/%E5%9F%BA%E5%87%86%E6%B5%8B%E8%AF%95.md) · [Open-weight Model](terms/%E5%BC%80%E6%BA%90%E6%A8%A1%E5%9E%8B.md) · [Aggregate Score](terms/%E6%80%BB%E5%88%86%20-%20%E7%BB%BC%E5%90%88%E8%AF%84%E6%B5%8B.md) · [Cost](terms/%E6%88%90%E6%9C%AC.md) · [Inference Cost](terms/%E6%8E%A8%E7%90%86%E6%88%90%E6%9C%AC.md) · [Data Sovereignty](terms/%E6%95%B0%E6%8D%AE%E4%B8%8D%E5%87%BA%E7%BD%91.md) · [Vendor Dependency](terms/%E6%9C%8D%E5%8A%A1%E4%B8%AD%E6%96%AD%E9%A3%8E%E9%99%A9.md) · [Evaluation Limits](terms/%E6%A8%A1%E5%9E%8B%E8%AF%84%E6%B5%8B%E7%9A%84%E5%B1%80%E9%99%90.md) · [Community & Docs](terms/%E7%A4%BE%E5%8C%BA%E4%B8%8E%E6%96%87%E6%A1%A3.md) · [Caching Strategy](terms/%E7%BC%93%E5%AD%98%E7%AD%96%E7%95%A5.md) · [Self-hosting Cost](terms/%E8%87%AA%E6%89%98%E7%AE%A1%E6%88%90%E6%9C%AC.md) · [License](terms/%E8%AE%B8%E5%8F%AF%E8%AF%81.md) · [Evaluation, Evals](terms/%E8%AF%84%E4%BC%B0.md) · [Routing](terms/%E8%B7%AF%E7%94%B1.md) · [Release Cadence](terms/%E8%BF%AD%E4%BB%A3%E9%80%9F%E5%BA%A6.md) · [Exit Cost](terms/%E9%80%80%E5%87%BA%E6%88%90%E6%9C%AC.md) · [Closed / Proprietary Model](terms/%E9%97%AD%E6%BA%90%E6%A8%A1%E5%9E%8B.md) · [Privacy & Compliance](terms/%E9%9A%90%E7%A7%81%E4%B8%8E%E5%90%88%E8%A7%84.md)
- **Concept** (21): [Agent vs Chatbot](terms/AI%20Agent%20%E4%B8%8E%E8%81%8A%E5%A4%A9%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%9A%84%E5%8C%BA%E5%88%AB.md) · [Product vs Model](terms/AI%20%E4%BA%A7%E5%93%81%20vs%20AI%20%E6%A8%A1%E5%9E%8B.md) · [Token](terms/Token.md) · [Transformer](terms/Transformer.md) · [Artificial Intelligence, AI](terms/%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD.md) · [Positional Encoding](terms/%E4%BD%8D%E7%BD%AE%E7%BC%96%E7%A0%81.md) · [RLHF / Alignment](terms/%E5%81%8F%E5%A5%BD%E5%AF%B9%E9%BD%90.md) · [Parameter](terms/%E5%8F%82%E6%95%B0.md) · [Large Language Model, LLM](terms/%E5%A4%A7%E6%A8%A1%E5%9E%8B%20-%20%E5%A4%A7%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B.md) · [Embedding Layer](terms/%E5%B5%8C%E5%85%A5%E5%B1%82.md) · [Open-source Ecosystem](terms/%E5%BC%80%E6%BA%90%E7%94%9F%E6%80%81.md) · [Inference](terms/%E6%8E%A8%E7%90%86.md) · [Machine Learning, ML](terms/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0.md) · [Attention](terms/%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%9C%BA%E5%88%B6.md) · [Deep Learning](terms/%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0.md) · [Generative AI](terms/%E7%94%9F%E6%88%90%E5%BC%8F%20AI.md) · [Neural Network](terms/%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C.md) · [Capability Boundary](terms/%E8%83%BD%E5%8A%9B%E8%BE%B9%E7%95%8C.md) · [Training](terms/%E8%AE%AD%E7%BB%83.md) · [Vocabulary](terms/%E8%AF%8D%E8%A1%A8.md) · [Pre-training](terms/%E9%A2%84%E8%AE%AD%E7%BB%83.md)
- **Infrastructure** (18): [AI Accelerator](terms/AI%20%E8%8A%AF%E7%89%87.md) · [Bits Per Weight](terms/bpw.md) · [GGUF](terms/GGUF.md) · [-ngl / Offload](terms/GPU%20%E5%B1%82%E5%8D%B8%E8%BD%BD.md) · [Graphics Processing Unit](terms/GPU.md) · [KV Cache](terms/KV%20%E7%BC%93%E5%AD%98.md) · [llama.cpp](terms/llama.cpp.md) · [Prompt Cache](terms/Prompt%20Cache.md) · [vLLM](terms/vLLM.md) · [MoE Offload / ncmoe](terms/%E4%B8%93%E5%AE%B6%E5%8D%B8%E8%BD%BD.md) · [Throughput, TPS](terms/%E5%90%9E%E5%90%90.md) · [Tensor Parallelism](terms/%E5%BC%A0%E9%87%8F%E5%B9%B6%E8%A1%8C.md) · [VRAM](terms/%E6%98%BE%E5%AD%98.md) · [Local Deployment](terms/%E6%9C%AC%E5%9C%B0%E9%83%A8%E7%BD%B2.md) · [Compute](terms/%E8%AE%AD%E7%BB%83%E7%AE%97%E5%8A%9B.md) · [Quantization](terms/%E9%87%8F%E5%8C%96.md) · [Prefill](terms/%E9%A2%84%E5%A1%AB%E5%85%85.md) · [Time To First Token, TTFT](terms/%E9%A6%96%E5%AD%97%E5%BB%B6%E8%BF%9F.md)
- **Agent** (17): [Model Context Protocol](terms/MCP.md) · [Human-in-the-Loop](terms/%E4%BA%BA%E6%9C%BA%E5%8D%8F%E4%BD%9C.md) · [Reference Server](terms/%E5%8F%82%E8%80%83%E6%9C%8D%E5%8A%A1%E5%99%A8.md) · [Multi-Agent](terms/%E5%A4%9A%20Agent%20%E5%8D%8F%E4%BD%9C.md) · [Orchestration / Pipeline](terms/%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%BC%96%E6%8E%92.md) · [Tool Calling / Function Calling](terms/%E5%B7%A5%E5%85%B7%E8%B0%83%E7%94%A8.md) · [Skills](terms/%E6%8A%80%E8%83%BD%20-%20Skills.md) · [Guardrails](terms/%E6%8A%A4%E6%A0%8F.md) · [Prompt Injection](terms/%E6%8F%90%E7%A4%BA%E6%B3%A8%E5%85%A5.md) · [Agent](terms/%E6%99%BA%E8%83%BD%E4%BD%93%20-%20Agent.md) · [Permission](terms/%E6%9D%83%E9%99%90.md) · [Sandbox](terms/%E6%B2%99%E7%AE%B1.md) · [Browser Automation](terms/%E6%B5%8F%E8%A7%88%20-%20%E7%BD%91%E9%A1%B5%E6%93%8D%E4%BD%9C.md) · [Structured Output](terms/%E7%BB%93%E6%9E%84%E5%8C%96%E8%BE%93%E5%87%BA.md) · [Memory](terms/%E8%AE%B0%E5%BF%86.md) · [Remote Execution](terms/%E8%BF%9C%E7%A8%8B%E6%89%A7%E8%A1%8C.md) · [Long-running Task](terms/%E9%95%BF%E6%97%B6%E4%BB%BB%E5%8A%A1.md)
- **Model** (12): [AI Search](terms/AI%20%E6%90%9C%E7%B4%A2.md) · [Context Window](terms/%E4%B8%8A%E4%B8%8B%E6%96%87%E7%AA%97%E5%8F%A3.md) · [Context Cost](terms/%E4%B8%8A%E4%B8%8B%E6%96%87%E7%AA%97%E5%8F%A3%E7%9A%84%E4%BB%A3%E4%BB%B7.md) · [Multimodal](terms/%E5%A4%9A%E6%A8%A1%E6%80%81.md) · [Hallucination](terms/%E5%B9%BB%E8%A7%89.md) · [Fine-tuning](terms/%E5%BE%AE%E8%B0%83.md) · [Reasoning Model](terms/%E6%8E%A8%E7%90%86%E6%A8%A1%E5%9E%8B.md) · [Prompt](terms/%E6%8F%90%E7%A4%BA%E8%AF%8D.md) · [Temperature](terms/%E6%B8%A9%E5%BA%A6.md) · [Knowledge Cutoff](terms/%E7%9F%A5%E8%AF%86%E6%88%AA%E6%AD%A2.md) · [System Prompt](terms/%E7%B3%BB%E7%BB%9F%E6%8F%90%E7%A4%BA.md) · [Sampling](terms/%E9%87%87%E6%A0%B7%20-%20%E9%87%87%E6%A0%B7%E5%8F%82%E6%95%B0.md)
- **Media** (11): [Contrastive Language-Image Pre-training](terms/CLIP.md) · [ControlNet](terms/ControlNet.md) · [Embodied AI](terms/%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD.md) · [Diffusion Model](terms/%E6%89%A9%E6%95%A3%E6%A8%A1%E5%9E%8B.md) · [Digital Avatar](terms/%E6%95%B0%E5%AD%97%E4%BA%BA.md) · [Computer Vision](terms/%E6%9C%BA%E5%99%A8%E8%A7%86%E8%A7%89.md) · [Latent Space](terms/%E6%BD%9C%E7%A9%BA%E9%97%B4.md) · [Autonomous Driving](terms/%E8%87%AA%E5%8A%A8%E9%A9%BE%E9%A9%B6.md) · [Video Generation](terms/%E8%A7%86%E9%A2%91%E7%94%9F%E6%88%90.md) · [TTS, Text-to-Speech](terms/%E8%AF%AD%E9%9F%B3%E5%90%88%E6%88%90.md) · [ASR, Automatic Speech Recognition](terms/%E8%AF%AD%E9%9F%B3%E8%AF%86%E5%88%AB.md)
- **Development** (9): [Agent Client Protocol](terms/ACP.md) · [App Server](terms/App%20Server.md) · [Repository-level Understanding](terms/%E4%BB%93%E5%BA%93%E7%BA%A7%E7%90%86%E8%A7%A3.md) · [Code Completion](terms/%E4%BB%A3%E7%A0%81%E8%A1%A5%E5%85%A8.md) · [Diff](terms/%E5%B7%AE%E5%BC%82%E5%AF%B9%E6%AF%94.md) · [Continuous Integration, CI](terms/%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%90.md) · [Version Control](terms/%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6.md) · [CLI Agent](terms/%E7%BB%88%E7%AB%AF%20Agent.md) · [Pair Programming](terms/%E9%85%8D%E5%AF%B9%E7%BC%96%E7%A8%8B.md)
- **Data** (5): [Transport](terms/%E4%BC%A0%E8%BE%93%E6%96%B9%E5%BC%8F.md) · [Chunking](terms/%E5%88%86%E5%9D%97.md) · [Embedding / Vector](terms/%E5%90%91%E9%87%8F%20-%20%E5%B5%8C%E5%85%A5.md) · [Vector Database](terms/%E5%90%91%E9%87%8F%E6%95%B0%E6%8D%AE%E5%BA%93.md) · [Retrieval-Augmented Generation, RAG](terms/%E8%81%94%E7%BD%91%20-%20%E6%A3%80%E7%B4%A2%E5%A2%9E%E5%BC%BA.md)

### Browse by purpose — "I came here with a problem"

- **Learn** (42): [Product vs Model](terms/AI%20%E4%BA%A7%E5%93%81%20vs%20AI%20%E6%A8%A1%E5%9E%8B.md) · [AI Accelerator](terms/AI%20%E8%8A%AF%E7%89%87.md) · [App Server](terms/App%20Server.md) · [Contrastive Language-Image Pre-training](terms/CLIP.md) · [Graphics Processing Unit](terms/GPU.md) · [KV Cache](terms/KV%20%E7%BC%93%E5%AD%98.md) · [Transformer](terms/Transformer.md) · [vLLM](terms/vLLM.md) · [MoE Offload / ncmoe](terms/%E4%B8%93%E5%AE%B6%E5%8D%B8%E8%BD%BD.md) · [Artificial Intelligence, AI](terms/%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD.md) · [Transport](terms/%E4%BC%A0%E8%BE%93%E6%96%B9%E5%BC%8F.md) · [Positional Encoding](terms/%E4%BD%8D%E7%BD%AE%E7%BC%96%E7%A0%81.md) · [RLHF / Alignment](terms/%E5%81%8F%E5%A5%BD%E5%AF%B9%E9%BD%90.md) · [Embodied AI](terms/%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD.md) · [Parameter](terms/%E5%8F%82%E6%95%B0.md) · [Reference Server](terms/%E5%8F%82%E8%80%83%E6%9C%8D%E5%8A%A1%E5%99%A8.md) · [Embedding / Vector](terms/%E5%90%91%E9%87%8F%20-%20%E5%B5%8C%E5%85%A5.md) · [Multimodal](terms/%E5%A4%9A%E6%A8%A1%E6%80%81.md) · [Large Language Model, LLM](terms/%E5%A4%A7%E6%A8%A1%E5%9E%8B%20-%20%E5%A4%A7%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B.md) · [Embedding Layer](terms/%E5%B5%8C%E5%85%A5%E5%B1%82.md) · [Open-source Ecosystem](terms/%E5%BC%80%E6%BA%90%E7%94%9F%E6%80%81.md) · [Tensor Parallelism](terms/%E5%BC%A0%E9%87%8F%E5%B9%B6%E8%A1%8C.md) · [Diffusion Model](terms/%E6%89%A9%E6%95%A3%E6%A8%A1%E5%9E%8B.md) · [Inference](terms/%E6%8E%A8%E7%90%86.md) · [Digital Avatar](terms/%E6%95%B0%E5%AD%97%E4%BA%BA.md) · [Machine Learning, ML](terms/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0.md) · [Computer Vision](terms/%E6%9C%BA%E5%99%A8%E8%A7%86%E8%A7%89.md) · [Attention](terms/%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%9C%BA%E5%88%B6.md) · [Deep Learning](terms/%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0.md) · [Latent Space](terms/%E6%BD%9C%E7%A9%BA%E9%97%B4.md) · [Generative AI](terms/%E7%94%9F%E6%88%90%E5%BC%8F%20AI.md) · [Neural Network](terms/%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C.md) · [Autonomous Driving](terms/%E8%87%AA%E5%8A%A8%E9%A9%BE%E9%A9%B6.md) · [Video Generation](terms/%E8%A7%86%E9%A2%91%E7%94%9F%E6%88%90.md) · [Training](terms/%E8%AE%AD%E7%BB%83.md) · [Compute](terms/%E8%AE%AD%E7%BB%83%E7%AE%97%E5%8A%9B.md) · [Vocabulary](terms/%E8%AF%8D%E8%A1%A8.md) · [TTS, Text-to-Speech](terms/%E8%AF%AD%E9%9F%B3%E5%90%88%E6%88%90.md) · [ASR, Automatic Speech Recognition](terms/%E8%AF%AD%E9%9F%B3%E8%AF%86%E5%88%AB.md) · [Pair Programming](terms/%E9%85%8D%E5%AF%B9%E7%BC%96%E7%A8%8B.md) …and 2 more
- **Build** (34): [Agent Client Protocol](terms/ACP.md) · [AI Search](terms/AI%20%E6%90%9C%E7%B4%A2.md) · [ControlNet](terms/ControlNet.md) · [GGUF](terms/GGUF.md) · [-ngl / Offload](terms/GPU%20%E5%B1%82%E5%8D%B8%E8%BD%BD.md) · [llama.cpp](terms/llama.cpp.md) · [Model Context Protocol](terms/MCP.md) · [Prompt Cache](terms/Prompt%20Cache.md) · [Token](terms/Token.md) · [Context Window](terms/%E4%B8%8A%E4%B8%8B%E6%96%87%E7%AA%97%E5%8F%A3.md) · [Repository-level Understanding](terms/%E4%BB%93%E5%BA%93%E7%BA%A7%E7%90%86%E8%A7%A3.md) · [Code Completion](terms/%E4%BB%A3%E7%A0%81%E8%A1%A5%E5%85%A8.md) · [Chunking](terms/%E5%88%86%E5%9D%97.md) · [Vector Database](terms/%E5%90%91%E9%87%8F%E6%95%B0%E6%8D%AE%E5%BA%93.md) · [Multi-Agent](terms/%E5%A4%9A%20Agent%20%E5%8D%8F%E4%BD%9C.md) · [Orchestration / Pipeline](terms/%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%BC%96%E6%8E%92.md) · [Tool Calling / Function Calling](terms/%E5%B7%A5%E5%85%B7%E8%B0%83%E7%94%A8.md) · [Fine-tuning](terms/%E5%BE%AE%E8%B0%83.md) · [Skills](terms/%E6%8A%80%E8%83%BD%20-%20Skills.md) · [Prompt](terms/%E6%8F%90%E7%A4%BA%E8%AF%8D.md) · [Agent](terms/%E6%99%BA%E8%83%BD%E4%BD%93%20-%20Agent.md) · [Browser Automation](terms/%E6%B5%8F%E8%A7%88%20-%20%E7%BD%91%E9%A1%B5%E6%93%8D%E4%BD%9C.md) · [Temperature](terms/%E6%B8%A9%E5%BA%A6.md) · [System Prompt](terms/%E7%B3%BB%E7%BB%9F%E6%8F%90%E7%A4%BA.md) · [CLI Agent](terms/%E7%BB%88%E7%AB%AF%20Agent.md) · [Structured Output](terms/%E7%BB%93%E6%9E%84%E5%8C%96%E8%BE%93%E5%87%BA.md) · [Caching Strategy](terms/%E7%BC%93%E5%AD%98%E7%AD%96%E7%95%A5.md) · [Retrieval-Augmented Generation, RAG](terms/%E8%81%94%E7%BD%91%20-%20%E6%A3%80%E7%B4%A2%E5%A2%9E%E5%BC%BA.md) · [Memory](terms/%E8%AE%B0%E5%BF%86.md) · [Routing](terms/%E8%B7%AF%E7%94%B1.md) · [Remote Execution](terms/%E8%BF%9C%E7%A8%8B%E6%89%A7%E8%A1%8C.md) · [Sampling](terms/%E9%87%87%E6%A0%B7%20-%20%E9%87%87%E6%A0%B7%E5%8F%82%E6%95%B0.md) · [Quantization](terms/%E9%87%8F%E5%8C%96.md) · [Long-running Task](terms/%E9%95%BF%E6%97%B6%E4%BB%BB%E5%8A%A1.md)
- **Choose** (21): [Agent vs Chatbot](terms/AI%20Agent%20%E4%B8%8E%E8%81%8A%E5%A4%A9%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%9A%84%E5%8C%BA%E5%88%AB.md) · [API](terms/API%20-%20%E6%8E%A5%E5%8F%A3%E8%B0%83%E7%94%A8.md) · [Bits Per Weight](terms/bpw.md) · [Cost per Call](terms/%E5%8D%95%E6%AC%A1%E8%B0%83%E7%94%A8%E6%88%90%E6%9C%AC.md) · [Observability](terms/%E5%8F%AF%E8%A7%82%E6%B5%8B%E6%80%A7.md) · [Throughput, TPS](terms/%E5%90%9E%E5%90%90.md) · [Benchmark](terms/%E5%9F%BA%E5%87%86%E6%B5%8B%E8%AF%95.md) · [Open-weight Model](terms/%E5%BC%80%E6%BA%90%E6%A8%A1%E5%9E%8B.md) · [Aggregate Score](terms/%E6%80%BB%E5%88%86%20-%20%E7%BB%BC%E5%90%88%E8%AF%84%E6%B5%8B.md) · [Cost](terms/%E6%88%90%E6%9C%AC.md) · [Inference Cost](terms/%E6%8E%A8%E7%90%86%E6%88%90%E6%9C%AC.md) · [Reasoning Model](terms/%E6%8E%A8%E7%90%86%E6%A8%A1%E5%9E%8B.md) · [VRAM](terms/%E6%98%BE%E5%AD%98.md) · [Local Deployment](terms/%E6%9C%AC%E5%9C%B0%E9%83%A8%E7%BD%B2.md) · [Evaluation Limits](terms/%E6%A8%A1%E5%9E%8B%E8%AF%84%E6%B5%8B%E7%9A%84%E5%B1%80%E9%99%90.md) · [Community & Docs](terms/%E7%A4%BE%E5%8C%BA%E4%B8%8E%E6%96%87%E6%A1%A3.md) · [Self-hosting Cost](terms/%E8%87%AA%E6%89%98%E7%AE%A1%E6%88%90%E6%9C%AC.md) · [Evaluation, Evals](terms/%E8%AF%84%E4%BC%B0.md) · [Release Cadence](terms/%E8%BF%AD%E4%BB%A3%E9%80%9F%E5%BA%A6.md) · [Closed / Proprietary Model](terms/%E9%97%AD%E6%BA%90%E6%A8%A1%E5%9E%8B.md) · [Time To First Token, TTFT](terms/%E9%A6%96%E5%AD%97%E5%BB%B6%E8%BF%9F.md)
- **Avoid** (19): [Context Cost](terms/%E4%B8%8A%E4%B8%8B%E6%96%87%E7%AA%97%E5%8F%A3%E7%9A%84%E4%BB%A3%E4%BB%B7.md) · [Human-in-the-Loop](terms/%E4%BA%BA%E6%9C%BA%E5%8D%8F%E4%BD%9C.md) · [Vendor Lock-in](terms/%E4%BE%9B%E5%BA%94%E5%95%86%E9%94%81%E5%AE%9A.md) · [Portability](terms/%E5%8F%AF%E6%9B%BF%E6%8D%A2%E6%80%A7.md) · [Diff](terms/%E5%B7%AE%E5%BC%82%E5%AF%B9%E6%AF%94.md) · [Hallucination](terms/%E5%B9%BB%E8%A7%89.md) · [Guardrails](terms/%E6%8A%A4%E6%A0%8F.md) · [Continuous Integration, CI](terms/%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%90.md) · [Prompt Injection](terms/%E6%8F%90%E7%A4%BA%E6%B3%A8%E5%85%A5.md) · [Data Sovereignty](terms/%E6%95%B0%E6%8D%AE%E4%B8%8D%E5%87%BA%E7%BD%91.md) · [Vendor Dependency](terms/%E6%9C%8D%E5%8A%A1%E4%B8%AD%E6%96%AD%E9%A3%8E%E9%99%A9.md) · [Permission](terms/%E6%9D%83%E9%99%90.md) · [Sandbox](terms/%E6%B2%99%E7%AE%B1.md) · [Version Control](terms/%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6.md) · [Knowledge Cutoff](terms/%E7%9F%A5%E8%AF%86%E6%88%AA%E6%AD%A2.md) · [Capability Boundary](terms/%E8%83%BD%E5%8A%9B%E8%BE%B9%E7%95%8C.md) · [License](terms/%E8%AE%B8%E5%8F%AF%E8%AF%81.md) · [Exit Cost](terms/%E9%80%80%E5%87%BA%E6%88%90%E6%9C%AC.md) · [Privacy & Compliance](terms/%E9%9A%90%E7%A7%81%E4%B8%8E%E5%90%88%E8%A7%84.md)

<!-- INDEX:END -->

## Measured size (A8)

<!-- STATS:BEGIN generated, do not edit -->
| Item | Measured value |
|---|---|
| Terms | 116 |
| Layers | 1 18 · 2 26 · 3 27 · 4 9 · 5 14 · 6 22 |
| Domain | choice 23 · concept 21 · infra 18 · agent 17 · model 12 · media 11 · dev 9 · data 5 |
| Purpose (purposeTag) | learn 42 · apply 34 · judge 21 · guard 19 |
| Source entries (refs) | 187 |
| English coverage | 116 / 116 |
<!-- STATS:END -->