# Example: Workshop / Training Mode

A worked example of building a hands-on workshop from a topic and audience description. The point of this mode is teachability, not impressiveness.

**Scenario**: A senior engineer is running a 2-hour internal workshop on prompt engineering for AI coding assistants. The audience is mixed: ~12 engineers, mostly experienced but new to AI tools.

---

## What the user pasted in

```
- 2-hour internal workshop
- ~12 engineers, mostly senior, all new to AI coding assistants
- topic: prompt engineering for coding assistants (Claude, Cursor, etc.)
- they have used the tools casually but don't know how to drive them well
- I want them to leave able to: write good prompts, structure context, recognize bad outputs, recover from bad runs
- I have a bunch of notes and example prompts but it's a mess
- I want hands-on exercises, not just lecture
- I want a checkpoint quiz at the end
```

---

## Step 1 — The skill's intake questions

> A few questions before structuring this:
>
> 1. **Audience** — 12 senior engineers new to AI tools. Are they all using the same tool, or is the cohort split across Claude / Cursor / Copilot? That changes whether examples can be uniform.
> 2. **Purpose** — enablement. Confirmed. Is there a follow-up session planned, or is this their only workshop?
> 3. **Time** — 2 hours. In person or remote? Breaks?
> 4. **Technical depth** — they're senior engineers, so we can skip basics on coding. The depth is on prompt-engineering technique.
> 5. **Desired outcome** — you listed four. That's a lot for 2 hours. We may need to cut or stretch.
> 6. **Style** — workshop, hands-on. Confirmed.
> 7. **Existing material** — your notes and example prompts. Do you have a sandboxed environment for the exercises, or will they use their own tools?
>
> One pushback: four learning objectives in 2 hours is tight. With exercises you realistically have ~75 minutes of content delivery. I'd recommend either dropping one or running two sessions. Which would you cut?

User answers:

> 1. All on Claude or Cursor. Examples should work for both.
> 2. There will be a follow-up advanced session in 4 weeks.
> 3. In person, one 10-minute break in the middle.
> 4. Confirmed.
> 5. You're right, four is too many. Drop "recover from bad runs" — we'll cover it in the follow-up.
> 6. Confirmed.
> 7. They'll use their own tools.

---

## Step 2 — The skill's storyline + structure proposal

> Three learning objectives now: write good prompts, structure context, recognize bad outputs.
>
> **Storyline (2 sentences)**: Senior engineers know how to write code; they don't yet know how to *drive* an AI coding assistant well. This workshop teaches three techniques — structuring prompts, structuring context, and recognizing failure modes — through three hands-on exercises tied directly to your daily workflow.
>
> **Mode**: Workshop / Training Mode.
>
> **Framework**: Why -> What -> How, with a hands-on exercise at the end of each What/How section. Plus a checkpoint quiz at the end.
>
> **Recommended slide count**: 9 slides. Slides are minimal in this mode — the *exercises* are the content.
>
> **Sections**:
> - 1 slide: Why this workshop exists, what they'll leave with
> - 1 slide: Ground rules + the day's flow
> - 2 slides: Module 1 — Writing good prompts (15 min teach + 15 min exercise)
> - **10 min break**
> - 2 slides: Module 2 — Structuring context (15 min teach + 15 min exercise)
> - 2 slides: Module 3 — Recognizing bad outputs (10 min teach + 10 min exercise)
> - 1 slide: Checkpoint quiz + wrap
>
> Total: 120 minutes including break. Confirm?

User confirms.

---

## Step 3 — Slide-by-slide outline

### Slide 1 — Why we are here

**Title**: "You can write code. Today is about driving the assistant."

**Key message**: Set the level. Don't condescend. Don't oversell.

**Supporting points**:
- Three skills today: prompt structure, context structure, output evaluation.
- Three exercises tied to real codebases.
- Follow-up session in 4 weeks for advanced techniques.

**Visual**: A simple agenda card.

**Speaker notes**: "Quick framing. You all write code well. That is not what we are here for. We are here to learn to drive these tools, because driving them well is a different skill from coding. Three things today, three exercises, and a checkpoint quiz at the end. By the end you should be able to write a prompt, structure context, and tell when the output is wrong before you ship it."

**Pacing**: 3 minutes.

---

### Slide 2 — Ground rules + flow

**Title**: "Hands on, not heads down: try every technique on your own code"

**Key message**: Set expectations. This isn't a lecture.

**Supporting points**:
- Each module: ~15 min teach, ~15 min exercise.
- Use your own codebase. Pair with the person next to you for review.
- 10-minute break after Module 1.
- I will walk around during exercises. Ask me anything.
- Checkpoint quiz at the end is for *your* benefit, not mine.

**Visual**: Timeline showing the three modules + break.

**Speaker notes**: "Ground rules. Each module is teach plus do. You'll use your own codebase, not a sandbox — the goal is to leave with techniques you can apply Monday morning. Pair with the person next to you when you do the exercise; review each other's prompts. I'll be walking around. Ten-minute break after Module 1."

**Pacing**: 2 minutes.

---

### Slide 3 — Module 1: Writing good prompts (teach)

**Title**: "Three things separate a good prompt from a bad one: scope, role, output shape"

**Key message**: One technique, three components. That's the whole module.

**Supporting points**:
- **Scope** — what file/function/feature? Be specific. Fuzzy scope = fuzzy output.
- **Role** — who is the assistant being? "Senior reviewer" gets different output than "junior pairing."
- **Output shape** — how should the answer come back? Code only? Diff? Explanation first?
- Anti-pattern: "fix the bug" with no scope, no role, no output shape.

**Visual**: A bad prompt and a good prompt side by side, with the three components highlighted in the good one.

**Speaker notes**: "Three components. Scope — what are you actually pointing at. Role — what posture do you want the assistant to take. Output shape — how should the answer come back. Bad prompt: 'fix the bug'. Good prompt: 'Acting as a senior reviewer, look at the function `processOrder` in checkout.ts and identify the off-by-one in the loop. Return only the corrected function as a diff.' That's the whole module."

**Pacing**: 12 minutes (with audience-asked examples).

---

### Slide 4 — Module 1: Exercise

**Title**: "Take a real bug from your last sprint. Write three prompts: bad, okay, good."

**Key message**: Force the contrast. The learning is in the comparison.

**Supporting points**:
- Pick a real bug from your last sprint.
- Write 3 prompts: a bad one (no structure), an okay one (one component), a good one (all three).
- Run all three, compare outputs.
- Pair-review with neighbor.
- 15 minutes.

**Visual**: An exercise card with the steps. Timer prominent.

**Speaker notes**: "Exercise. Real bug from your last sprint. Three prompts — bad, okay, good. Run them, compare. Then swap with your neighbor and review their good one. 15 minutes. Go."

**Pacing**: 15 minutes (exercise) + 5-minute share-out.

---

### **[10-minute break]**

---

### Slide 5 — Module 2: Structuring context (teach)

**Title**: "The assistant is only as smart as the context you give it — and most of you are giving it too much"

**Key message**: Counter-intuitive. More context is not better context.

**Supporting points**:
- More tokens != more quality. Past a point, signal-to-noise drops.
- Three context layers: anchor file, dependency files, conventions.
- Cut context the assistant doesn't need. Generated code, build artifacts, vendored libs — kill them.
- When in doubt: smaller context, more iterations.

**Visual**: Diagram of context layers — anchor at center, dependencies one ring out, conventions outermost. Strikethrough on noise.

**Speaker notes**: "This one is counter-intuitive. More context is often worse. The model gets distracted. Three layers: the anchor file you are working in, the few dependency files it touches, and your conventions doc. Everything else is noise. Especially generated code. Cut hard."

**Pacing**: 12 minutes.

---

### Slide 6 — Module 2: Exercise

**Title**: "Take your good prompt from Module 1. Add and remove context. Watch what changes."

**Key message**: Show the effect of context manipulation on the same prompt.

**Supporting points**:
- Use your good prompt from Module 1.
- Run it with: only the anchor file, anchor + dependencies, anchor + dependencies + 5 unrelated files.
- Compare quality of the three outputs.
- Pair: which version was best? Which was worst? Was it what you expected?
- 15 minutes.

**Visual**: An exercise card. Three context configurations.

**Speaker notes**: "Use your good prompt from before. Run it three times with different context. Anchor only, anchor plus deps, anchor plus deps plus five files of garbage. Compare. Pair share. 15 minutes."

**Pacing**: 15 minutes (exercise) + 5-minute share-out.

---

### Slide 7 — Module 3: Recognizing bad outputs (teach)

**Title**: "Five tells that the assistant got it wrong before you ship it"

**Key message**: Concrete, scannable, memorable.

**Supporting points**:
- **Hallucinated APIs** — function calls that don't exist. Always verify imports.
- **Plausible nonsense** — looks right, doesn't compile or runs wrong.
- **Confident wrong** — the assistant doesn't say "I'm guessing"; you must.
- **Style drift** — output doesn't match your codebase conventions.
- **Scope creep** — output changes more than you asked for.

**Visual**: Five tells as a checklist with one-line examples.

**Speaker notes**: "Five tells. Hallucinated APIs — first thing to check. Plausible nonsense — the output looks right but doesn't run. Confident wrong — the model never hedges; you have to. Style drift — the code works but doesn't look like your codebase. Scope creep — it edited five files when you asked about one. Make this list muscle memory."

**Pacing**: 8 minutes.

---

### Slide 8 — Module 3: Exercise

**Title**: "Take your Module 2 outputs. Score them against the five tells."

**Key message**: Apply the rubric. Build the habit.

**Supporting points**:
- Use the three outputs from Module 2.
- Score each against the five tells.
- Identify any failure mode you missed the first time.
- Pair: did your neighbor catch one you missed?
- 10 minutes.

**Visual**: A scoring sheet with the five tells across the top.

**Speaker notes**: "Use the outputs from Module 2. Score each one against the five tells. The point isn't to find every failure — the point is to build the habit of looking for them. Pair share. 10 minutes."

**Pacing**: 10 minutes (exercise) + 5-minute share-out.

---

### Slide 9 — Checkpoint + wrap

**Title**: "Five-question quiz, then we're done"

**Key message**: The quiz proves to *them* that the techniques stuck.

**Supporting points**:
- Q1: Name the three components of a good prompt.
- Q2: True or false — more context is always better.
- Q3: Name three of the five tells.
- Q4: When should you reduce context?
- Q5: What's the next session about?

- Follow-up session: advanced techniques + recovery from bad runs (4 weeks out).
- Slack channel for questions.

**Visual**: A clean quiz card. Self-scored.

**Speaker notes**: "Five questions, self-scored. Take 5 minutes. The point is to prove to yourself the techniques stuck. Follow-up session in 4 weeks covers advanced techniques and how to recover from bad runs. Slack channel link is on this slide. Thanks for being hands-on today."

**Pacing**: 5 minutes quiz + 5 minutes wrap.

---

## Pacing summary

- Module 1: 35 minutes (teach + exercise + share)
- Break: 10 minutes
- Module 2: 35 minutes
- Module 3: 25 minutes
- Quiz + wrap: 10 minutes
- **Total: 115 minutes** (5-minute buffer for transitions)

## What the skill called out as weak

> Three flags:
>
> 1. **You almost overpacked this.** Cutting "recover from bad runs" was the right call. Don't add it back. Workshop overpack is the #1 cause of rushed wrap-ups.
> 2. **The exercises depend on people having a real recent bug to work with.** A few of them won't, and they'll sit on their hands. Have one or two pre-baked bugs ready as a fallback.
> 3. **The quiz is fine but it's heads-down.** If you have time, swap Q5 for "share one technique you'll try Monday morning" — that lifts the energy at the end and gives you a Slack-thread starter.
