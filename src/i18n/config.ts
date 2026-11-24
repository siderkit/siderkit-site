export const locales = [
  'en',
  'zh-cn',
  'zh-tw',
  'es',
  'pt',
  'fr',
  'ru',
  'hi',
  'bn',
  'ar',
  'ur',
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

/** Locales with a translated documentation tree under src/content/docs/. */
export const docLocales = ['en', 'zh-cn', 'zh-tw'] as const;

export type LocaleInfo = {
  label: string;
  shortLabel: string;
  htmlLang: string;
  ogLocale: string;
  dir: 'ltr' | 'rtl';
};

export const localeInfo: Record<Locale, LocaleInfo> = {
  en: { label: 'English', shortLabel: 'EN', htmlLang: 'en', ogLocale: 'en_US', dir: 'ltr' },
  'zh-cn': { label: '简体中文', shortLabel: '简', htmlLang: 'zh-CN', ogLocale: 'zh_CN', dir: 'ltr' },
  'zh-tw': { label: '繁體中文', shortLabel: '繁', htmlLang: 'zh-TW', ogLocale: 'zh_TW', dir: 'ltr' },
  es: { label: 'Español', shortLabel: 'ES', htmlLang: 'es', ogLocale: 'es_ES', dir: 'ltr' },
  pt: { label: 'Português', shortLabel: 'PT', htmlLang: 'pt', ogLocale: 'pt_BR', dir: 'ltr' },
  fr: { label: 'Français', shortLabel: 'FR', htmlLang: 'fr', ogLocale: 'fr_FR', dir: 'ltr' },
  ru: { label: 'Русский', shortLabel: 'RU', htmlLang: 'ru', ogLocale: 'ru_RU', dir: 'ltr' },
  hi: { label: 'हिन्दी', shortLabel: 'HI', htmlLang: 'hi', ogLocale: 'hi_IN', dir: 'ltr' },
  bn: { label: 'বাংলা', shortLabel: 'BN', htmlLang: 'bn', ogLocale: 'bn_BD', dir: 'ltr' },
  ar: { label: 'العربية', shortLabel: 'AR', htmlLang: 'ar', ogLocale: 'ar_AR', dir: 'rtl' },
  ur: { label: 'اردو', shortLabel: 'UR', htmlLang: 'ur', ogLocale: 'ur_PK', dir: 'rtl' },
};

export const siteUrl = 'https://siderkit.com';

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

function normalizePath(path: string): string {
  const withLeadingSlash = path.startsWith('/') ? path : `/${path}`;
  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`;
}

export function localizedPath(locale: Locale, path: string): string {
  const normalized = normalizePath(path);
  if (locale === defaultLocale) return normalized;
  return normalized === '/' ? `/${locale}/` : `/${locale}${normalized}`;
}

/**
 * Documentation exists in three languages; every other locale reads the
 * English docs instead of a dead localized path.
 */
export function docsPath(locale: Locale): string {
  return (docLocales as readonly string[]).includes(locale)
    ? localizedPath(locale, '/docs/')
    : localizedPath('en', '/docs/');
}

export function stripLocale(pathname: string): string {
  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    if (pathname === `/${locale}` || pathname === `/${locale}/`) return '/';
    if (pathname.startsWith(`/${locale}/`)) return pathname.slice(locale.length + 1);
  }
  return pathname;
}

export function localeFromPath(pathname: string): Locale {
  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    if (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) return locale;
  }
  return defaultLocale;
}

export function absoluteUrl(path: string): string {
  return new URL(path, siteUrl).href;
}

export function localeAlternates(path: string) {
  return locales.map((locale) => ({
    locale,
    htmlLang: localeInfo[locale].htmlLang,
    href: absoluteUrl(localizedPath(locale, path)),
  }));
}
