---
lang: en
slug: top-10-most-upvoted-papers-in-visual-agents-and-document-ai
title: "The 10 most upvoted papers in visual agents and document AI (HF Daily Papers)"
description: "From Hugging Face Daily Papers' top-rated AI and vision papers, the agent side: visual computer use, GUI agents, robotic world models, OCR and document parsing."
date: 2026-10-22
tags: [Research, AI Agents, Computer Vision, OCR, Robotics]
translationKey: hf-vision-agents
---

This is part two of the [top-rated AI and vision papers from HF Daily Papers](/en/blog/top-10-most-upvoted-papers-in-image-and-video-generation/) roundup: instead of generation, **visual agents, robotics and document AI**. Vote counts are a snapshot from 22 October 2026; each paper's HF page is linked from its title.

## 1. [Has GPT-6-Astra Achieved Embodied Intelligence?](https://huggingface.co/papers/2610.22471) — 460 votes

The highest-voted paper on the list is not a victory lap but an **inquiry**: GPT-6-Astra's competence in manipulation and navigation challenges the "specialized model per task" paradigm, evaluated at scale across 12 representative benchmarks. The report's real findings are the gaps: demonstration cost, execution time, and practical limits in real-world deployment. One of the best-framed answers yet to "does one general model solve it all?"

## 2. [OpenGCUA: Toward a Fully Open Stack for Generalist Computer Use](https://huggingface.co/papers/2610.22200) — 331 votes

Computer use is expanding from GUI-only to **visual + programmatic** interfaces. OpenGCUA provides an open stack for a generalist computer-use agent where the model decides how to observe, act and organize its work, including harness-to-model decision transfer and code execution. The reference point for anyone wanting an open counterpart to closed systems like GPT-6-Astra's computer use.

## 3. [Focused Omni-Modal GUI Agents](https://huggingface.co/papers/2610.26203)

GUI agents work over streaming omni-modal context (screenshots, audio, video, interaction history, device state), but exposing all of it at every step creates noise, since relevance is transient and sparse. The paper's thesis: the signal that determines one action becomes clutter at the next, and errors **compound** because executed actions feed back into context. The fix is focused context.

## 4. [Ropedia W0: Scaling Loco-Manipulation World Models across Embodiments with Human Experience](https://huggingface.co/papers/2610.26855) — 184 votes

World models let agents anticipate action consequences, but jointly modeling locomotion and manipulation across embodiments is hard due to heterogeneous action spaces. Ropedia W0 is the first egocentric loco-manipulation world foundation model spanning humans and robots, trained on Xp-Data, some 10k hours of curated egocentric video. A current example of using **human experience as the scaling lever** in robotics.

## 5. [OpenVLHarness: Real World Visual Agentic Tool-Use with Multimodal Memory](https://huggingface.co/papers/2610.26860) — 104 votes

This Apple-affiliated study runs a controlled experiment across 22 benchmarks: simply raising the base model's inference budget yields only **modest** gains. The real gains come from persistent memory, heterogeneous tool interfaces and iterative evidence composition. Evidence that visual reasoning is a **harness** problem, not a bigger-model problem, supporting the thesis of [agent evaluation in 2026](/en/blog/agent-evaluation-2026-beyond-the-benchmark-illusion/).

## 6. [S-Agent 2.0: Spatial Reasoning with a General Coding Agent](https://huggingface.co/papers/2610.28354) — 97 votes

Agentic VLMs made big strides in spatial reasoning by gathering evidence with 3D perception tools; yet on many questions the tools return the right evidence and the model still fails: the bottleneck is **reasoning**, not perception. S-Agent 2.0 applies the coding-agent frame to spatial reasoning and targets exactly that gap.

## 7. [SpatialScout: Can VLM Agents Actively Explore and Map 3D Scenes?](https://huggingface.co/papers/2610.26659)

Spatial intelligence requires agents to actively acquire visual evidence and integrate it into a coherent 3D representation. SpatialScout is a benchmark for VLM agents on active object-level 3D mapping: can they build metric maps through autonomous exploration?

## 8. [MinerU2.5: A Decoupled Vision-Language Model for Efficient High-Resolution Document Parsing](https://huggingface.co/papers/2509.22186) — 181 votes

A 1.2B document-parsing VLM whose coarse-to-fine two-stage strategy **decouples** global layout analysis from local content recognition, hitting SOTA accuracy at high efficiency. It underpins exactly the document-preparation step of RAG pipelines (see [What RAG is](/en/blog/what-is-rag-and-when-it-fails/)).

## 9. [SmolDocling: An Ultra-Compact Vision-Language Model for End-to-End Multi-Modal Document Conversion](https://huggingface.co/papers/2503.11576) — 179 votes

From IBM Granite: an ultra-compact VLM that processes entire pages in one pass and emits **DocTags**, a new markup format capturing every page element with location and full context. End-to-end document conversion with a single 256M model instead of large models plus handcrafted pipelines.

## 10. [Unlimited OCR Works](https://huggingface.co/papers/2606.23050) — 97 votes

In LLM-decoder OCR, growing outputs mean growing KV cache and exploding memory. Baidu's Reference Sliding Window Attention keeps memory consumption flat on long sequences, transcribing **dozens of pages in a single forward pass**. "Unlimited" OCR as a practical engineering win for document AI.

## The big picture

On the agent side the picture is clear: **decision and context management, not perception**, is the frontier (Focused, OpenVLHarness, S-Agent 2.0). Embodiment diversity and human data are scaling robotics (Ropedia W0, the GPT-6-Astra study). And document AI is moving toward **small, specialized, efficient** models (MinerU2.5, SmolDocling, Unlimited OCR). See [LLM cost optimization](/en/blog/llm-cost-optimization-caching-model-choice-batching/) for the cost side.

Part one: [The 10 most upvoted papers in image and video generation](/en/blog/top-10-most-upvoted-papers-in-image-and-video-generation/).