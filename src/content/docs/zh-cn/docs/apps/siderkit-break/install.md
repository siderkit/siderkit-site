---
sidebar:
  order: 2
title: 安装 Siderkit Break
description: 安装 Windows NSIS 安装包、macOS DMG 或 Linux 安装包。
---

## Windows

Siderkit Break 在 Windows 上只发布一种安装包：按当前用户安装的 NSIS 安装包。

1. 下载 `Siderkit-Break_<version>_x64-setup.exe`。
2. 运行安装包。默认安装到 `%LOCALAPPDATA%\Programs\Siderkit Break`，不会请求管理员权限。
3. 安装包会预选系统语言。需要其他语言时可以在选择器里切换；静默、被动和更新运行不会显示选择器。
4. 从开始菜单或安装完成页启动 Break。

安装包尚未代码签名，Windows 可能显示 SmartScreen 提示。只有在文件来自官方发布页、且 SHA-256 与公布值一致时，才选择“更多信息”然后“仍要运行”。

安装包带有 WebView2 引导程序。从未安装过 WebView2 的电脑仍需要联网下载运行时。

卸载请使用 **设置 → 应用 → Siderkit Break**。除非勾选“删除应用数据”，否则卸载程序会保留数据库和日志。

## macOS

macOS 版本是同时支持 Intel 与 Apple Silicon 的 Universal DMG。

1. 打开 `.dmg`。
2. 把 **Siderkit Break** 拖进 **应用程序**。
3. 从“应用程序”启动。

在配置 Developer ID 之前，构建未签名。首次启动会出现 Gatekeeper 提示；可以右键选择“打开”，或到 **系统设置 → 隐私与安全性 → 仍要打开**。不要全局关闭 Gatekeeper。

需要 macOS 10.15.7 与 Safari 15.4 或更高版本。原装 Catalina 如果 Safari 太旧，会显示升级提示而不是应用界面。

## Linux

Linux 版本提供 `.deb`、`.rpm` 和 `.AppImage`。

- **Debian / Ubuntu：** `sudo apt install ./Siderkit-Break_<version>_amd64.deb`
- **Fedora / openSUSE：** `sudo rpm -i Siderkit-Break-<version>-1.x86_64.rpm`
- **AppImage：** 赋予可执行权限后运行。AppImage 需要 FUSE 2；没有 `libfuse2` 时可用 `APPIMAGE_EXTRACT_AND_RUN=1` 运行。

系统需要 `libwebkit2gtk-4.1`。完整体验请使用 X11 会话：Wayland 无法可靠地定位顶层窗口，悬浮倒计时和全局快捷键可能不可用。GNOME 还需要 AppIndicator 扩展才能显示托盘图标。

## 首次启动

Break 启动后会驻留托盘并显示主窗口。默认是 25 分钟专注、5 分钟短休，每四轮一次 15 分钟长休。无需先配置，直接开始即可。

如果数据库无法创建，Break 会显示阻塞错误，给出数据目录并提供重试。请检查目录是否可写，以及是否有另一个 Break 实例占着数据库。
