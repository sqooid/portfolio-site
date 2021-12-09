#!/usr/bin/env sh
set -e
npm run build
cd dist
git init
git add .
git commit -m "Deploy"
git push -f https://github.com/sqooid/sqooid.github.io.git master