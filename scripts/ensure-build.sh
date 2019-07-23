#!/usr/bin/env bash

if ! test -d dist; then
  echo "Welcome to wix-ui-tpa!"
  echo ""
  echo "allow me to build project and prepare storybook for first run..."
  echo ""

  npm run build
fi

exit 0
