import type { Messages } from './types';

export const zhCN = {
  meta: {
    siteName: 'Siderkit',
    homeTitle: 'Siderkit — 工作，本该如此。',
    homeDescription:
      'Siderkit 是一个独立开源项目，做安静、本地优先、给人留出空间的工具。',
    privacyTitle: '隐私 — Siderkit',
    privacyDescription: 'Siderkit 网站与 Siderkit 应用如何处理数据。',
    termsTitle: '条款 — Siderkit',
    termsDescription: '适用于 Siderkit 网站与 Siderkit 应用的条款。',
    licensesTitle: '许可证 — Siderkit',
    licensesDescription: 'Siderkit 应用、本站与内置素材的许可证。',
    securityTitle: '安全 — Siderkit',
    securityDescription: '如何报告 Siderkit 应用或本站的安全问题。',
    aboutTitle: '关于 — Siderkit',
    aboutDescription: 'Siderkit 是一个独立的开源项目——我们相信的事，和我们做事的方式。',
    contactTitle: '联系 — Siderkit',
    contactDescription: '在哪里报告缺陷、提问或报告安全问题。',
    notFoundTitle: '页面不存在 — Siderkit',
    notFoundDescription: '你要找的页面不在这里。',
    ogAlt: 'Siderkit 品牌标记',
  },
  nav: {
    docs: '文档',
    about: '关于',
    source: '源码',
  },
  common: {
    brand: 'Siderkit',
    github: 'GitHub',
    language: '语言',
    skipToContent: '跳到正文',
    opensInNewTab: '在新标签页打开',
    backHome: '返回首页',
  },
  home: {
    eyebrow: '独立 · 开源',
    title: '工作，\n本该如此。',
    lead: '慢慢做，做安静的软件。第一款已经发布，后面的在路上。',
    primaryCta: '看看第一个应用',
    closingLine: '独立 · 开源 · Apache-2.0 · 没有投资人',
  },
  legal: {
    eyebrow: '法律',
    updated: '最后更新：2026 年 11 月 23 日。',
    privacy: {
      title: '隐私',
      lead: '简单说：本站不设 Cookie、不做统计；Siderkit 应用的数据只留在你自己的设备上。',
      sections: [
        {
          heading: '本站',
          paragraphs: [
            '本站是静态站点，不设置 Cookie，不加载第三方字体或脚本，也不使用统计分析。',
            '本站使用系统字体，不提供字体文件。',
          ],
          items: [],
        },
        {
          heading: '托管与访问日志',
          paragraphs: [
            'Cloudflare 提供托管服务，会作为正常运维的一部分记录基础访问日志。这些日志受 Cloudflare 隐私条款约束。',
            '项目不刻画访客画像、不建立广告标识，也不跨服务拼接数据。',
          ],
          items: [],
        },
        {
          heading: 'Siderkit 应用',
          paragraphs: [
            '应用的数据留在你的设备上：设置、历史记录和本地数据库都在其中。没有账号、没有同步，也没有存放你数据的服务器。',
            '因为没有账号、也没有遥测通道，项目无法把数据和你关联起来——它根本不会收到这些数据。',
          ],
          items: [],
        },
        {
          heading: '更新检查',
          paragraphs: [
            '应用会通过 HTTPS 向 dl.siderkit.com 检查更新。请求包含应用版本、目标平台和架构。',
            '首次启动时，请求可能携带一个随机安装 ID，用于统计安装量和版本分布。',
          ],
          items: [
            '安装 ID 是保存在设备 metrics.json 里的随机 UUID。',
            '它不来自硬件、网络、账号或安装路径。',
            '你可以在应用设置里关闭匿名统计，或重置 ID。',
            '项目不采集 IP 哈希、设备指纹或使用行为。',
          ],
        },
        {
          heading: '我们永远收不到什么',
          paragraphs: [],
          items: [
            '你的姓名、邮箱或任何账号信息——本来就没有账号。',
            '你工作的内容：文档、会话、历史记录或设置。',
            '崩溃报告、使用痕迹或广告标识符。',
          ],
        },
        {
          heading: '联系',
          paragraphs: [
            '对本说明有疑问，可以在公开仓库的 issues 中提出——见页面底部的链接。',
          ],
          items: [],
        },
      ],
    },
    terms: {
      title: '条款',
      lead: '本条款适用于 Siderkit 网站及 Siderkit 应用的使用。软件本身由其开源许可证约束，见许可证页。',
      sections: [
        {
          heading: '条款管什么',
          paragraphs: [
            '本条款约束本站与其内容，以及你作为访客和用户对 Siderkit 应用的使用。',
            '应用是开源软件。授予你代码权利的是 Apache-2.0 许可证，而不是本条款；许可证说了算的地方，以许可证为准。',
          ],
          items: [],
        },
        {
          heading: '合理使用本站',
          paragraphs: [],
          items: [
            '不要歪曲本站或冒充项目。',
            '不要以干扰站点的方式抓取或镜像本站。',
            '不要利用本站传播违法内容。',
            '欢迎自由链接；引用简短段落请注明出处。',
          ],
        },
        {
          heading: '名称与标志',
          paragraphs: [
            'Siderkit 名称、S 字标，以及各应用的名称与标志是项目标志。Apache-2.0 不授予它们——该许可证授予的是著作权与专利权，不含商标权。',
            '如果你 fork、重构或再分发代码，这一点尤其重要。',
          ],
          items: [
            '给你的构建改名，或明确标注为非官方。',
            '不要用我们的名称、标志或域名，暗示官方出处或背书。',
            '不要把非官方构建冒充官方发布。',
            '再分发未修改副本时，保留许可证与声明文件。',
          ],
        },
        {
          heading: '修改版构建',
          paragraphs: [
            '如果你修改并分发代码，Apache-2.0 要求你声明所作更改。你的构建由你负责：它的名字、更新和行为都归属你，与项目无关。',
          ],
          items: [],
        },
        {
          heading: '不提供担保',
          paragraphs: [
            '本站与其内容按“原样”提供，不附带任何明示或暗示的担保。软件在其许可证下带有同样的免责声明。',
            '本页不构成法律意见；对软件而言，许可证文本本身是权威依据。',
          ],
          items: [],
        },
        {
          heading: '责任限制',
          paragraphs: [
            '在法律允许的最大范围内，项目不对你使用或无法使用本站、软件所产生的损害承担责任。',
          ],
          items: [],
        },
        {
          heading: '贡献',
          paragraphs: [
            '欢迎贡献，贡献内容按 Apache-2.0 授权，不带附加条款。提交贡献即表示你确认有权许可你提交的内容。',
          ],
          items: [],
        },
        {
          heading: '变更',
          paragraphs: [
            '本条款可能随时变化，不另行通知；重大变更会体现在本页。代码与版本记录的权威来源仍是公开仓库。',
          ],
          items: [],
        },
      ],
    },
    licenses: {
      title: '许可证',
      lead: 'Siderkit 应用以 Apache-2.0 开源。本页用平实的语言解释它意味着什么；许可证文本本身是权威依据。',
      sections: [
        {
          heading: '先说结论',
          paragraphs: [
            'Siderkit 应用使用 Apache License 2.0。完整文本随源码与安装包提供；NOTICE 文件列出署名信息。',
            '捆绑的第三方依赖——Rust crate 与 Web 依赖——保留各自许可证，记录在仓库的 lockfile 与第三方声明中。',
          ],
          items: [],
        },
        {
          heading: '你可以',
          paragraphs: [],
          items: [
            '将应用用于商业、个人场景或你自己的产品中。',
            '研究并修改源码。',
            '再分发副本，无论是否修改。',
            '依赖 Apache-2.0 提供的专利授权。',
          ],
        },
        {
          heading: '你必须',
          paragraphs: [],
          items: [
            '在代码中保留许可证与版权声明。',
            '分发时附带许可证文本。',
            '对代码所作的重要修改作出声明。',
            '若存在 NOTICE 文件，随分发保留。',
          ],
        },
        {
          heading: '你要清楚',
          paragraphs: [],
          items: [
            '软件按“原样”提供，不附带任何明示或暗示的担保。',
            '项目不对代码在下游的使用方式承担责任。',
            '许可证授予著作权与专利权——不授予我们的商标。',
          ],
        },
        {
          heading: '名称与标志',
          paragraphs: [
            'Siderkit 名称、S 字标，以及各应用的名称与标志不在 Apache-2.0 的授权范围内。fork 或再分发时，请给你的构建改名，或明确标注为非官方——详见条款页。',
          ],
          items: [],
        },
        {
          heading: '本站',
          paragraphs: [
            '本站源码使用 Apache-2.0，由 Astro、Starlight 与 TypeScript 构建。本站使用系统字体，不提供字体文件。',
          ],
          items: [],
        },
        {
          heading: '素材',
          paragraphs: [
            '内置提示音是为项目生成的原创素材，与应用一样按 Apache-2.0 分发。',
            '应用截图可用于评测与报道，请注明出处。',
          ],
          items: [],
        },
      ],
    },
    security: {
      title: '安全',
      lead: '请私下报告漏洞。项目会在披露之前修复它们。',
      sections: [
        {
          heading: '如何报告',
          paragraphs: [
            '请使用 GitHub 私有安全公告——页面底部的链接指向对应的仓库。不要为漏洞开公开 issue。',
          ],
          items: [],
        },
        {
          heading: '报告里带什么',
          paragraphs: [],
          items: [
            '应用版本、平台和架构。',
            '复现步骤，如有概念验证更好。',
            '影响：攻击者能借此做什么。',
            '希望的署名方式，或不署名——由你决定。',
          ],
        },
        {
          heading: '接下来的流程',
          paragraphs: [],
          items: [
            '我们在五个工作日内确认报告。',
            '评估严重性并协调修复。',
            '先发布修复和安全公告，再进入公开披露。',
            '公告发布后你可以自由发表——即协同披露。',
          ],
        },
        {
          heading: '在范围内',
          paragraphs: [],
          items: [
            '各应用的最新版本。',
            '安装包与更新校验链路。',
            '本站。',
          ],
        },
        {
          heading: '不在范围内',
          paragraphs: [],
          items: [
            '社交工程，或需要设备已被攻陷的问题。',
            '我们代码之外的第三方服务。',
            '只干扰站点运行而不涉及数据的问题。',
            '对非漏洞功能的加固要求。',
          ],
        },
        {
          heading: '签名现状',
          paragraphs: [
            'Windows 安装包使用 minisign 签名，并在安装前校验。',
            'macOS 构建目前未签名；在配置签名之前，出现 Gatekeeper 提示是正常的。请直接从本站或 GitHub Releases 获取下载。',
          ],
          items: [],
        },
        {
          heading: '安全港',
          paragraphs: [
            '只要尊重用户隐私、不中断服务，并遵循上述披露流程，范围内的善意研究不会被追究法律责任。',
          ],
          items: [],
        },
      ],
    },
  },
  company: {
    eyebrow: '公司',
    about: {
      title: '我们相信的事。',
      lead: 'Siderkit 是一个独立的开源项目。',
      paragraphs: [
        '现在，这里只有第一个应用——一款安静、本地优先的专注计时器，提醒你按时休息、起身、看向远处。它的产品页、文档与版本记录都在站内。',
        '代码、决策与讨论都放在明处。我们相信，这是信任生长的方式。',
      ],
      cta: '浏览代码仓库',
    },
    contact: {
      title: '和我们聊聊。',
      lead: '没有联系表单，也没有工单队列。请使用公开渠道，让答案也能帮到别人。',
      channels: [
        {
          key: 'appIssues',
          title: '应用缺陷',
          body: '附上版本、平台和复现步骤，开一个 issue。',
          linkLabel: '打开 issue',
        },
        {
          key: 'siteDiscussions',
          title: '本站与一般问题',
          body: '在本站仓库里发起讨论。',
          linkLabel: '发起讨论',
        },
        {
          key: 'security',
          title: '安全',
          body: '请使用私有安全公告，不要开公开 issue。',
          linkLabel: '私下报告',
        },
        {
          key: 'translations',
          title: '翻译',
          body: '提交 pull request 前先读贡献指南。',
          linkLabel: '阅读 CONTRIBUTING.md',
        },
      ],
    },
  },
  notFound: {
    title: '页面不存在。',
    body: '你要找的页面不在这里。它可能已经移动，或者链接有误。',
    home: '回到首页',
    docs: '浏览文档',
    note: '本页以英文、简体中文和繁体中文显示。',
  },
  footer: {
    tagline: '工作，本该如此。',
    apps: '应用',
    legal: '法律',
    company: '公司',
    elsewhere: '其他',
    privacy: '隐私',
    terms: '条款',
    licenses: '许可证',
    security: '安全',
    about: '关于',
    contact: '联系',
    discussions: '讨论',
    siteSource: '本站源码',
    copyright: '© 2026 Siderkit contributors。Apache-2.0。',
    language: '语言',
  },
} satisfies Messages;
