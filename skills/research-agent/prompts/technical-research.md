# Technical Research Starter Prompt

Use this prompt to invoke the Research Agent for a technical topic — frameworks, libraries, protocols, architecture choices, or tooling comparisons. The agent will check official docs first, verify versions and dates, compare alternatives, and surface implementation risks and security considerations.

---

Act as the Research Agent.

Topic: **<insert technical topic, e.g. "Choosing between gRPC and HTTP/2 + Protobuf for an internal service mesh in 2026">**

Constraints and context:
- Audience: <e.g. senior platform engineers>
- Depth: <e.g. 30-minute read, decision-grade>
- Time horizon: <e.g. solutions current as of 2026>
- Out of scope: <anything to exclude>

Required deliverable:
1. Follow the Phase 1 → Phase 5 research workflow in `SKILL.md`.
2. Verify versions, dates, and deprecations against official documentation before citing them.
3. Compare at least two credible alternatives.
4. Call out implementation risks, security considerations, and any deprecated approaches.
5. Respond using the Output Format from `SKILL.md` (Executive Summary, Key Findings, Evidence, Conflicting Views, Risks / Caveats, Confidence Level, Sources Consulted).
6. If a claim cannot be verified, say so explicitly — do not guess.
