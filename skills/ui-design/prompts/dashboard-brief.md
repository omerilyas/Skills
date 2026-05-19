# Dashboard Brief

Use this prompt when the request is a dashboard, admin portal, or any data-rich internal tool. It forces real information design instead of the default sidebar-plus-three-KPI-cards layout.

---

## Audience

- **Primary user role:** [analyst, admin, operator, oncall engineer, finance lead, ...]
- **Frequency of use:** [hourly, daily, monthly]
- **Skill level:** [novice, power user, mixed]
- **What "fast" means here:** [seconds-to-insight, seconds-to-action, or both]

## Jobs to be Done

List the top 3–5 things the user must accomplish, in priority order. Phrase each as a verb-led job.

1.
2.
3.

## Information Hierarchy

- **At-a-glance (top 5% of screen):** the one or two metrics that answer "should I be worried right now?"
- **Daily-driver region (middle):** the working surface — tables, lists, charts, filters.
- **Reference / drill-down (bottom or side):** detail views, history, raw data.

Resist putting everything at the top. Priority is a story, not a wall.

## Layout Decision

Pick one navigation pattern and justify in one line:

- Top nav + content
- Left sidebar + content
- Vertical rail (icons only) + content
- Command palette first, no chrome
- Split view (list + detail)
- Workspace tabs

## Data Visualization

For each major metric or dataset, name:

- The chart or surface (line, area, bar, sparkline, table, heatmap, status grid, single big number).
- The reason it is the right shape for that data.
- The empty state.
- The loading state (skeleton with the right shape, not a spinner).
- The error state.

## Filtering and Search

- What can be filtered, in what order of importance.
- Where filters live (top bar, side rail, inline above table).
- Search scope: global, per-section, or both.
- Keyboard shortcut for search (`/` or `cmd+k` are the strong defaults).

## Tables — if any

- Right-align numerics. Left-align text. Center status chips.
- Sticky header. Sortable columns. Density toggle if rows exceed 50.
- Row hover state. Row selection if bulk action exists. Sticky first column on horizontal scroll.
- Empty state that teaches the next action.

## Density vs. Whitespace

State the trade-off explicitly. Tactical / Mission Control direction = high density, tight rhythm. Enterprise Premium = confident density with breathing room. Luxury Minimalism = low density, lots of whitespace. Match it to the user, not your taste.

## Status and Color Semantics

- Green = healthy / success (do not also use it for "selected").
- Amber = warning / attention.
- Red = error / breach / urgent.
- Neutral = no signal.
- Define one accent color separate from status colors so "important" and "broken" are visually distinct.

## Motion

Sparing. Use it for:

- New-row arrivals in a live table.
- Filter transitions.
- Chart entrance on page load.
- Confirmation of a destructive action.

Do not animate every card on every render.

---

Once this brief is filled in, proceed to component architecture and code. The dashboard should look like a working tool, not a marketing screenshot.
