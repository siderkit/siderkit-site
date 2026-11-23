export const locales = ['en', 'zh-cn', 'zh-tw'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeInfo: Record<
  Locale,
  { label: string; shortLabel: string; htmlLang: string; ogLocale: string }
> = {
  en: { label: 'English', shortLabel: 'EN', htmlLang: 'en', ogLocale: 'en_US' },
  'zh-cn': { label: '简体中文', shortLabel: '简', htmlLang: 'zh-CN', ogLocale: 'zh_CN' },
  'zh-tw': { label: '繁體中文', shortLabel: '繁', htmlLang: 'zh-TW', ogLocale: 'zh_TW' },
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
