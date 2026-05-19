# Example: Tactical Admin Dashboard

Worked example showing how the skill responds to an admin-portal brief by committing to the **Tactical / Mission Control** direction, instead of defaulting to the generic "sidebar + three KPI cards + line chart" layout.

---

## Input Brief (from the user)

> Build an internal admin portal for our security operations team. They monitor 80–120 production services and respond to incidents around the clock. They are power users — they live in this tool. Stack: Next.js, Tailwind, shadcn, Framer Motion. Dark mode primary.

## What the Skill Produces

### 1. Design Rationale

- **Visual direction:** Tactical / Mission Control. This is a 24/7 operations surface staffed by power users; visual calm is the wrong goal — visual *legibility under stress* is the right goal.
- **Why it fits:** The audience does not want a marketing dashboard; they want a flight deck. Dense data, status-first color, monospace numerics, annotated regions, real-time energy.
- **Signature element:** A **Status Spine** running down the left edge — a vertical 6px column of color blocks where each block is a service. At a glance, the operator can see the entire fleet's health as a single colored stripe before reading any text. Hovering a block opens a details drawer; clicking pins it.

### 2. Technical Architecture

- Next.js App Router, routes: `/`, `/services/[id]`, `/incidents`, `/runbooks`.
- Folder layout:

  ```
  app/(ops)/layout.tsx
  app/(ops)/page.tsx
  app/(ops)/services/[id]/page.tsx
  app/(ops)/incidents/page.tsx
  components/StatusSpine.tsx
  components/ServiceGrid.tsx
  components/IncidentTimeline.tsx
  components/MetricTile.tsx
  components/CommandPalette.tsx
  components/ui/Badge.tsx
  components/ui/Table.tsx
  hooks/useFleetStatus.ts
  hooks/useHotkey.ts
  lib/severity.ts
  lib/format.ts
  styles/globals.css
  types/service.ts
  types/incident.ts
  ```

- **State strategy:** `useFleetStatus` is the single source of truth, polled every 5s with stale-while-revalidate; downstream components subscribe via context. No prop-drilling.
- **Libraries:** shadcn `Table`, `Tooltip`, `Sheet` for the side drawer, `Command` for `cmd+k`. Recharts for the timeline. Framer Motion only for: drawer slide, spine block flash on status change, and palette open.
- **Color tokens** (dark, intentional — not an inverted light palette):

  ```css
  :root[data-theme="ops"] {
    --bg: #0a0d10;            /* near-black, slightly cool */
    --bg-elev: #11161b;       /* panel surfaces */
    --bg-elev-2: #1a2027;     /* hover / active rows */
    --fg: #e6ebee;
    --fg-muted: #7d8a92;
    --rule: #1e252c;
    --accent: #5cf2c2;        /* signal teal — used for selection/focus only */
    --healthy: #38d399;
    --warn:    #f5b942;
    --danger:  #ff5b5b;
    --info:    #6db6ff;
  }
  ```

  Status colors and the accent are deliberately distinct so "selected" and "broken" never collide.

### 3. Implementation (representative snippets)

**`components/StatusSpine.tsx`** — the signature element.

```tsx
"use client";

import { motion } from "motion/react";
import type { Service } from "@/types/service";
import { severityToColorVar } from "@/lib/severity";

export function StatusSpine({
  services,
  activeId,
  onHover,
  onSelect,
}: {
  services: Service[];
  activeId: string | null;
  onHover: (id: string | null) => void;
  onSelect: (id: string) => void;
}) {
  return (
    <aside
      role="navigation"
      aria-label="Fleet status spine"
      className="
        sticky top-0 flex h-screen w-2 shrink-0 flex-col
        border-r border-[var(--rule)] bg-[var(--bg)]
      "
    >
      {services.map((s) => {
        const active = s.id === activeId;
        return (
          <motion.button
            key={s.id}
            type="button"
            onMouseEnter={() => onHover(s.id)}
            onMouseLeave={() => onHover(null)}
            onClick={() => onSelect(s.id)}
            aria-label={`${s.name}: ${s.severity}`}
            className="
              relative w-full flex-1
              outline-none
              focus-visible:z-10
              focus-visible:ring-1 focus-visible:ring-[var(--accent)]
            "
            style={{ backgroundColor: severityToColorVar(s.severity) }}
            animate={{ scaleX: active ? 2.6 : 1, originX: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        );
      })}
    </aside>
  );
}
```

**`components/MetricTile.tsx`** — dense, monospace numerics, no fluff.

```tsx
export function MetricTile({
  label,
  value,
  unit,
  delta,
  trend,
}: {
  label: string;
  value: string;            // pre-formatted, e.g. "1,284"
  unit?: string;            // "ms", "req/s", "%"
  delta?: string;           // "+4.2%"
  trend?: "up" | "down" | "flat";
}) {
  const trendColor =
    trend === "up"   ? "text-[var(--healthy)]" :
    trend === "down" ? "text-[var(--danger)]"  :
                       "text-[var(--fg-muted)]";

  return (
    <div className="border border-[var(--rule)] bg-[var(--bg-elev)] px-5 py-4">
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--fg-muted)]">
        {label}
      </div>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="font-mono text-3xl tabular-nums tracking-tight text-[var(--fg)]">
          {value}
        </span>
        {unit && (
          <span className="font-mono text-xs text-[var(--fg-muted)]">{unit}</span>
        )}
      </div>
      {delta && (
        <div className={`mt-1 font-mono text-xs ${trendColor}`}>{delta}</div>
      )}
    </div>
  );
}
```

**Service table state coverage** (`ServiceGrid`):

- *Default:* dense rows, monospace status timestamps, severity chip on the left, p95 latency right-aligned.
- *Loading:* skeleton rows that match real row geometry — same column widths, same vertical rhythm.
- *Empty:* "No services match these filters. `Esc` to clear, or `cmd+k` to broaden the search." — teaches the next action.
- *Error:* "Lost connection to the metrics backend 14s ago. Showing last-known values." — never blank, always honest about staleness.
- *Hover:* row gets `--bg-elev-2` background, severity chip brightens 8%, latency value gains a subtle underline.
- *Focus:* visible 1px ring in `--accent`, AA contrast on the dark surface.
- *Selection:* persistent left-border indicator in `--accent` so the user can shift-click to compare.

**Information hierarchy:**

- Top 6vh: incident banner (shown only when there is one — never a placeholder).
- Next 14vh: 4 metric tiles in a tight 4-column grid (errors/min, p95, deploys-today, on-call).
- Body: service grid (filterable, sortable, sticky header, virtualized over ~100 rows).
- Right rail (collapsible `Sheet`): details for the focused service — recent deploys, last 5 alerts, runbook link.
- `cmd+k`: command palette over services, incidents, runbooks. Always one keystroke away.

### 4. Suggested Future Enhancements

1. **Live spine pulses** — when a service flips to `warn` or `danger`, fire a 600ms desaturate-and-flash on its spine block. Capped to 3 simultaneous pulses to avoid disco-mode under outage conditions.
2. **Annotated incident timeline** — each incident on the timeline carries pin-style annotations (deploy markers, on-call handoffs, paging events) with hover tooltips.
3. **Runbook overlay** — `?` key opens a glassmorphic overlay with the runbook for the focused service, formatted for keyboard reading.
4. **Operator presence** — show small avatars of other operators currently viewing the same service, like Figma multiplayer cursors but quieter.
5. **Audio cue mode** — opt-in subtle audio for severity escalations (separate channels for warn vs. danger). Off by default, on per-operator preference. Crucial for overnight shifts.
