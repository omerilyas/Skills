# PowerPoint Builder

An elite presentation strategist sitting next to you. Drop in messy notes, a transcript, a whitepaper, an architecture doc, or a half-formed idea, and get back a polished, executive-ready presentation outline with a strong storyline, the right slide titles, speaker notes, and visual recommendations — tailored to your audience.

This is not a slide generator. It is a story coach, messaging strategist, and technical-to-business translator that helps you build the *right* presentation, not just *a* presentation.

## What You'll Get

The skill produces ten distinct outputs:

1. A full presentation outline.
2. Recommended slide titles (takeaway-style, not topic-style).
3. A slide-by-slide structure with key messages and supporting points.
4. Speaker notes for every slide, written in spoken voice.
5. Suggested visuals per slide.
6. Recommended diagrams sketched in plain text.
7. Messaging refinement — weak phrasing called out and rewritten.
8. Executive simplification of technical content.
9. Technical-to-business translation (features into outcomes).
10. Presentation pacing guidance — minutes per section, where to slow down.

## Who It Is For

- Technical Marketing Engineers (TMEs)
- Sales Engineers (SEs)
- Product Managers
- Architects
- Executives and their staff
- Partner-facing and customer-facing technical teams
- Non-technical business users who need to present to technical audiences (or vice versa)

## When to Use It

- You have rough notes and need a polished exec deck.
- You have a whitepaper and need a 20-minute customer pitch.
- You have an architecture diagram and need to explain it to a VP.
- You have a demo and need a story to wrap around it.
- You're building a workshop and need a learning progression.
- Your slides are a wall of text and the storyline is broken.

## The Five Modes

The skill adapts to the room. Pick a mode (or let it pick for you):

- **Executive Briefing Mode** — VP / SVP / board. Lead with the answer, low text density, decision-driven.
- **Customer Presentation Mode** — customers and partners. Open with their world, land on the value.
- **Technical Deep Dive Mode** — architects and engineers. Architecture, flows, diagrams, precision.
- **Demo Storytelling Mode** — when a demo is the centerpiece. Slides bookend the demo, not replace it.
- **Workshop / Training Mode** — enablement and labs. Learning objectives, exercises, checkpoints.

## How to Install

For most users, run this in a terminal:

```
npx skillhub add https://github.com/omerilyas/Skills.git --skill powerpoint-builder
```

If you already have the `skillhub` CLI installed:

```
skillhub install powerpoint-builder
```

If you do not use a terminal, open the skill page in the AI Skills Hub and click **Download ZIP**. Follow the simple per-agent install steps shown next to the Download button. No Git or developer experience needed.

## A Short Worked Example

**Input** (messy bullets the user pasted in):

```
- new platform automates compliance scans
- saves like 20-30 hrs/week per team
- legal team wants this for SOC2 audits
- customer asked us to demo it next month
- I have 30 min with their CISO and CTO
- they are tight on budget this year
```

**The skill responds first with intake questions**, not slides:

> Before I draft anything, a few questions:
> 1. Audience — CISO and CTO. Anyone else in the room?
> 2. Purpose — is this an evaluation pitch, a renewal expansion, or a budget defense?
> 3. Time — 30 minutes. How much for Q&A?
> 4. Technical depth — CISO/CTO can go deep, but with budget pressure they will care about ROI most. Confirm?
> 5. Desired outcome — a follow-up technical workshop? A signed pilot? An exec sponsor?
> 6. Style — formal exec briefing or conversational?
> 7. Material — do you have the 20-30 hr/week metric validated? Any reference customer?

**Once the user answers**, the skill proposes a storyline:

> **Storyline (2-3 sentences)**: This customer is under budget pressure and an audit is coming. Our platform turns a 20-30 hour weekly chore into a button click and gives their auditors what they need. We are asking for a 60-day pilot scoped to SOC2.
>
> **Mode**: Customer Presentation Mode.
> **Framework**: Problem -> Solution -> Outcome with an exec ask at the end.
> **Recommended slide count**: 8 slides for 30 minutes (with 10 minutes of Q&A).

**Then the slide-by-slide outline** with titles, messages, visuals, speaker notes, and pacing.

That is the loop. You bring messy material; the skill brings structure, clarity, and a story.

## Examples in the Box

The `examples/` folder includes four full worked examples — input, intake questions, storyline, and a 6-10 slide outline with speaker notes:

- `examples/executive-briefing.md`
- `examples/customer-presentation.md`
- `examples/technical-deep-dive.md`
- `examples/workshop-session.md`

The `templates/` folder includes reusable deck skeletons for each major mode.

The `prompts/` folder includes copy-paste starter prompts and reusable phrasings of the seven intake questions.

## Supported Agents

Claude Code, Cursor, Codex, VS Code, Generic Agent Framework.

## More Detail

For agent-facing operating instructions (frameworks, mode definitions, guardrails, the full quality checklist), see [SKILL.md](./SKILL.md).

## Version

1.0.0

## Owner

tme-tools-team
