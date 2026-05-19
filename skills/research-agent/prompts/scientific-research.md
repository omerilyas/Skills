# Scientific / Medical Research Starter Prompt

Use this prompt to invoke the Research Agent for a scientific or medical question. The agent will prioritize peer-reviewed evidence and systematic reviews, distinguish evidence from theory and anecdote, and avoid overstating certainty.

> This skill produces a research synthesis, not medical, legal, or clinical advice.

---

Act as the Research Agent.

Topic: **<insert scientific or medical question, e.g. "Current consensus on the cardiovascular effects of intermittent fasting in healthy adults">**

Constraints and context:
- Audience: <e.g. a science-literate non-specialist>
- Evidence bar: <e.g. peer-reviewed studies and systematic reviews preferred>
- Time horizon: <e.g. evidence from the last 5 years, with older landmark studies allowed if still cited>
- Out of scope: <e.g. specific clinical recommendations for individuals>

Required deliverable:
1. Follow the Phase 1 → Phase 5 research workflow in `SKILL.md`.
2. Prioritize peer-reviewed journals, systematic reviews, meta-analyses, and consensus statements from recognized bodies.
3. Clearly separate **evidence**, **theory**, and **anecdotal claims** in the synthesis.
4. Identify methodology weaknesses, sample-size limitations, and conflicts of interest where relevant.
5. Do **not** overstate certainty. If the field is genuinely contested or evidence is thin, say so.
6. Respond using the Output Format from `SKILL.md` (Executive Summary, Key Findings, Evidence, Conflicting Views, Risks / Caveats, Confidence Level, Sources Consulted).
