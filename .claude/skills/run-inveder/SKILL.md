---
name: run-inveder
description: Run, screenshot, and drive the KATAKATA INVADERS portfolio (index.html). Use when asked to run, start, screenshot, or verify the portfolio.
---

# run-inveder

KATAKATA INVADERS は単一 HTML ファイルのポートフォリオ。
Playwright + Chromium でヘッドレス駆動する。ドライバは
`.claude/skills/run-inveder/driver.mjs`。

## Prerequisites

```bash
# Node + Playwright + Chromium は既にコンテナに入っている
node --version   # v22
ls /opt/pw-browsers/chromium-1194/chrome-linux/chrome  # ok
```

## Run (agent path)

```bash
# タイトル画面スクショ → /tmp/inveder-title.png
node .claude/skills/run-inveder/driver.mjs ss

# PRESS START を押した後のゲーム画面 → /tmp/inveder-game.png
node .claude/skills/run-inveder/driver.mjs click-start

# スキルパネルまでスクロール → /tmp/inveder-skills.png
node .claude/skills/run-inveder/driver.mjs scroll-skills
```

スクリーンショットは `/tmp/inveder-*.png` に出力される。

## Run (human path)

`index.html` をブラウザで直接開く。

## Gotchas

- `import.meta.url` からの相対パスに注意。スキルが `.claude/skills/run-inveder/` にいるため `../../../../index.html`（4段上）が正しい。3段だと `.claude/index.html` を探してクラッシュする。
- `--no-sandbox` フラグが必須（コンテナ内 root 実行のため）。
- Google Fonts は `file://` 環境では読み込まれないがレイアウト崩れは軽微。
