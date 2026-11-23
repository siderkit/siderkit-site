---
sidebar:
  order: 7
title: Troubleshooting
description: Common fixes for the overlay, tray, installers, updates, and sleep behavior.
---

## The floating countdown is not visible

- Check **Settings → Floating ball → Show the floating ball**.
- Use **Locate** in the same section. The app draws a short hint around the overlay.
- If you are on Wayland, the compositor may place the window somewhere unexpected or refuse click-through. Log in to an X11 session for the full behavior.
- If the overlay was on a monitor that is now disconnected, Break moves it to the primary monitor.

## The tray icon is missing on Linux

GNOME does not show tray icons without an extension. Install and enable an AppIndicator extension, then restart Break. The timer and main window work without the tray, but the tray menu is unavailable.

## Windows shows a SmartScreen warning

The installer is not yet code-signed. SmartScreen can warn even when the file is correct. Verify that the file came from the official release page and that its SHA-256 matches the published checksum, then choose **More info → Run anyway**. Do not disable SmartScreen globally.

## macOS says the app is damaged or from an unidentified developer

The build is unsigned. Open **System Settings → Privacy & Security**, find the blocked app, and choose **Open Anyway**. If macOS still refuses, remove the quarantine attribute from the app you installed:

```bash
xattr -d com.apple.quarantine "/Applications/Siderkit Break.app"
```

Only do this for a build you downloaded from the official release page.

## The installer cannot start or WebView2 is missing

The Windows installer includes a small WebView2 bootstrapper. A machine that has never installed WebView2 still needs network access for the runtime. If the bootstrapper cannot reach the network, install the Evergreen WebView2 Runtime from Microsoft and run the installer again.

## The timer looks wrong after sleep

Break compares the wall-clock deadline when the system resumes. If the deadline passed during sleep, it shows a **Welcome back** card instead of replaying every missed cycle. Start the break or reset the session. If the clock was changed manually, the remaining time is clamped to the configured duration.

## The database cannot be opened

Break shows a blocking error with the data directory and a retry action. Check that the directory exists and is writable, and make sure another copy of Break is not running. The app allows only one instance; a second launch focuses the existing window.

## Settings look wrong after an update

Use **Restore defaults** in Settings to return the timer to 25/5/15. Theme, language, and update preferences are separate; change them individually. If the app cannot read a setting, it falls back to the default and logs the invalid key locally.

## Where are the logs?

| System | Log file |
| --- | --- |
| Windows | `%LOCALAPPDATA%\com.siderkit.break\logs\Siderkit Break.log` |
| macOS | `~/Library/Logs/com.siderkit.break/Siderkit Break.log` |
| Linux | `~/.local/share/com.siderkit.break/logs/Siderkit Break.log` |

## Report a bug

Open an issue at [github.com/siderkit/siderkit-break/issues](https://github.com/siderkit/siderkit-break/issues) with:

- the version from **Settings → About**;
- your operating system and session type (X11 or Wayland);
- what you expected and what happened;
- steps to reproduce, and a log excerpt if possible.

For security issues, use a [private security advisory](https://github.com/siderkit/siderkit-break/security/advisories/new) instead of a public issue.
