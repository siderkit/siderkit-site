export const en = {
  meta: {
    siteName: 'Siderkit',
    homeTitle: 'Siderkit — Work, as it should be.',
    homeDescription:
      'An independent, open-source project building quiet, local-first tools that leave room for the person using them.',
    privacyTitle: 'Privacy — Siderkit',
    privacyDescription: 'How the Siderkit website and Siderkit apps handle data.',
    termsTitle: 'Terms — Siderkit',
    termsDescription: 'The terms that apply to the Siderkit website and Siderkit apps.',
    licensesTitle: 'Licenses — Siderkit',
    licensesDescription: 'Licenses for Siderkit apps, this website, and bundled assets.',
    securityTitle: 'Security — Siderkit',
    securityDescription: 'How to report a security issue in a Siderkit app or this website.',
    aboutTitle: 'About — Siderkit',
    aboutDescription:
      'Siderkit is an independent, open-source project — what we believe, and how we work.',
    contactTitle: 'Contact — Siderkit',
    contactDescription: 'Where to report bugs, ask questions, or report a security issue.',
    notFoundTitle: 'Page not found — Siderkit',
    notFoundDescription: 'The page you were looking for is not here.',
    ogAlt: 'Siderkit brand mark',
  },
  nav: {
    docs: 'Docs',
    about: 'About',
    source: 'Source',
  },
  common: {
    brand: 'Siderkit',
    github: 'GitHub',
    language: 'Language',
    skipToContent: 'Skip to content',
    opensInNewTab: 'opens in a new tab',
    backHome: 'Back to home',
  },
  home: {
    eyebrow: 'Independent, open source',
    title: 'Work, as it\nshould be.',
    lead: 'Quiet software, made slowly. One app is out; more are on the way.',
    primaryCta: 'Meet the first app',
    closingLine: 'Independent · Open source · Apache-2.0 · No investors',
  },
  legal: {
    eyebrow: 'Legal',
    updated: 'Last updated November 23, 2026.',
    privacy: {
      title: 'Privacy',
      lead: 'The short version: this website sets no cookies and runs no analytics, and Siderkit apps keep your data on your own device.',
      sections: [
        {
          heading: 'This website',
          paragraphs: [
            'The site is static. It does not set cookies, load third-party fonts or scripts, or use analytics.',
            'The site uses system fonts; no font files are served.',
          ],
          items: [],
        },
        {
          heading: 'Hosting and request logs',
          paragraphs: [
            'Cloudflare hosts the site and records basic request logs as part of normal operation. Those logs are governed by Cloudflare’s privacy terms.',
            'The project does not profile visitors, build advertising identifiers, or join data across services.',
          ],
          items: [],
        },
        {
          heading: 'Siderkit apps',
          paragraphs: [
            'Apps keep their data on your device: settings, history, and local databases included. There is no account, no sync, and no server that stores your data.',
            'Because there is no account and no telemetry channel, the project cannot connect your data to you — it never receives it.',
          ],
          items: [],
        },
        {
          heading: 'Update checks',
          paragraphs: [
            'Apps may check for updates at dl.siderkit.com over HTTPS. A request includes the app version, the target platform, and the architecture.',
            'On first launch, a request may include a random installation ID so the project can count installs and version distribution.',
          ],
          items: [
            'The installation ID is a random UUID stored in metrics.json on your device.',
            'It is not derived from hardware, network, account, or install path.',
            'You can turn anonymous counts off, or reset the ID, in the app settings.',
            'No IP hash, device fingerprint, or usage behavior is collected.',
          ],
        },
        {
          heading: 'What we never receive',
          paragraphs: [],
          items: [
            'Your name, email, or any account details — there are no accounts.',
            'The content of your work: documents, sessions, history, or settings.',
            'Crash reports, usage traces, or advertising identifiers.',
          ],
        },
        {
          heading: 'Contact',
          paragraphs: [
            'Questions about this notice can be raised in the public repository issues — see the links at the bottom of this page.',
          ],
          items: [],
        },
      ],
    },
    terms: {
      title: 'Terms',
      lead: 'These terms cover the Siderkit website and the use of Siderkit apps. The software itself is governed by its open-source license, described on the licenses page.',
      sections: [
        {
          heading: 'What these terms cover',
          paragraphs: [
            'They apply to this website and its content, and to your use of Siderkit apps as a visitor and user.',
            'The apps are open-source software. The Apache-2.0 license — not these terms — grants your rights to the code. Where the license speaks, it wins.',
          ],
          items: [],
        },
        {
          heading: 'Fair use of the site',
          paragraphs: [],
          items: [
            'Do not misrepresent this site or impersonate the project.',
            'Do not scrape or mirror the site in ways that disrupt it.',
            'Do not use the site to distribute unlawful content.',
            'Link freely; quote short excerpts with attribution.',
          ],
        },
        {
          heading: 'Names and marks',
          paragraphs: [
            'The Siderkit name, the S monogram, and the names and marks of Siderkit apps are project marks. They are not licensed under Apache-2.0, which grants copyright and patent rights — not trademark rights.',
            'This matters most if you fork, rebuild, or redistribute the code.',
          ],
          items: [
            'Rename your build, or clearly mark it as unofficial.',
            'Do not use our names, marks, or domains in ways that suggest official origin or endorsement.',
            'Do not present unofficial builds as official releases.',
            'Redistribute unmodified copies only with the license and notices intact.',
          ],
        },
        {
          heading: 'Modified builds',
          paragraphs: [
            'If you modify and distribute the code, Apache-2.0 requires you to state that you changed it. Your build is your responsibility: its name, its updates, and its behavior are yours, not the project’s.',
          ],
          items: [],
        },
        {
          heading: 'No warranty',
          paragraphs: [
            'The website and its content are provided “as is”, without warranty of any kind, express or implied. The software carries the same warranty disclaimer under its license.',
            'Nothing on this page is legal advice; the license text itself is authoritative for the software.',
          ],
          items: [],
        },
        {
          heading: 'Limitation of liability',
          paragraphs: [
            'To the maximum extent permitted by law, the project is not liable for damages arising from your use of, or inability to use, the website or the software.',
          ],
          items: [],
        },
        {
          heading: 'Contributions',
          paragraphs: [
            'Contributions are welcome and are licensed under Apache-2.0 without extra terms. By contributing, you confirm you have the right to license what you submit.',
          ],
          items: [],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'These terms may change without notice; material changes will be reflected on this page. The public repository remains the authoritative source for code and release notes.',
          ],
          items: [],
        },
      ],
    },
    licenses: {
      title: 'Licenses',
      lead: 'Siderkit apps are open source under Apache-2.0. This page explains what that means in plain language; the license text itself is authoritative.',
      sections: [
        {
          heading: 'The short version',
          paragraphs: [
            'Siderkit apps are licensed under the Apache License 2.0. The full text ships with the source and installers; the NOTICE file lists attribution.',
            'Bundled third-party dependencies — Rust crates and web dependencies — keep their own licenses, recorded in the repository lockfiles and third-party notices.',
          ],
          items: [],
        },
        {
          heading: 'What you may do',
          paragraphs: [],
          items: [
            'Use the apps commercially, privately, or inside your own products.',
            'Study and modify the source.',
            'Redistribute copies, original or modified.',
            'Rely on the patent grant that Apache-2.0 provides.',
          ],
        },
        {
          heading: 'What you must do',
          paragraphs: [],
          items: [
            'Keep the license and copyright notices with the code.',
            'Include the license text with distributions.',
            'State significant changes you made to the code.',
            'Carry the NOTICE file forward when it exists.',
          ],
        },
        {
          heading: 'What you should know',
          paragraphs: [],
          items: [
            'The software is provided “as is”, without warranty of any kind.',
            'The project is not liable for how the code is used downstream.',
            'The license grants copyright and patent rights — it does not grant our trademarks.',
          ],
        },
        {
          heading: 'Names and marks',
          paragraphs: [
            'The Siderkit name, the S monogram, and the names and marks of Siderkit apps are not licensed by Apache-2.0. If you fork or redistribute, rename your build or mark it clearly as unofficial — see the terms page for details.',
          ],
          items: [],
        },
        {
          heading: 'This website',
          paragraphs: [
            'The site source is Apache-2.0, built with Astro, Starlight, and TypeScript. System fonts are used; no font files are served.',
          ],
          items: [],
        },
        {
          heading: 'Assets',
          paragraphs: [
            'Bundled sounds are original assets generated for the project, distributed under the same license as the apps.',
            'Screenshots may be used in reviews and coverage, with attribution.',
          ],
          items: [],
        },
      ],
    },
    security: {
      title: 'Security',
      lead: 'Please report vulnerabilities privately. The project fixes them before they are disclosed.',
      sections: [
        {
          heading: 'How to report',
          paragraphs: [
            'Use GitHub private security advisories — the links at the bottom of this page lead to the right repositories. Do not open a public issue for a vulnerability.',
          ],
          items: [],
        },
        {
          heading: 'What to include',
          paragraphs: [],
          items: [
            'The app version, platform, and architecture.',
            'Reproduction steps, and a proof of concept if you have one.',
            'The impact: what an attacker could do with it.',
            'Your preferred credit line, or none — your choice.',
          ],
        },
        {
          heading: 'What happens next',
          paragraphs: [],
          items: [
            'We acknowledge reports within five business days.',
            'We assess severity and coordinate a fix.',
            'We release the fix and publish an advisory before public disclosure.',
            'You may publish once the advisory is out — coordinated disclosure.',
          ],
        },
        {
          heading: 'In scope',
          paragraphs: [],
          items: [
            'The latest release of each Siderkit app.',
            'Installers and the update-verification path.',
            'This website.',
          ],
        },
        {
          heading: 'Out of scope',
          paragraphs: [],
          items: [
            'Social engineering, or issues that require a device already compromised.',
            'Third-party services outside our code.',
            'Attacks that disrupt the site rather than expose data.',
            'Requests to harden features that are not vulnerabilities.',
          ],
        },
        {
          heading: 'Signing status',
          paragraphs: [
            'Windows installers are signed with minisign and verified before installation.',
            'macOS builds are currently unsigned; Gatekeeper warnings are expected until signing is configured. Get downloads directly from this site or GitHub Releases.',
          ],
          items: [],
        },
        {
          heading: 'Safe harbor',
          paragraphs: [
            'Good-faith research within this scope will not be pursued legally, as long as you respect user privacy, avoid service disruption, and follow the disclosure process above.',
          ],
          items: [],
        },
      ],
    },
  },
  company: {
    eyebrow: 'Company',
    about: {
      title: 'What we believe.',
      lead: 'Siderkit is an independent, open-source project.',
      paragraphs: [
        'For now, there is one app — a calm, local-first focus timer that reminds you to rest, stand up, and look away. Its product page, documentation, and release notes live on this site.',
        'Code, decisions, and discussions stay in the open. We believe that is how trust takes root.',
      ],
      cta: 'Browse the repositories',
    },
    contact: {
      title: 'Talk to us.',
      lead: 'No contact form, no ticket queue. Use the public channels so everyone can learn from the answer.',
      channels: [
        {
          key: 'appIssues',
          title: 'App bugs',
          body: 'Open an issue with the version, platform, and reproduction steps.',
          linkLabel: 'Open an issue',
        },
        {
          key: 'siteDiscussions',
          title: 'Site and general questions',
          body: 'Start a discussion in the site repository.',
          linkLabel: 'Start a discussion',
        },
        {
          key: 'security',
          title: 'Security',
          body: 'Use a private security advisory instead of a public issue.',
          linkLabel: 'Report privately',
        },
        {
          key: 'translations',
          title: 'Translations',
          body: 'Read the contribution guide before opening a pull request.',
          linkLabel: 'Read CONTRIBUTING.md',
        },
      ],
    },
  },
  notFound: {
    title: 'Page not found.',
    body: 'The page you were looking for is not here. It may have moved, or the link may be wrong.',
    home: 'Go to the homepage',
    docs: 'Browse the documentation',
    note: 'This page is shown in English, Simplified Chinese, and Traditional Chinese.',
  },
  footer: {
    tagline: 'Work, as it should be.',
    apps: 'Apps',
    legal: 'Legal',
    company: 'Company',
    elsewhere: 'Elsewhere',
    privacy: 'Privacy',
    terms: 'Terms',
    licenses: 'Licenses',
    security: 'Security',
    about: 'About',
    contact: 'Contact',
    discussions: 'Discussions',
    siteSource: 'Site source',
    copyright: '© 2026 Siderkit contributors. Apache-2.0.',
    language: 'Language',
  },
};
