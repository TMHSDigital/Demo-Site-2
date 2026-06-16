<div align="center">

# SyncFlow AI — Landing Page

**A premium, single-file marketing landing page for a fictional B2B SaaS operations‑automation platform.**

Built with hand‑written HTML, CSS, and vanilla JavaScript — no framework, no build step.

[**▶ View the live site**](https://tmhsdigital.github.io/Demo-Site-2/)

[![Deploy to GitHub Pages](https://github.com/TMHSDigital/Demo-Site-2/actions/workflows/deploy.yml/badge.svg)](https://github.com/TMHSDigital/Demo-Site-2/actions/workflows/deploy.yml)
![No build step](https://img.shields.io/badge/build-none-success)
![Single file](https://img.shields.io/badge/source-single%20file-blue)
![License: MIT](https://img.shields.io/badge/license-MIT-green)

</div>

---

## Overview

This repo contains a conversion‑optimized (CRO) landing page for **SyncFlow AI**, a fictional intelligent operations‑automation product. It exists as a demonstration of how far a single, dependency‑free `index.html` can go: premium typography, a clear visual hierarchy, social proof, and full responsiveness — all self‑contained.

> **Note:** "SyncFlow AI" is a fictional brand created for this demo. All metrics, testimonials, logos, and customer names are illustrative placeholders, not real claims.

## Highlights

- **Single‑file & self‑contained** — all CSS lives in one `<style>` block and all interactivity is vanilla JS. The only external dependency is Google Fonts.
- **No build tooling** — no npm, no bundler, no transpiler. Open the file and it works.
- **CRO‑driven layout** — Z‑pattern reading flow with each section serving a distinct strategic purpose (objection handling, confidence building, conversion).
- **60‑30‑10 color system** — off‑white neutral (60%), slate structure (30%), and a single vivid coral accent (10%) reserved strictly for primary CTAs.
- **Two‑family typography** — `Fraunces` (display serif) paired with `Inter` (body sans).
- **Social‑proof layer** — animated logo marquee, outcome‑oriented testimonials with hard numbers, and ★ rating badges at every conversion touchpoint.
- **Fully responsive** — CSS grid/flex that stacks cleanly on mobile, a collapsible hamburger nav, and ≥54px touch targets. No text‑hiding carousels.
- **Progressive enhancement** — scroll‑reveal animations, sticky header, FAQ accordion, and mobile menu all degrade gracefully without JS.

## Page sections

| Section | Strategic purpose |
| --- | --- |
| Hero | Benefit‑led headline + primary CTA + trust badge |
| Logo marquee | Establish credibility near the top of the scroll |
| Stats band | Quantify the value proposition |
| Problem grid | Name the pain / handle objections |
| Features (Connect · Automate · Watch) | Demonstrate capability in a Z‑pattern |
| Testimonials | Outcome‑focused social proof with metrics |
| Pricing | Drive the decision with a highlighted tier |
| FAQ | Remove final objections |
| Final CTA | Convert |

## Tech stack

- **HTML5** — semantic, accessible markup
- **CSS3** — custom properties, grid/flexbox, `clamp()` fluid type, `IntersectionObserver`‑driven reveals
- **Vanilla JavaScript** — sticky header, mobile menu, FAQ accordion, scroll animations
- **[Google Fonts](https://fonts.google.com/)** — Fraunces + Inter (only external request)
- **[Unsplash](https://unsplash.com/)** — placeholder imagery
- **GitHub Pages + Actions** — hosting and CI/CD

## Run it locally

No dependencies or build step required.

```bash
git clone https://github.com/TMHSDigital/Demo-Site-2.git
cd Demo-Site-2
```

Then either:

- **Just open it** — double‑click `index.html`, or
- **Serve it** (recommended, mirrors production):

```bash
# Python 3
python -m http.server 8000
# then visit http://localhost:8000
```

## Deployment

The site auto‑deploys to **GitHub Pages** on every push to `main` via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

To replicate on a fork:

1. Go to **Settings → Pages → Build and deployment**.
2. Set **Source** to **GitHub Actions**.
3. Push to `main` — the workflow builds and publishes automatically.

## Project structure

```
Demo-Site-2/
├── index.html                # The entire site (HTML + CSS + JS)
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Pages deployment
├── .gitattributes             # Consistent line endings
├── .gitignore
├── LICENSE
└── README.md
```

## Customizing

Because everything lives in `index.html`, edits are quick. The design system is driven by CSS custom properties near the top of the `<style>` block:

```css
:root {
  --bg:     #F7F8FA;  /* 60% dominant neutral     */
  --ink:    #14203A;  /* 30% supporting structure */
  --accent: #FF5A3C;  /* 10% accent — CTAs only   */
  /* ...fonts, radii, shadows, spacing */
}
```

Change `--accent` to re‑skin every CTA at once; swap the Google Fonts `<link>` and the heading/body `font-family` rules to restyle typography.

## License

Released under the [MIT License](LICENSE). Imagery is served from Unsplash under the [Unsplash License](https://unsplash.com/license); fonts are licensed under the [SIL Open Font License](https://openfontlicense.org/).
