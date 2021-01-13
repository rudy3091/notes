#!/bin/sh

# for WSL system
for i in seq 1 5; do
	powershell.exe '[console]::beep(1000,500)'
done
