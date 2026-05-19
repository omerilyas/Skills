# Example: Editorial Landing Page

Worked example showing how the skill responds to a landing-page brief by committing to the **Editorial / Magazine** direction instead of defaulting to a generic SaaS hero.

---

## Input Brief (from the user)

> Build a landing page for a new long-form journalism platform called *Lantern*. It publishes one investigative story per week. The audience is people who already pay for The Atlantic and The New Yorker. We want it to feel like it belongs on a coffee table. Stack: Next.js, Tailwind, shadcn, Framer Motion. Single page is fine for now.

## What the Skill Produces

### 1. Design Rationale

- **Visual direction:** Editorial / Magazine. The audience reads long-form on principle; the page must read like a printed cover, not a tech product.
- **Why it fits:** Coffee-table feel = print-grade typography, generous margins, asymmetric grid, restraint. A SaaS-style hero with a screenshot would actively lose this audience.
- **Signature element:** A masthead nameplate that anchors the top of the page like a print masthead, with the current week's story headline set in a display serif at 11–14 vw. The headline is the hero — there is no illustration.

### 2. Technical Architecture

- Next.js App Router, single route `/`.
- Folder layout:

  ```
  app/page.tsx
  app/layout.tsx
  components/Masthead.tsx
  components/StoryHero.tsx
  components/IssueIndex.tsx
  components/Subscribe.tsx
  components/Footer.tsx
  components/ui/Button.tsx
  styles/globals.css
  styles/typography.css
  lib/cn.ts
  types/issue.ts
  ```

- **Type system:** `Issue` (title, dek, byline, publishedAt, slug, coverPhotoUrl).
- **Libraries:** Tailwind for layout, Framer Motion for the masthead's scroll-pinned shrink, `next/font` to load a display serif (e.g. *GT Sectra*) and a workhorse text serif (e.g. *Source Serif*) plus a small monospace for issue numbers.
- **Color tokens** in `globals.css`:

  ```css
  :root {
    --bg: #f6f2ea;        /* off-white paper */
    --fg: #16140f;        /* near-black ink */
    --fg-muted: #5a5446;  /* dropped-cap brown */
    --accent: #a23b1f;    /* burnt-red, used once per page */
    --rule: #d8cfbe;      /* hairline rules between sections */
  }
  ```

### 3. Implementation (representative snippets)

**`components/Masthead.tsx`** — the page's signature element. A wide, low masthead that compresses on scroll, leaving a quiet running header.

```tsx
"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Masthead() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 320], [1, 0.42]);
  const y = useTransform(scrollY, [0, 320], [0, -32]);
  const opacity = useTransform(scrollY, [0, 320], [1, 0.8]);

  return (
    <motion.header
      ref={ref}
      style={{ scale, y, opacity }}
      className="
        sticky top-0 z-40
        flex items-end justify-between
        border-b border-[var(--rule)]
        bg-[var(--bg)]/90 backdrop-blur
        px-8 pb-4 pt-10
        origin-top
      "
    >
      <div className="flex items-baseline gap-6">
        <h1 className="font-serif text-[clamp(2.5rem,9vw,8rem)] leading-[0.85] tracking-tight">
          Lantern
        </h1>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--fg-muted)]">
          Issue 014 · Week of May 19
        </span>
      </div>
      <nav className="hidden gap-8 text-sm md:flex">
        <a href="#index" className="hover:text-[var(--accent)]">Archive</a>
        <a href="#about" className="hover:text-[var(--accent)]">About</a>
        <a href="#subscribe" className="hover:text-[var(--accent)]">Subscribe</a>
      </nav>
    </motion.header>
  );
}
```

**`components/StoryHero.tsx`** — the headline *is* the hero. No illustration.

```tsx
export function StoryHero({
  kicker,
  headline,
  dek,
  byline,
  readingTime,
}: {
  kicker: string;
  headline: string;
  dek: string;
  byline: string;
  readingTime: string;
}) {
  return (
    <article className="mx-auto max-w-[78rem] px-8 pb-32 pt-20">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">
        {kicker}
      </p>
      <h2
        className="
          mt-8 font-serif font-semibold
          text-[clamp(3rem,11vw,9.5rem)]
          leading-[0.92] tracking-[-0.02em]
        "
      >
        {headline}
      </h2>
      <p
        className="
          mt-10 max-w-3xl
          font-serif text-2xl leading-[1.45] text-[var(--fg-muted)]
        "
      >
        {dek}
      </p>
      <div className="mt-12 flex items-center gap-6 border-t border-[var(--rule)] pt-6">
        <span className="text-sm">By {byline}</span>
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--fg-muted)]">
          {readingTime}
        </span>
      </div>
    </article>
  );
}
```

**State coverage** for `IssueIndex`:

- *Loading:* skeleton rows with the same column rhythm as real rows (issue number, date, headline, byline).
- *Empty:* "Issue 001 publishes this Friday" — teaches the wait, doesn't apologize.
- *Error:* "Couldn't load the archive. Try again, or read this week's story above."
- *Hover:* row underlines the headline and shifts the byline +4px right with a 220ms ease.
- *Focus:* visible outline using `--accent` at AA contrast.

### 4. Suggested Future Enhancements

1. Add a **scroll-driven dropped-cap** on the dek when the user scrolls past the masthead — pure CSS via `text-shadow` and a sticky pseudo-element.
2. **Issue archive page** (`/archive`) using `IssueIndex` as the primary surface, with a year-rail on the left.
3. **Reader view** for individual stories with a typographic toolbar (font size, serif/sans toggle, dark paper, bookmark).
4. **Subscriber paywall** with a tasteful soft-fade on the third paragraph of any locked story, plus a one-click magic-link auth.
5. **Print stylesheet** so subscribers can save any story as a properly-typeset PDF — reinforces the print DNA.
