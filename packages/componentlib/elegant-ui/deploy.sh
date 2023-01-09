#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 删除原有文件
rm -rf dist

# 生成静态文件
yarn build

# 进入生成的文件夹
cd dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Adashuai5/elegant-ui.git master:gh-pages

cd -

echo https://adashuai5.github.io/elegant-ui/index.html