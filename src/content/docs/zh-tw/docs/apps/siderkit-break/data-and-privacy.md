---
sidebar:
  order: 5
title: 資料與隱私
description: Break 把資料存在哪裡，什麼會離開裝置，以及如何關閉匿名計數。
---

Siderkit Break 是本地優先的。專注資料留在你的電腦上。唯一的對外請求是更新檢查，以及選用的匿名安裝信標。

## 資料在哪裡

| 系統 | 資料庫與設定 | 匿名 ID | 日誌 |
| --- | --- | --- | --- |
| Windows | `%APPDATA%\com.siderkit.break\siderkit-break.sqlite3` | `%APPDATA%\com.siderkit.break\metrics.json` | `%LOCALAPPDATA%\com.siderkit.break\logs\Siderkit Break.log` |
| macOS | `~/Library/Application Support/com.siderkit.break/siderkit-break.sqlite3` | `~/Library/Application Support/com.siderkit.break/metrics.json` | `~/Library/Logs/com.siderkit.break/Siderkit Break.log` |
| Linux | `~/.local/share/com.siderkit.break/siderkit-break.sqlite3` | `~/.local/share/com.siderkit.break/metrics.json` | `~/.local/share/com.siderkit.break/logs/Siderkit Break.log` |

Linux 上如果設定了 `$XDG_DATA_HOME`，資料路徑會跟隨它。WebView 快取位於資料庫旁邊。

預設情況下，解除安裝會保留資料庫和日誌。要在解除安裝程式裡勾選**刪除應用程式資料**才會移除。自動啟動項目會從登入項目中刪除。

## 什麼不會離開裝置

- 專注歷史、階段結果和設定。
- 資料庫內容與匯出的試算表。
- 視窗位置、主題、配色和語言。

沒有帳號、沒有同步，也沒有存放專注資料的伺服器。

## 更新檢查

在 Windows 上，Break 會在背景請求 `https://dl.siderkit.com/siderkit-break/latest.json`。請求包含：

- 應用程式版本；
- 目標平台與架構；
- 安裝檔類型；
- 匿名安裝 ID（計數開啟時）。

回應是簽署的更新清單。安裝前會驗證安裝檔簽章。主站無法使用時，Break 會退回 GitHub 的發布清單。

macOS 與 Linux 版本不檢查更新，需要手動下載。

## 匿名安裝計數

首次啟動時，Break 產生隨機 UUID v4 並保存到 `metrics.json`。它傳送一次安裝信標，之後的更新檢查會帶上同一個 ID，用於統計安裝量和版本分布。

ID 不來自硬體、網路、帳號或安裝路徑。伺服器不保存 IP 雜湊、裝置指紋或使用行為；Worker 只把事件、ID、版本、目標、架構和安裝檔類型寫進聚合統計資料集。

你可以在**設定 → 更新**裡關閉計數。關閉後不傳送 ID，也不傳送安裝信標。**重設安裝 ID** 會產生新的 UUID；如果計數開啟，會補送一次信標。

已知限制：解除安裝不計入；重裝、刪除 `metrics.json` 或重設 ID 都會算作新安裝；離線和被攔截的請求不在樣本內。這些數字只用於看趨勢，不用於計費或 SLA。

## 網站

Siderkit 網站是靜態網站，不設定 Cookie，不載入第三方字型或腳本，也不使用分析統計。Cloudflare 作為代管方會記錄基礎存取日誌。完整說明見[隱私](../../../../legal/privacy/)。
