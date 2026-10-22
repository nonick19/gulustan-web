---
lang: en
slug: llm-cost-optimization-caching-model-choice-batching
title: "LLM cost optimization: caching, model choice and batching"
description: The three levers that cut LLM costs without hurting quality — pick the right model, cache your context and batch your requests.
date: 2026-10-01
tags: [LLM, Cost Optimization, Caching, MLOps]
translationKey: llm-cost
---

LLM cost is the first surprise for most teams: a demo costs a few dollars a month, production brings bills in the thousands. The good news — most of the cost comes down through three levers, without touching quality. The bad news: apply them without measuring and you are buying savings with quality instead.

## 1. Pick the right model: the most expensive one is not the best one

Most tasks do not need a frontier model. A practical tiering:

- **Small tasks, small model:** classification, summarization, query expansion, schema validation — these run at equal quality on small, cheap models.
- **Hard tasks, big model:** multi-step reasoning, complex code, decisions from ambiguous input.
- **Cascade:** try the cheap model first; fall back to the large one when confidence is below threshold. On typical workloads most requests finish at the first tier.

The only correct metric here is **cost per task × success rate** — not the token price.

## 2. Caching: stop paying for the same context twice

A large share of production traffic is repetition: the same system prompt, the same documents, the same few examples.

- **Provider prompt caching:** OpenAI and Anthropic cache long, stable context prefixes at 50–90% discounts. Putting the unchanging part of your context first determines cache hits — this is where context engineering meets your bill directly.
- **Application-level caching:** for cases where the same input reliably produces the same output (classification, summarization) use a semantic cache. Tune the threshold and TTL carefully, and never cache user-specific content across users.
- **Embedding caching:** don't re-embed the same documents; indexing cost is routinely overlooked.

## 3. Batching and consolidation

- **Batch APIs:** non-urgent work (nightly summaries, bulk tagging, eval runs) runs at roughly half price.
- **Pack instead of parallelize:** one request with multiple work items instead of dozens of small ones. Better for cost and for latency alike.
- **Streaming for perceived latency:** it does not reduce real cost but is essential for UX — keep the two apart in your benchmarks.

## The line items people miss

- **Output tokens are expensive.** Instead of "answer briefly", enforce max length and structured output.
- **Retries.** Calls repeated because of schema violations are a silent multiplier. Output validation plus a single repair pass usually saves 10–20%.
- **No observability, no savings.** Without per-request logs of model, tokens and cost you cannot see which call is expensive.

## Order matters: measure first, then cut

1. Measure cost and success rate per task (an eval set is mandatory).
2. Identify the three most expensive scenarios.
3. Try model tiering, then caching, then batching — verifying the success rate after each step.

Cost optimization done without measuring quality costs reputation, not just money. The reverse holds too: with the right three levers, cost regularly halves with quality untouched.

For the context side of the cost equation, see the [context engineering](/en/blog/context-engineering-from-prompts-to-context-design/) article as well.