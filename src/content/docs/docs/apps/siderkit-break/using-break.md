---
sidebar:
  order: 3
title: Focus and reminders
description: Start a session, use the floating countdown, and respond to break cards.
---

## Start a focus session

Start from the main window, the tray menu, or the global shortcut. The timer moves through three phases:

- **Focus** — 25 minutes by default.
- **Short break** — 5 minutes by default.
- **Long break** — 15 minutes by default, after every four focus rounds.

Every length and the long-break interval can be changed in [Settings](../settings/). Pause and resume keep the remaining time; the deadline is stored in the Rust core, so hiding the window does not stop the clock.

## Controls

| Action | Where |
| --- | --- |
| Start or pause | Main window, tray menu, `Ctrl+Alt+P` (`Cmd+Option+P` on macOS) |
| Skip the current phase | Tray menu, `Ctrl+Alt+S` (`Cmd+Option+S`) |
| Reset the current session | Main window or tray menu |
| Show or hide the overlay | Tray menu, `Ctrl+Alt+O` (`Cmd+Option+O`) |
| Open history | Main window → **History** |

Skipping a focus session records it as skipped. Resetting records it as reset. Nothing is silently discarded.

## The floating countdown

The overlay is a small, always-on-top window. It is click-through until the pointer is over it, so it does not block the work underneath.

- Hover over the droplet or countdown to make it interactive.
- Drag it to move it. The position is remembered per monitor.
- Click without dragging to open the main window.
- Right-click for the overlay menu.
- Hide it from the tray menu or Settings.

On first run the overlay starts in the bottom-left corner. If its monitor disappears, Break falls back to the primary monitor and restores the old position when the monitor returns.

Wayland does not allow reliable absolute positioning. In a Wayland session the compositor chooses the position, and click-through may be unavailable. Use X11 for the full experience.

## Break cards

At every phase boundary, Break can open a small in-app card instead of an operating-system notification.

- **Focus complete:** start the break, postpone it for five minutes, skip it, or close the card.
- **Break complete:** start the next focus, or let the card close itself when focus already started automatically.
- **Countdown complete:** dismiss it or run the same countdown again.

Reminders and the chime have separate switches. Turning reminders off hides every card and silences the chime, but the timer, tray, and overlay keep working. The Preview button is disabled while reminders are off.

## Sleep and wake

If the machine sleeps through a deadline, Break does not open a burst of cards. It shows a **Welcome back** card: the phase ended while you were away. Start the break or reset the session; missed cycles are not replayed.

## History

Every focus, break, and countdown session is stored locally. Open **History** to review sessions by day, including completed, skipped, reset, and interrupted outcomes. Use **Export** to create a styled `.xlsx` workbook with summary, daily, and session sheets.
