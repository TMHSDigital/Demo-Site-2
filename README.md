# SyncFlow AI

A B2B SaaS landing page built as a single, dependency-free `index.html`. No framework, no build step, no npm install. Open the file in a browser and it runs.

**Live site:** https://tmhsdigital.github.io/syncflow-frontend-demo/

[![Deploy to GitHub Pages](https://github.com/TMHSDigital/syncflow-frontend-demo/actions/workflows/deploy.yml/badge.svg)](https://github.com/TMHSDigital/syncflow-frontend-demo/actions/workflows/deploy.yml)
![License: MIT](https://img.shields.io/badge/license-MIT-green)

> SyncFlow AI is a made-up company. The product, metrics, testimonials, customer logos, and names are all placeholders for the demo. Nothing here is a real claim.

## What this is

A marketing landing page for a fictional operations-automation product, written by hand to see how complete a page can be with nothing but HTML, CSS, and a bit of vanilla JavaScript. Everything lives in one file: the styles sit in a single `<style>` block, the behavior in a single `<script>`. The only thing loaded over the network is Google Fonts; the imagery comes from Unsplash.

It's also a reference for a few things I wanted to get right on a real landing page:

- A clear top-to-bottom narrative (hero, proof, problem, solution, pricing, objections, call to action) rather than a pile of disconnected sections.
- A disciplined color system. Roughly 60% neutral background, 30% slate for text and structure, 10% accent. The coral accent (`#FF5A3C`) is used only for primary buttons so the eye always knows where to click.
- Two typefaces, no more: Fraunces for headings, Inter for body.
- Responsive layout that stacks on small screens, a real hamburger menu, and tap targets big enough for a thumb. No carousels that hide content behind a swipe.

## The page, section by section

| Section | What it's doing |
| --- | --- |
| Hero | States the value in one line, gives one obvious button, shows a rating |
| Logo marquee | Borrowed credibility, high up the page |
| Stats band | Puts numbers on the claim |
| Problem grid | Names the pain the product removes |
| Features | Connect / Automate / Watch, in an alternating layout |
| Testimonials | Quotes built around a specific outcome, not vague praise |
| Pricing | Three tiers, the middle one highlighted |
| FAQ | Answers the objections that stall a signup |
| Final CTA | One last, low-friction ask |

## Under the hood

The JavaScript is small and does four things: a shadow on the header once you scroll, the mobile menu toggle, the FAQ accordion, and fade-in-on-scroll using `IntersectionObserver`. If JavaScript fails to load, the content is all still there and readable.

CSS leans on custom properties, flexbox and grid for layout, and `clamp()` for type that scales with the viewport instead of jumping at breakpoints.

## Running it locally

Clone it and open the file:

```bash
git clone https://github.com/TMHSDigital/syncflow-frontend-demo.git
cd syncflow-frontend-demo
```

Double-clicking `index.html` works. If you'd rather serve it over HTTP (closer to how it runs in production), any static server will do:

```bash
python -m http.server 8000   # then open http://localhost:8000
```

## Deploying

A push to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which publishes the site to GitHub Pages. To set this up on a fork:

1. **Settings → Pages → Build and deployment**
2. Set **Source** to **GitHub Actions**
3. Push to `main`

## Making it your own

Everything is editable in one file. The design tokens sit at the top of the `<style>` block:

```css
:root {
  --bg:     #F7F8FA;  /* dominant background    */
  --ink:    #14203A;  /* text and structure     */
  --accent: #FF5A3C;  /* buttons / accents only */
}
```

Change `--accent` and every button updates at once. Swap the Google Fonts link and the `font-family` rules to change the type. The copy is plain HTML, so editing the headlines and testimonials is just editing text.

## Project layout

```
.
├── index.html                   # the whole site
├── .github/workflows/deploy.yml # GitHub Pages deploy
├── .gitattributes               # line-ending normalization
├── .gitignore
├── LICENSE
└── README.md
```

## License

[MIT](LICENSE). Photos are used under the [Unsplash License](https://unsplash.com/license); the fonts are under the [SIL Open Font License](https://openfontlicense.org/).
