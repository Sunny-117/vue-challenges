#!/usr/bin/env sh

cd dist
git init
git add .
git commit -m 'deploy'
git push -f https://github.com/Sunny-117/gfr.git main:gh-pages