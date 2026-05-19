# Example: Technical Deep Dive Mode

A worked example of building a technical deep-dive presentation from architecture material. Audience is technical and the goal is precision, not persuasion.

**Scenario**: A platform architect needs to walk a partner-engineering team through the new event-driven ingestion pipeline before they integrate.

---

## What the user pasted in

```
- new ingestion pipeline goes live in 6 weeks
- event-driven, replaces the old batch job
- partner team needs to integrate their producer service into it
- audience: 8 engineers from the partner team, mostly mid+ senior
- they will write code against this; they need to leave with a clear mental model
- 60 min slot, want lots of Q&A time
- key components: Kafka topics, schema registry, dead-letter handling, replay, exactly-once semantics
- main pitfalls: schema evolution, partition keys, idempotency on the consumer side
- I have an architecture diagram and a sequence diagram already drawn
```

---

## Step 1 — The skill's intake questions

> Before I structure this:
>
> 1. **Audience** — 8 engineers, mid+ senior. Are any of them new to event-driven systems, or all comfortable with Kafka? That changes how much foundational time we spend.
> 2. **Purpose** — they're integrating, not evaluating. So this is enablement, not persuasion. Confirm?
> 3. **Time** — 60 min, lots of Q&A. Aim for 35 minutes of presenting and 25 of Q&A?
> 4. **Technical depth** — go deep on edge cases, gotchas, failure modes? Or stay at the conceptual level and follow up with deep-dive sessions?
> 5. **Desired outcome** — a clear mental model. Do you also want them to walk out with a code-level checklist for their producer service?
> 6. **Style** — whiteboard-style with diagrams, or more formal slides?
> 7. **Existing material** — you have an architecture diagram and a sequence diagram. Anything else? Reference docs, sample code, runbooks?

User answers:

> 1. All comfortable with Kafka, none new to event-driven.
> 2. Confirmed — enablement.
> 3. Yes, that ratio works.
> 4. Go deep on the gotchas. They will hit the gotchas in production if we don't.
> 5. Yes, code-level checklist for their producer would be ideal.
> 6. Whiteboard-style, diagram-heavy, slides as the structural backbone.
> 7. The two diagrams I mentioned, plus the schema registry's reference doc.

---

## Step 2 — The skill's storyline + structure proposal

> **Storyline (3 sentences)**: This pipeline replaces a fragile batch job with an event-driven, exactly-once-capable flow built on Kafka and a schema registry. We'll walk through the architecture end to end, then drill into the three places integrators get burned — schema evolution, partition keys, and consumer idempotency. You'll leave with a mental model you can reason about and a concrete checklist for your producer service.
>
> **Mode**: Technical Deep Dive Mode.
>
> **Framework**: Why -> What -> How. They are already bought in (the integration is decided), so "why" is fast. "What" is the architecture. "How" is where we spend the most time.
>
> **Recommended slide count**: 10 slides for 35 minutes of presenting. Diagram-heavy.
>
> **Sections**:
> - 1 slide: Why this exists (1 minute)
> - 2 slides: End-to-end architecture
> - 3 slides: The flow, sequence-level
> - 3 slides: The three pitfalls (one per)
> - 1 slide: Producer integration checklist + next steps
>
> Confirm?

User confirms.

---

## Step 3 — Slide-by-slide outline

### Slide 1 — Why this exists

**Title**: "Replacing the batch job: from 6-hour staleness to <1-second freshness"

**Key message**: We are doing this for a reason. Set the constraint that drove the design.

**Supporting points**:
- Old batch job: 6-hour data staleness, no replay, no schema enforcement.
- New requirement: sub-second freshness for downstream services.
- Constraint: no double-counting (exactly-once semantics required).

**Visual**: Two-box before/after. Old: nightly batch arrow. New: continuous stream.

**Speaker notes**: "Quick context on why this exists. The old batch job ran every six hours. Two of the new downstream services need sub-second data, and one of them counts money — so we need exactly-once semantics. That's the box we're trying to fit into."

---

### Slide 2 — End-to-end architecture (the picture)

**Title**: "Producer -> Schema Registry -> Kafka -> Consumer, with DLQ and replay paths"

**Key message**: The whole picture in one slide. Everything else builds on this.

**Supporting points**:
- Producer service publishes Avro-encoded events to Kafka.
- Schema registry validates compatibility on the producer path.
- Consumer pool reads with exactly-once semantics enabled.
- Dead-letter queue catches poison messages.
- Replay topic available for reprocessing.

**Visual**: Architecture diagram (the one you already have). Components labeled. DLQ and replay paths drawn explicitly.

**Speaker notes**: "Here's the whole picture. Take a minute. Producer publishes Avro-encoded events. The schema registry validates compatibility before they hit Kafka. Consumers read with exactly-once. Anything that can't be processed goes to a DLQ. We can replay from a separate topic if we need to reprocess."

---

### Slide 3 — Why these components, briefly

**Title**: "Each component is here for a specific failure mode"

**Key message**: Nothing in the architecture is decorative. Justify each piece.

**Supporting points**:
- Schema registry: protects against producer/consumer schema drift.
- Avro: gives us forward + backward compatibility on schema evolution.
- Exactly-once: protects against double-processing on consumer crashes.
- DLQ: contains the blast radius of poison messages.
- Replay topic: lets us reprocess without re-publishing from source.

**Visual**: The same architecture diagram, but each component annotated with the failure mode it prevents.

**Speaker notes**: "Each piece earns its place. The schema registry prevents drift. Avro lets us evolve schemas safely. Exactly-once prevents the double-counting your finance service cares about. The DLQ keeps one bad event from killing the whole consumer. The replay topic means we don't have to ask the source system for data twice."

---

### Slide 4 — The happy path, sequence-level

**Title**: "The 4-hop happy path: produce, validate, partition, consume"

**Key message**: Show the actual sequence of calls and what each step guarantees.

**Supporting points**:
- Hop 1: producer serializes against the registered schema.
- Hop 2: schema registry validates compatibility.
- Hop 3: Kafka partitions by the partition key (more on this in a minute).
- Hop 4: consumer reads, processes, commits — atomically.

**Visual**: Sequence diagram (the one you already have). Time flowing top to bottom.

**Speaker notes**: "Here's the happy path. Four hops. The producer serializes, the registry validates, Kafka partitions, the consumer reads and commits atomically. Notice the commit is on the same transaction as the processing — that's how exactly-once works. We'll come back to commits."

---

### Slide 5 — When things fail: DLQ path

**Title**: "Poison messages do not block the consumer — they go to the DLQ"

**Key message**: Failure is a first-class path, not an exception.

**Supporting points**:
- After N retries (configurable, default 3), the message goes to DLQ.
- DLQ is a real Kafka topic with its own retention.
- Operational dashboard alerts on DLQ throughput.
- Replay tool can re-inject DLQ messages once the bug is fixed.

**Visual**: Sequence diagram zoomed on the failure path: consumer fails -> retry -> DLQ -> alert.

**Speaker notes**: "When a message can't be processed — bad schema, missing dependency, whatever — we retry three times, then send it to the DLQ. The DLQ is its own topic with its own retention. We have a dashboard that alerts on DLQ growth, and a replay tool to re-inject after the bug is fixed."

---

### Slide 6 — When things fail: replay path

**Title**: "Replay is a deliberate operation, not a feature you stumble into"

**Key message**: Replay is powerful and dangerous. Spell out the rules.

**Supporting points**:
- Replay is initiated from a CLI tool, not from code.
- Requires explicit start/end offsets or timestamps.
- Targets a separate replay topic; consumers opt in to read from it.
- Idempotency on the consumer side is required (we'll discuss in pitfall #3).

**Visual**: Diagram showing the replay topic as a parallel path; consumers wired to read from both, optionally.

**Speaker notes**: "Replay is a thing you do on purpose. It's a CLI tool. You give it offsets or timestamps, it pushes to a separate replay topic, your consumer opts in. The consumer side needs to be idempotent or replays will double-process — that's pitfall number three."

---

### Slide 7 — Pitfall 1: schema evolution

**Title**: "Schema changes that break consumers will get rejected — but only at the registry"

**Key message**: The registry protects you, but only if you understand its compatibility rules.

**Supporting points**:
- Compatibility mode is set to BACKWARD: new schemas must be readable by old consumers.
- Adding optional fields with defaults: safe.
- Removing fields: breaks BACKWARD; rejected at the registry.
- Renaming fields: the registry doesn't know it's a rename — treat as remove + add.
- The registry rejects at *publish* time, so producers learn early; but if you bypass it, you'll break consumers in production.

**Visual**: Decision tree: change type -> compatibility check -> safe / unsafe.

**Speaker notes**: "Pitfall one. Schema evolution. We've set compatibility to BACKWARD, which means new schemas have to be readable by old consumers. Adding a field with a default is fine. Removing a field is not — the registry will reject your producer at startup. Renames look like remove + add to the registry, so plan for that. Don't bypass the registry."

---

### Slide 8 — Pitfall 2: partition keys

**Title**: "Pick the wrong partition key and you lose ordering, parallelism, or both"

**Key message**: Partition key choice is a *design* decision, not a default.

**Supporting points**:
- Same partition key = strict ordering on that key.
- Different partition keys = parallelism, no cross-key ordering.
- Hot keys (e.g. "global") collapse all traffic to one partition. Avoid.
- Common mistake: using customer_id when you actually need order_id ordering.

**Visual**: Three small diagrams: good key (even spread), wrong key (collapsed to one partition), no key (random).

**Speaker notes**: "Pitfall two. Partition keys. The key determines two things — what gets ordered, and how it parallelizes. The most common mistake is picking a key that has hot values. The second most common is picking a key that gives you ordering on the wrong dimension. Pick this on purpose, with the consumer in mind."

---

### Slide 9 — Pitfall 3: consumer idempotency

**Title**: "Exactly-once on Kafka is not exactly-once on your side effects"

**Key message**: This is the one that surprises everyone. Spell it out.

**Supporting points**:
- Kafka's exactly-once is *between* the broker and the consumer's commit.
- Your side effects (DB write, external API call, email send) are *not* covered.
- For replays especially, your handler must be idempotent.
- Common patterns: idempotency key on the message, dedup table, conditional writes.

**Visual**: Diagram of consumer with two arms: "Kafka commit (exactly-once)" and "your side effects (at-least-once unless you make them idempotent)".

**Speaker notes**: "Pitfall three. The one that catches people. Kafka's exactly-once protects the broker-to-commit hop. It does not protect your DB writes, your downstream API calls, or anything else. So your handler has to be idempotent. We use the message offset as an idempotency key by default; if you have a different natural key, use that. Especially important during replays."

---

### Slide 10 — Producer integration checklist

**Title**: "Eight checks before your producer goes to staging"

**Key message**: Concrete, code-level, copy-able.

**Supporting points**:
- [ ] Producer registers schema at startup.
- [ ] Compatibility mode set to BACKWARD.
- [ ] Partition key chosen and documented.
- [ ] Idempotent producer enabled (`enable.idempotence=true`).
- [ ] Acks set to `all`.
- [ ] DLQ topic configured for downstream consumers.
- [ ] Producer retries configured with backoff.
- [ ] Smoke test publishes 100 messages and verifies consumer count.

**Visual**: A clean checklist. No prose.

**Speaker notes**: "Take a screenshot of this. Eight checks before staging. Top four are about correctness, bottom four are about resilience. We'll send this as a markdown file too. Any one of these missing has bitten an integrator before. Q&A?"

---

## Pacing summary

- Slides 1-3 (architecture): 8 minutes.
- Slides 4-6 (sequence and failure paths): 10 minutes.
- Slides 7-9 (pitfalls): 12 minutes — slowest section, most likely Q&A.
- Slide 10 (checklist): 5 minutes.
- Q&A: 25 minutes.

## What the skill called out as weak

> Two flags:
>
> 1. **You said "exactly-once semantics" but didn't qualify it.** That's the most-misunderstood term in event-driven systems. Slide 9 fixes this, but you should be ready for someone to call you on it before slide 9 if you say it earlier. Maybe lead with "exactly-once on Kafka" and qualify it from the start.
> 2. **No mention of monitoring/observability.** They're going to ask "how do I know my producer is healthy in prod?" Consider adding a quick slide before the checklist, or include monitoring items in the checklist itself (consumer lag, DLQ growth, schema-registry errors).
