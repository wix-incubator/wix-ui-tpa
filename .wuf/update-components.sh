#!/usr/bin/env bash

# create components list
wuf update \
  --shape .wuf/required-component-files.json \
  --components src/components \
  --exclude "(TPAComponentsConfig|ErrorMessageWrapper)" \
  --max-mismatch 1 \
  --output .wuf/components.json

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
