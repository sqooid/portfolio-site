#!/usr/bin/env sh
set -e
npm run build
cd dist
cp index.html 404.html
echo "lucasliu.sqooid.tk" >> CNAME
git init
git add .
git commit -m "Deploy"
git push -f https://github.com/sqooid/sqooid.github.io.git master