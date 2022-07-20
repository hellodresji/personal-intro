#!/usr/bin/env sh

# abort on errors
set -env

# build
npm run build

# navigate into build output folder
cd profile

git add .

git commit -m 'deploy'

git push -u origin gh-pages

cd -