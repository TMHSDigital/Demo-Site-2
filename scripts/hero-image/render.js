/**
 * Render the SyncFlow AI dashboard mockup to a PNG hero asset.
 *
 * Usage (from scripts/hero-image, after `npm install` in scripts/screenshots
 * or with puppeteer-core available):
 *   node render.js
 *
 * Output: ../../image_5bce99.png  (1200x960, 2x for crisp retina)
 */
const fs = require('fs');
const path = require('path');

// Reuse the puppeteer-core install from the screenshots tooling.
const puppeteer = require(path.resolve(__dirname, '../screenshots/node_modules/puppeteer-core'));

const MOCK = 'file://' + path.resolve(__dirname, 'dashboard-mock.html').replace(/\\/g, '/');
const OUT = path.resolve(__dirname, '../../image_5bce99.png');

function findBrowser() {
  const candidates = [
    process.env.CHROME_PATH,
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
  ].filter(Boolean);
  const found = candidates.find((p) => fs.existsSync(p));
  if (!found) throw new Error('No Chrome/Edge found. Set CHROME_PATH.');
  return found;
}

(async () => {
  const browser = await puppeteer.launch({
    executablePath: findBrowser(),
    headless: 'new',
    args: ['--hide-scrollbars', '--no-sandbox', '--force-color-profile=srgb'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 960, deviceScaleFactor: 2 });
  await page.goto(MOCK, { waitUntil: 'networkidle0', timeout: 60000 });
  await page.evaluateHandle('document.fonts.ready');
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: OUT, clip: { x: 0, y: 0, width: 1200, height: 960 } });
  await browser.close();
  console.log('Wrote', OUT);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
