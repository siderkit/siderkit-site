import type { Messages } from './types';

export const zhTW = {
  meta: {
    siteName: 'Siderkit',
    homeTitle: 'Siderkit — 工作，本該如此。',
    homeDescription:
      'Siderkit 是一個獨立的開源專案。我們相信，好的軟體會給人留出生活。',
    privacyTitle: '隱私 — Siderkit',
    privacyDescription: 'Siderkit 網站與 Siderkit 應用程式如何處理資料。',
    termsTitle: '條款 — Siderkit',
    termsDescription: '適用於 Siderkit 網站與 Siderkit 應用程式的條款。',
    licensesTitle: '授權 — Siderkit',
    licensesDescription: 'Siderkit 應用程式、本站與內建素材的授權。',
    securityTitle: '安全性 — Siderkit',
    securityDescription: '如何回報 Siderkit 應用程式或本站的安全問題。',
    aboutTitle: '關於 — Siderkit',
    aboutDescription: 'Siderkit 是一個獨立的開源專案——我們相信的事，和我們做事的方式。',
    contactTitle: '聯絡 — Siderkit',
    contactDescription: '在哪裡回報缺陷、提問或回報安全問題。',
    notFoundTitle: '頁面不存在 — Siderkit',
    notFoundDescription: '你要找的頁面不在這裡。',
    ogAlt: 'Siderkit 品牌標記',
  },
  nav: {
    docs: '文件',
    about: '關於',
    source: '原始碼',
  },
  common: {
    brand: 'Siderkit',
    github: 'GitHub',
    language: '語言',
    skipToContent: '跳到內容',
    opensInNewTab: '在新分頁開啟',
    backHome: '回到首頁',
  },
  home: {
    eyebrow: 'Siderkit',
    title: '工作，本該如此。',
    lead: 'Siderkit 是一個獨立的開源專案。我們相信，好的軟體會給人留出生活。',
    primaryCta: '閱讀文件',
    secondaryCta: '關於 Siderkit',
    meta: '獨立 · 開源 · 無需帳號',
    trust: [
      { value: '開源', label: '程式碼公開，可自行建置' },
      { value: '獨立', label: '沒有投資人，照自己的步調做事' },
      { value: '隱私', label: '本站不設 Cookie、不做統計' },
      { value: '無需帳號', label: '不註冊，不同步' },
    ],
    principlesEyebrow: '我們的立場',
    principlesTitle: '不是人圍著軟體轉，而是軟體圍著人轉。',
    principlesLead: '工具的終點，是把時間、注意力和判斷還給人。我們做的每一件事，都從這裡出發。',
    principles: [
      {
        title: '技術給人留出空間',
        body: '注意力不該被無限徵用。工具該在你需要時出現，用完就退開。',
      },
      {
        title: '判斷留在人手裡',
        body: '軟體可以整理事實，但選擇與責任始終屬於人。',
      },
      {
        title: '工作應該可以被驗證',
        body: '說得清楚做了什麼、做到什麼程度，工作才值得信任。',
      },
      {
        title: '開放讓它走得長遠',
        body: '程式碼、決策與討論放在明處，信任才有根。',
      },
    ],
    appsEyebrow: '應用',
    appsTitle: '從第一個應用開始。',
    appsLead: '免費、開源，照自己的步調生長。',
    openEyebrow: '剛剛開始',
    openTitle: '這只是一個開始。',
    openLead: '我們會照自己的步調，把這些信念一件件做成真實的工具。',
    openSourceCta: '查看原始碼',
    openDocsCta: '閱讀文件',
  },
  legal: {
    eyebrow: '法律',
    updated: '最後更新：2026 年 11 月 23 日。',
    privacy: {
      title: '隱私',
      lead: '簡單說：本站不設 Cookie、不做統計；Siderkit 應用程式的資料只留在你自己的裝置上。',
      sections: [
        {
          heading: '本站',
          paragraphs: [
            '本站是靜態網站，不設定 Cookie，不載入第三方字型或腳本，也不使用分析統計。',
            '本站使用系統字型，不提供字型檔案。',
          ],
          items: [],
        },
        {
          heading: '代管與存取日誌',
          paragraphs: [
            'Cloudflare 提供代管服務，會作為正常維運的一部分記錄基礎存取日誌。這些日誌受 Cloudflare 隱私條款約束。',
            '專案不刻畫訪客輪廓、不建立廣告識別，也不跨服務拼湊資料。',
          ],
          items: [],
        },
        {
          heading: 'Siderkit 應用程式',
          paragraphs: [
            '應用程式的資料留在你的裝置上：設定、歷史紀錄和本地資料庫都在其中。沒有帳號、沒有同步，也沒有存放你資料的伺服器。',
            '因為沒有帳號、也沒有遙測通道，專案無法把資料和你連結起來——它根本不會收到這些資料。',
          ],
          items: [],
        },
        {
          heading: '更新檢查',
          paragraphs: [
            '應用程式會透過 HTTPS 向 dl.siderkit.com 檢查更新。請求包含應用程式版本、目標平台和架構。',
            '首次啟動時，請求可能附帶一個隨機安裝 ID，用於統計安裝量和版本分布。',
          ],
          items: [
            '安裝 ID 是儲存在裝置 metrics.json 裡的隨機 UUID。',
            '它不來自硬體、網路、帳號或安裝路徑。',
            '你可以在應用程式設定裡關閉匿名統計，或重設 ID。',
            '專案不蒐集 IP 雜湊、裝置指紋或使用行為。',
          ],
        },
        {
          heading: '我們永遠收不到什麼',
          paragraphs: [],
          items: [
            '你的姓名、email 或任何帳號資訊——本來就沒有帳號。',
            '你工作的內容：文件、工作階段、歷史紀錄或設定。',
            '當機報告、使用足跡或廣告識別碼。',
          ],
        },
        {
          heading: '聯絡',
          paragraphs: [
            '對本說明有疑問，可以在公開儲存庫的 issues 中提出——見頁面底部的連結。',
          ],
          items: [],
        },
      ],
    },
    terms: {
      title: '條款',
      lead: '本條款適用於 Siderkit 網站及 Siderkit 應用程式的使用。軟體本身由其開源授權約束，見授權頁。',
      sections: [
        {
          heading: '條款管什麼',
          paragraphs: [
            '本條款約束本站與其內容，以及你作為訪客和使用者對 Siderkit 應用程式的使用。',
            '應用程式是開源軟體。授予你程式碼權利的是 Apache-2.0 授權，而不是本條款；授權說了算的地方，以授權為準。',
          ],
          items: [],
        },
        {
          heading: '合理使用本站',
          paragraphs: [],
          items: [
            '不要歪曲本站或冒充專案。',
            '不要以干擾網站的方式擷取或映射本站。',
            '不要利用本站散布違法內容。',
            '歡迎自由連結；引用簡短段落請註明出處。',
          ],
        },
        {
          heading: '名稱與標誌',
          paragraphs: [
            'Siderkit 名稱、S 字標，以及各應用程式的名稱與標誌是專案標誌。Apache-2.0 不授予它們——該授權授予的是著作權與專利權，不含商標權。',
            '如果你 fork、重建或再散布程式碼，這一點尤其重要。',
          ],
          items: [
            '為你的建置改名，或明確標示為非官方。',
            '不要用我們的名稱、標誌或網域，暗示官方出處或背書。',
            '不要把非官方建置冒充官方發布。',
            '再散布未修改副本時，保留授權與聲明檔案。',
          ],
        },
        {
          heading: '修改版建置',
          paragraphs: [
            '如果你修改並散布程式碼，Apache-2.0 要求你聲明所作更改。你的建置由你負責：它的名字、更新和行為都歸屬你，與專案無關。',
          ],
          items: [],
        },
        {
          heading: '不提供擔保',
          paragraphs: [
            '本站與其內容按「現狀」提供，不附帶任何明示或暗示的擔保。軟體在其授權下帶有同樣的免責聲明。',
            '本頁不構成法律意見；對軟體而言，授權文字本身是權威依據。',
          ],
          items: [],
        },
        {
          heading: '責任限制',
          paragraphs: [
            '在法律允許的最大範圍內，專案不對你使用或無法使用本站、軟體所產生的損害承擔責任。',
          ],
          items: [],
        },
        {
          heading: '貢獻',
          paragraphs: [
            '歡迎貢獻，貢獻內容按 Apache-2.0 授權，不帶附加條款。提交貢獻即表示你確認有權利授權你提交的內容。',
          ],
          items: [],
        },
        {
          heading: '變更',
          paragraphs: [
            '本條款可能隨時變化，不另行通知；重大變更會反映在本頁。程式碼與版本紀錄的權威來源仍是公開儲存庫。',
          ],
          items: [],
        },
      ],
    },
    licenses: {
      title: '授權',
      lead: 'Siderkit 應用程式以 Apache-2.0 開源。本頁用平實的語言解釋它代表什麼；授權文字本身是權威依據。',
      sections: [
        {
          heading: '先說結論',
          paragraphs: [
            'Siderkit 應用程式使用 Apache License 2.0。完整文字隨原始碼與安裝檔提供；NOTICE 檔案列出署名資訊。',
            '捆綁的第三方相依套件——Rust crate 與 Web 相依套件——保留各自授權，記錄在儲存庫的 lockfile 與第三方聲明中。',
          ],
          items: [],
        },
        {
          heading: '你可以',
          paragraphs: [],
          items: [
            '將應用程式用於商業、個人場景或你自己的產品中。',
            '研究並修改原始碼。',
            '再散布副本，無論是否修改。',
            '依賴 Apache-2.0 提供的專利授權。',
          ],
        },
        {
          heading: '你必須',
          paragraphs: [],
          items: [
            '在程式碼中保留授權與版權聲明。',
            '散布時附帶授權文字。',
            '對程式碼所作的重要修改作出聲明。',
            '若存在 NOTICE 檔案，隨散布保留。',
          ],
        },
        {
          heading: '你要清楚',
          paragraphs: [],
          items: [
            '軟體按「現狀」提供，不附帶任何明示或暗示的擔保。',
            '專案不對程式碼在下游的使用方式承擔責任。',
            '授權授予著作權與專利權——不授予我們的商標。',
          ],
        },
        {
          heading: '名稱與標誌',
          paragraphs: [
            'Siderkit 名稱、S 字標，以及各應用程式的名稱與標誌不在 Apache-2.0 的授權範圍內。fork 或再散布時，請為你的建置改名，或明確標示為非官方——詳見條款頁。',
          ],
          items: [],
        },
        {
          heading: '本站',
          paragraphs: [
            '本站原始碼使用 Apache-2.0，由 Astro、Starlight 與 TypeScript 建置。本站使用系統字型，不提供字型檔案。',
          ],
          items: [],
        },
        {
          heading: '素材',
          paragraphs: [
            '內建提示音是為專案生成的原創素材，與應用程式一樣按 Apache-2.0 散布。',
            '應用程式截圖可用於評測與報導，請註明出處。',
          ],
          items: [],
        },
      ],
    },
    security: {
      title: '安全性',
      lead: '請私下回報漏洞。專案會在揭露之前修復它們。',
      sections: [
        {
          heading: '如何回報',
          paragraphs: [
            '請使用 GitHub 私有安全公告——頁面底部的連結指向對應的儲存庫。不要為漏洞開公開 issue。',
          ],
          items: [],
        },
        {
          heading: '回報裡帶什麼',
          paragraphs: [],
          items: [
            '應用程式版本、平台和架構。',
            '重現步驟，如有概念驗證更好。',
            '影響：攻擊者能藉此做什麼。',
            '希望的署名方式，或不署名——由你決定。',
          ],
        },
        {
          heading: '接下來的流程',
          paragraphs: [],
          items: [
            '我們在五個工作天內確認回報。',
            '評估嚴重性並協調修正。',
            '先發布修正與安全公告，再進入公開揭露。',
            '公告發布後你可以自由發表——即協同揭露。',
          ],
        },
        {
          heading: '在範圍內',
          paragraphs: [],
          items: [
            '各應用程式的最新版本。',
            '安裝檔與更新驗證鏈路。',
            '本站。',
          ],
        },
        {
          heading: '不在範圍內',
          paragraphs: [],
          items: [
            '社交工程，或需要裝置已被入侵的問題。',
            '我們程式碼之外的第三方服務。',
            '只干擾網站運作而不涉及資料的問題。',
            '對非漏洞功能的加固要求。',
          ],
        },
        {
          heading: '簽署現況',
          paragraphs: [
            'Windows 安裝檔使用 minisign 簽署，並在安裝前校驗。',
            'macOS 建置目前未簽署；在設定簽署之前，出現 Gatekeeper 提示是正常的。請直接從本站或 GitHub Releases 取得下載。',
          ],
          items: [],
        },
        {
          heading: '安全港',
          paragraphs: [
            '只要尊重使用者隱私、不中斷服務，並遵循上述揭露流程，範圍內的善意研究不會被追究法律責任。',
          ],
          items: [],
        },
      ],
    },
  },
  company: {
    eyebrow: '公司',
    about: {
      title: '我們相信的事。',
      lead: 'Siderkit 是一個獨立的開源專案。',
      paragraphs: [
        '現在，這裡只有第一個應用——一款安靜、本地優先的專注計時器，提醒你按時休息、起身、看向遠處。它的產品頁、文件與版本紀錄都在站內。',
        '程式碼、決策與討論都放在明處。我們相信，這是信任生長的方式。',
      ],
      cta: '瀏覽程式碼儲存庫',
    },
    contact: {
      title: '和我們聊聊。',
      lead: '沒有聯絡表單，也沒有工單佇列。請使用公開管道，讓答案也能幫到別人。',
      channels: [
        {
          key: 'appIssues',
          title: '應用程式缺陷',
          body: '附上版本、平台和重現步驟，開一個 issue。',
          linkLabel: '開啟 issue',
        },
        {
          key: 'siteDiscussions',
          title: '本站與一般問題',
          body: '在本站儲存庫裡發起討論。',
          linkLabel: '發起討論',
        },
        {
          key: 'security',
          title: '安全性',
          body: '請使用私有安全公告，不要開公開 issue。',
          linkLabel: '私下回報',
        },
        {
          key: 'translations',
          title: '翻譯',
          body: '送出 pull request 前先讀貢獻指南。',
          linkLabel: '閱讀 CONTRIBUTING.md',
        },
      ],
    },
  },
  notFound: {
    title: '頁面不存在。',
    body: '你要找的頁面不在這裡。它可能已經移動，或連結有誤。',
    home: '回到首頁',
    docs: '瀏覽文件',
    note: '本頁以英文、簡體中文和繁體中文顯示。',
  },
  footer: {
    tagline: '工作，本該如此。',
    apps: '應用',
    legal: '法律',
    company: '公司',
    elsewhere: '其他',
    privacy: '隱私',
    terms: '條款',
    licenses: '授權',
    security: '安全性',
    about: '關於',
    contact: '聯絡',
    discussions: '討論',
    siteSource: '本站原始碼',
    copyright: '© 2026 Siderkit contributors。Apache-2.0。',
    language: '語言',
  },
} satisfies Messages;
