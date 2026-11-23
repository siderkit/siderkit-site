#!/usr/bin/env node
// Generates the two Open Graph images from the source assets.
//
// The site is static and has no image service, so these are build-time
// artifacts. Run `pnpm og` after changing the brand mark or the product
// screenshot; the generated PNGs are committed with the site.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public/og');
const hero = path.join(root, 'src/apps/siderkit-break/assets/screens/hero-neutral.png');

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

const breakOverlay = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="paperFade" x1="0" x2="1">
      <stop offset="0" stop-color="${paper}" stop-opacity="0.98" />
      <stop offset="0.46" stop-color="${paper}" stop-opacity="0.9" />
      <stop offset="0.72" stop-color="${paper}" stop-opacity="0.2" />
      <stop offset="1" stop-color="${paper}" stop-opacity="0" />
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#paperFade)" />
  <text x="72" y="220" font-family="Georgia, 'Times New Roman', serif" font-size="78" fill="${ink}">Siderkit Break</text>
  <text x="72" y="286" font-family="'Segoe UI', Arial, sans-serif" font-size="30" fill="${muted}">A calm focus timer that knows when to stop.</text>
  <text x="72" y="334" font-family="'Segoe UI', Arial, sans-serif" font-size="24" fill="${muted}">Windows · macOS · Linux · Open source</text>
  <text x="72" y="556" font-family="'Segoe UI', Arial, sans-serif" font-size="24" fill="${accent}">siderkit.com/apps/siderkit-break</text>
</svg>
`;

fs.mkdirSync(outDir, { recursive: true });

await sharp(Buffer.from(brandSvg)).png().toFile(path.join(outDir, 'siderkit.png'));

const heroBuffer = await sharp(hero)
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .modulate({ brightness: 0.98 })
  .toBuffer();

await sharp(heroBuffer)
  .composite([{ input: Buffer.from(breakOverlay), top: 0, left: 0 }])
  .png()
  .toFile(path.join(outDir, 'siderkit-break.png'));

console.log('wrote public/og/siderkit.png and public/og/siderkit-break.png');
