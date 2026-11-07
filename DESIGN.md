# Java QCM — Design System

Mode: **Operate** (study tool / dashboard). Taste knobs: `DESIGN_VARIANCE: 7`, `MOTION_INTENSITY: 5`, `VISUAL_DENSITY: 4`.

## Intent

A focused exam-prep surface for Java interviews. Calm, precise, readable under long sessions. Brand = **Java QCM** as product mark in the shell, not a marketing hero. Light and dark are first-class.

## Color (oklch)

Single accent. Neutrals stay cool slate. Semantic greens / reds / ambers only for answer states.

### Light

| Token | oklch | Role |
|---|---|---|
| `--color-canvas` | `oklch(0.965 0.012 230)` | Page wash |
| `--color-surface` | `oklch(0.995 0.004 230)` | Panels |
| `--color-surface-2` | `oklch(0.94 0.016 230)` | Nested / hover |
| `--color-ink` | `oklch(0.24 0.028 250)` | Body |
| `--color-muted` | `oklch(0.48 0.03 250)` | Secondary |
| `--color-line` | `oklch(0.88 0.02 235)` | Hairlines |
| `--color-accent` | `oklch(0.52 0.11 195)` | Teal action |
| `--color-accent-ink` | `oklch(0.98 0.01 195)` | On accent |
| `--color-good` | `oklch(0.48 0.12 150)` | Correct |
| `--color-good-bg` | `oklch(0.95 0.04 150)` | Correct wash |
| `--color-bad` | `oklch(0.5 0.16 20)` | Incorrect |
| `--color-bad-bg` | `oklch(0.95 0.03 20)` | Incorrect wash |
| `--color-flag` | `oklch(0.52 0.12 75)` | Bookmark |
| `--color-flag-bg` | `oklch(0.95 0.05 85)` | Bookmark wash |
| `--color-nav` | `oklch(0.22 0.03 250)` | Side / mobile nav |
| `--color-nav-ink` | `oklch(0.96 0.01 230)` | On nav |

### Dark

| Token | oklch |
|---|---|
| canvas | `oklch(0.18 0.02 250)` |
| surface | `oklch(0.23 0.025 250)` |
| surface-2 | `oklch(0.28 0.03 250)` |
| ink | `oklch(0.93 0.015 230)` |
| muted | `oklch(0.72 0.025 240)` |
| line | `oklch(0.34 0.03 250)` |
| accent | `oklch(0.78 0.09 195)` |
| accent-ink | `oklch(0.2 0.03 250)` |
| good / bad / flag | lighter ink on deep tinted washes |
| nav | `oklch(0.14 0.02 250)` |

## Typography

- **Display / UI headings:** Outfit (`--font-display`) — tracking slightly tight on large sizes.
- **Body:** Outfit (`--font-sans`).
- **Data / timer / IDs:** JetBrains Mono (`--font-mono`), tabular nums.
- Scale: 12 / 14 / 16 / 18 / 24 / 32 / 40. Body measure ≤ ~65ch for explanations.
- No Inter, Roboto, system-as-brand, or serif on Operate surfaces.

## Spacing & radius

- Base 4px. Section gaps 24–40px. Control padding 10–14px.
- Radius: controls `0.7rem`, panels `1rem`, never pill (`999px`) for primary actions.
- Max content width ~72rem centered in the main column.

## Elevation & material

- Prefer 1px borders + soft over heavy cards.
- Soft tinted shadow: `0 12px 32px color-mix(in srgb, var(--color-ink) 6%, transparent)`.
- Canvas atmosphere: faint radial teal wash + fixed noise overlay (`pointer-events: none`).
- Topbar: light glass (`backdrop-blur`) with inner top highlight, not decorative blur stacks.

## Motion (intensity 5)

- Easing: `cubic-bezier(0.16, 1, 0.3, 1)`.
- Durations: 180–280ms for hover/focus; stagger `calc(var(--i) * 50ms)` on dashboard metrics.
- Animate `transform` / `opacity` only. Honor `prefers-reduced-motion`.
- Buttons: `:active { transform: scale(0.98) }`.

## Components

- **Buttons:** solid accent primary; ghost with hairline; danger uses bad wash. Min hit 44px on mobile nav.
- **Fields:** label above, helper below, 16px+ input text on mobile.
- **Panels:** surface + line; used when grouping interactive content (filters, question, dialog).
- **Answer options:** radio/checkbox affordance with drawn SVG marks — no emoji.
- **Progress:** thin accent track; timer urgent state uses `--color-bad`.
- **Nav:** desktop rail with active fill mix; mobile bottom bar six equal slots.

## Layout rules

- Dashboard metrics: asymmetric grid (`2fr 1fr 1fr` / stacked), not four equal hero cards.
- Practice / exam: question is the primary plane; chrome stays quiet.
- Mobile: single column, bottom nav clearance `pb-24`.

## Accessibility

- WCAG 2.2 AA contrast on text and controls.
- Visible `:focus-visible` ring in accent.
- Live regions for toasts, revealed answers, timer.
- Keyboard hotkeys preserved (`1–9`, Enter, F).
