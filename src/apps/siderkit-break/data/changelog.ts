import base from './changelog.json';
import arOverlay from './changelog/ar.json';
import bnOverlay from './changelog/bn.json';
import esOverlay from './changelog/es.json';
import frOverlay from './changelog/fr.json';
import hiOverlay from './changelog/hi.json';
import ptOverlay from './changelog/pt.json';
import ruOverlay from './changelog/ru.json';
import urOverlay from './changelog/ur.json';
import type { Locale } from '../../../i18n/config';

export type ChangelogKind = 'added' | 'changed' | 'fixed' | 'security' | 'known';

/**
 * English is always present (it is the source of truth); every other locale
 * fills in from its overlay file when translated, and falls back to English
 * otherwise.
 */
export type ChangelogItems = { en: string[] } & Partial<Record<Exclude<Locale, 'en'>, string[]>>;

export type ChangelogEntry = {
  version: string;
  date: string;
  sections: Array<{
    kind: ChangelogKind;
    items: ChangelogItems;
  }>;
};

type OverlayEntry = {
  version: string;
  sections: Array<{
    kind: ChangelogKind;
    items: string[];
  }>;
};

type BaseEntry = {
  version: string;
  date: string;
  sections: Array<{
    kind: ChangelogKind;
    items: ChangelogItems;
  }>;
};

const overlays: Partial<Record<Exclude<Locale, 'en'>, OverlayEntry[]>> = {
  ar: arOverlay as OverlayEntry[],
  bn: bnOverlay as OverlayEntry[],
  es: esOverlay as OverlayEntry[],
  fr: frOverlay as OverlayEntry[],
  hi: hiOverlay as OverlayEntry[],
  pt: ptOverlay as OverlayEntry[],
  ru: ruOverlay as OverlayEntry[],
  ur: urOverlay as OverlayEntry[],
};

const nonEnLocales = ['zh-cn', 'zh-tw', 'es', 'pt', 'fr', 'ru', 'hi', 'bn', 'ar', 'ur'] as const;

function overlayFor(
  locale: Exclude<Locale, 'en'>,
  version: string,
  kind: ChangelogKind,
): string[] | undefined {
  return overlays[locale]?.find((entry) => entry.version === version)?.sections.find(
    (section) => section.kind === kind,
  )?.items;
}

function withOverlays(entry: BaseEntry): ChangelogEntry {
  const sections = entry.sections.map((section) => {
    const items: ChangelogItems = { ...section.items };
    for (const locale of nonEnLocales) {
      const translated = overlayFor(locale, entry.version, section.kind);
      if (translated) {
        items[locale] = translated;
      }
    }
    return { kind: section.kind, items };
  });
  return { version: entry.version, date: entry.date, sections };
}

export const changelog: ChangelogEntry[] = (base as BaseEntry[]).map(withOverlays);
