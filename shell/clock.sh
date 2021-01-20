#!/bin/bash

source ./number.sh

fin=0

exitfn() {
	echo -e "\\e[?25h"
	tput rmcup
	fin=1
}

tput smcup
trap exitfn SIGINT

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

echo -e $(divider $(( midx + 16 )) $midy)
while [ $fin -eq 0 ]; do
	d=$(date)
	time=${d:11:5}
	hour=${time:0:2}
	minute=${time:3:2}

	nx=$(tput cols)
	ny=$(tput lines)

	if ! [ $nx -eq $x ]; then
		echo -e "\e[2J"
		x=$nx
		(( midx = x / 2 - 17 ))
		phour=0
		pminute=0
		echo -e $(divider $(( midx + 16 )) $midy)
	fi

	if ! [ $ny -eq $y ]; then
		echo -e "\e[2J"
		y=$ny
		(( midy = y / 2 - 2 ))
		phour=0
		pminute=0
		echo -e $(divider $(( midx + 16 )) $midy)
	fi

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
done

echo -e "\\e[?25h"

tput rmcup
