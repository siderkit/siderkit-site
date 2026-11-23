---
sidebar:
  order: 1
title: Siderkit Break
description: A calm, local-first focus timer for Windows, macOS, and Linux.
---

Siderkit Break is a small focus timer that stays out of your way. It keeps a quiet rhythm, shows the remaining time in a floating countdown, and reminds you to stand up and look away.

This documentation covers Siderkit Break 1.0. The app interface is available in 30 languages; these docs are available in English, Simplified Chinese, and Traditional Chinese.

## What it does

- Runs focus, short-break, and long-break cycles with editable lengths.
- Keeps the timer in the Rust core, so it stays accurate when the window is hidden.
- Shows an always-on-top countdown that is click-through until you point at it.
- Opens a small in-app card at each phase boundary, with postpone, skip, and close.
- Stores every completed, skipped, and interrupted session in a local SQLite database.
- Exports a styled `.xlsx` workbook with summary, daily, and session sheets.
- Needs no account and no sync. Only update checks and the optional anonymous install count use the network.

## Start here

- [Install Siderkit Break](install/) — Windows, macOS, and Linux notes.
- [Focus and reminders](using-break/) — the timer, the overlay, and the break cards.
- [Settings](settings/) — every option in one place.
- [Data and privacy](data-and-privacy/) — where your data lives and what leaves the device.
- [Updates](updates/) — how Windows updates work, and what macOS and Linux users do instead.
- [Troubleshooting](troubleshooting/) — the common platform issues.

## A note on scope

Break is a focus timer, not a task manager. It does not include todos, notes, projects, accounts, sync, teams, plugins, or AI features. The small surface is intentional.
