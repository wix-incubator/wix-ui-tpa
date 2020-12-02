#!/usr/bin/env bash

# clean
rm .wuf/components.json

# create components list
wuf update \
  --shape .wuf/required-component-files.json \
  --components src/components \
  --exclude "(TPAComponentsConfig|ErrorMessageWrapper)" \
  --max-mismatch 1 \
  --output .wuf/components.json

# create testkit folder if needed

mkdir -p src/testkit

# vanilla testkits
wuf export-testkits \
  --components .wuf/components.json \
  --definitions .wuf/testkits/definitions.js \
  --template .wuf/testkits/vanilla.template.ejs \
  --output src/testkit/index.ts

# enzyme testkits
wuf export-testkits \
  --components .wuf/components.json \
  --definitions .wuf/testkits/definitions.js \
  --template .wuf/testkits/enzyme.template.ejs \
  --output src/testkit/enzyme.ts

# protractor testkits
wuf export-testkits \
  --components .wuf/components.json \
  --definitions .wuf/testkits/definitions.js \
  --template .wuf/testkits/protractor.template.ejs \
  --output src/testkit/protractor.ts

# puppeteer testkits
wuf export-testkits \
  --components .wuf/components.json \
  --definitions .wuf/testkits/definitions.js \
  --template .wuf/testkits/puppeteer.template.ejs \
  --output src/testkit/puppeteer.ts
