---
sidebar:
  order: 2
title: 安裝 Siderkit Break
description: 安裝 Windows NSIS 安裝檔、macOS DMG 或 Linux 安裝檔。
---

## Windows

Siderkit Break 在 Windows 上只發布一種安裝檔：以目前使用者安裝的 NSIS 安裝檔。

1. 下載 `Siderkit-Break_<version>_x64-setup.exe`。
2. 執行安裝檔。預設安裝到 `%LOCALAPPDATA%\Programs\Siderkit Break`，不會要求系統管理員權限。
3. 安裝檔會預選系統語言。需要其他語言時可以在選擇器裡切換；靜默、被動和更新執行不會顯示選擇器。
4. 從開始功能表或安裝完成頁啟動 Break。

安裝檔尚未程式碼簽署，Windows 可能顯示 SmartScreen 提示。只有在檔案來自官方發布頁、且 SHA-256 與公布值一致時，才選擇「更多資訊」然後「仍要執行」。

安裝檔帶有 WebView2 引導程式。從未安裝過 WebView2 的電腦仍需要連網下載執行階段。

解除安裝請使用 **設定 → 應用程式 → Siderkit Break**。除非勾選「刪除應用程式資料」，否則解除安裝程式會保留資料庫和日誌。

## macOS

macOS 版本是同時支援 Intel 與 Apple Silicon 的 Universal DMG。

1. 開啟 `.dmg`。
2. 把 **Siderkit Break** 拖進 **應用程式**。
3. 從「應用程式」啟動。

在設定 Developer ID 之前，建置未簽署。首次啟動會出現 Gatekeeper 提示；可以右鍵選擇「打開」，或到 **系統設定 → 隱私權與安全性 → 仍要打開**。不要全域關閉 Gatekeeper。

需要 macOS 10.15.7 與 Safari 15.4 或更新版本。原裝 Catalina 如果 Safari 太舊，會顯示升級提示而不是應用程式介面。

## Linux

Linux 版本提供 `.deb`、`.rpm` 和 `.AppImage`。

- **Debian / Ubuntu：** `sudo apt install ./Siderkit-Break_<version>_amd64.deb`
- **Fedora / openSUSE：** `sudo rpm -i Siderkit-Break-<version>-1.x86_64.rpm`
- **AppImage：** 賦予可執行權限後執行。AppImage 需要 FUSE 2；沒有 `libfuse2` 時可用 `APPIMAGE_EXTRACT_AND_RUN=1` 執行。

系統需要 `libwebkit2gtk-4.1`。完整體驗請使用 X11 工作階段：Wayland 無法可靠地定位頂層視窗，懸浮倒數和全域快速鍵可能無法使用。GNOME 還需要 AppIndicator 擴充功能才能顯示系統匣圖示。

## 首次啟動

Break 啟動後會常駐系統匣並顯示主視窗。預設是 25 分鐘專注、5 分鐘短休，每四輪一次 15 分鐘長休。無需先設定，直接開始即可。

如果資料庫無法建立，Break 會顯示阻擋錯誤，提供資料目錄並允許重試。請檢查目錄是否可寫，以及是否有另一個 Break 執行個體佔著資料庫。
