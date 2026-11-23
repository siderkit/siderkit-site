---
sidebar:
  order: 7
title: 故障排查
description: 悬浮窗、托盘、安装包、更新和睡眠行为的常见处理。
---

## 看不到悬浮倒计时

- 检查**设置 → 悬浮球 → 显示悬浮球**。
- 在同一区域点击**定位**，应用会在悬浮窗周围画一段提示。
- 如果使用 Wayland，合成器可能把窗口放到别处，或拒绝点击穿透。要获得完整行为，请登录 X11 会话。
- 如果悬浮窗原来所在的显示器已断开，Break 会把它移到主显示器。

## Linux 上没有托盘图标

GNOME 默认不显示托盘图标，需要扩展。安装并启用 AppIndicator 扩展，然后重启 Break。没有托盘时，计时器和主窗口仍可使用，只是托盘菜单不可用。

## Windows 显示 SmartScreen 提示

安装包尚未代码签名，即使文件正确也可能出现提示。请确认文件来自官方发布页，且 SHA-256 与公布值一致，然后选择“更多信息 → 仍要运行”。不要全局关闭 SmartScreen。

## macOS 提示应用已损坏或来自未识别的开发者

构建未签名。打开**系统设置 → 隐私与安全性**，找到被阻止的应用，选择**仍要打开**。如果仍然不行，可以移除已安装应用的隔离属性：

```bash
xattr -d com.apple.quarantine "/Applications/Siderkit Break.app"
```

只对从官方发布页下载的构建这样做。

## 安装程序无法启动，或缺少 WebView2

Windows 安装包带有小型 WebView2 引导程序。从未安装过 WebView2 的电脑仍需要联网获取运行时。如果引导程序无法联网，请先从微软安装 Evergreen WebView2 Runtime，再运行安装包。

## 睡眠后计时看起来不对

系统唤醒时，Break 会比较墙上时钟的截止时间。如果截止时间在睡眠期间已经过去，它会显示**欢迎回来**卡片，而不是补播所有错过的循环。开始休息或重置会话即可。如果手动改过系统时间，剩余时间会被限制在配置时长内。

## 数据库无法打开

Break 会显示阻塞错误，给出数据目录并提供重试。请检查目录是否存在、是否可写，并确认没有另一个 Break 实例在运行。应用只允许一个实例；再次启动会聚焦已有窗口。

## 更新后设置看起来不对

在设置里使用**恢复默认**，把计时器恢复到 25/5/15。主题、语言和更新偏好是分开的，请逐项修改。如果应用读不懂某个设置，会回退到默认值，并在本地日志里记录无效键。

## 日志在哪里？

| 系统 | 日志文件 |
| --- | --- |
| Windows | `%LOCALAPPDATA%\com.siderkit.break\logs\Siderkit Break.log` |
| macOS | `~/Library/Logs/com.siderkit.break/Siderkit Break.log` |
| Linux | `~/.local/share/com.siderkit.break/logs/Siderkit Break.log` |

## 报告缺陷

到 [github.com/siderkit/siderkit-break/issues](https://github.com/siderkit/siderkit-break/issues) 开 issue，并附上：

- **设置 → 关于**里的版本号；
- 操作系统与会话类型（X11 或 Wayland）；
- 你期望的结果与实际发生的情况；
- 复现步骤，最好附上日志片段。

安全问题请使用[私有安全公告](https://github.com/siderkit/siderkit-break/security/advisories/new)，不要开公开 issue。
