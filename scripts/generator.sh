#!/usr/bin/env bash

v='\xE2\x9c\x94'
x='\xe2\x9c\x96'
dots='\xE2\x80\xa6'
caret='\xE2\x80\xba'
boldText=$(tput bold)
normalText=$(tput sgr0)
whiteText=$(tput setaf 7)
question="Does the new component have a special design/behaviour for mobile (y/n)"

print_success () {
    echo -en "\033[1A\033[2K"
    echo -e "$(tput setaf 2)${v}$(tput setaf 7) ${whiteText}${boldText}${question}${normalText} ${dots} $1"
}

print_fail () {
    echo -en "\033[1A\033[2K"
    echo -e "$(tput setaf 1)${x}$(tput setaf 7) ${whiteText}${boldText}${question}${normalText} ${dots} $1"
}

tput setaf 6
echo -ne "? ${whiteText}${boldText}${question}${normalText} ${caret} "
read CHOICE

case "$CHOICE" in
y|Y )
    print_success ${CHOICE}
    npm run generate:component:mobile
    ;;
n|N )
    print_success ${CHOICE}
    npm run generate:component
    ;;
* )
    print_fail ${CHOICE}
    echo "please choose y or n"
    exit 1
    ;;
esac
