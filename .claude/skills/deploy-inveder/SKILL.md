---
name: deploy-inveder
description: KATAKATA INVADERS ポートフォリオをGitHubにコミット＆プッシュする。「デプロイ」「保存して」「GitHubに上げて」と言われたら使う。
---

# deploy-inveder

変更を GitHub (`claude/youthful-archimedes-7b7cif` ブランチ) にコミット＆プッシュする。

## 使い方

```bash
bash .claude/skills/deploy-inveder/deploy.sh "修正内容のメッセージ"
```

- 変更がなければ何もしない（安全）
- push 失敗時は最大4回リトライ（指数バックオフ）

## 例

```bash
bash .claude/skills/deploy-inveder/deploy.sh "スキルパネルにClaude追加"
bash .claude/skills/deploy-inveder/deploy.sh "CTAリンク更新"
```
