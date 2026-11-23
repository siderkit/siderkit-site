#!/usr/bin/env node
// Product-boundary gate for the Siderkit site.
//
// The site has three hard zones:
//   brand  - the Siderkit shell; never imports an app
//   app    - one product namespace under src/apps/<id>
//   pages  - composition roots; the only place allowed to import both
//
// The gate also owns docs placement, product assets, route registration,
// CSS ownership, the S-monogram geometry, the public-copy bans, and the
// one sanctioned registry seam.

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcRoot = path.join(root, 'src');
const problems = [];

function fail(rule, file, message) {
  problems.push(`boundary:${rule} ${file}${message ? ` — ${message}` : ''}`);
}

function relative(file) {
  return path.relative(root, file).replaceAll(path.sep, '/');
}

function walk(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function read(file) {
  return fs.readFileSync(file, 'utf8');
}

function sourceFiles() {
  return walk(srcRoot).filter((file) => /\.(astro|ts|mjs)$/.test(file));
}

function appDirectories() {
  const appsRoot = path.join(srcRoot, 'apps');
  if (!fs.existsSync(appsRoot)) return [];
  return fs
    .readdirSync(appsRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
}

function zoneOf(relativePath) {
  if (relativePath.startsWith('src/apps/')) {
    const [, , id] = relativePath.split('/');
    return { zone: 'app', id };
  }
  if (relativePath.startsWith('src/brand/')) return { zone: 'brand' };
  if (relativePath.startsWith('src/site/')) return { zone: 'site' };
  if (relativePath.startsWith('src/ui/')) return { zone: 'ui' };
  if (relativePath.startsWith('src/layouts/')) return { zone: 'layout' };
  if (relativePath.startsWith('src/pages/')) return { zone: 'page' };
  if (relativePath.startsWith('src/i18n/')) return { zone: 'locale' };
  if (relativePath.startsWith('src/styles/')) return { zone: 'style' };
  if (relativePath.startsWith('src/content/')) return { zone: 'content' };
  return { zone: 'root' };
}

function importSpecifiers(file) {
  const text = read(file);
  const specifiers = [];
  for (const match of text.matchAll(/from\s+['"]([^'"]+)['"]/g)) specifiers.push(match[1]);
  for (const match of text.matchAll(/import\s+['"]([^'"]+)['"]/g)) specifiers.push(match[1]);
  return specifiers;
}

function targetInfo(file, specifier) {
  if (!specifier.startsWith('.')) return null;
  const target = path.resolve(path.dirname(file), specifier);
  const relativeTarget = relative(target);
  if (!relativeTarget.startsWith('src/')) return null;
  return { relativeTarget, zone: zoneOf(relativeTarget) };
}

function checkImports() {
  for (const file of sourceFiles()) {
    const fileZone = zoneOf(relative(file));
    if (fileZone.zone === 'page' || fileZone.zone === 'root') continue;

    for (const specifier of importSpecifiers(file)) {
      const target = targetInfo(file, specifier);
      if (!target) continue;

      if (fileZone.zone === 'brand' && target.zone.zone === 'app') {
        fail('brand-imports-app', relative(file), `brand layer imports ${target.relativeTarget}`);
      }
      if (fileZone.zone === 'brand' && target.zone.zone === 'page') {
        fail('brand-imports-page', relative(file), `brand layer imports ${target.relativeTarget}`);
      }
      if (fileZone.zone === 'app') {
        if (target.zone.zone === 'brand') {
          fail('app-imports-brand', relative(file), `app imports ${target.relativeTarget}`);
        }
        if (target.zone.zone === 'site') {
          fail('app-imports-site', relative(file), `app imports ${target.relativeTarget}`);
        }
        if (target.zone.zone === 'page') {
          fail('app-imports-page', relative(file), `app imports ${target.relativeTarget}`);
        }
        if (target.zone.zone === 'app' && target.zone.id !== fileZone.id) {
          fail('app-imports-other-app', relative(file), `app ${fileZone.id} imports ${target.zone.id}`);
        }      }
      if (fileZone.zone === 'site' && target.zone.zone === 'app') {
        const manifest = new RegExp(`^src/apps/${target.zone.id}/manifest(\\.ts)?$`);
        if (!manifest.test(target.relativeTarget)) {
          fail('site-imports-app-internals', relative(file), `registry may import only manifest.ts, not ${target.relativeTarget}`);
        }
      }
      if (fileZone.zone === 'ui' && target.zone.zone !== 'ui') {
        fail('ui-imports-outside', relative(file), `shared primitive imports ${target.relativeTarget}`);
      }
      if (fileZone.zone === 'layout' && ['app', 'site', 'page'].includes(target.zone.zone)) {
        fail('layout-imports-product', relative(file), `layout imports ${target.relativeTarget}`);
      }
      if (fileZone.zone === 'locale' && target.zone.zone !== 'locale') {
        fail('locale-imports-outside', relative(file), `locale contract imports ${target.relativeTarget}`);
      }
    }
  }
}

function checkProductPlacement() {
  for (const file of walk(srcRoot)) {
    const relativePath = relative(file);
    if (relativePath.startsWith('src/apps/')) continue;
    if (relativePath.startsWith('src/content/docs/') && /\/docs\/apps\/[^/]+\//.test(relativePath)) continue;

    const name = path.basename(file);
    if (/break/i.test(name)) {
      fail('product-file-outside-app', relativePath, 'Break-owned file must live under src/apps/siderkit-break/');
    }

    if (/\.(png|jpe?g|webp|avif|svg)$/i.test(name)) {
      const allowed =
        relativePath.startsWith('src/brand/assets/') || relativePath.startsWith('src/apps/');
      if (!allowed) {
        fail('asset-outside-owner', relativePath, 'images must live in brand/assets or apps/<id>/assets');
      }
    }
  }
}

function checkBrandCopy() {
  // 0200 范围内聚: the brand layer is product-agnostic across the whole
  // site — shell, views, legal copy, every message block. Product identity
  // enters only through the registry seam (manifest names rendered as
  // nav links) and through the app card slot; neither carries a literal
  // product name in brand sources.
  for (const file of walk(srcRoot)) {
    const info = zoneOf(relative(file));
    if (info.zone !== 'brand') continue;
    if (!/\.(astro|ts)$/.test(file)) continue;
    const text = read(file);
    if (/siderkit-break|\bBreak\b/.test(text)) {
      fail('brand-zone-names-product', relative(file), 'brand layer must stay product-agnostic');
    }
  }
}

// Public copy must never frame the project as an experiment or as
// deliberately small, and never describe the build process. Terms cover
// English and both Chinese scripts; matching is case-insensitive.
const BANNED_COPY = [
  '实验',
  '實驗',
  '刻意做小',
  '刻意保持小',
  '公开构建',
  '公开开发',
  '公開打造',
  '公開開發',
  'experiment',
  'built in public',
  'developed in public',
  'small on purpose',
];

// Geometry and class names from the retired stroke-S-with-dot mark.
const STALE_MARKS = ['<circle', 'M21.5 11.4', '#b07a3f'];

function checkPublicCopy() {
  for (const file of walk(srcRoot).filter((entry) => /\.(astro|ts|mjs|md)$/.test(entry))) {
    const text = read(file).toLowerCase();
    for (const term of BANNED_COPY) {
      if (text.includes(term.toLowerCase())) {
        fail('copy-banned-term', relative(file), `banned term "${term}"`);
      }
    }
  }
}

function checkBrandMark() {
  for (const relativePath of ['src/brand/assets/brand-mark.svg', 'public/favicon.svg']) {
    const file = path.join(root, relativePath);
    if (!fs.existsSync(file)) {
      fail('brand-mark-missing', relativePath, 'the S monogram asset is required');
      continue;
    }
    const text = read(file);
    for (const term of STALE_MARKS) {
      if (text.includes(term)) {
        fail('brand-mark-stale', relativePath, `stale mark geometry: ${term}`);
      }
    }
  }
}

function checkDocs() {
  const docsRoot = path.join(srcRoot, 'content/docs');
  const apps = new Set(appDirectories());
  const locales = ['en', 'zh-cn', 'zh-tw'];

  for (const file of walk(docsRoot).filter((entry) => entry.endsWith('.md'))) {
    const relativePath = relative(file);
    let local = relativePath.slice('src/content/docs/'.length);
    for (const locale of ['zh-cn', 'zh-tw']) {
      if (local.startsWith(`${locale}/`)) local = local.slice(locale.length + 1);
    }
    if (local === 'docs/index.md') continue;
    const appMatch = local.match(/^docs\/apps\/([^/]+)\//);
    if (!appMatch) {
      fail('docs-outside-app', relativePath, 'only docs/index.md may sit at the docs root');
      continue;
    }
    if (!apps.has(appMatch[1])) {
      fail('docs-unknown-app', relativePath, `unknown app namespace ${appMatch[1]}`);
    }
  }

  for (const app of apps) {
    for (const locale of locales) {
      const prefix = locale === 'en' ? '' : `${locale}/`;
      const index = `src/content/docs/${prefix}docs/apps/${app}/index.md`;
      if (!fs.existsSync(path.join(root, index))) {
        fail('docs-missing-index', index, `missing docs index for ${app}`);
      }
    }
  }
}

function checkRoutes() {
  const apps = appDirectories();
  const enRoutes = path.join(srcRoot, 'pages/apps/[...slug].astro');
  const localizedRoutes = path.join(srcRoot, 'pages/[lang]/apps/[...slug].astro');
  for (const app of apps) {
    for (const file of [enRoutes, localizedRoutes]) {
      if (!fs.existsSync(file)) {
        fail('route-missing', relative(file), `missing product route wrapper for ${app}`);
        continue;
      }
      const text = read(file);
      if (!text.includes(`slug: '${app}'`) || !text.includes(`slug: '${app}/changelog'`)) {
        fail('route-unregistered', relative(file), `route wrapper does not register ${app}`);
      }
    }
  }
}

function checkRegistry() {
  const apps = appDirectories();
  const registry = path.join(srcRoot, 'site/apps.ts');
  if (!fs.existsSync(registry)) {
    fail('registry-missing', 'src/site/apps.ts', 'the app registry is required');
    return;
  }
  const text = read(registry);
  for (const app of apps) {
    const manifest = path.join(srcRoot, 'apps', app, 'manifest.ts');
    if (!fs.existsSync(manifest)) {
      fail('manifest-missing', relative(manifest), `app ${app} has no manifest.ts`);
    }
    if (!text.includes(`../apps/${app}/manifest`)) {
      fail('registry-incomplete', 'src/site/apps.ts', `app ${app} is not registered`);
    }
  }
}

function checkCssOwners() {
  for (const file of sourceFiles().filter((entry) => entry.endsWith('.astro'))) {
    const relativePath = relative(file);
    const zone = zoneOf(relativePath);
    const text = read(file);
    if (text.includes('l-product-')) {
      fail('css-unowned-prefix', relativePath, 'l-product-* has no owner; use l-break-* inside the app');
    }
    if (zone.zone !== 'app' && text.includes('l-break-')) {
      fail('css-product-leak', relativePath, 'l-break-* may only appear inside src/apps/siderkit-break/');
    }
    if (text.includes('l-brand-mark')) {
      fail('css-legacy-mark', relativePath, 'use the l-logo-mark monogram component');
    }
  }
}

function checkSidebar() {
  const configPath = path.join(root, 'astro.config.mjs');
  if (!fs.existsSync(configPath)) {
    fail('starlight-config-missing', 'astro.config.mjs', 'missing Starlight config');
    return;
  }
  const config = read(configPath);
  if (!config.includes("defaultLocale: 'root'")) {
    fail('starlight-locale', 'astro.config.mjs', "defaultLocale must be 'root' so English content stays prefix-free");
  }
  for (const app of appDirectories()) {
    if (!config.includes(`directory: 'docs/apps/${app}'`)) {
      fail('starlight-sidebar', 'astro.config.mjs', `missing autogenerate group for docs/apps/${app}`);
    }
  }
}

checkImports();
checkProductPlacement();
checkBrandCopy();
checkPublicCopy();
checkBrandMark();
checkDocs();
checkRoutes();
checkRegistry();
checkCssOwners();
checkSidebar();

if (problems.length > 0) {
  for (const problem of problems) console.error(problem);
  console.error(`boundary: ${problems.length} problem(s)`);
  process.exit(1);
}

console.log('boundary: ok');
