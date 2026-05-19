# Example: Customer Presentation Mode

A worked example of using the skill to build a customer pitch from rough material. Shows the full loop: input, intake, storyline, slide-by-slide outline.

**Scenario**: A Sales Engineer has a 45-minute slot with an enterprise retail customer. The customer is evaluating a new observability platform and the SE has been told "show them what we can do."

---

## What the user pasted in

```
- customer is BigBox Retail
- they have ~3000 stores, point-of-sale + inventory + ecommerce
- their stack: legacy monolith + a new k8s platform, half-half
- pain: when their checkout flow breaks at peak hours they lose $400K/hr
- last big outage was Black Friday 2025, took 90 min to find root cause
- their current observability is splunk + datadog + a homegrown thing
- they have 8 SREs and want to cut MTTR in half
- the call is with their VP of Engineering and Director of SRE
- I have 45 min
- our pitch: unified observability, ML-driven RCA, predictive alerts
```

---

## Step 1 — The skill's intake questions

> Some targeted questions before I draft this:
>
> 1. **Audience** — VP Eng + Director SRE. Will any business stakeholders be there (CIO, retail ops)? That changes the framing.
> 2. **Purpose** — is this a first-meeting pitch, a second-meeting deeper dive, or pre-PoC alignment? Each one has a different ask.
> 3. **Time** — 45 min. Hard stop or soft? How much for Q&A and demo?
> 4. **Technical depth** — Director SRE will go deep. VP Eng will too, but probably stays at outcomes. Confirm?
> 5. **Desired outcome** — what does success look like? PoC scoped? Architecture workshop scheduled? Reference call?
> 6. **Style** — formal pitch, conversational discovery, or demo-led?
> 7. **Existing material** — do you have your own outage data ($400K/hr, 90 min MTTR) confirmed by them, or did you hear it secondhand? Any reference customers in retail?

User answers:

> 1. Just VP Eng and Director SRE. No business folks.
> 2. First meeting after a discovery call. They've already told us their pain.
> 3. 45 min hard stop. I want 10 min demo and 10 min Q&A.
> 4. Confirmed.
> 5. Best case: agree to a 30-day PoC scoped on checkout. Worst-case acceptable: agree to an architecture workshop in 2 weeks.
> 6. Demo-led conversation, but I do need slides for framing.
> 7. The $400K/hr and 90-min MTTR came from their Director SRE himself in the discovery call. I have one retail reference (mid-size, not BigBox-scale).

---

## Step 2 — The skill's storyline + structure proposal

> **Storyline (3 sentences)**: BigBox's Black Friday outage cost them $600K and exposed that their three-tool observability stack can't correlate signals fast enough. We can show them — today, in 10 minutes — how a unified platform with ML-driven RCA cuts MTTR in half on a checkout-flow scenario that mirrors theirs. We're proposing a 30-day PoC scoped to their checkout flow, with a clear success metric they will define.
>
> **Mode**: Customer Presentation Mode.
>
> **Framework**: Problem -> Solution -> Outcome, with the demo as the bridge between Solution and Outcome. This works because they've already told you the problem; you don't need to re-prove it.
>
> **Recommended slide count**: 9 slides total. 25 minutes of slides + framing, 10 minutes of demo, 10 minutes of Q&A.
>
> **Sections**:
> - 1 slide: Open with their world, not yours
> - 2 slides: Their pain, in their numbers
> - 1 slide: Why their current stack hits a ceiling
> - 1 slide: How we're different (the architectural shift)
> - 1 slide: Demo bookend (what they're about to see)
> - 1 slide: Demo recap (what they just saw)
> - 1 slide: A retail-shaped proof point
> - 1 slide: The PoC ask
>
> Confirm before I draft titles?

User confirms.

---

## Step 3 — Slide-by-slide outline

### Slide 1 — Open with their world

**Title**: "Black Friday 2025: a 90-minute outage cost BigBox $600K — and exposed something bigger"

**Key message**: We are not here to talk about us. We are here to talk about them.

**Supporting points**:
- 90-minute MTTR.
- ~$400K/hr revenue impact at peak.
- Root cause was correlation, not detection — three tools, no single timeline.

**Visual**: A redacted screenshot of a checkout-error chart from their incident, or a stylized timeline showing detection-vs-RCA gap.

**Speaker notes**: "I want to start with what you told us in the discovery call. Black Friday 2025 — 90 minutes to find root cause, $400K an hour at peak. The detection was fine. The correlation across three tools was the problem. So that's the conversation today."

---

### Slide 2 — Their pain in one picture

**Title**: "Three tools, three timelines, no shared truth"

**Key message**: The problem isn't tooling capability. It's tooling fragmentation.

**Supporting points**:
- Splunk holds logs.
- Datadog holds metrics.
- Homegrown holds business KPIs.
- During an incident: 3 dashboards, 3 timestamps, 3 mental models.

**Visual**: Diagram of three siloed tools with question marks between them. Below: "MTTR ceiling: as fast as your slowest correlation."

**Speaker notes**: "You have great tools. The bottleneck isn't any one of them. It's the seams between them. Every minute of MTTR after detection is your team mentally joining timestamps. That's an organizational problem, not a tooling-vendor problem."

---

### Slide 3 — Why this gets harder, not easier

**Title**: "Half-on-k8s, half-on-monolith — the fragmentation compounds"

**Key message**: The architecture they're moving to makes the current stack worse, not better.

**Supporting points**:
- Monolith side: well-understood, mature instrumentation.
- k8s side: ephemeral, much higher signal volume.
- Current stack treats them as separate problems — they aren't, when checkout spans both.

**Visual**: Their architecture (monolith + k8s) with the checkout flow drawn across both, hitting different observability tools at each hop.

**Speaker notes**: "And here's the harder part. Your checkout flow doesn't respect your stack boundary. It starts on k8s, finishes on the monolith. Your current setup treats those as separate observability problems. They aren't, when an incident spans both."

---

### Slide 4 — How we are different

**Title**: "One platform, one timeline, ML correlating across stack boundaries"

**Key message**: This is the architectural shift. State it once, plainly.

**Supporting points**:
- Unified ingest: logs, metrics, traces, business KPIs.
- ML-driven RCA: correlates signals across services automatically.
- Predictive alerts: surface degradation before it becomes outage.

**Visual**: Single-platform diagram. No buzzwords, no logos.

**Speaker notes**: "This is what we do differently. One platform, ingesting everything. ML correlates the signals so your team isn't joining timestamps in their head. And predictive alerts — we'll come back to this in the demo — surface degradation before the page hits."

---

### Slide 5 — Demo bookend (before)

**Title**: "What you are about to see: a checkout-flow degradation, found in 4 minutes instead of 90"

**Key message**: Tell them what they're about to watch and what to look for.

**Supporting points**:
- Scenario: payment service degrades on k8s side.
- Watch for: correlation across services, the predictive alert before the page, the unified timeline.
- Same scenario shape as Black Friday 2025.

**Visual**: A "what to watch for" call-out card, three bullets max.

**Speaker notes**: "Quick framing before the demo. I'm going to walk through a checkout-flow degradation that mirrors what you saw on Black Friday. Watch for three things: how the correlation happens, the alert that fires before the user-facing page, and the single timeline at the end. Then I'll come back to slides."

**[10-minute live demo here]**

---

### Slide 6 — Demo recap

**Title**: "What you just saw: predictive alert at minute 0, root cause at minute 4"

**Key message**: Connect the demo back to their numbers.

**Supporting points**:
- Predictive alert: 8 minutes before user impact.
- Root cause identified: 4 minutes after impact (vs. 90 in your incident).
- Single SRE, single timeline, single tool.

**Visual**: Side-by-side: their Black Friday timeline vs. the demo timeline. Same incident shape, different MTTR.

**Speaker notes**: "Here's the recap. The predictive alert fired 8 minutes before any user saw a problem. Root cause was identified 4 minutes in. Compare to your 90 minutes. Same shape of incident, very different outcome."

---

### Slide 7 — Retail proof point

**Title**: "Mid-market retailer: cut MTTR from 47 min to 11 min on checkout flows"

**Key message**: We have done this in retail. Smaller scale than them, but the same incident shape.

**Supporting points**:
- 200-store regional retailer (named under NDA, available on reference call).
- Same stack diversity: monolith + k8s.
- 6-month results: 76% MTTR reduction on checkout incidents.

**Visual**: A simple before/after MTTR chart. Footnote: "Customer reference available."

**Speaker notes**: "I want to be honest — I don't have a BigBox-scale retail reference yet. I do have a 200-store mid-market retailer, same stack mix as yours, who cut MTTR by 76%. Happy to set up a reference call before the next meeting."

---

### Slide 8 — The PoC ask

**Title**: "30-day PoC, scoped to checkout flow, success metric you define"

**Key message**: Specific, time-boxed, low-friction.

**Supporting points**:
- 30 days, no platform-wide deployment.
- Scoped to checkout flow only — the highest-pain area.
- Success metric: you define it. Suggested: simulated incident MTTR < 15 min.
- Two of our SEs embedded with your team for the duration.

**Visual**: A simple PoC scope card. Three bullets: scope, duration, exit criteria.

**Speaker notes**: "What I'm asking for is a 30-day PoC, scoped just to checkout. You define what success looks like — my suggested metric is simulated-incident MTTR under 15 minutes. We embed two of our engineers with your team. If we don't hit your metric, the PoC ends; if we do, we talk about expansion."

---

### Slide 9 — Next step

**Title**: "Two paths forward — pick one today"

**Key message**: Make the next step easy. Two options, both small.

**Supporting points**:
- Path A: 30-day PoC kickoff in 2 weeks (we send scope doc tomorrow).
- Path B: 2-hour architecture workshop with your SREs in 2 weeks (no PoC commitment yet).
- Either path: we own the next move.

**Visual**: Two-path fork diagram. Both arrows leading forward.

**Speaker notes**: "Two ways to keep this moving. Either we kick off the PoC in 2 weeks and I send you the scope doc tomorrow, or we do a 2-hour architecture workshop with your team in 2 weeks and decide on PoC after. Either way, I'll send the next step by end of day. Which one fits better?"

---

## Pacing summary

- Slides 1-5: 12 minutes (framing through demo bookend)
- Demo: 10 minutes
- Slides 6-9: 13 minutes (demo recap, proof, ask)
- Q&A: 10 minutes
- Total: 45 minutes

## What the skill called out as weak

> A few flags:
>
> 1. **The reference is undersized.** A 200-store retailer for a 3000-store enterprise is a stretch. Be honest about it (slide 7 already is). If you have any non-retail same-scale reference, mention that as a backup.
> 2. **The "ML-driven RCA" line is doing a lot of work.** Director SRE will press on it. Make sure your demo *shows* the correlation step explicitly, or this becomes a buzzword.
> 3. **The fallback ask (workshop) is good.** Keep it. SEs who walk in with one ask walk out with no ask.
