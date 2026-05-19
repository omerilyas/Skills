# Component Spec

Use this prompt to scope a single component before implementing it. Forces full state coverage and a clear API.

---

Before writing the component, fill in this spec. Then implement it in TypeScript with shadcn/ui primitives plus Tailwind, including every state listed.

## Component

- **Name:** [PascalCase, e.g. `OrderStatusCard`]
- **Where it lives:** [`components/...` or `components/ui/...`]
- **One-line purpose:**

## Props

```ts
type {{ComponentName}}Props = {
  // list every prop, with TS types and JSDoc on the non-obvious ones
};
```

Include sensible defaults. Mark optional props explicitly. Avoid `any`.

## States — implement all of them

- **Default** — the resting state.
- **Loading** — what the user sees while data is in flight (skeleton, shimmer, placeholder, spinner — pick one and justify).
- **Empty** — what the user sees when there is nothing yet. Must teach the next action, not just say "no data."
- **Error** — what the user sees when the operation failed. Must offer a recovery path or contact, not a dead end.
- **Hover** — visible feedback on pointer-capable devices.
- **Focus** — visible keyboard focus ring. WCAG-compliant contrast.
- **Disabled** — clearly non-interactive, reduced visual weight, retains label readability.
- **Success / Confirmation** — if the component performs an action, what does success look like.

## Accessibility

- Roles and ARIA labels.
- Keyboard interactions (Tab, Enter, Space, Esc, arrow keys where relevant).
- Color contrast: AA at minimum.
- Reduced-motion variant if motion is non-trivial.

## Motion

- Entrance:
- Hover:
- Press / active:
- Exit (if applicable):

Cite the Framer Motion primitive (e.g. `motion.div`, `AnimatePresence`, `LayoutGroup`).

## Responsive Behavior

What changes at sm / md / lg / xl. Be specific — "stacks vertically below md" beats "responsive."

## Tests / Stories (if the project has Storybook or testing)

- One story per state listed above.
- One interaction test for the primary action.

## Acceptance

The component is done when:

1. Every state above renders without dev-tool warnings.
2. Keyboard-only navigation works.
3. The component looks intentional in both light and dark mode (or the chosen single mode).
4. No `any`, no console logs, no commented-out code.
