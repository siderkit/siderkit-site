import data from './changelog.json';
import type { Locale } from '../../../i18n/config';

export type ChangelogKind = 'added' | 'changed' | 'fixed' | 'security' | 'known';

export type ChangelogEntry = {
  version: string;
  date: string;
  sections: Array<{
    kind: ChangelogKind;
    items: Record<Locale, string[]>;
  }>;
};

export const changelog = data as ChangelogEntry[];
