import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://siderkit.com',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    starlight({
      title: 'Siderkit Docs',
      description: 'Documentation for Siderkit apps. The current public app is Siderkit Break.',
      defaultLocale: 'root',
      locales: {
        root: { label: 'English', lang: 'en' },
        'zh-cn': { label: '简体中文', lang: 'zh-CN' },
        'zh-tw': { label: '繁體中文', lang: 'zh-TW' },
      },
      disable404Route: true,
      credits: false,
      logo: {
        src: './src/brand/assets/brand-mark.svg',
        alt: 'Siderkit',
      },
      components: {
        SiteTitle: './src/brand/components/docs/DocsSiteTitle.astro',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/siderkit/siderkit-break',
        },
      ],
      customCss: ['./src/styles/starlight.css'],
      sidebar: [
        {
          label: 'Documentation',
          link: '/docs/',
          translations: { 'zh-CN': '文档', 'zh-TW': '文件' },
        },
        {
          label: 'Siderkit Break',
          translations: { 'zh-CN': 'Siderkit Break', 'zh-TW': 'Siderkit Break' },
          items: [{ autogenerate: { directory: 'docs/apps/siderkit-break' } }],
        },
      ],
    }),
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
