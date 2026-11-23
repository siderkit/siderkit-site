---
sidebar:
  order: 5
title: Data and privacy
description: Where Break stores data, what leaves the device, and how to turn anonymous counts off.
---

Siderkit Break is local-first. Your session data stays on your machine. The only outbound requests are update checks and the optional anonymous install beacon.

## Where your data lives

| System | Database and settings | Anonymous ID | Logs |
| --- | --- | --- | --- |
| Windows | `%APPDATA%\com.siderkit.break\siderkit-break.sqlite3` | `%APPDATA%\com.siderkit.break\metrics.json` | `%LOCALAPPDATA%\com.siderkit.break\logs\Siderkit Break.log` |
| macOS | `~/Library/Application Support/com.siderkit.break/siderkit-break.sqlite3` | `~/Library/Application Support/com.siderkit.break/metrics.json` | `~/Library/Logs/com.siderkit.break/Siderkit Break.log` |
| Linux | `~/.local/share/com.siderkit.break/siderkit-break.sqlite3` | `~/.local/share/com.siderkit.break/metrics.json` | `~/.local/share/com.siderkit.break/logs/Siderkit Break.log` |

On Linux, the data path follows `$XDG_DATA_HOME` when it is set. The webview cache lives beside the database.

Uninstalling keeps the database and logs by default. Select **Delete app data** in the uninstaller to remove them. The autostart entry is removed from your login items.

## What never leaves the device

- Session history, phase outcomes, and settings.
- The contents of the database and the exported spreadsheets.
- Window positions, theme, palette, and language.

There is no account, no sync, and no server for session data.

## Update checks

On Windows, Break checks `https://dl.siderkit.com/latest.json` in the background. The request includes:

- the app version;
- the target platform and architecture;
- the bundle type;
- the anonymous installation ID, when counts are on.

The response is a signed update manifest. The installer signature is verified before installation. If the primary host fails, Break falls back to the GitHub release manifest.

macOS and Linux builds do not check for updates; downloads are manual.

## Anonymous install counts

On first launch, Break creates a random UUID v4 and stores it in `metrics.json`. It sends one install beacon, then includes the same ID with later update checks so the project can count installs and version distribution.

The ID is not derived from hardware, network, account, or install path. The server does not store an IP hash, device fingerprint, or usage behavior. The Worker only records the event, ID, version, target, architecture, and bundle type in an aggregate analytics dataset.

You can turn counts off in **Settings → Updates**. With counts off, Break sends no ID and no install beacon. **Reset installation ID** creates a new UUID and sends one new beacon if counts are on.

Known limits: uninstalls are not counted; reinstalling, deleting `metrics.json`, or resetting the ID counts as a new install; offline and blocked requests are not in the sample. The numbers are a trend, not billing or SLA data.

## The website

The Siderkit website is static. It sets no cookies, loads no third-party fonts or scripts, and uses no analytics. Cloudflare records basic request logs as the host. See [Privacy](../../../../legal/privacy/) for the full notice.
