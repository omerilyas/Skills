# Example: Executive Briefing Mode

A worked example showing the full loop: messy input from the user, the skill's intake questions, the proposed storyline, and a slide-by-slide outline with speaker notes.

**Scenario**: A senior engineering manager has been asked to brief the SVP on whether to greenlight a Q3 platform consolidation initiative.

---

## What the user pasted in

```
- we run 4 separate internal platforms for incident management
- duplicated tooling, duplicated on-call, duplicated cost
- one consolidated platform would save ~$2.4M/yr (rough)
- migration would take ~2 quarters and 6 engineers
- biggest risk is the trading platform team — they own the most critical one
- I have 20 min with the SVP next week
- I want her to approve funding for Q3
- there's also a competing proposal from the data org she might fund instead
```

---

## Step 1 — The skill's intake questions

> Before I draft this briefing, a few targeted questions:
>
> 1. **Audience** — SVP only, or her staff in the room? Any peer leaders attending who could block?
> 2. **Purpose** — funding approval. Is the ask binary (yes/no on Q3 funding), or is there a fallback ask (start with discovery, defer the build)?
> 3. **Time** — 20 minutes. How much of that is Q&A? In my experience SVPs talk through half of an exec briefing.
> 4. **Technical depth** — your SVP — does she go technical, or stay strictly at outcomes/risk/ROI?
> 5. **Desired outcome** — "approval for Q3" — approval to *start* in Q3, or approval to *deliver* by end of Q3? Different ask, different slides.
> 6. **Style** — formal briefing with deck, or conversational with the deck as a backstop?
> 7. **Existing material** — is the $2.4M number validated by finance, or your estimate? Any prior deck on this you've shown her? And do you know what the data org's competing proposal is asking for?

User answers:

> 1. SVP plus her chief of staff.
> 2. Approval to start in Q3 with the 6 engineers committed. Fallback is approval for a 30-day discovery phase.
> 3. 20 min total, expect ~10 min of actual presenting and ~10 min of questions.
> 4. She is technical but cares most about risk and ROI in this forum.
> 5. Approval to *start* in Q3.
> 6. Formal briefing.
> 7. The $2.4M is finance-validated. No prior deck. The data org is asking for $1.8M for an analytics consolidation.

---

## Step 2 — The skill's storyline + structure proposal

> **Storyline (3 sentences)**: We run four overlapping incident-management platforms, costing us $2.4M/year in duplication that finance has already validated. Consolidating to one platform pays back in 12 months and frees six engineers and three on-call rotations. We are asking for approval to start in Q3 with six engineers committed; the largest risk is the trading platform migration, which we will de-risk with a 30-day discovery phase up front.
>
> **Mode**: Executive Briefing Mode.
>
> **Framework**: Pyramid Principle — lead with the recommendation, then evidence, then risks, then the ask. This is the right shape because she has 10 minutes of presenting time and a competing proposal in her queue.
>
> **Recommended slide count**: 8 slides. Two minutes per slide of presenting time, leaving room for her to interrupt (which she will).
>
> **Sections**:
> - 1 slide: Recommendation up front
> - 2 slides: The problem and the proof
> - 2 slides: The plan and the payback
> - 1 slide: Risks and how we de-risk
> - 1 slide: The competing-proposal positioning (because she will ask)
> - 1 slide: The ask + decision needed
>
> Confirm the storyline before I draft titles?

User confirms.

---

## Step 3 — Slide-by-slide outline

### Slide 1 — Recommendation

**Title**: "Approve Q3 start to consolidate four incident platforms into one — $2.4M annual savings, 12-month payback"

**Key message**: Lead with the answer. She knows what she's being asked in slide 1.

**Supporting points**:
- Six engineers, two quarters, $2.4M/yr saved.
- Finance-validated.
- Largest risk addressed by a 30-day discovery phase.

**Visual**: Single number — `$2.4M / yr` — large, centered. No bullets visible until she asks.

**Speaker notes**: "I'll keep this short. I'm asking you to approve a Q3 start for consolidating our four incident-management platforms. Finance has validated $2.4M in annual savings with a 12-month payback. The plan is six engineers over two quarters, and we will de-risk the biggest piece in the first 30 days. I'll walk through the evidence and the risks, then we can talk about how this stacks up against the data org's proposal."

**Pacing**: 1.5 minutes.

---

### Slide 2 — The problem in one picture

**Title**: "Four platforms, four on-calls, one job"

**Key message**: We are paying four times for one capability.

**Supporting points**:
- Four incident-management platforms across infra, trading, retail, internal IT.
- Three on-call rotations, six engineers maintaining tooling.
- $2.4M/yr in licenses + headcount + duplicated tickets.

**Visual**: Four stacked logos / boxes funneling into one box labeled "incident response." Annotated with the cost on each input.

**Speaker notes**: "Here's the picture. We have four platforms doing the same job — incident management. Each has its own on-call, its own integrations, its own license. Finance walked through this with me and the duplicated cost is $2.4M a year. That's the number on slide 1."

**Pacing**: 1.5 minutes.

---

### Slide 3 — Why now

**Title**: "Trading platform contract renews in Q4 — consolidation has to start in Q3 or we pay another year"

**Key message**: There is a forcing function. Q3 is not arbitrary.

**Supporting points**:
- Trading platform contract auto-renews in Q4.
- We need 90 days to migrate before that renewal.
- Slipping to Q4 = paying for another year of the most expensive of the four.

**Visual**: A simple timeline showing Q3 start, Q4 renewal date, and the migration window.

**Speaker notes**: "The reason I'm asking now is timing. The trading platform — the most expensive of the four — auto-renews in Q4. We need a 90-day migration window before that. If we don't start in Q3, we pay for another year of the platform we're trying to retire."

**Pacing**: 1 minute.

---

### Slide 4 — The plan

**Title**: "Six engineers, two quarters, three migration waves"

**Key message**: This is a known shape of work, not a research project.

**Supporting points**:
- Wave 1 (30 days): discovery + trading platform migration plan.
- Wave 2 (60 days): infra and retail migrate.
- Wave 3 (60 days): trading platform migrates.

**Visual**: Three-wave Gantt-style bar with the discovery phase highlighted.

**Speaker notes**: "The plan is three waves. The first 30 days is discovery — we figure out the trading platform's edge cases before we touch it. Then we migrate the easy two in wave two. Trading goes last, with everything we learned applied. Six engineers throughout."

**Pacing**: 1.5 minutes.

---

### Slide 5 — The payback

**Title**: "Pays back in 12 months; saves $2.4M every year after that"

**Key message**: This is not a long-payback bet.

**Supporting points**:
- Investment: 6 engineers x 2 quarters = ~$900K loaded cost.
- Savings: $2.4M/yr starting end of Q4.
- Net positive in month 12; pure savings thereafter.

**Visual**: A simple cumulative-savings chart with the breakeven point marked.

**Speaker notes**: "The numbers are friendly. We spend about $900K in engineering time to save $2.4M a year. We break even in month 12, and every year after is pure savings. Compare that to most platform consolidations, where payback is 24-36 months."

**Pacing**: 1 minute.

---

### Slide 6 — Risks and how we de-risk

**Title**: "Trading platform is the only real risk — 30-day discovery phase up front"

**Key message**: We have one risk and a concrete plan to handle it.

**Supporting points**:
- Trading platform owns the most critical workflows.
- We won't touch it in waves 1 or 2.
- 30-day discovery phase pulls forward all the unknowns; if discovery fails, we stop and refund the rest.

**Visual**: A small risk matrix with trading flagged red, others green, and the discovery phase highlighted as the mitigation.

**Speaker notes**: "Honest answer on risk: trading is the one I worry about. So we sequence it last and we spend the first 30 days finding out what's hard about it. If discovery comes back ugly, we stop the program and you get the rest of the budget back. That's how we de-risk."

**Pacing**: 1.5 minutes.

---

### Slide 7 — How this compares to the data org's proposal

**Title**: "Different problem, different ROI; both can run in parallel"

**Key message**: Pre-empt the comparison question. Don't fight the other proposal — frame it.

**Supporting points**:
- Data org proposal: $1.8M, analytics consolidation, ~24-month payback.
- This proposal: $0.9M investment, ~12-month payback, infrastructure-side.
- Different teams, different budgets, different outcomes — not mutually exclusive.

**Visual**: Two-column compare card.

**Speaker notes**: "I know the data org has a proposal in front of you. They are solving a different problem on a different timeline. This one is faster payback and smaller engineering footprint. They aren't competing for the same engineers. So this isn't an either/or — but if it is, the math here is tighter."

**Pacing**: 1 minute.

---

### Slide 8 — The ask

**Title**: "Approve Q3 start, six engineers committed — decision needed by [date]"

**Key message**: Make the ask explicit and time-bound.

**Supporting points**:
- Approve Q3 start.
- Six engineers committed from infra org.
- Decision needed by [specific date] to hit the renewal window.
- Fallback: 30-day discovery phase only, decision in 30 days.

**Visual**: A single-page summary card. No bullets, just the ask, the date, and the fallback.

**Speaker notes**: "So the ask: approve a Q3 start with six engineers committed. I need a decision by [date] to keep the trading platform window open. If you want a smaller commitment, we can do a 30-day discovery phase only and you decide on the rest in a month. Happy to take questions."

**Pacing**: 1 minute. Then Q&A.

---

## Pacing summary

- Total presenting time: ~10 minutes.
- Slack for SVP interruptions: ~5 minutes.
- Q&A: ~5 minutes.
- Slowest slides: 1, 6, and 8 — these are where she will challenge.

## What the skill called out as weak

> Two things to flag in your input:
>
> 1. You said "biggest risk is the trading platform team" — that's a *people* risk, not a *technical* risk. The slide treats it as technical. If the real risk is that the trading team will resist, that's a different conversation and probably not one for the SVP slide. Want to handle that as a side conversation?
> 2. Your fallback ask (30-day discovery) wasn't in your original notes. I added it because SVPs often counter-offer. If you don't want to give her that escape hatch, remove slide 8's fallback line.
