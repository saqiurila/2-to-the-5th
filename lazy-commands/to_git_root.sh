#!/bin/bash
# cerner_2^5_2018

PWD=$(pwd)
old_path=$PWD

while ! [ -d .git ]
do
    if [ "$PWD" = "/" ]; then
        cd "$old_path"
        echo "No git repo found"
        break
    fi
    cd ..
done