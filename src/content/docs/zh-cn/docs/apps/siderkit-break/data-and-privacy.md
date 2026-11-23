---
sidebar:
  order: 5
title: 数据与隐私
description: Break 把数据存在哪里，什么会离开设备，以及如何关闭匿名计数。
---

Siderkit Break 是本地优先的。专注数据留在你的电脑上。唯一的对外请求是更新检查，以及可选的匿名安装信标。

## 数据在哪里

| 系统 | 数据库与设置 | 匿名 ID | 日志 |
| --- | --- | --- | --- |
| Windows | `%APPDATA%\com.siderkit.break\siderkit-break.sqlite3` | `%APPDATA%\com.siderkit.break\metrics.json` | `%LOCALAPPDATA%\com.siderkit.break\logs\Siderkit Break.log` |
| macOS | `~/Library/Application Support/com.siderkit.break/siderkit-break.sqlite3` | `~/Library/Application Support/com.siderkit.break/metrics.json` | `~/Library/Logs/com.siderkit.break/Siderkit Break.log` |
| Linux | `~/.local/share/com.siderkit.break/siderkit-break.sqlite3` | `~/.local/share/com.siderkit.break/metrics.json` | `~/.local/share/com.siderkit.break/logs/Siderkit Break.log` |

Linux 上如果设置了 `$XDG_DATA_HOME`，数据路径会跟随它。WebView 缓存位于数据库旁边。

默认情况下，卸载会保留数据库和日志。要在卸载程序里勾选**删除应用数据**才会移除。自启动项会从登录项中删除。

## 什么不会离开设备

- 专注历史、阶段结果和设置。
- 数据库内容与导出的表格。
- 窗口位置、主题、配色和语言。

没有账号、没有同步，也没有存放专注数据的服务器。

## 更新检查

在 Windows 上，Break 会在后台请求 `https://dl.siderkit.com/latest.json`。请求包含：

- 应用版本；
- 目标平台与架构；
- 安装包类型；
- 匿名安装 ID（计数开启时）。

响应是签名的更新清单。安装前会校验安装包签名。主站不可用时，Break 会回退到 GitHub 的发布清单。

macOS 与 Linux 版本不检查更新，需要手动下载。

## 匿名安装计数

首次启动时，Break 生成随机 UUID v4 并保存到 `metrics.json`。它发送一次安装信标，之后的更新检查会带上同一个 ID，用于统计安装量和版本分布。

ID 不来自硬件、网络、账号或安装路径。服务器不保存 IP 哈希、设备指纹或使用行为；Worker 只把事件、ID、版本、目标、架构和安装包类型写进聚合统计数据集。

你可以在**设置 → 更新**里关闭计数。关闭后不发送 ID，也不发送安装信标。**重置安装 ID** 会生成新的 UUID；如果计数开启，会补发一次信标。

已知局限：卸载不计入；重装、删除 `metrics.json` 或重置 ID 都会算作新安装；离线和被拦截的请求不在样本内。这些数字只用于看趋势，不用于计费或 SLA。

## 官网

Siderkit 官网是静态站点，不设置 Cookie，不加载第三方字体或脚本，也不使用统计分析。Cloudflare 作为托管方会记录基础访问日志。完整说明见[隐私](../../../../legal/privacy/)。
