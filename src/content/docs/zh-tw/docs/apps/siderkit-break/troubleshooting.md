---
sidebar:
  order: 7
title: 疑難排解
description: 懸浮視窗、系統匣、安裝檔、更新和睡眠行為的常見處理。
---

## 看不到懸浮倒數

- 檢查**設定 → 懸浮球 → 顯示懸浮球**。
- 在同一區域點選**定位**，應用程式會在懸浮視窗周圍畫一段提示。
- 如果使用 Wayland，合成器可能把視窗放到別處，或拒絕點擊穿透。要獲得完整行為，請登入 X11 工作階段。
- 如果懸浮視窗原本所在的顯示器中斷，Break 會把它移到主顯示器。

## Linux 上沒有系統匣圖示

GNOME 預設不顯示系統匣圖示，需要擴充功能。安裝並啟用 AppIndicator 擴充功能，然後重新啟動 Break。沒有系統匣時，計時器和主視窗仍可使用，只是系統匣選單無法使用。

## Windows 顯示 SmartScreen 提示

安裝檔尚未程式碼簽署，即使檔案正確也可能出現提示。請確認檔案來自官方發布頁，且 SHA-256 與公布值一致，然後選擇「更多資訊 → 仍要執行」。不要全域關閉 SmartScreen。

## macOS 提示應用程式已損壞或來自未識別的開發者

建置未簽署。開啟**系統設定 → 隱私權與安全性**，找到被阻擋的應用程式，選擇**仍要打開**。如果仍然不行，可以移除已安裝應用程式的隔離屬性：

```bash
xattr -d com.apple.quarantine "/Applications/Siderkit Break.app"
```

只對從官方發布頁下載的建置這樣做。

## 安裝程式無法啟動，或缺少 WebView2

Windows 安裝檔帶有小型 WebView2 引導程式。從未安裝過 WebView2 的電腦仍需要連網取得執行階段。如果引導程式無法連網，請先從微軟安裝 Evergreen WebView2 Runtime，再執行安裝檔。

## 睡眠後計時看起來不對

系統喚醒時，Break 會比較牆上時鐘的截止時間。如果截止時間在睡眠期間已經過去，它會顯示**歡迎回來**卡片，而不是補播所有錯過的循環。開始休息或重設工作階段即可。如果手動改過系統時間，剩餘時間會被限制在設定時長內。

## 資料庫無法開啟

Break 會顯示阻擋錯誤，提供資料目錄並允許重試。請檢查目錄是否存在、是否可寫，並確認沒有另一個 Break 執行個體在執行。應用程式只允許一個執行個體；再次啟動會聚焦既有視窗。

## 更新後設定看起來不對

在設定裡使用**恢復預設**，把計時器恢復到 25/5/15。主題、語言和更新偏好是分開的，請逐項修改。如果應用程式讀不懂某個設定，會退回預設值，並在本地日誌裡記錄無效鍵。

## 日誌在哪裡？

| 系統 | 日誌檔案 |
| --- | --- |
| Windows | `%LOCALAPPDATA%\com.siderkit.break\logs\Siderkit Break.log` |
| macOS | `~/Library/Logs/com.siderkit.break/Siderkit Break.log` |
| Linux | `~/.local/share/com.siderkit.break/logs/Siderkit Break.log` |

## 回報缺陷

到 [github.com/siderkit/siderkit-break/issues](https://github.com/siderkit/siderkit-break/issues) 開 issue，並附上：

- **設定 → 關於**裡的版本號；
- 作業系統與工作階段類型（X11 或 Wayland）；
- 你期望的結果與實際發生的情況；
- 重現步驟，最好附上日誌片段。

安全性問題請使用[私有安全公告](https://github.com/siderkit/siderkit-break/security/advisories/new)，不要開公開 issue。
