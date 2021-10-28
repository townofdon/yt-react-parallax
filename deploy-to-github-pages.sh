#!/usr/bin/env bash

echo
echo "don't forget to run yarn build"
echo

git checkout main
git subtree push --prefix build origin gh-pages
