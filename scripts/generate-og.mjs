#!/usr/bin/env node
// Generates the two Open Graph images from the source assets.
//
// The site is static and has no image service, so these are build-time
// artifacts. Run `pnpm og` after changing the brand mark or the product
// screenshots; the generated PNGs are committed with the site.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public/og');
const screens = path.join(root, 'src/apps/siderkit-break/assets/screens');
const windowShot = path.join(screens, 'main-focus.png');
const cardShot = path.join(screens, 'break-running.png');

const paper = '#f7f4ef';
const ink = '#141414';
const muted = '#5a554d';
const accent = '#b07a3f';

const brandMark = `
  <g transform="translate(72 64)">
    <rect width="96" height="96" rx="28.8" fill="${ink}" />
    <text
      x="48"
      y="68.6"
      text-anchor="middle"
      font-family="Arial, Helvetica, sans-serif"
      font-size="57.6"
      font-weight="700"
      fill="${paper}">S</text>
  </g>
`;

const brandSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${paper}" />
  <g opacity="0.5">
    ${Array.from({ length: 18 }, (_, index) => `<line x1="${index * 72}" y1="0" x2="${index * 72}" y2="630" stroke="${ink}" stroke-opacity="0.04" />`).join('')}
    ${Array.from({ length: 9 }, (_, index) => `<line x1="0" y1="${index * 78}" x2="1200" y2="${index * 78}" stroke="${ink}" stroke-opacity="0.04" />`).join('')}
  </g>
  ${brandMark}
  <text x="72" y="292" font-family="Georgia, 'Times New Roman', serif" font-size="96" fill="${ink}">Siderkit</text>
  <text x="72" y="360" font-family="'Segoe UI', Arial, sans-serif" font-size="32" fill="${muted}">Work, as it should be.</text>
  <text x="72" y="556" font-family="'Segoe UI', Arial, sans-serif" font-size="24" fill="${accent}">siderkit.com</text>
</svg>
`;

// Break OG: deep-forest stage, headline left, the real timer window right with
// the reminder card floating over its lower corner.
const breakStage = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="breakFade" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1d5b40" />
      <stop offset="1" stop-color="#0e3c29" />
    </linearGradient>
    <filter id="soft" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="14" />
    </filter>
  </defs>
  <rect width="1200" height="630" fill="url(#breakFade)" />
  <g opacity="0.35">
    ${Array.from({ length: 18 }, (_, index) => `<line x1="${index * 72}" y1="0" x2="${index * 72}" y2="630" stroke="#ffffff" stroke-opacity="0.05" />`).join('')}
    ${Array.from({ length: 9 }, (_, index) => `<line x1="0" y1="${index * 78}" x2="1200" y2="${index * 78}" stroke="#ffffff" stroke-opacity="0.05" />`).join('')}
  </g>
  <rect x="596" y="156" width="560" height="376" rx="14" fill="#06281b" opacity="0.55" filter="url(#soft)" />
  <rect x="452" y="420" width="486" height="212" rx="14" fill="#06281b" opacity="0.5" filter="url(#soft)" />
  <text x="72" y="218" font-family="Georgia, 'Times New Roman', serif" font-size="64" fill="${paper}">Siderkit Break</text>
  <text x="72" y="278" font-family="'Segoe UI', Arial, sans-serif" font-size="26" fill="#cfe3d6">A calm focus timer that knows when to stop.</text>
  <text x="72" y="322" font-family="'Segoe UI', Arial, sans-serif" font-size="24" fill="#9fc7b0">Windows · macOS · Linux · Open source</text>
  <text x="72" y="556" font-family="'Segoe UI', Arial, sans-serif" font-size="24" fill="#8fd0a8">siderkit.com/apps/siderkit-break</text>
</svg>
`;

fs.mkdirSync(outDir, { recursive: true });

await sharp(Buffer.from(brandSvg)).png().toFile(path.join(outDir, 'siderkit.png'));

// PrintWindow renders the transparent card window's empty backdrop as opaque
// black; key it out so the card floats over the stage. Card ink stays above
// the threshold, so nothing inside the card is affected.
async function keyOutBlack(file, width) {
  const { data, info } = await sharp(file)
    .resize(width)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  for (let index = 0; index < data.length; index += 4) {
    if (data[index] < 10 && data[index + 1] < 10 && data[index + 2] < 10) {
      data[index + 3] = 0;
    }
  }
  return sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .toBuffer();
}

const windowBuffer = await sharp(windowShot).resize(560).png().toBuffer();
const cardBuffer = await keyOutBlack(cardShot, 486);

await sharp(Buffer.from(breakStage))
  .composite([
    { input: windowBuffer, top: 140, left: 580 },
    { input: cardBuffer, top: 404, left: 430 },
  ])
  .png()
  .toFile(path.join(outDir, 'siderkit-break.png'));

console.log('wrote public/og/siderkit.png and public/og/siderkit-break.png');
