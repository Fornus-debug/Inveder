#!/bin/bash
# deploy.sh — KATAKATA INVADERS を GitHub にコミット＆プッシュ
# Usage: bash deploy.sh "コミットメッセージ"

set -e

REPO=/home/user/Inveder
BRANCH=claude/youthful-archimedes-7b7cif
MSG=${1:-"Update portfolio"}

cd "$REPO"

if [ -z "$(git status --porcelain)" ]; then
  echo "変更なし — コミット不要"
  exit 0
fi

git add -A
git commit -m "$MSG"

# push with retry (exponential backoff)
for i in 1 2 3 4; do
  git push -u origin "$BRANCH" && echo "push 成功" && exit 0
  echo "push 失敗 (試行 $i) — ${i}x2s 後にリトライ..."
  sleep $((i * 2))
done

echo "push 失敗: ネットワークを確認してください" >&2
exit 1
