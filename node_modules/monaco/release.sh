#!/bin/sh
set -e

# Get the git commit hash
cd ./vscode
commitHash=`git rev-parse HEAD`
cd ..

# Version of this script
toolsVersion="0"

commitVersion="1.$(date -u +%Y%m%d%H%M).$toolsVersion+$commitHash"
commitName="$(date -u +%Y-%m-%d) [ci skip] Version: $commitVersion"

# Kick travis
echo $commitName > kicktravis

# Update package.json
node ./extensions/bumpVersion.js

# Add to git
echo "Adding to git"
git add -A
git checkout master
git status

# Commit,tag,push,publish
echo "Committing"
git commit -m "$commitName"
git merge HEAD@{1}
echo "Pushing commit"
git push

echo "Tagging"
git tag $commitVersion
echo "Pushing tags"
git push --tags
