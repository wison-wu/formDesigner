#!/bin/sh
git reset --hard origin/master
git pull --rebase

cd ./vscode
git clean -xdf
git fetch origin
git reset --hard origin/master
