# Redesign report — Java QCM (unslop)

Credit: [heydamir/unslop](https://github.com/heydamir/unslop) by Damir Sokolovsky (@heydamir), CC BY 4.0.

## Audit (signs found)

- Radial teal washes + noise grain on `body` → removed
- Cool blue-tinted surfaces (not graphite) → graphite ramp
- Teal chrome accent everywhere → amber accent for moments only; primary button = ink / off-white
- Outfit display + weight 650–700 → IBM Plex Sans/Mono, 400–500
- Uppercase tracked meta labels → sentence case / quiet mono
- Glass topbar blur → solid canvas hairline
- Staggered `reveal-up` on metrics → removed
- Soft decorative panel shadows on dark → surface steps only

## Direction

See `DESIGN.md`. Product: offline Java interview QCM. Character: exact, quiet, exam-room. World: graphite desk / warm lamp. Moments: timer-score + answer states. Signature: keycaps.

## Passes applied

1. Spacing — 4px grid, denser nav, aligned metric row  
2. Color — graphite + amber  
3. Icons — SVG only, stroke 1.5  
4. Copy — existing i18n kept (no invented claims)  
5. Type — IBM Plex, sentence case  
6. Layout — shell proportions kept, quieter panels  
7. Details — nested radii 8/12, keycaps, quiet tags  
8. Visuals — no filler blobs; product moments only  
9. Motion — one ease, press scale, no entrance chrome animation  
