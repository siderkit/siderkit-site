import { en } from './messages/en';
import { zhCN } from './messages/zh-cn';
import { zhTW } from './messages/zh-tw';
import { es } from './messages/es';
import { pt } from './messages/pt';
import { fr } from './messages/fr';
import { ru } from './messages/ru';
import { hi } from './messages/hi';
import { bn } from './messages/bn';
import { ar } from './messages/ar';
import { ur } from './messages/ur';
import type { BreakMessages } from './messages/types';
import type { Locale } from '../../../i18n/config';

export const messages = {
  en,
  'zh-cn': zhCN,
  'zh-tw': zhTW,
  es,
  pt,
  fr,
  ru,
  hi,
  bn,
  ar,
  ur,
} satisfies Record<Locale, BreakMessages>;

export function useBreakMessages(locale: Locale): BreakMessages {
  return messages[locale];
}

export type { BreakMessages };
