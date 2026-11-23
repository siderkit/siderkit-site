#!/usr/bin/env node
// Static-site checks for Siderkit.
//
// `--source` validates the repository before a build. Without it, the script
// validates the Cloudflare Pages artifact in `dist`: required routes, the
// app-scoped docs namespace, the reserved `/api/*` boundary, and internal links.

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceMode = process.argv.includes('--source');
const problems = [];
const locales = ['en', 'zh-cn', 'zh-tw'];
const modulePages = ['index', 'install', 'using-break', 'settings', 'data-and-privacy', 'updates', 'troubleshooting'];

function fail(message) {
  problems.push(message);
}

function exists(relativePath) {
  return fs.existsSync(path.join(root, relativePath));
}

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8');
}

function walk(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function requireFile(relativePath) {
  if (!exists(relativePath)) fail(`missing ${relativePath}`);
}

function checkPublicAssets() {
  for (const file of [
    'public/favicon.svg',
    'public/og/siderkit.png',
    'public/og/siderkit-break.png',
    'public/_headers',
    'public/_redirects',
  ]) {
    requireFile(file);
  }
}

function checkReleaseData() {
  const file = 'src/apps/siderkit-break/data/releases.json';
  if (!exists(file)) {
    fail(`missing ${file}`);
    return;
  }
  let release;
  try {
    release = JSON.parse(read(file));
  } catch (error) {
    fail(`${file} is not valid JSON: ${error.message}`);
    return;
  }
  for (const field of ['channel', 'version', 'pubDate', 'published', 'github']) {
    if (!(field in release)) fail(`${file} is missing ${field}`);
  }
  if (release.windows) {
    for (const field of ['url', 'sha256', 'size', 'format']) {
      if (!(field in release.windows)) fail(`${file} windows is missing ${field}`);
    }
  }
}

function checkSource() {
  checkPublicAssets();
  checkReleaseData();

  if (exists('src/pages/api')) fail('src/pages/api must not exist; /api/* is reserved');

  for (const locale of locales) {
    const prefix = locale === 'en' ? '' : `${locale}/`;
    for (const page of modulePages) {
      const suffix = page === 'index' ? 'index.md' : `${page}.md`;
      requireFile(`src/content/docs/${prefix}docs/apps/siderkit-break/${suffix}`);
    }
    requireFile(`src/content/docs/${prefix}docs/index.md`);
  }

  for (const page of ['install', 'using-break', 'settings', 'data-and-privacy', 'updates', 'troubleshooting']) {
    if (exists(`src/content/docs/docs/${page}.md`)) {
      fail(`Break doc src/content/docs/docs/${page}.md must live under docs/apps/siderkit-break/`);
    }
  }

  for (const file of walk(path.join(root, 'src/content/docs'))) {
    if (!file.endsWith('.md')) continue;
    const text = fs.readFileSync(file, 'utf8');
    for (const oldPath of [
      '](/docs/install',
      '](/docs/using-break',
      '](/docs/settings',
      '](/docs/data-and-privacy',
      '](/docs/updates',
      '](/docs/troubleshooting',
    ]) {
      if (text.includes(oldPath)) {
        fail(`${path.relative(root, file)} still links to ${oldPath.slice(2)}`);
      }
    }
  }

  for (const file of walk(path.join(root, 'src'))) {
    if (!file.endsWith('.ts') && !file.endsWith('.astro') && !file.endsWith('.mjs')) continue;
    const text = fs.readFileSync(file, 'utf8');
    if (text.includes('api.siderkit.com')) {
      fail(`${path.relative(root, file)} hardcodes api.siderkit.com; use same-origin /api/*`);
    }
  }

  if (exists('astro.config.mjs')) {
    const config = read('astro.config.mjs');
    if (!config.includes('docs/apps/siderkit-break')) {
      fail('astro.config.mjs sidebar must use the app-scoped docs slug');
    }
    if (config.includes("slug: 'docs/install'")) {
      fail('astro.config.mjs sidebar still points at the old /docs/install slug');
    }
  }

  for (const file of ['scripts/check-site.mjs', 'scripts/sync-release.mjs', 'scripts/generate-og.mjs']) {
    requireFile(file);
  }
}

function requiredDistFiles() {
  const files = [
    'index.html',
    '404.html',
    'robots.txt',
    'sitemap-index.xml',
    '_headers',
    '_redirects',
    'favicon.svg',
    'og/siderkit.png',
    'og/siderkit-break.png',
  ];

  for (const locale of locales) {
    const prefix = locale === 'en' ? '' : `${locale}/`;
    files.push(`${prefix}index.html`);
    files.push(`${prefix}apps/siderkit-break/index.html`);
    files.push(`${prefix}apps/siderkit-break/changelog/index.html`);
    files.push(`${prefix}docs/index.html`);
    for (const page of modulePages) {
      const suffix = page === 'index' ? 'index.html' : `${page}/index.html`;
      files.push(`${prefix}docs/apps/siderkit-break/${suffix}`);
    }
    for (const page of ['privacy', 'terms', 'licenses', 'security']) {
      files.push(`${prefix}legal/${page}/index.html`);
    }
    for (const page of ['about', 'contact']) {
      files.push(`${prefix}company/${page}/index.html`);
    }
  }

  return files;
}

function resolveTarget(urlPath) {
  const clean = decodeURIComponent(urlPath.split('?')[0].split('#')[0]);
  if (!clean.startsWith('/')) return null;
  if (clean.startsWith('/api/')) return null;

  const relative = clean.slice(1);
  const candidates = [];
  if (relative === '' || clean.endsWith('/')) {
    candidates.push(path.join(relative, 'index.html'));
  } else {
    candidates.push(relative);
    candidates.push(path.join(relative, 'index.html'));
    candidates.push(`${relative}.html`);
  }

  return candidates.find((candidate) => {
    const full = path.join(root, 'dist', candidate);
    return fs.existsSync(full) && fs.statSync(full).isFile();
  });
}

function checkLinks() {
  const htmlFiles = walk(path.join(root, 'dist')).filter((file) => file.endsWith('.html'));
  let checked = 0;

  for (const file of htmlFiles) {
    const relative = path.relative(path.join(root, 'dist'), file);
    const urlPath = `/${relative.replaceAll(path.sep, '/').replace(/index\.html$/, '')}`;
    const text = fs.readFileSync(file, 'utf8');
    const matches = text.matchAll(/(?:href|src)="([^"]+)"/g);

    for (const match of matches) {
      const raw = match[1];
      if (
        raw.startsWith('http://') ||
        raw.startsWith('https://') ||
        raw.startsWith('mailto:') ||
        raw.startsWith('tel:') ||
        raw.startsWith('data:') ||
        raw.startsWith('#')
      ) {
        continue;
      }

      const resolvedUrl = new URL(raw, `https://siderkit.invalid${urlPath}`);
      if (resolvedUrl.pathname.startsWith('/api/')) {
        fail(`${relative} links to reserved ${resolvedUrl.pathname}`);
        continue;
      }
      checked += 1;
      if (!resolveTarget(resolvedUrl.pathname)) {
        fail(`${relative} has a broken internal link: ${raw}`);
      }
    }
  }

  return { checked, pages: htmlFiles.length };
}

function checkDist() {
  checkPublicAssets();
  for (const file of requiredDistFiles()) requireFile(`dist/${file}`);

  if (exists('dist/api')) fail('dist/api must not exist; /api/* is reserved for a dynamic worker');

  for (const file of walk(path.join(root, 'dist'))) {
    if (!file.endsWith('.html')) continue;
    const relative = path.relative(root, file);
    // Astro may inline theme bootstraps; only reject absolute API hosts.
    const text = fs.readFileSync(file, 'utf8');
    if (text.includes('api.siderkit.com')) {
      fail(`${relative} hardcodes api.siderkit.com`);
    }
  }

  const links = checkLinks();
  return links;
}

if (!sourceMode) {
  if (!exists('dist')) {
    console.error('check-site: dist/ is missing; run astro build first');
    process.exit(1);
  }
  const links = checkDist();
  if (problems.length > 0) {
    for (const problem of problems) console.error(`check-site: ${problem}`);
    process.exit(1);
  }
  console.log(`check-site: dist ok (${links.pages} pages, ${links.checked} internal links)`);
} else {
  checkSource();
  if (problems.length > 0) {
    for (const problem of problems) console.error(`check-site: ${problem}`);
    process.exit(1);
  }
  console.log('check-site: source ok');
}
