#!/usr/bin/env bash

# create components list
wuf update \
  --shape .wuf/required-component-files.json \
  --components src/components \
  --exclude TPAComponentsConfig \
  --max-mismatch 1 \
  --output .wuf/components.json

# vanilla testkits
wuf export-testkits \
  --factoryName testkitFactoryCreator \
  --uniFactoryName uniTestkitFactoryCreator \
  --components .wuf/components.json \
  --definitions .wuf/testkits/definitions.js \
  --template .wuf/testkits/vanilla.template.ts \
  --output src/testkit/index.ts

# enzyme testkits
wuf export-testkits \
  --factoryName protractorTestkitFactoryCreator \
  --uniFactoryName protractorUniTestkitFactoryCreator \
  --components .wuf/components.json \
  --definitions .wuf/testkits/definitions.js \
  --template .wuf/testkits/protractor.template.ts \
  --output src/testkit/protractor.ts
