#!/usr/bin/env bash

boldText=$(tput bold)
normalText=$(tput sgr0)
whiteText=$(tput setaf 7)
tput setaf 6
read -p "? ${whiteText}${boldText}Does the new component have a special design/behaviour for mobile (y/n)${normalText} › " CHOICE

case "$CHOICE" in
y|Y )
    npm run generate:component:mobile
    ;;
n|N )
    npm run generate:component
    ;;
* )
    echo "please choose y or n"
    ;;
esac
