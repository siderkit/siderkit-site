---
sidebar:
  order: 4
title: Settings
description: Timers, reminders, appearance, language, startup, updates, and privacy controls.
---

Open **Settings** from the main window or the tray menu. Changes apply immediately; **Restore defaults** returns the timer to the 25/5/15 baseline.

## Timer

- **Focus length** — 1 to 60 minutes.
- **Short break** — 1 to 60 minutes.
- **Long break** — 1 to 60 minutes.
- **Long break every** — 2 to 12 focus rounds.
- **Auto-start breaks** — start the break when focus ends.
- **Auto-start focus** — start the next focus when a break ends. Off by default.

The timer is deadline-based in the Rust core. Pausing stores the remaining time; resuming sets a new deadline.

## Floating ball

- **Show the floating ball** — toggles the always-on-top overlay.
- **Locate** — shows a short hint around the overlay so you can find it on screen.

The overlay is click-through until you point at it. Drag it to move it; the position is remembered per monitor.

## Reminders

- **Show reminder cards** — gates every phase card and the chime.
- **Play a sound** — plays the bundled two-note chime with a card.
- **Preview** — plays the same chime through the same playback path. It is disabled while reminders are off.

The chime is an original asset, so it sounds the same on every platform. System volume and mute still apply; Do Not Disturb does not silence it, because the app has its own sound switch.

## Appearance

In **General**, choose **System**, **Light**, or **Dark**, then pick one of eight color styles. The theme applies to every window, including the overlay and the break card.

## Language

Break ships 30 UI languages and follows the system language by default. You can choose a language explicitly in **General**. Arabic, Persian, and Urdu switch the whole layout to right-to-left.

Changing the language reloads every open window so the tray and overlay do not keep stale text.

## General

- **Launch at login** — starts Break when you sign in.
- **Start minimized** — opens in the tray instead of showing the main window.
- **Theme** — System, Light, or Dark.
- **Color style** — Forest, Ocean, Ember, Plum, Slate, Rose, Aurora, or Sand.
- **Language** — Follow the system or choose one of 30 languages.
- **Global shortcuts** — start/pause, skip, and overlay toggle. Shortcut conflicts are reported in the app.

Closing the main window keeps Break running in the tray. Quit from the tray menu to exit fully.

## Updates

Windows checks for signed updates in the background every six hours. The Settings → Updates page shows the current version, the latest available version, and the download state. You can check manually, download when you choose, cancel a download, skip a version, or snooze for 24 hours. Installing restarts the app.

macOS and Linux builds are downloaded manually. Use **Check for updates** to open the release page; Break does not replace those builds automatically.

The same version and status block appears in Settings → About and Help → About. The Help icon shows a small red dot while an update is available or ready to install.

## Privacy

- **Anonymous install counts** — sends a random installation ID with update checks and one install beacon on first launch. Off means no ID and no beacon.
- **Reset installation ID** — creates a new random ID and sends one new install beacon if counts are on.

No session data, IP hash, device fingerprint, or usage behavior is collected. See [Data and privacy](../data-and-privacy/) for the full picture.
