#!/bin/sh

# for WSL system
for i in $(seq 1 5); do
	powershell.exe '[console]::beep(1000,1000)'
	sleep 0.5
done

# ansi escape code
for i in $(seq 1 10); do
	printf "\a"
	sleep 0.3
done
