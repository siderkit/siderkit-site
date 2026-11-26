import type { Messages } from './types';

export const fr = {
  meta: {
    siteName: 'Siderkit',
    homeTitle: 'Siderkit — Le travail, comme il se doit.',
    homeDescription:
      'Un projet indépendant et open source qui construit des outils sobres, pensés pour rester en local, et qui laissent de la place à la personne qui les utilise.',
    privacyTitle: 'Confidentialité — Siderkit',
    privacyDescription: 'Comment le site Siderkit et les applications Siderkit traitent vos données.',
    termsTitle: 'Conditions — Siderkit',
    termsDescription: 'Les conditions applicables au site Siderkit et aux applications Siderkit.',
    licensesTitle: 'Licences — Siderkit',
    licensesDescription: 'Licences des applications Siderkit, de ce site et des ressources incluses.',
    securityTitle: 'Sécurité — Siderkit',
    securityDescription: 'Comment signaler un problème de sécurité dans une application Siderkit ou sur ce site.',
    aboutTitle: 'À propos — Siderkit',
    aboutDescription:
      'Siderkit est un projet indépendant et open source — nos convictions, et notre façon de travailler.',
    contactTitle: 'Contact — Siderkit',
    contactDescription: 'Où signaler un bug, poser une question ou signaler un problème de sécurité.',
    notFoundTitle: 'Page introuvable — Siderkit',
    notFoundDescription: 'La page que vous cherchez n’est pas ici.',
    ogAlt: 'Marque Siderkit',
  },
  nav: {
    docs: 'Docs',
    about: 'À propos',
    source: 'Code source',
  },
  common: {
    brand: 'Siderkit',
    github: 'GitHub',
    language: 'Langue',
    skipToContent: 'Aller au contenu',
    opensInNewTab: 's’ouvre dans un nouvel onglet',
    backHome: 'Retour à l’accueil',
  },
  home: {
    eyebrow: 'Indépendant · open source',
    title: 'Le travail,\ncomme il se doit.',
    lead: 'Un logiciel calme, construit lentement. Une première application est disponible ; d’autres arrivent.',
    primaryCta: 'Découvrir la première application',
    closingLine: 'Indépendant · Open source · GPL-3.0-only · Sans investisseurs',
  },
  legal: {
    eyebrow: 'Légal',
    updated: 'Dernière mise à jour : 23 novembre 2026.',
    privacy: {
      title: 'Confidentialité',
      lead: 'La version courte : ce site ne dépose aucun cookie et ne fait aucune mesure d’audience, et les applications Siderkit gardent vos données sur votre propre appareil.',
      sections: [
        {
          heading: 'Ce site',
          paragraphs: [
            'Le site est statique. Il ne dépose aucun cookie, ne charge aucune police ni aucun script tiers, et ne fait aucune mesure d’audience.',
            'Le site utilise les polices du système ; aucun fichier de police n’est servi.',
          ],
          items: [],
        },
        {
          heading: 'Hébergement et journaux de requêtes',
          paragraphs: [
            'Cloudflare héberge le site et enregistre des journaux de requêtes basiques dans le cadre de son fonctionnement normal. Ces journaux sont régis par les conditions de confidentialité de Cloudflare.',
            'Le projet ne dresse aucun profil des visiteurs, ne construit aucun identifiant publicitaire et ne croise pas les données entre services.',
          ],
          items: [],
        },
        {
          heading: 'Les applications Siderkit',
          paragraphs: [
            'Les applications gardent leurs données sur votre appareil : réglages, historique et bases de données locales compris. Pas de compte, pas de synchronisation, aucun serveur qui stocke vos données.',
            'Comme il n’y a ni compte ni canal de télémétrie, le projet ne peut pas relier vos données à vous — il ne les reçoit jamais.',
          ],
          items: [],
        },
        {
          heading: 'Vérification des mises à jour',
          paragraphs: [
            'Les applications peuvent vérifier les mises à jour sur dl.siderkit.com en HTTPS. Une requête contient la version de l’application, la plateforme cible et l’architecture.',
            'Au premier lancement, une requête peut contenir un identifiant d’installation aléatoire, pour que le projet puisse compter les installations et la répartition des versions.',
          ],
          items: [
            'L’identifiant d’installation est un UUID aléatoire, stocké dans metrics.json sur votre appareil.',
            'Il ne dérive ni du matériel, ni du réseau, ni d’un compte, ni du chemin d’installation.',
            'Vous pouvez désactiver les comptages anonymes ou réinitialiser l’identifiant dans les réglages de l’application.',
            'Aucun hachage d’IP, aucune empreinte d’appareil et aucun comportement d’utilisation ne sont collectés.',
          ],
        },
        {
          heading: 'Ce que nous ne recevons jamais',
          paragraphs: [],
          items: [
            'Votre nom, votre e-mail ou toute information de compte — il n’y a pas de compte.',
            'Le contenu de votre travail : documents, sessions, historique ou réglages.',
            'Rapports de plantage, traces d’utilisation ou identifiants publicitaires.',
          ],
        },
        {
          heading: 'Contact',
          paragraphs: [
            'Les questions sur cette page peuvent être posées dans les issues du dépôt public — voir les liens en bas de page.',
          ],
          items: [],
        },
      ],
    },
    terms: {
      title: 'Conditions',
      lead: 'Ces conditions couvrent le site Siderkit et l’utilisation des applications Siderkit. Le logiciel lui-même est régi par sa licence open source, présentée sur la page des licences.',
      sections: [
        {
          heading: 'Ce que ces conditions couvrent',
          paragraphs: [
            'Elles s’appliquent à ce site et à son contenu, ainsi qu’à votre utilisation des applications Siderkit en tant que visiteur et utilisateur.',
            'Les applications sont des logiciels open source. C’est la licence du dépôt de chaque application — et non ces conditions — qui vous donne des droits sur le code. Les licences sont propres à chaque application et à chaque version : une version antérieure conserve la licence sous laquelle elle a été publiée.',
          ],
          items: [],
        },
        {
          heading: 'Bon usage du site',
          paragraphs: [],
          items: [
            'Ne dénaturez pas ce site et ne vous faites pas passer pour le projet.',
            'Ne scrapez pas le site et ne le mettez pas en miroir d’une manière qui le perturbe.',
            'N’utilisez pas le site pour diffuser du contenu illicite.',
            'Faites des liens librement ; citez de courts extraits en mentionnant la source.',
          ],
        },
        {
          heading: 'Noms et marques',
          paragraphs: [
            'Le nom Siderkit, le monogramme S et les noms et marques des applications Siderkit sont des marques du projet. Ils ne sont pas placés sous les licences des applications, qui accordent des droits d’auteur et de brevets — pas de droits de marque.',
            'Cela compte surtout si vous forkez, reconstruisez ou redistribuez le code.',
          ],
          items: [
            'Renommez votre version, ou marquez-la clairement comme non officielle.',
            'N’utilisez pas nos noms, marques ou domaines d’une façon qui laisse croire à une origine officielle ou à une approbation.',
            'Ne présentez pas une version non officielle comme une publication officielle.',
            'Ne redistribuez des copies non modifiées qu’avec la licence et les mentions intactes.',
          ],
        },
        {
          heading: 'Versions modifiées',
          paragraphs: [
            'Si vous modifiez et distribuez le code, sa licence exige de conserver les mentions et de déclarer vos changements. Les licences copyleft comme GPL-3.0-only exigent en outre de placer l’œuvre modifiée sous les mêmes conditions et de fournir le code source correspondant.',
          ],
          items: [],
        },
        {
          heading: 'Aucune garantie',
          paragraphs: [
            'Le site et son contenu sont fournis « en l’état », sans garantie d’aucune sorte, expresse ou implicite. Le logiciel porte la même clause de non-garantie dans sa licence.',
            'Rien sur cette page ne constitue un avis juridique ; pour le logiciel, c’est le texte de la licence qui fait foi.',
          ],
          items: [],
        },
        {
          heading: 'Limitation de responsabilité',
          paragraphs: [
            'Dans toute la mesure permise par la loi, le projet n’est pas responsable des dommages résultant de votre utilisation du site ou du logiciel, ou de votre incapacité à les utiliser.',
          ],
          items: [],
        },
        {
          heading: 'Contributions',
          paragraphs: [
            'Les contributions sont bienvenues et sont placées sous la licence du dépôt. En contribuant, vous confirmez avoir le droit de licencier ce que vous soumettez.',
          ],
          items: [],
        },
        {
          heading: 'Évolutions',
          paragraphs: [
            'Ces conditions peuvent évoluer sans préavis ; les changements importants seront reflétés sur cette page. Le dépôt public reste la source de référence pour le code et les notes de version.',
          ],
          items: [],
        },
      ],
    },
    licenses: {
      title: 'Licences',
      lead: 'Les applications Siderkit sont open source sous la licence indiquée dans le dépôt de chacune. Le code de ce site est sous Apache-2.0. Les licences sont propres à chaque application et à chaque version ; le texte de la licence fait foi.',
      sections: [
        {
          heading: 'En bref',
          paragraphs: [
            'Chaque application et chaque version porte sa licence dans le dépôt et avec les installateurs. Les licences peuvent changer d’une version à l’autre, et la licence fournie avec votre copie régit cette copie. Le code de ce site est sous Apache-2.0 ; le fichier NOTICE recense les attributions.',
            'Les dépendances tierces embarquées — crates Rust et dépendances web — gardent leurs propres licences, consignées dans les lockfiles du dépôt et dans les mentions aux tiers.',
          ],
          items: [],
        },
        {
          heading: 'Ce que vous pouvez faire',
          paragraphs: [],
          items: [
            'Utiliser les applications à quelque fin que ce soit, y compris commerciale.',
            'Étudier et modifier le code source.',
            'Redistribuer des copies, originales ou modifiées.',
            'Vous appuyer sur la concession de brevets offerte par GPL-3.0.',
          ],
        },
        {
          heading: 'Ce que vous devez faire',
          paragraphs: [],
          items: [
            'Garder la licence et les mentions de copyright avec le code.',
            'Joindre le texte de la licence aux distributions.',
            'Déclarer les changements importants, conserver les mentions et, pour les licences copyleft comme GPL-3.0-only, placer les versions modifiées sous les mêmes conditions et fournir le code source correspondant.',
            'Conserver les mentions et attributions des tiers.',
          ],
        },
        {
          heading: 'Ce qu’il faut savoir',
          paragraphs: [],
          items: [
            'Le logiciel est fourni « en l’état », sans garantie d’aucune sorte.',
            'Le projet n’est pas responsable de l’usage fait du code en aval.',
            'La licence accorde des droits d’auteur et de brevets — elle n’accorde pas nos marques.',
          ],
        },
        {
          heading: 'Noms et marques',
          paragraphs: [
            'Le nom Siderkit, le monogramme S et les noms et marques des applications Siderkit ne sont pas licenciés par les licences des applications, y compris GPL-3.0-only. Si vous bifurquez ou redistribuez, renommez votre version ou indiquez clairement qu’elle n’est pas officielle ; voir la page des conditions.',
          ],
          items: [],
        },
        {
          heading: 'Ce site',
          paragraphs: [
            'Le code source du site est sous Apache-2.0, construit avec Astro, Starlight et TypeScript. Les polices du système sont utilisées ; aucun fichier de police n’est servi.',
          ],
          items: [],
        },
        {
          heading: 'Ressources',
          paragraphs: [
            'Les sons embarqués sont des créations originales produites pour le projet, distribuées sous la même licence que les applications.',
            'Les captures d’écran peuvent être utilisées dans des tests et des articles, avec mention de la source.',
          ],
          items: [],
        },
      ],
    },
    security: {
      title: 'Sécurité',
      lead: 'Merci de signaler les vulnérabilités en privé. Le projet les corrige avant toute divulgation.',
      sections: [
        {
          heading: 'Comment signaler',
          paragraphs: [
            'Utilisez les avis de sécurité privés de GitHub — les liens en bas de cette page mènent aux bons dépôts. N’ouvrez pas d’issue publique pour une vulnérabilité.',
          ],
          items: [],
        },
        {
          heading: 'Ce qu’il faut inclure',
          paragraphs: [],
          items: [
            'La version de l’application, la plateforme et l’architecture.',
            'Les étapes de reproduction, et une preuve de concept si vous en avez une.',
            'L’impact : ce qu’un attaquant pourrait en faire.',
            'La mention de crédit que vous préférez, ou aucune — à vous de choisir.',
          ],
        },
        {
          heading: 'Ce qui se passe ensuite',
          paragraphs: [],
          items: [
            'Nous accusons réception des rapports sous cinq jours ouvrés.',
            'Nous évaluons la gravité et coordonnons une correction.',
            'Nous publions la correction et un avis de sécurité avant la divulgation publique.',
            'Vous pouvez publier une fois l’avis paru — c’est la divulgation coordonnée.',
          ],
        },
        {
          heading: 'Dans le périmètre',
          paragraphs: [],
          items: [
            'La dernière version de chaque application Siderkit.',
            'Les installateurs et le circuit de vérification des mises à jour.',
            'Ce site.',
          ],
        },
        {
          heading: 'Hors périmètre',
          paragraphs: [],
          items: [
            'L’ingénierie sociale, ou les problèmes qui exigent un appareil déjà compromis.',
            'Les services tiers en dehors de notre code.',
            'Les attaques qui perturbent le site au lieu d’exposer des données.',
            'Les demandes de durcissement de fonctionnalités qui ne sont pas des vulnérabilités.',
          ],
        },
        {
          heading: 'État de la signature',
          paragraphs: [
            'Les installateurs Windows sont signés avec minisign et vérifiés avant l’installation.',
            'Les versions macOS ne sont pas signées pour l’instant ; des avertissements de Gatekeeper sont attendus tant que la signature n’est pas configurée. Prenez les téléchargements directement sur ce site ou sur GitHub Releases.',
          ],
          items: [],
        },
        {
          heading: 'Recherche de bonne foi',
          paragraphs: [
            'Une recherche menée de bonne foi dans ce périmètre ne donnera pas lieu à des poursuites, tant que vous respectez la vie privée des utilisateurs, évitez de perturber le service et suivez le processus de divulgation ci-dessus.',
          ],
          items: [],
        },
      ],
    },
  },
  company: {
    eyebrow: 'Le projet',
    about: {
      title: 'Nos convictions.',
      lead: 'Siderkit est un projet indépendant et open source.',
      paragraphs: [
        'Pour l’instant, il n’y a qu’une application — un minuteur de concentration calme, pensé pour rester en local, qui vous rappelle de faire une pause, de vous lever et de regarder au loin. Sa page produit, sa documentation et ses notes de version vivent sur ce site.',
        'Le code, les décisions et les discussions restent au grand jour. Nous croyons que c’est ainsi que la confiance prend racine.',
      ],
      cta: 'Parcourir les dépôts',
    },
    contact: {
      title: 'Parlons-en.',
      lead: 'Pas de formulaire de contact, pas de file de tickets. Utilisez les canaux publics, pour que tout le monde profite de la réponse.',
      channels: [
        {
          key: 'appIssues',
          title: 'Bugs des applications',
          body: 'Ouvrez une issue avec la version, la plateforme et les étapes de reproduction.',
          linkLabel: 'Ouvrir une issue',
        },
        {
          key: 'siteDiscussions',
          title: 'Site et questions générales',
          body: 'Lancez une discussion dans le dépôt du site.',
          linkLabel: 'Lancer une discussion',
        },
        {
          key: 'security',
          title: 'Sécurité',
          body: 'Utilisez un avis de sécurité privé plutôt qu’une issue publique.',
          linkLabel: 'Signaler en privé',
        },
        {
          key: 'translations',
          title: 'Traductions',
          body: 'Lisez le guide de contribution avant d’ouvrir une pull request.',
          linkLabel: 'Lire CONTRIBUTING.md',
        },
      ],
    },
  },
  notFound: {
    title: 'Page introuvable.',
    body: 'La page que vous cherchez n’est pas ici. Elle a peut-être déménagé, ou le lien est peut-être erroné.',
    home: 'Aller à la page d’accueil',
    docs: 'Parcourir la documentation',
    note: 'Cette page est affichée en anglais, en chinois simplifié, en chinois traditionnel et en français.',
  },
  footer: {
    tagline: 'Le travail, comme il se doit.',
    apps: 'Applications',
    legal: 'Légal',
    company: 'Le projet',
    elsewhere: 'Ailleurs',
    privacy: 'Confidentialité',
    terms: 'Conditions',
    licenses: 'Licences',
    security: 'Sécurité',
    about: 'À propos',
    contact: 'Contact',
    discussions: 'Discussions',
    siteSource: 'Source du site',
    copyright: '© 2026 Siderkit contributors.',
    language: 'Langue',
  },
} satisfies Messages;
