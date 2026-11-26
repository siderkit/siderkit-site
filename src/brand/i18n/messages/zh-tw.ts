import type { Messages } from './types';

export const zhTW = {
  meta: {
    siteName: 'Siderkit',
    homeTitle: 'Siderkit — 工作，本該如此。',
    homeDescription:
      'Siderkit 是一個獨立開源專案，做安靜、本地優先、給人留出空間的工具。',
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
    eyebrow: '獨立 · 開源',
    title: '工作，\n本該如此。',
    lead: '慢慢做，做安靜的軟體。第一款已經發布，後面的在路上。',
    primaryCta: '看看第一個應用',
    closingLine: '獨立 · 開源 · GPL-3.0-only · 沒有投資人',
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
            '應用程式是開源軟體。授予你對程式碼權利的，是各應用程式倉庫中的授權條款，而不是這些條款。授權條款依應用程式、依版本各自決定：舊版本繼續沿用發布時的授權條款。',
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
            'Siderkit 名稱、S 字母標誌，以及 Siderkit 各應用程式的名稱與標誌，都是專案商標。它們不在應用程式授權條款的範圍內——授權條款授予的是著作權與專利權，不是商標權。',
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
            '如果你修改並散布程式碼，其授權條款要求你保留聲明並註明修改。像 GPL-3.0-only 這類 copyleft 授權條款還要求你將修改後的作品以相同條款授權，並提供對應原始碼。',
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
            '歡迎貢獻，貢獻依所在倉庫的授權條款授權。提交貢獻即表示你確認自己有權授權所提交的內容。',
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
      lead: 'Siderkit 各應用程式依其倉庫中聲明的授權條款開源。本站原始碼為 Apache-2.0。授權條款依應用程式、依版本各自決定；以授權條款原文為準。',
      sections: [
        {
          heading: '先說結論',
          paragraphs: [
            '每個應用程式、每個版本都會在倉庫與安裝程式中附上其授權條款。授權條款可能隨版本變化，你手上這份副本以其隨附的授權條款為準。本站原始碼為 Apache-2.0；NOTICE 檔案列出歸屬資訊。',
            '捆綁的第三方相依套件——Rust crate 與 Web 相依套件——保留各自授權，記錄在儲存庫的 lockfile 與第三方聲明中。',
          ],
          items: [],
        },
        {
          heading: '你可以',
          paragraphs: [],
          items: [
            '將應用程式用於任何目的，包括商業用途。',
            '研究並修改原始碼。',
            '再散布副本，無論是否修改。',
            '依 GPL-3.0 提供的專利授權使用。',
          ],
        },
        {
          heading: '你必須',
          paragraphs: [],
          items: [
            '在程式碼中保留授權與版權聲明。',
            '散布時附帶授權文字。',
            '註明重大修改、保留聲明，並在使用 GPL-3.0-only 這類 copyleft 授權條款時，將修改版以相同條款授權並提供對應原始碼。',
            '保留第三方聲明與歸屬資訊。',
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
            'Siderkit 名稱、S 字母標誌，以及 Siderkit 各應用程式的名稱與標誌，不在應用程式授權條款（包括 GPL-3.0-only）的範圍內。如果你 fork 或再散布，請重新命名你的建置，或明確標註其為非官方版本——詳見條款頁。',
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
    copyright: '© 2026 Siderkit contributors。。',
    language: '語言',
  },
} satisfies Messages;
