#!/usr/bin/env node
// driver.mjs — KATAKATA INVADERS portfolio driver
// Usage: node driver.mjs [ss|click-start|scroll-skills]

import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const HTML = 'file://' + resolve(fileURLToPath(import.meta.url), '../../../../index.html');
const CHROME = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const SS_DIR = '/tmp';

const cmd = process.argv[2] ?? 'ss';

const browser = await chromium.launch({ executablePath: CHROME, args: ['--no-sandbox'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
await page.goto(HTML);
await page.waitForTimeout(1500);

if (cmd === 'ss') {
  await page.screenshot({ path: `${SS_DIR}/inveder-title.png` });
  console.log(`screenshot: ${SS_DIR}/inveder-title.png`);
} else if (cmd === 'click-start') {
  await page.click('text=PRESS START');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `${SS_DIR}/inveder-game.png` });
  console.log(`screenshot: ${SS_DIR}/inveder-game.png`);
} else if (cmd === 'scroll-skills') {
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${SS_DIR}/inveder-skills.png` });
  console.log(`screenshot: ${SS_DIR}/inveder-skills.png`);
}

await browser.close();
