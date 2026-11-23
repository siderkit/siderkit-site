---
sidebar:
  order: 2
title: Install Siderkit Break
description: Install the Windows NSIS package, the macOS DMG, or the Linux bundles.
---

## Windows

Siderkit Break ships one Windows installer: a per-user NSIS package.

1. Download `Siderkit-Break_<version>_x64-setup.exe`.
2. Run the installer. It installs to `%LOCALAPPDATA%\Programs\Siderkit Break` and does not ask for administrator rights.
3. The installer preselects your system language. Choose another language from the selector if you want; the selector is hidden during silent, passive, and update runs.
4. Launch Break from the Start menu or the installer’s finish page.

Windows may show a SmartScreen warning because the installer is not yet code-signed. Choose **More info** and **Run anyway** only if you downloaded the file from the official release page and the SHA-256 matches.

The installer can install WebView2 through the bundled bootstrapper. A machine that has never installed WebView2 still needs network access for the runtime itself.

To uninstall, use **Settings → Apps → Siderkit Break**. The uninstaller keeps your database and logs unless you select **Delete app data**.

## macOS

The macOS build is a universal DMG for Intel and Apple Silicon.

1. Open the `.dmg`.
2. Drag **Siderkit Break** to **Applications**.
3. Launch it from Applications.

The build is unsigned until a Developer ID is configured. Gatekeeper will warn on first launch; use **Open** from the context menu or **System Settings → Privacy & Security → Open Anyway**. Do not disable Gatekeeper globally.

macOS 10.15.7 with Safari 15.4 or newer is required. A stock Catalina install with an older Safari shows an update message instead of the app.

## Linux

Linux builds are published as `.deb`, `.rpm`, and `.AppImage`.

- **Debian / Ubuntu:** `sudo apt install ./Siderkit-Break_<version>_amd64.deb`
- **Fedora / openSUSE:** `sudo rpm -i Siderkit-Break-<version>-1.x86_64.rpm`
- **AppImage:** make the file executable and run it. The AppImage needs FUSE 2; on a host without `libfuse2`, run it with `APPIMAGE_EXTRACT_AND_RUN=1`.

The host needs `libwebkit2gtk-4.1`. Use an X11 session for the full experience: Wayland does not let the app position a top-level window reliably, so the floating countdown and global shortcuts may not work. GNOME also needs an AppIndicator extension for the tray icon.

## First launch

Break starts in the tray with the main window visible. The defaults are 25 minutes of focus, a 5-minute short break, and a 15-minute long break every four rounds. You can start immediately; nothing needs to be configured first.

If the database cannot be created, Break shows a blocking error with the data directory and a retry action. Check that the directory is writable and that another copy of the app is not holding the database open.
