#!/bin/bash
# cerner_2^5_2018

# Commands
MVN_CLEAN_INSTALL="mvn clean install"
MVN_ECLIPSE_ARTIFACT="mvn eclipse:eclipse"
GIT_ADD_COMMIT="git add .; git commit -m '*'"
GIT_ADD_COMMIT_PUSH="${GIT_ADD_COMMIT}; git push"

while getopts m:g:-: opt; do
    case "${opt}" in
        m) case "${OPTARG}" in
            i) command=$MVN_CLEAN_INSTALL;;
            e) command=$MVN_ECLIPSE_ARTIFACT;;
           esac;;
        g) is_last_opt_git=true
           last_opt_arg=${OPTARG};;
        -)
            if [[ $is_last_opt_git == true ]]; then 
                case "${last_opt_arg}" in
                    c) command="${GIT_ADD_COMMIT/\*/$OPTARG}";;
                    p) command="${GIT_ADD_COMMIT_PUSH/\*/$OPTARG}"
                esac
            fi;;
        *)
            echo -e '\033[0;31mUsage:\033[0m -mi, -me, -gc --"commit message", -gp --"commit message"'
    esac
done

if [ ! -z "$command" ]; then
    echo "Executing ${command}..."
    eval "$command"
fi