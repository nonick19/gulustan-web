---
lang: en
slug: ai-agent-architecture-tool-use-planning-error-handling
title: "AI agent architecture: tool use, planning and error handling"
description: "Three things that make autonomous agent flows reliable in production: least-privilege tool design, disciplined planning and error handling."
date: 2026-10-15
tags: [AI Agents, Tool Use, Orchestration, LLM]
translationKey: agent-architecture
---

The word "agent" has accumulated a lot of meaning in the last two years. Here is the narrow definition I use: a system where an LLM calls tools, evaluates the results and carries out a multi-step task toward a goal. This flow looks like magic in demos and breaks in production at exactly three points: tool design, planning and error handling.

## 1. Tool design: narrow permissions, explicit contracts

Every tool an agent can call is part of the attack surface and a source of failure. What works in production:

- **One responsibility per tool.** Instead of one tool that "does everything with files", use narrow ones like `read_file`, `write_file`, `search_files`. The model picks the right tool far more reliably.
- **Required, explicit parameters.** Not `query: string` but `query: string, date_range: {start, end}, limit: number`. An ambiguous parameter means ambiguous behavior.
- **Limited authority.** What a tool may do should follow identity and policy, not the agent's decisions. The agent may "decide" to delete; the tool must refuse without permission.
- **Idempotency.** Running the same tool call twice must not cause damage — otherwise every retry is a risk.

You can see this approach end to end in the [AI agent automation system](/en/projects/ai-agent-otomasyon/) case study.

## 2. Planning: controlled flows, not free exploration

Endless "think-act" loops look great in demo videos; in production they bring cost, latency and unpredictability. Instead:

- **Drive the flow with a state machine.** Which step the system is in should live in the system, not in the model's memory. That is what makes interrupted work resumable.
- **Plan-then-execute.** The model produces a short plan first; the plan is approved or validated, then the steps run. Acting without a plan loses its way on long tasks.
- **Step budgets.** A maximum number of tool calls and a maximum cost. When the budget is exhausted the flow stops and a human takes over — an agent that "keeps trying forever" is the most expensive bug.

## 3. Error handling: failure is the default scenario

Tools fail: networks drop, APIs hit rate limits, responses are not the promised schema. For a resilient agent:

- **Retry + backoff** for transient errors only. Not for permanent ones — retrying the same request five times just enlarges the failure.
- **Validate outputs.** Check tool results against a schema; never let the model assume "that must have worked".
- **Human approval gates.** Irreversible actions (payments, deletions, external sends) need mandatory checkpoints inside the flow.
- **Observability.** Without logging each step's input, output, duration and cost, "why did it go wrong?" cannot be answered.

## No improvement without measurement

Agent flows need evals too: representative tasks, expected behavior and an acceptable deviation range. Every prompt change should run that set; otherwise the flow that worked yesterday silently breaks today.

In short: design the agent not as a clever chat, but as a **supervised workflow**. The intelligence lives in the model; the reliability lives in your architecture.