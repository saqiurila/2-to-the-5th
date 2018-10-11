#!/bin/bash
# cerner_2^5_2018

pr(){
    pr_id=$1
    if [ -z $pr_id ]; then
        echo "Please provide a pull request id"
        return
    fi
    git fetch origin pull/$pr_id/head:pr_$pr_id -u
    git checkout pr_$pr_id
    git reset --hard head
}