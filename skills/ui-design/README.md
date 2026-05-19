# UI Design

Turns your AI agent into a senior product designer plus frontend engineer that ships visually distinctive, production-ready interfaces — never generic AI-template UI.

Given a brief, the skill commits to a single strong visual direction (editorial, brutalist, tactical, neo-banking, Apple-like refinement, and so on), defines a memorable signature interaction, and then ships clean, typed, accessible code in Next.js, React, TypeScript, Tailwind, shadcn/ui, and Framer Motion. Every output covers loading, empty, error, hover, and focus states, is responsive by default, and follows a clear component architecture.

## Default tech stack

Next.js (App Router) + React + TypeScript + Tailwind + shadcn/ui + Framer Motion + Lucide. Mobile-first. WCAG 2.1 AA. Override at the brief level if you need a different stack — the design philosophy stays identical.

## Install

ZIP path (non-technical):

1. Download the ZIP from the AI Skills Hub.
2. Unzip into your project's `skills/` directory.
3. Tell your agent: "Use the `ui-design` skill from `skills/ui-design`."

CLI path (when the CLI ships):

```
npx skillhub add https://github.com/omerilyas/Skills.git --skill ui-design
```

## See also

- `SKILL.md` — the full instruction body the agent reads. This is the meat of the skill; the README is just the trailer.
- `prompts/` — reusable starter prompts (visual direction brief, component spec, dashboard brief).
- `examples/` — worked examples showing input briefs and the kind of output the skill produces.

## Risk level

Low. This skill produces source code and writes nothing outside its own folder. It does not run hooks, modify config files, or touch secrets.

## Owner

`design-systems-team`

## Version

`1.0.0`
