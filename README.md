# SabiPlay — Landing Page

A pixel-perfect implementation of the SabiPlay marketing landing page, built from
the Figma design (`elM2EEQXDbaw7tp7mxkDNA`, node `124-4698`).

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Structure

The page is composed of ten section components, in source order:

| Section | File |
| --- | --- |
| Header + Hero | `components/sections/Hero.tsx`, `Header.tsx` |
| Stats | `components/sections/Stats.tsx` |
| Live battle (dark) | `components/sections/Battle.tsx` |
| Competitions | `components/sections/Competitions.tsx` |
| Leaderboard | `components/sections/Leaderboard.tsx` |
| Wallet / winnings (dark) | `components/sections/Wallet.tsx` |
| Testimonials | `components/sections/Testimonials.tsx` |
| FAQ (accordion) | `components/sections/Faq.tsx` |
| CTA (dark) | `components/sections/Cta.tsx` |
| Footer | `components/sections/Footer.tsx` |

Shared building blocks live in `components/`: `Button`, `Logo`, `Avatar`
(sprite-sheet cropper), `cards.tsx` (reused prize / battle / leaderboard cards) and
`icons.tsx`.

Design tokens (brand colors, fonts, radii) are defined in `tailwind.config.ts`.

## Fonts

The Figma file uses two licensed/custom typefaces that aren't publicly
distributable:

- Display: **Heuvel Grotesk DEMO** → falls back to **Space Grotesk**
- Body: **Helmet Neue** → falls back to **Inter** / Helvetica Neue

The fallbacks are wired through CSS variables (`--font-display`, `--font-body`),
so if the original fonts are ever installed/licensed they will be used
automatically — just drop them into the font stack in `app/globals.css`.

## Responsive layout

Two Figma comps are implemented and swapped at the Tailwind `lg` (1024px)
breakpoint in `app/page.tsx`:

- **Desktop (≥ 1024px)** — `components/sections/*`, the fixed 1440px comp laid
  out on a centered canvas using exact Figma coordinates.
- **Mobile (< 1024px)** — `components/mobile/*`, a fluid single-column layout
  (440px reference) built from the mobile Figma node `124-6138`. The header
  collapses to a hamburger menu and the testimonials become a horizontal
  scroller.

Both layouts share the same primitives and data modules (`Button`, `Avatar`,
`PhoneBattle`, `CompetitionTier`, `cards`, `testimonials`, `faqs`) so copy and
styling stay in sync. Image assets exported from Figma live in `public/images/`.
