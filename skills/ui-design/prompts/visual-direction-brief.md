# Visual Direction Brief

Use this prompt before writing any code. It forces the skill to commit to a single visual direction instead of producing generic UI.

---

You are about to design a frontend. Before writing any code, answer the following in 8–15 lines total. Be specific. No hedging.

## Brief

- **Product:** [what is this thing in one sentence]
- **User:** [who uses it, what they care about, what they hate]
- **Emotional response:** [calm, fast, in-control, bold, premium, playful, intimidating, trustworthy — pick one or two]
- **Constraints:** [stack, deadline, brand, accessibility level]

## Visual Direction — pick exactly one

Editorial / Magazine, Luxury Minimalism, Cyberpunk, Brutalist, Enterprise Premium, Apple-like Refinement, Industrial, Neo-Banking, Tactical / Mission Control, Retro-Futuristic, Cinematic, Organic / Nature-Inspired, Swiss Design, Data-Rich Futuristic, AI-Native.

Name your choice and write one sentence on **why** it fits the brief. Do not blend two.

## Signature Element

State the one memorable thing this interface will be remembered for. Not "good typography." Something concrete, like "a live-updating status spine running down the left edge" or "headlines that overlap the hero image with mix-blend-mode."

## Typography Plan

- Display family:
- Body family:
- Numeric / monospace (if any):
- Spacing rhythm (e.g. 4 / 8 / 12 / 20 / 32 / 56):

## Color System

Five tokens max:

- `--bg`:
- `--fg`:
- `--accent`:
- `--border`:
- One status color (success / warn / danger):

## Motion Language

One sentence: how does motion feel here? Slow and heavy? Sharp and elastic? Choreographed entrances? Calm and breathing? Reserved for confirmation moments?

## Reject Test

If this output ended up looking like a default Tailwind hero with a purple-to-pink gradient and three feature cards, what specifically about your direction prevents that? Answer in one sentence.

---

Only after this brief is filled in, proceed to architecture and code. If anything above is generic, redo it before continuing.
