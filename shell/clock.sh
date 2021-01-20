#!/bin/bash

source ./number.sh

: << desc

desc
tput smcup

x=$(tput cols)
y=$(tput lines)

midx=0
midy=0
(( midx = x / 2 - 17 ))
(( midy = y / 2 - 2 ))

d=$(date)
ptime=${d:11:5}
phour=${time:0:2}
pminute=${time:3:2}
dt=0

echo -e $(divider $(( midx + 16 )) $midy)
while true; do
	d=$(date)
	time=${d:11:5}
	hour=${time:0:2}
	minute=${time:3:2}

	echo -e "\\e[?25l"
	if ! [[ "$phour" = "$hour" ]]; then
		echo -e $(num_to_shape ${hour:0:1} $midx $midy)
		echo -e $(num_to_shape ${hour:1:1} $(( midx + 8 )) $midy)
		phour=$hour
	fi

	if ! [[ "$pminute" = "$minute" ]]; then
		echo -e $(num_to_shape ${minute:0:1} $(( midx + 24 )) $midy)
		echo -e $(num_to_shape ${minute:1:1} $(( midx + 32 )) $midy)
		pminute=$minute
	fi
	echo -e "$(move $(( midy + 6 )) $(( midx + 5 )))$d"

	sleep 1
	(( dt = dt + 1 ))
	if ! [ -z $1 ]; then
		if [ $dt -gt $1 ]; then break; fi
	else
		if [ $dt -gt 0 ]; then break; fi
	fi
done

echo -e "\\e[?25h"

tput rmcup
