import type { Locale } from '../../i18n/config';

export type AppManifest = {
  id: string;
  name: Record<Locale, string>;
  route: string;
  changelogRoute: string;
  docsRoute: string;
};

export const breakApp: AppManifest = {
  id: 'siderkit-break',
  name: {
    en: 'Siderkit Break',
    'zh-cn': 'Siderkit Break',
    'zh-tw': 'Siderkit Break',
    es: 'Siderkit Break',
    pt: 'Siderkit Break',
    fr: 'Siderkit Break',
    ru: 'Siderkit Break',
    hi: 'Siderkit Break',
    bn: 'Siderkit Break',
    ar: 'Siderkit Break',
    ur: 'Siderkit Break',
    ja: 'Siderkit Break',
    vi: 'Siderkit Break',
  },
  route: '/apps/siderkit-break/',
  changelogRoute: '/apps/siderkit-break/changelog/',
  docsRoute: '/docs/apps/siderkit-break/',
};
