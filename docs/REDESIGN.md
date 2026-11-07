# Redesign report — Java QCM

## Section 1 — Audit et diagnostic

| Zone | Problème |
|---|---|
| Typo | Stack system/Roboto-like, `font-serif` sans vraie voix display |
| Couleur | Navy générique, pills `rounded-full`, peu de matière |
| Hiérarchie | 4 cartes métriques égales (template hero-metric) + eyebrows |
| Layout | Peu d’asymétrie Operate ; practice/exam en monobloc |
| Motion | Transitions basiques, pas de stagger ni easing signature |
| A11y | Globalement correct (skip, focus, hotkeys) — à préserver |
| Skills | Absentes du dépôt avant ce travail |

## Section 2 — Design system

Voir `DESIGN.md` (oklch teal + slate, Outfit + JetBrains Mono, radius 0.7–1rem, motion 5, variance 7, density 4). Taste knobs dans `.cursor/skills/taste-skill/SKILL.md`.

## Section 3 — Code produit

- Tokens / composants globaux : `src/styles.css`, `src/index.html`
- Shell : `side-nav`, `topbar`, `app.component`
- Features : dashboard, practice, exam-*, review, recent, browser CSS
- Shared : question-card, answer-option, answer-review, empty/loading/progress/timer/toast
- Skills installées : `.cursor/skills/{impeccable,taste-skill,web-design-engineer,awesome-design-skills,design-style,web-design-guidelines}`
- Contexte produit : `PRODUCT.md`, règle `.cursor/rules/design-skills.mdc`

## Section 4 — Impeccable

```text
./.cursor/skills/impeccable/scripts/impeccable detect src --json
→ []

./.cursor/skills/impeccable/scripts/impeccable detect http://127.0.0.1:4200 --json
→ []

./.cursor/skills/impeccable/scripts/impeccable detect http://127.0.0.1:4200 --viewport 390x844 --json
→ []
```

## Section 5 — Checklist finale

- [x] WCAG 2.2 AA intent : contraste tokens, `:focus-visible`, live regions, hotkeys
- [x] Responsive : rail desktop + bottom nav mobile, grilles → colonne
- [x] Performance : CSS only motion, Chart.js lazy, fonts preconnect
- [x] Finition : reduced-motion, selection themed, noise overlay fixed, no emoji icons
- [x] Tests : `npm test` 6/6 ; `npm run build` OK
