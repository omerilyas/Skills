# Starter Prompts

Copy-paste prompts to invoke the PowerPoint Builder skill in your AI agent. The skill will run its intake questions before drafting; that's intentional. Don't strip them out.

The prompts are organized by mode. Pick the closest match, paste it, and replace the bracketed placeholders.

---

## Executive Briefing Mode

### 1. Convert messy notes into an exec briefing

```
Use the PowerPoint Builder skill in Executive Briefing Mode.

I have [N] minutes with [audience: e.g. "our SVP of Engineering and her chief of staff"]. The purpose is [e.g. "to get funding approved for Q3"].

Here are my raw notes:

[paste notes / bullets / context here]

Run your intake questions, propose a storyline, and once I confirm, draft the slide-by-slide outline with speaker notes and visual recommendations. Be ruthless about cutting slides.
```

### 2. Translate technical material into an exec briefing

```
Use the PowerPoint Builder skill in Executive Briefing Mode.

I'm presenting to [audience]. They are not technical. The material below IS technical. Translate it into a [N]-slide outline that lands the business case in plain language.

Material:

[paste technical material — architecture doc, whitepaper, design doc, etc.]

Desired outcome: [e.g. "approval to fund a 6-month migration"].
Run intake first.
```

### 3. Strategic recommendation deck

```
Use the PowerPoint Builder skill in Executive Briefing Mode.

I need to make a strategic recommendation to [audience] in [N] minutes. I've been weighing [option A] vs. [option B]. My current lean is [option] because [reason].

Help me build a Pyramid-Principle-led deck that opens with the recommendation, presents the evidence, addresses the counter-argument, and ends with a specific ask.

Context I have so far:

[paste any analysis, numbers, prior conversations]

Run intake before drafting.
```

---

## Customer Presentation Mode

### 4. Customer pitch from a discovery call

```
Use the PowerPoint Builder skill in Customer Presentation Mode.

I'm presenting to [customer name + roles in the room] in [N] minutes. I had a discovery call last week and learned [paste discovery notes].

My pitch is for [product / capability]. I want to leave with [desired outcome — PoC scoped, workshop scheduled, exec sponsor identified].

Build me a structure that opens with their world (not our product), tells a Problem -> Solution -> Outcome story, and ends with a specific next step. Run intake first.
```

### 5. Convert a whitepaper into a customer pitch

```
Use the PowerPoint Builder skill in Customer Presentation Mode.

I have a [N]-page whitepaper and a [M]-minute customer slot. The customer cares about [pain points].

Whitepaper content:

[paste whitepaper text or summary]

Pull the customer-facing story out of this. Cut the technical depth that doesn't drive the customer's outcome. End with a specific ask. Run intake first.
```

### 6. Demo-led customer pitch

```
Use the PowerPoint Builder skill in Demo Storytelling Mode.

I have a live demo of [capability]. The customer is [name + roles]. The demo runs about [X] minutes. Total slot is [N] minutes.

Build me 3-4 framing slides before the demo and 2-3 follow-up slides after. The slides should bookend the demo, not re-explain it. Connect what the customer is about to see to their actual pain (which is [paste pain]).
```

---

## Technical Deep Dive Mode

### 7. Architecture review for a partner team

```
Use the PowerPoint Builder skill in Technical Deep Dive Mode.

I'm presenting [system / architecture name] to [audience: e.g. "8 partner-team engineers, mid+ senior, all comfortable with [relevant tech]"]. They will integrate against this system, so they need a working mental model and a checklist.

Material:

[paste architecture description, diagrams as text, sequence-of-operations, gotchas]

I have [N] minutes and want significant Q&A time. Build a structure that goes architecture -> sequence -> failure modes -> integration checklist. Be precise. Don't dumb it down. Run intake first.
```

### 8. Whitepaper-to-talk for a technical audience

```
Use the PowerPoint Builder skill in Technical Deep Dive Mode.

I'm giving a [N]-minute talk on [topic] to [audience]. I have a whitepaper but it's the wrong shape for a talk.

Whitepaper:

[paste whitepaper]

Restructure into a talk: lead with the technical question, walk through the approach, show the trade-offs, end with the actual results. Don't soften — they're a technical audience.
```

---

## Workshop / Training Mode

### 9. Hands-on workshop from a topic + objectives

```
Use the PowerPoint Builder skill in Workshop / Training Mode.

I'm running a [N]-hour workshop on [topic] for [audience]. By the end, attendees should be able to:

1. [learning objective 1]
2. [learning objective 2]
3. [learning objective 3]

I want hands-on exercises after each module, plus a checkpoint at the end. Push back if I've overpacked the time. Run intake first.
```

### 10. Structure existing training material into a workshop

```
Use the PowerPoint Builder skill in Workshop / Training Mode.

I have a pile of training material on [topic] but it's structured like a lecture. I have [N] hours, [M] attendees, and want to convert this into an exercise-driven workshop.

Material:

[paste material]

Identify the 2-3 core skills, build modules around them, design an exercise per module, and end with a checkpoint quiz. Tell me what to cut.
```

---

## General-purpose

### 11. Critique my existing deck

```
Use the PowerPoint Builder skill.

I have an existing deck I'm not happy with. Audience is [audience], time is [N] minutes, purpose is [purpose].

Existing slides (one per line, just the titles):

[paste your current slide titles]

Tell me what's wrong with the storyline, which slides to cut, which slides are missing, and propose a new structure. Be direct.
```

### 12. Build a deck from a transcript

```
Use the PowerPoint Builder skill in [pick a mode] Mode.

I have a transcript of [a meeting / interview / customer call / panel] and need to turn it into a [N]-minute presentation for [audience].

Transcript:

[paste transcript]

Identify the latent narrative (don't just summarize the transcript), propose a storyline, and build a slide-by-slide outline. Run intake first.
```
