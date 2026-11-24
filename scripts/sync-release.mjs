#!/usr/bin/env node
// Synchronizes src/apps/siderkit-break/data/releases.json from a Tauri updater manifest.
//
// Usage:
//   node scripts/sync-release.mjs --manifest latest.json --published
//   node scripts/sync-release.mjs --manifest https://dl.siderkit.com/siderkit-break/latest.json --dry-run
//
// The updater manifest carries the version, publication date, and a signed
// installer URL. Size and SHA-256 are not part of that document, so the script
// reuses the current values for the same version, accepts explicit flags, or
// downloads the installer with --download to compute them.

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outFile = path.join(root, 'src/apps/siderkit-break/data/releases.json');
const defaultManifest = 'https://dl.siderkit.com/siderkit-break/latest.json';

const options = {
  manifest: defaultManifest,
  published: false,
  dryRun: false,
  download: false,
  size: null,
  sha256: null,
};

function usage() {
  console.log(`Usage:
  node scripts/sync-release.mjs [options]

Options:
  --manifest <path|url>  Updater manifest (default: ${defaultManifest})
  --published            Mark the Windows asset as published
  --dry-run              Print the result without writing releases.json
  --download             Download the installer to compute size and SHA-256
  --size <bytes>         Override the installer size
  --sha256 <hex>         Override the installer checksum
  --help                 Show this help`);
}

function parseArgs(argv) {
  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === '--help' || argument === '-h') {
      usage();
      process.exit(0);
    }
    if (argument === '--published') {
      options.published = true;
      continue;
    }
    if (argument === '--dry-run') {
      options.dryRun = true;
      continue;
    }
    if (argument === '--download') {
      options.download = true;
      continue;
    }
    const valued = ['--manifest', '--size', '--sha256'];
    if (!valued.includes(argument)) throw new Error(`unknown option: ${argument}`);
    const value = argv[index + 1];
    if (!value || value.startsWith('--')) throw new Error(`missing value for ${argument}`);
    const name = argument.slice(2);
    options[name] = name === 'size' ? Number(value) : value;
    index += 1;
  }
}

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

async function loadManifest(source) {
  if (/^https:\/\//i.test(source)) {
    const response = await fetch(source, {
      headers: { accept: 'application/json' },
      signal: AbortSignal.timeout(20_000),
    });
    if (!response.ok) throw new Error(`manifest request failed: ${response.status} ${response.statusText}`);
    return response.json();
  }
  return readJson(path.resolve(root, source));
}

function windowsPlatform(manifest) {
  const platforms = manifest.platforms ?? {};
  for (const [key, value] of Object.entries(platforms)) {
    if (key.startsWith('windows-') && value && typeof value.url === 'string') {
      return { key, ...value };
    }
  }
  throw new Error('manifest has no windows-* platform with a url');
}

async function downloadAsset(url) {
  const response = await fetch(url, { signal: AbortSignal.timeout(120_000) });
  if (!response.ok) throw new Error(`installer download failed: ${response.status} ${response.statusText}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  return {
    size: buffer.byteLength,
    sha256: createHash('sha256').update(buffer).digest('hex'),
  };
}

function formatFromUrl(url) {
  const extension = path.extname(new URL(url).pathname).toLowerCase();
  if (extension === '.exe') return 'NSIS';
  if (extension === '.msi') return 'MSI';
  if (extension === '.dmg') return 'DMG';
  if (extension === '.deb') return 'deb';
  if (extension === '.rpm') return 'rpm';
  if (extension === '.appimage') return 'AppImage';
  return extension.replace('.', '') || 'unknown';
}

function archFromPlatformKey(key) {
  if (/x86_64|x64/.test(key)) return 'x64';
  if (/aarch64|arm64/.test(key)) return 'arm64';
  if (/i686|x86/.test(key)) return 'x86';
  return key.replace(/^windows-/, '') || 'unknown';
}

async function main() {
  parseArgs(process.argv.slice(2));
  const manifest = await loadManifest(options.manifest);
  const platform = windowsPlatform(manifest);

  if (!manifest.version || !/^\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?$/.test(manifest.version)) {
    throw new Error('manifest version is missing or not a semantic version');
  }
  if (!/^https:\/\//.test(platform.url)) {
    throw new Error('manifest installer url must use https');
  }

  const current = fs.existsSync(outFile) ? readJson(outFile) : {};
  // `--download` is the authoritative path: a rebuilt installer can change size
  // without changing the version, so never reuse stale numbers when we can
  // measure the real artifact.
  const downloaded = options.download ? await downloadAsset(platform.url) : null;
  const sameVersion = current.version === manifest.version && current.windows;
  let size = options.size ?? downloaded?.size ?? (Number.isInteger(platform.size) ? platform.size : null);
  let sha256 = options.sha256 ?? downloaded?.sha256 ?? (typeof platform.sha256 === 'string' ? platform.sha256 : null);

  if ((!size || !sha256) && sameVersion) {
    size ??= current.windows.size;
    sha256 ??= current.windows.sha256;
  }

  if (options.published && (!size || !sha256)) {
    throw new Error('--published needs a size and SHA-256; pass --size/--sha256 or --download');
  }

  const prerelease = manifest.version.includes('-');
  const release = {
    channel: options.published ? (prerelease ? 'release-candidate' : 'stable') : (current.channel ?? 'release-candidate'),
    version: manifest.version,
    pubDate: (manifest.pub_date ?? new Date().toISOString()).slice(0, 10),
    published: options.published || Boolean(current.published),
    github: current.github ?? 'https://github.com/siderkit/siderkit-break/releases',
    windows: {
      url: platform.url,
      sha256: sha256 ?? '',
      size: size ?? 0,
      format: formatFromUrl(platform.url),
      arch: archFromPlatformKey(platform.key),
    },
    macos: current.macos ?? null,
    linux: current.linux ?? null,
  };

  const output = `${JSON.stringify(release, null, 2)}\n`;
  if (options.dryRun) {
    process.stdout.write(output);
    return;
  }
  fs.writeFileSync(outFile, output);
  console.log(`updated ${path.relative(root, outFile)} for ${release.version}`);
}

try {
  await main();
} catch (error) {
  console.error(`sync-release: ${error instanceof Error ? error.message : error}`);
  process.exit(1);
}
