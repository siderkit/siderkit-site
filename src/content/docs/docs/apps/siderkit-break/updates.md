---
sidebar:
  order: 6
title: Updates
description: Windows auto-update behavior, the update banner, and manual macOS and Linux downloads.
---

## Windows

Break checks for updates in the background every six hours. A check also runs when you open **Settings → Updates** and choose **Check for updates**.

When a new version is available, a non-modal banner appears in the main window. From there you can:

- **Download** the signed installer. Progress and a cancel action are shown in the banner and in Settings.
- **Install on restart** when the download is ready. Break restarts into the installer; the app does not install silently in the background.
- **Skip this version** to stop seeing this release. You can restore it later from Settings.
- **Snooze for 24 hours** if you are in the middle of something.

The installer is verified against the minisign public key before it runs. If the primary download host is unavailable, the app falls back to the GitHub release manifest.

Settings → Updates, Settings → About, and Help → About share one version and status block. The Help icon shows a red dot while an update is available or ready to install. The dot follows the banner visibility, so dismissing the banner also clears the dot.

## macOS and Linux

macOS and Linux builds are downloaded manually. **Check for updates** opens the GitHub release page; Break does not replace the installed app.

- macOS: download the universal DMG and drag the app to Applications. The build is unsigned until a Developer ID is configured.
- Linux: download the deb, rpm, or AppImage that matches your distribution.

## If an update fails

- A failed download can be retried from the banner or Settings.
- If signature verification fails, Break refuses to install the file. Download the installer again from the official release page and compare the SHA-256.
- If the installer cannot start, quit Break completely and run the downloaded installer manually.

Release notes for each version are on the [changelog](../../../../apps/siderkit-break/changelog/).
