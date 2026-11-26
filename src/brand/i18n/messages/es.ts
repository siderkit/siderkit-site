import type { Messages } from './types';

export const es = {
  meta: {
    siteName: 'Siderkit',
    homeTitle: 'Siderkit — El trabajo, como debería ser.',
    homeDescription:
      'Un proyecto independiente y de código abierto que crea herramientas serenas, pensadas para quedarse en local y dejar espacio a quien las usa.',
    privacyTitle: 'Privacidad — Siderkit',
    privacyDescription: 'Cómo el sitio web de Siderkit y las apps de Siderkit tratan los datos.',
    termsTitle: 'Términos — Siderkit',
    termsDescription: 'Los términos que se aplican al sitio web de Siderkit y a las apps de Siderkit.',
    licensesTitle: 'Licencias — Siderkit',
    licensesDescription: 'Licencias de las apps de Siderkit, de este sitio y de los recursos incluidos.',
    securityTitle: 'Seguridad — Siderkit',
    securityDescription: 'Cómo informar de un problema de seguridad en una app de Siderkit o en este sitio.',
    aboutTitle: 'Acerca de — Siderkit',
    aboutDescription:
      'Siderkit es un proyecto independiente y de código abierto: en qué creemos y cómo trabajamos.',
    contactTitle: 'Contacto — Siderkit',
    contactDescription: 'Dónde informar de errores, hacer preguntas o reportar un problema de seguridad.',
    notFoundTitle: 'Página no encontrada — Siderkit',
    notFoundDescription: 'La página que buscabas no está aquí.',
    ogAlt: 'Marca de Siderkit',
  },
  nav: {
    docs: 'Documentación',
    about: 'Acerca de',
    source: 'Código fuente',
  },
  common: {
    brand: 'Siderkit',
    github: 'GitHub',
    language: 'Idioma',
    skipToContent: 'Saltar al contenido',
    opensInNewTab: 'se abre en una pestaña nueva',
    backHome: 'Volver al inicio',
  },
  home: {
    eyebrow: 'Independiente · código abierto',
    title: 'El trabajo,\ncomo debería ser.',
    lead: 'Software sereno, hecho despacio. Una app ya está publicada; las demás van en camino.',
    primaryCta: 'Conocer la primera app',
    closingLine: 'Independiente · Código abierto · GPL-3.0-only · Sin inversores',
  },
  legal: {
    eyebrow: 'Legal',
    updated: 'Última actualización: 23 de noviembre de 2026.',
    privacy: {
      title: 'Privacidad',
      lead: 'La versión corta: este sitio no instala cookies ni usa analítica, y las apps de Siderkit mantienen tus datos en tu propio dispositivo.',
      sections: [
        {
          heading: 'Este sitio',
          paragraphs: [
            'El sitio es estático. No instala cookies, no carga fuentes ni scripts de terceros, y no usa analítica.',
            'El sitio usa las fuentes del sistema; no se sirve ningún archivo de fuentes.',
          ],
          items: [],
        },
        {
          heading: 'Alojamiento y registros de peticiones',
          paragraphs: [
            'Cloudflare aloja el sitio y guarda registros básicos de peticiones como parte de su funcionamiento normal. Esos registros se rigen por los términos de privacidad de Cloudflare.',
            'El proyecto no perfila visitantes, no crea identificadores publicitarios ni cruza datos entre servicios.',
          ],
          items: [],
        },
        {
          heading: 'Las apps de Siderkit',
          paragraphs: [
            'Las apps guardan sus datos en tu dispositivo: ajustes, historial y bases de datos locales incluidos. No hay cuenta, ni sincronización, ni ningún servidor que almacene tus datos.',
            'Como no hay cuentas ni canal de telemetría, el proyecto no puede relacionar tus datos contigo: nunca los recibe.',
          ],
          items: [],
        },
        {
          heading: 'Comprobación de actualizaciones',
          paragraphs: [
            'Las apps pueden buscar actualizaciones en dl.siderkit.com por HTTPS. Una petición incluye la versión de la app, la plataforma de destino y la arquitectura.',
            'En el primer arranque, una petición puede incluir un ID de instalación aleatorio para que el proyecto pueda contar instalaciones y distribución de versiones.',
          ],
          items: [
            'El ID de instalación es un UUID aleatorio guardado en metrics.json en tu dispositivo.',
            'No se deriva del hardware, de la red, de la cuenta ni de la ruta de instalación.',
            'Puedes desactivar los recuentos anónimos, o restablecer el ID, en los ajustes de la app.',
            'No se recopilan hashes de IP, huellas de dispositivo ni patrones de uso.',
          ],
        },
        {
          heading: 'Lo que nunca recibimos',
          paragraphs: [],
          items: [
            'Tu nombre, tu correo o cualquier dato de cuenta: no hay cuentas.',
            'El contenido de tu trabajo: documentos, sesiones, historial o ajustes.',
            'Informes de errores, rastros de uso o identificadores publicitarios.',
          ],
        },
        {
          heading: 'Contacto',
          paragraphs: [
            'Las dudas sobre este aviso pueden plantearse en los issues del repositorio público; ver los enlaces al pie de esta página.',
          ],
          items: [],
        },
      ],
    },
    terms: {
      title: 'Términos',
      lead: 'Estos términos cubren el sitio web de Siderkit y el uso de las apps de Siderkit. El software en sí se rige por su licencia de código abierto, descrita en la página de licencias.',
      sections: [
        {
          heading: 'Qué cubren estos términos',
          paragraphs: [
            'Se aplican a este sitio y a su contenido, y al uso que hagas de las apps de Siderkit como visitante y usuario.',
            'Las apps son software de código abierto. La licencia del repositorio de cada app —no estos términos— es la que otorga tus derechos sobre el código. Las licencias son por app y por versión: una versión anterior conserva la licencia con la que se publicó.',
          ],
          items: [],
        },
        {
          heading: 'Uso razonable del sitio',
          paragraphs: [],
          items: [
            'No tergives este sitio ni te hagas pasar por el proyecto.',
            'No extraigas ni repliques el sitio de formas que lo perturben.',
            'No uses el sitio para distribuir contenido ilegal.',
            'Enlaza con libertad; cita fragmentos breves indicando la fuente.',
          ],
        },
        {
          heading: 'Nombres y marcas',
          paragraphs: [
            'El nombre Siderkit, el monograma S y los nombres y marcas de las apps de Siderkit son marcas del proyecto. No están licenciados bajo las licencias de las apps, que otorgan derechos de autor y de patente, no de marca.',
            'Esto importa sobre todo si bifurcas, reconstruyes o redistribuyes el código.',
          ],
          items: [
            'Renombra tu build, o indícala claramente como no oficial.',
            'No uses nuestros nombres, marcas ni dominios de formas que sugieran origen oficial o respaldo.',
            'No presentes builds no oficiales como versiones oficiales.',
            'Redistribuye copias sin modificar solo con la licencia y los avisos intactos.',
          ],
        },
        {
          heading: 'Builds modificadas',
          paragraphs: [
            'Si modificas y distribuyes el código, su licencia exige conservar los avisos y declarar los cambios. Las licencias copyleft como GPL-3.0-only exigen además licenciar la obra modificada bajo los mismos términos y proporcionar el código fuente correspondiente.',
          ],
          items: [],
        },
        {
          heading: 'Sin garantía',
          paragraphs: [
            'El sitio y su contenido se ofrecen «tal cual», sin garantía de ningún tipo, expresa o implícita. El software lleva el mismo descargo de garantías bajo su licencia.',
            'Nada en esta página es asesoramiento legal; para el software, el texto de la licencia es la referencia autorizada.',
          ],
          items: [],
        },
        {
          heading: 'Limitación de responsabilidad',
          paragraphs: [
            'En la máxima medida que permita la ley, el proyecto no responde de los daños derivados del uso, o de la imposibilidad de uso, del sitio o del software.',
          ],
          items: [],
        },
        {
          heading: 'Contribuciones',
          paragraphs: [
            'Las contribuciones son bienvenidas y se licencian bajo la licencia del repositorio. Al contribuir, confirmas que tienes derecho a licenciar lo que envías.',
          ],
          items: [],
        },
        {
          heading: 'Cambios',
          paragraphs: [
            'Estos términos pueden cambiar sin aviso previo; los cambios relevantes se reflejarán en esta página. El repositorio público sigue siendo la fuente autorizada del código y de las notas de versión.',
          ],
          items: [],
        },
      ],
    },
    licenses: {
      title: 'Licencias',
      lead: 'Las apps de Siderkit son de código abierto bajo la licencia indicada en el repositorio de cada app. El código de este sitio es Apache-2.0. Las licencias son por app y por versión; el texto de la licencia es la referencia autorizada.',
      sections: [
        {
          heading: 'La versión corta',
          paragraphs: [
            'Cada app y cada versión incluye su licencia en el repositorio y con los instaladores. Las licencias pueden cambiar entre versiones, y la licencia que acompañaba a tu copia es la que rige esa copia. El código de este sitio es Apache-2.0; el archivo NOTICE recoge los créditos.',
            'Las dependencias de terceros incluidas —los crates de Rust y las dependencias web— conservan sus propias licencias, registradas en los lockfiles del repositorio y en los avisos de terceros.',
          ],
          items: [],
        },
        {
          heading: 'Lo que puedes hacer',
          paragraphs: [],
          items: [
            'Usar las apps para cualquier propósito, incluido el comercial.',
            'Estudiar y modificar el código fuente.',
            'Redistribuir copias, originales o modificadas.',
            'Apoyarte en la concesión de patentes que ofrece GPL-3.0.',
          ],
        },
        {
          heading: 'Lo que debes hacer',
          paragraphs: [],
          items: [
            'Mantener la licencia y los avisos de copyright junto al código.',
            'Incluir el texto de la licencia en las distribuciones.',
            'Declarar los cambios importantes, conservar los avisos y, en licencias copyleft como GPL-3.0-only, licenciar las versiones modificadas bajo los mismos términos y proporcionar el código fuente correspondiente.',
            'Conservar los avisos y créditos de terceros.',
          ],
        },
        {
          heading: 'Lo que conviene saber',
          paragraphs: [],
          items: [
            'El software se ofrece «tal cual», sin garantía de ningún tipo.',
            'El proyecto no responde del uso que se dé al código aguas abajo.',
            'La licencia otorga derechos de autor y de patente: no otorga nuestras marcas.',
          ],
        },
        {
          heading: 'Nombres y marcas',
          paragraphs: [
            'El nombre Siderkit, el monograma S y los nombres y marcas de las apps de Siderkit no se licencian bajo las licencias de las apps, incluida GPL-3.0-only. Si bifurcas o redistribuyes, renombra tu build o indícalo claramente como no oficial; los detalles están en la página de términos.',
          ],
          items: [],
        },
        {
          heading: 'Este sitio',
          paragraphs: [
            'El código del sitio es Apache-2.0, construido con Astro, Starlight y TypeScript. Se usan fuentes del sistema; no se sirve ningún archivo de fuentes.',
          ],
          items: [],
        },
        {
          heading: 'Recursos',
          paragraphs: [
            'Los sonidos incluidos son recursos originales creados para el proyecto, distribuidos bajo la misma licencia que las apps.',
            'Las capturas de pantalla pueden usarse en reseñas y coberturas, indicando la fuente.',
          ],
          items: [],
        },
      ],
    },
    security: {
      title: 'Seguridad',
      lead: 'Por favor, informa de las vulnerabilidades en privado. El proyecto las corrige antes de que se revelen.',
      sections: [
        {
          heading: 'Cómo informar',
          paragraphs: [
            'Usa los avisos de seguridad privados de GitHub; los enlaces al pie de esta página llevan a los repositorios correspondientes. No abras un issue público para una vulnerabilidad.',
          ],
          items: [],
        },
        {
          heading: 'Qué incluir',
          paragraphs: [],
          items: [
            'La versión de la app, la plataforma y la arquitectura.',
            'Los pasos para reproducirlo y, si lo tienes, una prueba de concepto.',
            'El impacto: qué podría hacer un atacante con ello.',
            'La atribución que prefieras, o ninguna: tú eliges.',
          ],
        },
        {
          heading: 'Qué ocurre después',
          paragraphs: [],
          items: [
            'Confirmamos los informes en un plazo de cinco días hábiles.',
            'Evaluamos la gravedad y coordinamos una corrección.',
            'Publicamos la corrección y un aviso antes de la divulgación pública.',
            'Puedes publicar cuando el aviso esté disponible: divulgación coordinada.',
          ],
        },
        {
          heading: 'Dentro del alcance',
          paragraphs: [],
          items: [
            'La última versión de cada app de Siderkit.',
            'Los instaladores y la ruta de verificación de actualizaciones.',
            'Este sitio.',
          ],
        },
        {
          heading: 'Fuera del alcance',
          paragraphs: [],
          items: [
            'Ingeniería social, o problemas que requieran un dispositivo ya comprometido.',
            'Servicios de terceros ajenos a nuestro código.',
            'Ataques que perturben el sitio en lugar de exponer datos.',
            'Peticiones de endurecimiento de funciones que no son vulnerabilidades.',
          ],
        },
        {
          heading: 'Estado de la firma',
          paragraphs: [
            'Los instaladores de Windows se firman con minisign y se verifican antes de la instalación.',
            'Las builds de macOS están sin firmar por ahora; los avisos de Gatekeeper son de esperar hasta que la firma esté configurada. Descarga directamente de este sitio o de GitHub Releases.',
          ],
          items: [],
        },
        {
          heading: 'Puerto seguro',
          paragraphs: [
            'La investigación de buena fe dentro de este alcance no dará lugar a acciones legales, siempre que respetes la privacidad de los usuarios, evites interrumpir el servicio y sigas el proceso de divulgación de arriba.',
          ],
          items: [],
        },
      ],
    },
  },
  company: {
    eyebrow: 'Proyecto',
    about: {
      title: 'Lo que creemos.',
      lead: 'Siderkit es un proyecto independiente y de código abierto.',
      paragraphs: [
        'Por ahora hay una app: un temporizador de concentración sereno, que guarda todo en local y te recuerda descansar, levantarte y mirar lejos. Su página de producto, su documentación y sus notas de versión viven en este sitio.',
        'El código, las decisiones y las discusiones quedan a la vista. Creemos que así echa raíces la confianza.',
      ],
      cta: 'Explora los repositorios',
    },
    contact: {
      title: 'Hablemos.',
      lead: 'Sin formulario de contacto y sin cola de tickets. Usa los canales públicos: así todo el mundo puede aprender de la respuesta.',
      channels: [
        {
          key: 'appIssues',
          title: 'Errores de las apps',
          body: 'Abre un issue con la versión, la plataforma y los pasos para reproducirlo.',
          linkLabel: 'Abrir un issue',
        },
        {
          key: 'siteDiscussions',
          title: 'El sitio y otras preguntas',
          body: 'Abre una discusión en el repositorio del sitio.',
          linkLabel: 'Abrir una discusión',
        },
        {
          key: 'security',
          title: 'Seguridad',
          body: 'Usa un aviso de seguridad privado en lugar de un issue público.',
          linkLabel: 'Informar en privado',
        },
        {
          key: 'translations',
          title: 'Traducciones',
          body: 'Lee la guía de contribución antes de abrir un pull request.',
          linkLabel: 'Leer CONTRIBUTING.md',
        },
      ],
    },
  },
  notFound: {
    title: 'Página no encontrada.',
    body: 'La página que buscabas no está aquí. Puede que se haya movido, o que el enlace esté mal.',
    home: 'Ir a la página de inicio',
    docs: 'Ver la documentación',
    note: 'Esta página se muestra en inglés, chino simplificado, chino tradicional y español.',
  },
  footer: {
    tagline: 'El trabajo, como debería ser.',
    apps: 'Apps',
    legal: 'Legal',
    company: 'Proyecto',
    elsewhere: 'En otros sitios',
    privacy: 'Privacidad',
    terms: 'Términos',
    licenses: 'Licencias',
    security: 'Seguridad',
    about: 'Acerca de',
    contact: 'Contacto',
    discussions: 'Discusiones',
    siteSource: 'Código del sitio',
    copyright: '© 2026 Siderkit contributors.',
    language: 'Idioma',
  },
} satisfies Messages;
