import { en } from './messages/en';
import { zhCN } from './messages/zh-cn';
import { zhTW } from './messages/zh-tw';
import type { Messages } from './messages/types';
import type { Locale } from '../../i18n/config';

export const messages = {
  en,
  'zh-cn': zhCN,
  'zh-tw': zhTW,
} satisfies Record<Locale, Messages>;

export function useBrandMessages(locale: Locale): Messages {
  return messages[locale];
}

export type { Messages };
