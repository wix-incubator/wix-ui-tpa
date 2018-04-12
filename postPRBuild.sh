#!/usr/bin/env bash

export NVM_DIR="$HOME/.nvm"; . "$NVM_DIR/nvm.sh";
if [ -f .nvmrc ]; then
  echo "Running nvm install $(head -1 .nvmrc)"
  nvm install &> /dev/null || exit 1
else
  echo "Running nvm install default (6.11.3)"
  nvm install 6.11.3 &> /dev/null || exit 1
fi

if [ -f .npmversion ]; then
  echo "Running npm install $(head -1 .npmversion)"
  npm install -g npm@$(head -1 .npmversion) --silent &> /dev/null || exit 1
else
  echo "Running npm install default (5.3.0)"
  npm install -g npm@5.3.0 --silent &> /dev/null || exit 1
fi

echo "Now using node $(node -v) (npm v$(npm -v))"

npm run postPRBuild