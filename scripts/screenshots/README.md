# Screenshot tooling

Regenerates the screenshots shown in the project README. It drives an already-installed Chrome or Edge through `puppeteer-core`, so it does not download a browser.

## Usage

```bash
cd scripts/screenshots
npm install
npm run shoot
```

Images are written to `docs/screenshots/` (`hero.png`, `testimonials.png`, `pricing.png`, `mobile.png`), overwriting the previous set.

## Configuration

All optional, set as environment variables:

| Variable | Default | Purpose |
| --- | --- | --- |
| `SITE_URL` | the live GitHub Pages site | Page to capture |
| `OUT_DIR` | `../../docs/screenshots` | Where images are written |
| `CHROME_PATH` | auto-detected | Browser executable to use |

Capture a local dev server instead of the live site:

```bash
SITE_URL=http://localhost:8000 npm run shoot
```

`node_modules/` here is git-ignored; run `npm install` after cloning.
