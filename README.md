# SyncFlow AI

A responsive B2B SaaS landing page contained in a single `index.html` file. It uses no framework and no build step: the markup, styles, and scripts are self-contained, and the page renders directly in any modern browser.

**Live site:** https://tmhsdigital.github.io/syncflow-frontend-demo/

[![Deploy to GitHub Pages](https://github.com/TMHSDigital/syncflow-frontend-demo/actions/workflows/deploy.yml/badge.svg)](https://github.com/TMHSDigital/syncflow-frontend-demo/actions/workflows/deploy.yml)
![License: MIT](https://img.shields.io/badge/license-MIT-green)

> SyncFlow AI is a fictional company created for this demo. The product, metrics, testimonials, and customer names are placeholders and do not represent real claims.

## Overview

The page presents a fictional operations-automation product as a complete marketing site: hero, social proof, problem framing, features, pricing, FAQ, and a closing call to action. It serves as a self-contained reference for building a conversion-focused landing page without a frontend toolchain.

Design decisions are deliberate rather than incidental:

- **Visual hierarchy.** Sections follow a single narrative from value proposition to call to action, so the page reads as one argument rather than a set of unrelated blocks.
- **Color discipline.** The palette follows a 60/30/10 split: a neutral background, slate for text and structure, and a coral accent (`#FF5A3C`) reserved for primary actions, so the next step is always visually obvious.
- **Typography.** Two typefaces only: Fraunces for headings and Inter for body text.
- **Responsiveness.** Layouts collapse to a single column on small screens, navigation condenses into a menu, and interactive targets are sized for touch. No content is hidden inside carousels.

## Sections

| Section | Purpose |
| --- | --- |
| Hero | States the core value proposition with a single primary action |
| Logo marquee | Establishes credibility early |
| Stats band | Supports the value proposition with figures |
| Problem grid | Frames the pain points the product addresses |
| Features | Presents Connect, Automate, and Watch in an alternating layout |
| Testimonials | Pairs each quote with a specific outcome |
| Pricing | Three tiers with the recommended plan emphasized |
| FAQ | Resolves common objections |
| Final CTA | Closes with a low-friction prompt |

## Implementation

All styling lives in a single `<style>` block and all behavior in a single `<script>`. The only external resource is Google Fonts; imagery is served from Unsplash.

The CSS uses custom properties for theming, flexbox and grid for layout, and `clamp()` for typography that scales fluidly with the viewport. The JavaScript is limited to four responsibilities: a header shadow on scroll, the mobile menu toggle, the FAQ accordion, and scroll-triggered reveals via `IntersectionObserver`. All content remains visible and legible if JavaScript does not execute.

## Local development

No dependencies or build step are required.

```bash
git clone https://github.com/TMHSDigital/syncflow-frontend-demo.git
cd syncflow-frontend-demo
```

Open `index.html` directly, or serve it over HTTP to match production behavior:

```bash
python -m http.server 8000   # http://localhost:8000
```

## Deployment

Pushing to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which publishes the site to GitHub Pages. To configure this on a fork:

1. Open **Settings → Pages → Build and deployment**.
2. Set **Source** to **GitHub Actions**.
3. Push to `main`.

## Customization

The design tokens are defined at the top of the `<style>` block:

```css
:root {
  --bg:     #F7F8FA;  /* dominant background    */
  --ink:    #14203A;  /* text and structure     */
  --accent: #FF5A3C;  /* buttons and accents    */
}
```

Updating `--accent` re-themes every primary action at once. Replace the Google Fonts link and the `font-family` declarations to change the type. All copy is plain HTML and can be edited in place.

## Project structure

```
.
├── index.html                   # complete site (HTML, CSS, JS)
├── .github/workflows/deploy.yml # GitHub Pages deployment
├── .gitattributes               # line-ending normalization
├── .gitignore
├── LICENSE
└── README.md
```

## License

Released under the [MIT License](LICENSE). Imagery is used under the [Unsplash License](https://unsplash.com/license); fonts are licensed under the [SIL Open Font License](https://openfontlicense.org/).
