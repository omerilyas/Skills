# Technical Deep Dive Deck Template

A reusable skeleton for a technical deep-dive session. ~10-12 slides. Why -> What -> How structure. Designed for a 45-90 minute slot with a technical audience that will use the system, integrate against it, or evaluate it.

Coaching notes inline in `[BRACKETS]`. Replace placeholders, then cut.

---

## Slide 1 — Why This Exists

**Title**: `[THE CONSTRAINT OR REQUIREMENT THAT FORCED THIS DESIGN. UNDER 14 WORDS.]`

**Key message**: Set the box the design is fitting into. Engineers think in constraints.

**Supporting points**:
- `[The previous approach and why it stopped working.]`
- `[The new requirement that drove the redesign.]`
- `[The non-negotiable constraint (e.g. exactly-once, sub-second latency, multi-region).]`

**Visual**: `[BEFORE/AFTER OR OLD-VS-NEW BOXES. NO MARKETECTURE.]`

**Speaker notes**: `[~90 seconds. Engineers want to know "why this and not the obvious thing". Tell them up front.]`

---

## Slide 2 — End-to-End Architecture (The Picture)

**Title**: `[THE SYSTEM IN ONE LINE. COMPONENTS + DATA FLOW.]`

**Key message**: The whole system in one diagram. Everything else builds on this.

**Supporting points**:
- `[Component 1 - one-line role.]`
- `[Component 2 - one-line role.]`
- `[Component 3 - one-line role.]`
- `[Component 4 - one-line role.]`

**Visual**: `[FULL ARCHITECTURE DIAGRAM. COMPONENTS LABELED. PRIMARY AND FAILURE PATHS BOTH DRAWN.]`

**Speaker notes**: `[~2 minutes. Walk them through the picture. Tell them you'll come back to each component. Don't get pulled into details yet.]`

---

## Slide 3 — Why These Components

**Title**: `[EACH COMPONENT EXISTS FOR A SPECIFIC FAILURE MODE.]`

**Key message**: Nothing is decorative. Justify each piece.

**Supporting points**:
- `[Component 1 protects against [failure mode].]`
- `[Component 2 protects against [failure mode].]`
- `[Component 3 protects against [failure mode].]`

**Visual**: `[SAME ARCHITECTURE DIAGRAM, EACH COMPONENT ANNOTATED WITH THE FAILURE MODE IT PREVENTS.]`

**Speaker notes**: `[~90 seconds. This is the "why each thing" pass. Engineers earn trust here — if you can't justify a component, they'll assume the design is sloppy.]`

---

## Slide 4 — The Happy Path, Sequence-Level

**Title**: `[THE N-HOP HAPPY PATH: VERB, VERB, VERB, VERB.]`

**Key message**: Show the actual sequence of calls and what each step guarantees.

**Supporting points**:
- `[Hop 1: actor, action, guarantee.]`
- `[Hop 2: actor, action, guarantee.]`
- `[Hop 3: actor, action, guarantee.]`
- `[Hop 4: actor, action, guarantee.]`

**Visual**: `[SEQUENCE DIAGRAM. TIME FLOWING TOP-TO-BOTTOM. ACTORS ACROSS THE TOP. ANNOTATE GUARANTEES ON THE ARROWS.]`

**Speaker notes**: `[~2 minutes. Walk the sequence. Mention which hops are atomic, which are at-least-once, which are best-effort.]`

---

## Slide 5 — When Things Fail: Failure Path 1

**Title**: `[THE PRIMARY FAILURE MODE AND HOW THE SYSTEM HANDLES IT.]`

**Key message**: Failure is a first-class path, not an exception.

**Supporting points**:
- `[The trigger condition.]`
- `[The retry / fallback / DLQ logic.]`
- `[The operational signal (alert, metric, log).]`
- `[The recovery procedure.]`

**Visual**: `[SEQUENCE DIAGRAM ZOOMED ON THE FAILURE PATH.]`

**Speaker notes**: `[~90 seconds. Engineers care more about failure paths than happy paths. Show that you've thought it through.]`

---

## Slide 6 — When Things Fail: Failure Path 2

**Title**: `[THE SECOND FAILURE MODE — OFTEN A REPLAY OR RECOVERY OPERATION.]`

**Key message**: Recovery is deliberate, not accidental. Spell out the rules.

**Supporting points**:
- `[How recovery is initiated (CLI, API, runbook).]`
- `[The pre-conditions and constraints.]`
- `[The blast radius - what gets touched, what doesn't.]`
- `[The post-recovery verification step.]`

**Visual**: `[DIAGRAM SHOWING THE RECOVERY PATH AS PARALLEL OR SEPARATE FROM THE PRIMARY FLOW.]`

**Speaker notes**: `[~90 seconds. Recovery is where humans break things. Be explicit about what they should and shouldn't do.]`

---

## Slide 7 — Pitfall 1

**Title**: `[THE FIRST GOTCHA, NAMED IN PLAIN LANGUAGE.]`

**Key message**: This is the one that catches everyone. Spell it out.

**Supporting points**:
- `[The mistake.]`
- `[Why it's tempting / why it looks correct.]`
- `[How the system protects (or doesn't) against it.]`
- `[The correct pattern.]`

**Visual**: `[A DECISION TREE OR SIDE-BY-SIDE CORRECT-VS-WRONG EXAMPLE.]`

**Speaker notes**: `[~90 seconds. The pitfalls section is the most useful part of the talk. Take your time.]`

---

## Slide 8 — Pitfall 2

**Title**: `[THE SECOND GOTCHA, NAMED IN PLAIN LANGUAGE.]`

**Key message**: Same shape as pitfall 1.

**Supporting points**:
- `[The mistake.]`
- `[Why it's tempting.]`
- `[How the system protects (or doesn't).]`
- `[The correct pattern.]`

**Visual**: `[CORRECT-VS-WRONG EXAMPLE OR PROBLEM/SOLUTION DIAGRAM.]`

**Speaker notes**: `[~90 seconds.]`

---

## Slide 9 — Pitfall 3

**Title**: `[THE THIRD GOTCHA — OFTEN THE SUBTLEST, OFTEN ABOUT GUARANTEES.]`

**Key message**: The one engineers underestimate.

**Supporting points**:
- `[The mistake.]`
- `[The misconception about a guarantee.]`
- `[The actual guarantee scope.]`
- `[The correct mental model.]`

**Visual**: `[A DIAGRAM SHOWING WHERE A GUARANTEE APPLIES AND WHERE IT DOESN'T.]`

**Speaker notes**: `[~90 seconds. This is usually about exactly-once, eventual consistency, transaction boundaries, or similar nuanced guarantees. Be precise.]`

---

## Slide 10 — Operational Health

**Title**: `[HOW YOU KNOW THE SYSTEM IS HEALTHY IN PROD.]`

**Key message**: Engineers will operate this. Show the operational surface.

**Supporting points**:
- `[The 3-5 key metrics that indicate health.]`
- `[The dashboards / alerts / runbooks.]`
- `[The escalation path.]`

**Visual**: `[A DASHBOARD SCREENSHOT OR A METRICS TABLE.]`

**Speaker notes**: `[~90 seconds. Drop this slide if the audience is integrating but not operating. Keep it if they will be on-call.]`

---

## Slide 11 — Integration / Adoption Checklist

**Title**: `[N CHECKS BEFORE YOUR CODE GOES TO STAGING.]`

**Key message**: Concrete, code-level, copy-able.

**Supporting points**:
- `[ ] [Check 1 - correctness]`
- `[ ] [Check 2 - correctness]`
- `[ ] [Check 3 - correctness]`
- `[ ] [Check 4 - resilience]`
- `[ ] [Check 5 - resilience]`
- `[ ] [Check 6 - observability]`
- `[ ] [Check 7 - rollout]`
- `[ ] [Check 8 - rollback]`

**Visual**: `[A CLEAN CHECKLIST. NO PROSE.]`

**Speaker notes**: `[~2 minutes. Tell them to screenshot it. Promise a markdown version after the session. This is the takeaway artifact.]`

---

## Slide 12 — Q&A

**Title**: `[A CONCRETE OPENING QUESTION TO SEED Q&A.]`

**Key message**: Don't end on "any questions?". Seed one.

**Supporting points**:
- `[Suggested first question 1: e.g. "What's the worst failure scenario you've seen in prod?"]`
- `[Suggested first question 2: e.g. "What's the deepest pitfall I haven't covered?"]`
- `[How to reach the team afterwards: Slack channel, mailing list, doc link.]`

**Visual**: `[A QUESTION ON SCREEN, PLUS THE SLACK CHANNEL.]`

**Speaker notes**: `[Open with one of the suggested questions if no one volunteers in the first 10 seconds.]`

---

## Pacing guide

| Section                              | Slides | Time      |
| ------------------------------------ | ------ | --------- |
| Why                                  | 1      | 2-3 min   |
| Architecture                         | 2-3    | 4-5 min   |
| Sequence + failure paths             | 4-6    | 8-10 min  |
| Pitfalls                             | 7-9    | 12-15 min |
| Operations + checklist               | 10-11  | 5-6 min   |
| Q&A                                  | 12     | 15-25 min |

Total: 45-60 minutes. The pitfalls section is where you should spend the most time and where Q&A will most often kick in.

## Common cuts

In order:
1. Slide 10 (operational health) — drop if audience isn't on-call.
2. Slide 6 (failure path 2) — combine with slide 5 if there's only one significant failure path.
3. One of slides 7-9 (pitfalls) — drop the weakest pitfall, never water down the strongest two.

Slides 1, 2, 4, 11 are non-negotiable.

## Diagram-first principle

Technical talks live and die by their diagrams. For each slide:

- If a diagram would carry the message better than bullets — use the diagram.
- Sequence diagrams beat box-and-arrow diagrams when timing matters.
- Architecture diagrams should fit on screen at the back of the room. If it doesn't, split it.
- Annotate failure modes directly on the diagram, not on a separate slide.

If you're using bullets in a technical deep-dive deck, ask yourself: could a diagram say this better? Usually yes.
