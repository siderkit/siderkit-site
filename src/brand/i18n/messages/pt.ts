import type { Messages } from './types';

export const pt = {
  meta: {
    siteName: 'Siderkit',
    homeTitle: 'Siderkit — Trabalho, como deveria ser.',
    homeDescription:
      'Um projeto independente e de código aberto que cria ferramentas discretas, com os dados no seu dispositivo, e que deixam espaço para quem as usa.',
    privacyTitle: 'Privacidade — Siderkit',
    privacyDescription: 'Como o site da Siderkit e os aplicativos da Siderkit tratam os dados.',
    termsTitle: 'Termos — Siderkit',
    termsDescription: 'Os termos que valem para o site da Siderkit e para os aplicativos da Siderkit.',
    licensesTitle: 'Licenças — Siderkit',
    licensesDescription: 'Licenças dos aplicativos da Siderkit, deste site e dos recursos incluídos.',
    securityTitle: 'Segurança — Siderkit',
    securityDescription: 'Como relatar um problema de segurança em um aplicativo da Siderkit ou neste site.',
    aboutTitle: 'Sobre — Siderkit',
    aboutDescription:
      'A Siderkit é um projeto independente e de código aberto — no que acreditamos e como trabalhamos.',
    contactTitle: 'Contato — Siderkit',
    contactDescription: 'Onde relatar bugs, tirar dúvidas ou reportar um problema de segurança.',
    notFoundTitle: 'Página não encontrada — Siderkit',
    notFoundDescription: 'A página que você procurava não está aqui.',
    ogAlt: 'Marca da Siderkit',
  },
  nav: {
    docs: 'Documentação',
    about: 'Sobre',
    source: 'Código-fonte',
  },
  common: {
    brand: 'Siderkit',
    github: 'GitHub',
    language: 'Idioma',
    skipToContent: 'Pular para o conteúdo',
    opensInNewTab: 'abre em uma nova aba',
    backHome: 'Voltar à página inicial',
  },
  home: {
    eyebrow: 'Independente, código aberto',
    title: 'Trabalho,\ncomo deveria ser.',
    lead: 'Software discreto, feito sem pressa. Um aplicativo já está disponível; mais estão a caminho.',
    primaryCta: 'Conheça o primeiro aplicativo',
    closingLine: 'Independente · Código aberto · GPL-3.0-only · Sem investidores',
  },
  legal: {
    eyebrow: 'Jurídico',
    updated: 'Última atualização: 23 de novembro de 2026.',
    privacy: {
      title: 'Privacidade',
      lead: 'Resumindo: este site não instala cookies nem usa análises de uso, e os aplicativos da Siderkit mantêm seus dados no seu próprio dispositivo.',
      sections: [
        {
          heading: 'Este site',
          paragraphs: [
            'O site é estático. Não define cookies, não carrega fontes nem scripts de terceiros e não usa análises.',
            'O site usa fontes do sistema; nenhum arquivo de fonte é servido.',
          ],
          items: [],
        },
        {
          heading: 'Hospedagem e registros de requisições',
          paragraphs: [
            'A Cloudflare hospeda o site e registra requisições básicas como parte da operação normal. Esses registros seguem os termos de privacidade da Cloudflare.',
            'O projeto não traça perfis de visitantes, não cria identificadores de publicidade e não cruza dados entre serviços.',
          ],
          items: [],
        },
        {
          heading: 'Aplicativos da Siderkit',
          paragraphs: [
            'Os aplicativos mantêm os dados no seu dispositivo: configurações, histórico e bancos de dados locais incluídos. Não há conta, não há sincronização e não há servidor que guarde seus dados.',
            'Como não há conta nem canal de telemetria, o projeto não consegue ligar seus dados a você — ele nunca os recebe.',
          ],
          items: [],
        },
        {
          heading: 'Verificações de atualização',
          paragraphs: [
            'Os aplicativos podem verificar atualizações em dl.siderkit.com por HTTPS. Uma requisição inclui a versão do aplicativo, a plataforma de destino e a arquitetura.',
            'Na primeira abertura, uma requisição pode incluir um ID de instalação aleatório, para que o projeto possa contar instalações e a distribuição de versões.',
          ],
          items: [
            'O ID de instalação é um UUID aleatório armazenado em metrics.json no seu dispositivo.',
            'Ele não vem de hardware, rede, conta ou caminho de instalação.',
            'Você pode desativar as contagens anônimas, ou redefinir o ID, nas configurações do aplicativo.',
            'Nenhum hash de IP, impressão digital de dispositivo ou comportamento de uso é coletado.',
          ],
        },
        {
          heading: 'O que nunca recebemos',
          paragraphs: [],
          items: [
            'Seu nome, e-mail ou qualquer dado de conta — não há contas.',
            'O conteúdo do seu trabalho: documentos, sessões, histórico ou configurações.',
            'Relatórios de falhas, registros de uso ou identificadores de publicidade.',
          ],
        },
        {
          heading: 'Contato',
          paragraphs: [
            'Dúvidas sobre este aviso podem ser levantadas nas issues do repositório público — veja os links no rodapé desta página.',
          ],
          items: [],
        },
      ],
    },
    terms: {
      title: 'Termos',
      lead: 'Estes termos valem para o site da Siderkit e para o uso dos aplicativos da Siderkit. O software em si é regido pela licença de código aberto dele, descrita na página de licenças.',
      sections: [
        {
          heading: 'O que estes termos abrangem',
          paragraphs: [
            'Eles valem para este site e seu conteúdo, e para o seu uso dos aplicativos da Siderkit como visitante e usuário.',
            'Os apps são software de código aberto. A licença no repositório de cada app — e não estes termos — é o que concede seus direitos sobre o código. As licenças são por app e por versão: uma versão anterior mantém a licença com que foi publicada.',
          ],
          items: [],
        },
        {
          heading: 'Uso justo do site',
          paragraphs: [],
          items: [
            'Não distorça este site nem se passe pelo projeto.',
            'Não copie nem replique o site de formas que o atrapalhem.',
            'Não use o site para distribuir conteúdo ilegal.',
            'Crie links livremente; ao citar trechos curtos, indique a fonte.',
          ],
        },
        {
          heading: 'Nomes e marcas',
          paragraphs: [
            'O nome Siderkit, o monograma S e os nomes e marcas dos apps Siderkit são marcas do projeto. Eles não são licenciados pelas licenças dos apps, que concedem direitos autorais e de patente — não direitos de marca.',
            'Isso importa principalmente se você fizer fork, reconstruir ou redistribuir o código.',
          ],
          items: [
            'Dê outro nome à sua build, ou marque-a claramente como não oficial.',
            'Não use nossos nomes, marcas ou domínios de forma que sugira origem ou endosso oficiais.',
            'Não apresente builds não oficiais como versões oficiais.',
            'Redistribua cópias não modificadas apenas com a licença e os avisos intactos.',
          ],
        },
        {
          heading: 'Builds modificadas',
          paragraphs: [
            'Se você modificar e distribuir o código, a licença exige manter os avisos e declarar as alterações. Licenças copyleft como a GPL-3.0-only também exigem licenciar a obra modificada nos mesmos termos e fornecer o código-fonte correspondente.',
          ],
          items: [],
        },
        {
          heading: 'Sem garantia',
          paragraphs: [
            'O site e seu conteúdo são fornecidos “como estão”, sem garantia de qualquer tipo, expressa ou implícita. O software traz a mesma declaração de ausência de garantia em sua licença.',
            'Nada nesta página é aconselhamento jurídico; para o software, o texto da licença é o que vale.',
          ],
          items: [],
        },
        {
          heading: 'Limitação de responsabilidade',
          paragraphs: [
            'Na extensão máxima permitida pela lei, o projeto não responde por danos decorrentes do uso, ou da impossibilidade de uso, do site ou do software.',
          ],
          items: [],
        },
        {
          heading: 'Contribuições',
          paragraphs: [
            'Contribuições são bem-vindas e são licenciadas sob a licença do repositório. Ao contribuir, você confirma que tem o direito de licenciar o que envia.',
          ],
          items: [],
        },
        {
          heading: 'Mudanças',
          paragraphs: [
            'Estes termos podem mudar sem aviso prévio; mudanças relevantes serão refletidas nesta página. O repositório público continua sendo a fonte autoritativa de código e notas de versão.',
          ],
          items: [],
        },
      ],
    },
    licenses: {
      title: 'Licenças',
      lead: 'Os apps Siderkit são de código aberto sob a licença indicada no repositório de cada app. O código deste site é Apache-2.0. As licenças são por app e por versão; o texto da licença é a referência autorizada.',
      sections: [
        {
          heading: 'A versão curta',
          paragraphs: [
            'Cada app e cada versão traz sua licença no repositório e com os instaladores. As licenças podem mudar entre versões, e a licença que acompanhou sua cópia rege essa cópia. O código deste site é Apache-2.0; o arquivo NOTICE lista os créditos.',
            'Dependências de terceiros incluídas — crates de Rust e dependências web — mantêm as próprias licenças, registradas nos arquivos de lock do repositório e nos avisos de terceiros.',
          ],
          items: [],
        },
        {
          heading: 'O que você pode fazer',
          paragraphs: [],
          items: [
            'Usar os apps para qualquer finalidade, inclusive comercial.',
            'Estude e modifique o código-fonte.',
            'Redistribua cópias, originais ou modificadas.',
            'Contar com a concessão de patentes oferecida pela GPL-3.0.',
          ],
        },
        {
          heading: 'O que você deve fazer',
          paragraphs: [],
          items: [
            'Mantenha os avisos de licença e de direitos autorais junto ao código.',
            'Inclua o texto da licença nas distribuições.',
            'Declarar alterações relevantes, manter os avisos e, em licenças copyleft como a GPL-3.0-only, licenciar versões modificadas nos mesmos termos e fornecer o código-fonte correspondente.',
            'Manter avisos e créditos de terceiros.',
          ],
        },
        {
          heading: 'O que você precisa saber',
          paragraphs: [],
          items: [
            'O software é fornecido “como está”, sem garantia de qualquer tipo.',
            'O projeto não responde pelo uso que outros fizerem do código.',
            'A licença concede direitos de autoria e de patente — não concede nossas marcas.',
          ],
        },
        {
          heading: 'Nomes e marcas',
          paragraphs: [
            'O nome Siderkit, o monograma S e os nomes e marcas dos apps Siderkit não são licenciados pelas licenças dos apps, incluindo a GPL-3.0-only. Se você fizer fork ou redistribuir, renomeie sua build ou indique claramente que é não oficial — veja a página de termos.',
          ],
          items: [],
        },
        {
          heading: 'Este site',
          paragraphs: [
            'O código-fonte do site é Apache-2.0, construído com Astro, Starlight e TypeScript. Usamos fontes do sistema; nenhum arquivo de fonte é servido.',
          ],
          items: [],
        },
        {
          heading: 'Recursos',
          paragraphs: [
            'Os sons incluídos são recursos originais criados para o projeto, distribuídos sob a mesma licença dos aplicativos.',
            'Capturas de tela podem ser usadas em resenhas e coberturas, com atribuição.',
          ],
          items: [],
        },
      ],
    },
    security: {
      title: 'Segurança',
      lead: 'Por favor, relate vulnerabilidades em particular. O projeto as corrige antes que sejam divulgadas.',
      sections: [
        {
          heading: 'Como relatar',
          paragraphs: [
            'Use os avisos de segurança privados do GitHub — os links no rodapé desta página levam aos repositórios corretos. Não abra uma issue pública para uma vulnerabilidade.',
          ],
          items: [],
        },
        {
          heading: 'O que incluir',
          paragraphs: [],
          items: [
            'A versão do aplicativo, a plataforma e a arquitetura.',
            'Os passos para reproduzir e, se você tiver, uma prova de conceito.',
            'O impacto: o que um atacante poderia fazer com isso.',
            'Como prefere ser creditado, ou se prefere não ser — a escolha é sua.',
          ],
        },
        {
          heading: 'O que acontece depois',
          paragraphs: [],
          items: [
            'Reconhecemos os relatórios em até cinco dias úteis.',
            'Avaliamos a gravidade e coordenamos uma correção.',
            'Publicamos a correção e um aviso de segurança antes da divulgação pública.',
            'Você pode publicar assim que o aviso sair — divulgação coordenada.',
          ],
        },
        {
          heading: 'Escopo',
          paragraphs: [],
          items: [
            'A versão mais recente de cada aplicativo da Siderkit.',
            'Os instaladores e o fluxo de verificação de atualizações.',
            'Este site.',
          ],
        },
        {
          heading: 'Fora do escopo',
          paragraphs: [],
          items: [
            'Engenharia social ou problemas que exijam um dispositivo já comprometido.',
            'Serviços de terceiros fora do nosso código.',
            'Ataques que apenas interrompem o site, sem expor dados.',
            'Pedidos para endurecer recursos que não são vulnerabilidades.',
          ],
        },
        {
          heading: 'Situação das assinaturas',
          paragraphs: [
            'Os instaladores do Windows são assinados com minisign e verificados antes da instalação.',
            'As builds do macOS ainda não são assinadas; avisos do Gatekeeper são esperados até que a assinatura esteja configurada. Baixe diretamente deste site ou do GitHub Releases.',
          ],
          items: [],
        },
        {
          heading: 'Porto seguro',
          paragraphs: [
            'Pesquisas de boa-fé dentro deste escopo não serão perseguidas na justiça, desde que você respeite a privacidade dos usuários, evite interromper o serviço e siga o processo de divulgação acima.',
          ],
          items: [],
        },
      ],
    },
  },
  company: {
    eyebrow: 'Empresa',
    about: {
      title: 'No que acreditamos.',
      lead: 'A Siderkit é um projeto independente e de código aberto.',
      paragraphs: [
        'Por ora, há um aplicativo — um temporizador de foco tranquilo, com os dados no seu dispositivo, que lembra você de descansar, levantar-se e olhar para longe. A página do produto, a documentação e as notas de versão ficam neste site.',
        'Código, decisões e discussões ficam em aberto. Acreditamos que é assim que a confiança cria raiz.',
      ],
      cta: 'Explorar os repositórios',
    },
    contact: {
      title: 'Fale com a gente.',
      lead: 'Sem formulário de contato, sem fila de chamados. Use os canais públicos, para que todos possam aprender com a resposta.',
      channels: [
        {
          key: 'appIssues',
          title: 'Bugs do aplicativo',
          body: 'Abra uma issue com a versão, a plataforma e os passos para reproduzir.',
          linkLabel: 'Abrir uma issue',
        },
        {
          key: 'siteDiscussions',
          title: 'Dúvidas sobre o site e questões gerais',
          body: 'Inicie uma discussão no repositório do site.',
          linkLabel: 'Iniciar uma discussão',
        },
        {
          key: 'security',
          title: 'Segurança',
          body: 'Use um aviso de segurança privado em vez de uma issue pública.',
          linkLabel: 'Relatar em particular',
        },
        {
          key: 'translations',
          title: 'Traduções',
          body: 'Leia o guia de contribuição antes de abrir um pull request.',
          linkLabel: 'Ler CONTRIBUTING.md',
        },
      ],
    },
  },
  notFound: {
    title: 'Página não encontrada.',
    body: 'A página que você procurava não está aqui. Ela pode ter sido movida, ou o link pode estar errado.',
    home: 'Ir para a página inicial',
    docs: 'Explorar a documentação',
    note: 'Esta página é exibida em inglês, chinês simplificado, chinês tradicional e português.',
  },
  footer: {
    tagline: 'Trabalho, como deveria ser.',
    apps: 'Aplicativos',
    legal: 'Jurídico',
    company: 'Empresa',
    elsewhere: 'Em outros lugares',
    privacy: 'Privacidade',
    terms: 'Termos',
    licenses: 'Licenças',
    security: 'Segurança',
    about: 'Sobre',
    contact: 'Contato',
    discussions: 'Discussões',
    siteSource: 'Código-fonte do site',
    copyright: '© 2026 Siderkit contributors.',
    language: 'Idioma',
  },
} satisfies Messages;
