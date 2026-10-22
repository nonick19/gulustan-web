---
lang: en
slug: context-engineering-from-prompts-to-context-design
title: "Context engineering: from prompts to context design"
description: A model's answer is not shaped by the prompt alone — it is shaped by which context it gets, in which order and within which budget. A practical frame for context engineering.
date: 2026-10-08
tags: [Context Engineering, Prompt Engineering, LLM, Memory]
translationKey: context-engineering
---

Prompt engineering still matters — it is just not enough. In a production LLM system the decisive factor is **which context the model gets, in which order and within which budget**. I call this context engineering: designing the context as if it were the system's input.

## Context budget: a full window is not a valuable window

Long context windows create the impression that you can "put everything in and let the model sort it out". Experience says the opposite: irrelevant material sitting in context distracts attention, raises cost and hurts consistency. A practical approach:

- **Divide the budget.** Separate shares for system instructions, user context, retrieved documents, tool results and conversation history. Shoving everything into "whatever is left" is the worst strategy.
- **Order matters.** Models use the beginning and the end of context most strongly; information lost in the middle is often effectively ignored. Critical facts belong at the top and the bottom.
- **Deduplicate.** If three different summaries of the same fact are in context, the model cannot tell which one is current.

## Assembling context: dynamic, not static

A good context layer is compiled at request time:

1. **Normalize the intent** — derive a standalone query that makes sense outside the conversation.
2. **Select the sources needed** — not everything, just what this task needs: retrieval results, user preferences, the relevant tool schemas.
3. **Standardize the format** — parseable markers (XML/JSON-style) make it easy for the model to say "this part is source material, this part is instruction".
4. **Validate the input** — anything malformed, overflowing or contradictory is dropped before it reaches the model.

## Memory: recall the right thing, not everything

In long chats and agent systems, memory should be **selective recall**, not a copy of the past:

- **Layered summarization:** raw history → period summaries → durable preferences. Each layer has a different lifetime.
- **Importance-based retention:** not every decision or preference is equally valuable; what you delete is the detail, what you keep is the decision.
- **Vector recall + verification:** relevant memories are fetched, then checked for freshness and provenance.

The [context memory layer](/en/projects/context-memory/) case study shows this running end to end.

## Prompts still matter — as one layer

System instructions, few-shot examples and structured output formats are *tools*; without the context architecture around them their effect is capped. Improving a prompt sometimes gains 5 points; fixing the wrong context gains 30.

## How to start

- **Log the final context** that reaches the model on every request. A system you cannot see cannot be fixed.
- Run **ablation experiments** on a small eval set: remove a context slice and watch the answer. If it degrades, the slice is valuable; if not, it is noise.
- Treat context as a **design document**, not code: what, why, in which order, within which budget.

The natural next step is cost: in [LLM cost optimization](/en/blog/llm-cost-optimization-caching-model-choice-batching/) I cover caching, model choice and batching.