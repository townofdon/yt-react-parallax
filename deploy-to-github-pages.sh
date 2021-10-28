#!/usr/bin/env bash

git checkout main
yarn build
git subtree push --prefix build origin gh-pages
