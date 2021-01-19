#!/bin/sh

: <<desc

desc
tput smcup

echo "Hello World"
sleep 1

tput rmcup

