---
lang: en
slug: what-is-rag-and-when-it-fails
title: What RAG is (and when it fails)
description: A practical guide to Retrieval-Augmented Generation — what it is, when it works in production, and which problems make it the wrong tool.
date: 2026-10-22
tags: [RAG, Retrieval, LLM, Vector Databases]
translationKey: rag-fundamentals
---

RAG (Retrieval-Augmented Generation) in one sentence: before answering, the model gathers context from relevant documents instead of relying on what it memorized during training. Rather than baking knowledge into the weights, you bring knowledge in at request time. That is the simple definition — a production RAG pipeline is considerably more.

## The parts of a RAG pipeline

- **Document preparation:** Reducing PDFs, HTML and tables to clean text without losing structure (headings, sections, table relationships). Most failures start here.
- **Chunking:** The splitting strategy should match the document type. Contracts need clause integrity; technical docs need section boundaries preserved.
- **Embeddings + indexing:** The vector database choice (Qdrant, pgvector, Pinecone) is usually second-order — metadata design matters more.
- **Hybrid search:** BM25 (keywords) plus vectors (meaning). Product codes, names and code snippets are exactly where vector search alone falls short.
- **Reranking:** Pull the top 50 candidates and re-score them with a cross-encoder; top-5 accuracy visibly improves.
- **Source citation:** Returning which passage grounded each answer is mandatory — for trust and for debugging.

For an end-to-end example of this in practice, see the [RAG-powered document assistant](/en/projects/rag-dokuman-asistani/) case study.

## When RAG works

- Knowledge **changes often** and must not be tied to the model's training cutoff (product docs, policies, FAQs).
- **Citation is a requirement:** someone will ask "where did this answer come from?"
- The domain knowledge is **private** and rare or absent in training data.
- Access must be **permission-scoped**: different users should see different context even though they share one model.

## When RAG fails

1. **Arithmetic and numeric reasoning:** "What was the growth last quarter according to this table?" retrieves the right chunk but still needs computation. The fix is not retrieval — it is code execution or SQL generation.
2. **Cross-document synthesis:** "Find every contradiction across these 40 documents" does not fit a single retrieval pass; it needs a map-reduce style flow.
3. **Ambiguous queries:** Short queries like "that cancellation policy" retrieve the wrong passage. Fix it with query expansion or by appending conversation context to the query.
4. **When general knowledge suffices:** "How do I filter a dict in Python?" — retrieval adds cost and nothing else.
5. **Dirty or contradictory sources:** Wrong information in the sources flows straight into the answer. Without retrieval quality, RAG hides hallucinations instead of removing them.

## What to use instead

- **Long context windows:** A few very long documents? Putting all of them in context is simpler and often more accurate than retrieving.
- **Fine-tuning:** Great for teaching style, format and behavior. Not for keeping facts current.
- **Structured data + tool use:** If most questions are "compute something over data", connecting the LLM to a database or API is far more reliable than retrieval.

## Bottom line: start with an eval

Decide whether RAG helps with a small eval set, not intuition: 20–30 real questions, the expected sources, and acceptable-answer criteria. Measure the baseline first, then change chunking, then reranking. "Improvements" made without measuring each step are usually noise.

If conversation history and context management are the part you care about, take a look at the [context memory layer](/en/projects/context-memory/) case study too.