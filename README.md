# Siderkit Site

The public Siderkit brand site and documentation portal. It is a static Astro
site.

Siderkit Break is the first public app. The homepage is brand-first; Break
lives under `/apps/siderkit-break` and its documentation lives under
`/docs/apps/siderkit-break/`.

## Stack

- Astro 7 with static output
- Starlight for the documentation portal
- TypeScript
- No backend, database, cookies, or third-party scripts

The site reserves the same-origin `/api/*` path for a future login layer. No
static file may be generated under `/api/`.

## Commands

```bash
pnpm install
pnpm dev
pnpm build
pnpm check
pnpm check:boundaries
pnpm og
pnpm sync-release --manifest latest.json
```

`pnpm build` runs `astro build`, then the product-boundary gate, then the
artifact checks. `pnpm check` runs `astro check` and both gates against the
source. `check-boundaries.mjs` owns the brand/app/ui/site/page import matrix,
product docs and asset placement, CSS owners, route registration, and the
Starlight sidebar. `check-site.mjs` verifies required routes, the app-scoped
docs namespace, internal links, the reserved `/api/*` boundary, and the
`_headers`/`_redirects` metadata files.

## Routes

English has no prefix. Simplified Chinese uses `/zh-cn`, Traditional Chinese
uses `/zh-tw`. Every route keeps a trailing slash.

```text
/                                       Home
/apps/siderkit-break                    Product and download
/apps/siderkit-break/changelog          Release notes
/docs                                   Documentation portal
/docs/apps/siderkit-break/              Break documentation
/legal/privacy                          Privacy
/legal/terms                            Terms
/legal/licenses                         Licenses
/legal/security                         Security
/company/about                          About
/company/contact                        Contact
/404                                    Not found
```

There is no `/apps` index, `/pricing`, `/blog`, or `/company/brand` in this
version.

## Content ownership

The site is split into four hard zones plus one composition root. The boundary
gate enforces the import direction; see ADR-0037 and the boundary spec in
`siderkit-notes`.

| Path | Owner | May import |
| --- | --- | --- |
| `src/brand/` | Brand shell and brand-only pages | `src/site/`, `src/ui/`, `src/layouts/`, itself |
| `src/apps/<id>/` | One product: components, views, i18n, data, assets, manifest, links | itself, `src/ui/`, `src/layouts/`, `src/i18n/config.ts` |
| `src/site/` | Routes, site links, app registry | `src/apps/<id>/manifest.ts` only |
| `src/ui/`, `src/layouts/` | Shared primitives and shell | `src/ui/`; layout may also use brand, locale, styles |
| `src/pages/` | Composition roots | anything |

Rules that follow from the split:

- `src/site/apps.ts` is the only registry seam. It may import each app's
  `manifest.ts`, never a component, view, data file, or asset.
- `HomeView` stays product-agnostic. Route pages import `BreakHomeCard` and pass
  it through `slot="apps"`.
- Product pages import only `BaseLayout` from the shell. Product components
  import only `src/ui/` and their own app files.
- Brand surfaces use the neutral S mark. Product surfaces use the product mark.
- Break screenshots, release data, changelog, and copy live under
  `src/apps/siderkit-break/`.
- Break docs live under
  `src/content/docs/{docs,zh-cn/docs,zh-tw/docs}/apps/siderkit-break/`.

## Release data

`src/apps/siderkit-break/data/releases.json` is the only source of version,
download URL, size, and checksum on the site. Update it with:

```bash
pnpm sync-release --manifest https://dl.siderkit.com/siderkit-break/latest.json --download
```

The script accepts a local manifest for testing and never overwrites a published
release with a draft. Pass `--published` only after the GitHub release is public;
the `dl.siderkit.com` Worker serves the new manifest on the next request.

## Response headers and redirects

`public/_headers` sets security and cache headers. `public/_redirects` keeps the
pre-app-scoped documentation URLs working. Both are copied to the site root.

## License

Apache-2.0. See `LICENSE` and `NOTICE`.
