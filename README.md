<div align="center">

# SyncFlow AI

**A responsive B2B SaaS landing page contained in a single `index.html` file.**

No framework, no build step. The markup, styles, and scripts are self-contained, and the page renders directly in any modern browser.

<br />

[![View Live Site](https://img.shields.io/badge/View_Live_Site-FF5A3C?style=for-the-badge&logo=githubpages&logoColor=white)](https://tmhsdigital.github.io/syncflow-frontend-demo/)

<br />

[![Deploy to GitHub Pages](https://github.com/TMHSDigital/syncflow-frontend-demo/actions/workflows/deploy.yml/badge.svg)](https://github.com/TMHSDigital/syncflow-frontend-demo/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/github/license/TMHSDigital/syncflow-frontend-demo?color=green)](LICENSE)
![Last commit](https://img.shields.io/github/last-commit/TMHSDigital/syncflow-frontend-demo)
![Repo size](https://img.shields.io/github/repo-size/TMHSDigital/syncflow-frontend-demo)
![Top language](https://img.shields.io/github/languages/top/TMHSDigital/syncflow-frontend-demo)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![No dependencies](https://img.shields.io/badge/dependencies-none-brightgreen)
![Build](https://img.shields.io/badge/build-none-success)

</div>

> [!NOTE]
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

Pushing to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which publishes the site to GitHub Pages.

> [!TIP]
> To configure this on a fork, open **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**, and push to `main`.

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

<div align="center">
<br />

[**Live site**](https://tmhsdigital.github.io/syncflow-frontend-demo/) · [**Report an issue**](https://github.com/TMHSDigital/syncflow-frontend-demo/issues) · [**MIT License**](LICENSE)

<sub>Built by <a href="https://github.com/TMHSDigital">TMHSDigital</a> · <a href="#syncflow-ai">Back to top ↑</a></sub>

</div>
