#!/usr/bin/env bash

node ./scripts/generate.js
exit_code=$?;
if [[ ${exit_code}  -eq 102 ]];
then
    npm run generate:component
elif [[ ${exit_code}  -eq 101 ]]
then
    npm run generate:component:mobile
fi
