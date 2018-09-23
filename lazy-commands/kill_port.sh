#!/bin/bash
# cerner_2^5_2018

while getopts ^-: opt; do
    case "${opt}" in
        -) port="${OPTARG}";;
        *)
            echo -e '\033[0;31mUsage:\033[0m ./kill_port.sh --<port_number>'
            break;;
    esac
done

if [ ! -z $port ]; then
    ps=`netstat -ano | findstr :${port}`
    echo "$ps"
    pid=$(expr "$ps" : '.* \([0-9]*\)')
    if [ ! -z "$pid" ]; then
        echo
        read -n 1 -p "Kill process ${pid}? [y/n]"
        echo
        status=$([ $REPLY = "y" ] && echo `taskkill //F //PID ${pid}` || echo "Exiting")
    else
        status="No process is listening on ${port}"
    fi
    echo "$status"
fi