# amritpalace.com — homepage brief

Source: https://amritpalace.com/ (Webflow site, last published 2026-09-17).
Local route: `/` (`src/app/page.tsx` → `src/components/sites/amritpalace/`).
Assets: `public/sites/amritpalace/` via `scripts/download-amritpalace-assets.sh`.
Source screenshots: `docs/research/amritpalace/source/` (desktop 1440×900, mobile 390×844).
Side-by-side comparisons (source left, clone right): `docs/research/amritpalace/comparison/`.

## Global rules

- Root sizing: `body { font-size: 1vw }` — almost every size is `em`, so the layout scales with viewport width. Breakpoints are Webflow's 991 / 767 / 479px; each one raises `em` multipliers.
- Fonts: Satoshi 400/500/700 (body, `font-weight: 500` default) and TT Ramillas Variable (headings, weight 300, uppercase, tight tracking). Files served by the source; local copies in `fonts/`. *TT Ramillas is a "Trial" build — needs a license before production use.*
- Colors: `--biege #d8cbb8`, `--dark #2c2c2c`, `--primary #d49653`; catering band `#bfb4a3`; footer `#292622`.
- Hidden scrollbar; text selection `#d49653` / `#2c2c2c`.
- Lenis smooth scroll: `duration 1.2`, easing `min(1, 1.001 - 2^(-10t))`, no smooth touch.

## Section order

1. **Header** (fixed). Desktop: logo, nav (Home, Catering, Gift Cards, About, Reserve a Table ▾, Contact) + right links (Menu + icon, Order Now ▾ + icon). Becomes `is-colored` (blurred dark bg) once the hero leaves the viewport; slides up (`translateY(-100%)`, ~0.7s) on scroll down and back on scroll up. ≤767px: logo + "Menu"/"Close" hamburger. ≤479px: bottom fixed bar (Menu | Order Now ▾ opening upward).
2. **Hero** 100vh: hall photo (desktop) / mobile photo ≤991px, gradient overlay. "FLAVORS / THAT STAY" with captions "serving central florida" / "established 1996". Bottom: intro paragraph + Google review card (4.7/5, 3 576 reviews). Hero image parallax −5% → 5%.
3. **Video** 100vh: autoplay muted looped video, 55% black overlay, sticky text box ("The Spirit of Indian Dining", About Us button). Section scales 0.95 → 1 as it enters.
4. **Featured menu** 135vh: left dark column with orange card (8 signature plates + "View Full Menu"); right beige column with heading, paragraph, Reserve a Table, food photo (parallax).
5. **Catering**: centered heading grid, paragraph, 3-card slider (3/2/1 per view at desktop/tablet/mobile).
6. **Drinks**: sticky left (100vh) heading + Open Menu + 6 drinks; right two photos with parallax.
7. **Gift card** 150vh: "Gift a taste of tradition", Lottie e-card animation (autoplay loop, canvas, `xMidYMid slice`), captions, Order Now.
8. **Rooted in Experience** 135vh: full-bleed photo with parallax and 30% overlay; heading top, paragraph bottom.
9. **Testimonials**: heading + review card; 27s infinite marquee of 4 cards (duplicated list).
10. **Footer**: locations / hours / logo / contact / newsletter grid, link columns, huge "AMRIT PALACE", copyright row. Phones and "E-mail Us" copy their text to the clipboard and show "Phone copied!" / "E-mail copied!" briefly.

## Motion rules (observed)

- Headings/captions with `letters-fade-in`: chars fade from 0 → 1, 0.25s each, total stagger 0.8s, `power1.out`, once when top reaches 70% of viewport.
- Buttons with `letters-fade-in-hover`: on mouseenter chars re-fade 0 → 1 (0.2s, stagger 0.3s). Button padding 4 → 6px and scale 1.02 on hover (0.45s).
- Parallax images: `translateY(-5%) → 5%` while the container crosses the viewport.
- Mobile menu: panel `translateX(100%) scale(0.9)` → `0 / 1` in ~0.8s ease-in-out; hamburger lines rotate ±45° (~0.5s). Header gets `is-colored` while open.
- Dropdowns: click toggles (Webflow `w-dropdown`), list absolutely positioned, beige panel.

## Source quirks

- The "Reserve a Table" button in the featured menu (`data-open-reserve`, `href="#"`) does nothing on the source at any width. Local build points it at the Ocala OpenTable page, like the footer's "Reserve a Table".
- Responsive `-p-<w>.avif` image variants are served as WebP; saved locally with `.webp` extensions.
- The `fs-copyclip` "E-mail Us" link copies the literal text "E-mail Us" (no address is configured on the source).

## Verification (clone vs source)

- Section offsets and document height identical at 320, 390, 600, 768, 800, 992, 1024, 1440 and 1920px wide.
- Header geometry, dropdown panel rects and mobile-menu transforms match the source to the sub-pixel.
- No horizontal overflow at any tested width; no console errors; all local assets return 200 with the right MIME type.
- `npm run check` (lint + typecheck + production build) passes.

## Known differences

- Lottie gift-card and marquee animations are time-based, so frames differ between any two captures.
- Header hide/show uses a CSS transition (0.7s) rather than Webflow's IX2 smoothing; reveal on scroll-up is slightly faster than the source.
- Letter reveal uses CSS transitions with the source's timing instead of GSAP; the curve is `power1.out` equivalent.
- Catering slider uses native horizontal scroll with snap below 992px instead of Splide's drag (all three cards fit at desktop, as on the source).
- Links to other source pages (Catering, Gift Cards, About, Contact, Menu, Store, legal pages) point to amritpalace.com because only the homepage was cloned.
