#!/bin/bash

pixel() {
	echo "\\u2588\\u2588"
}

space() {
	echo "\\u0020\\u0020"
}

move() {
	local x=$1
	local y=$2
	echo "\033[${x};${y}H"
}

all () {
	str=""
	for i in $(seq 1 3); do
		str="$str$(pixel)"
	done
	echo "$(move $1 $2)$str"
}

first() {
	str="$(pixel)"
	str="$str$(space)"
	str="$str$(space)"
	echo "$(move $1 $2)$str"
}

middle() {
	str="$(space)"
	str="$str$(pixel)"
	str="$str$(space)"
	echo "$(move $1 $2)$str"
}

last() {
	local point=$1
	str="$(space)"
	str="$str$(space)"
	str="$str$(pixel)"
	echo "$(move $1 $2)$str"
}

first_middle() {
	str="$(pixel)"
	str="$str$(pixel)"
	str="$str$(space)"
	echo "$(move $1 $2)$str"
}

first_last() {
	str="$(pixel)"
	str="$str$(space)"
	str="$str$(pixel)"
	echo "$(move $1 $2)$str"
}

middle_last() {
	str="$(space)"
	str="$str$(pixel)"
	str="$str$(pixel)"
	echo "$(move $1 $2)$str"
}

zero () {
	local x=$1
	local y=$2
	str="$(all $y $x)"
	(( y = y + 1 ))
	str="$str$(first_last $y $x)"
	(( y = y + 1 ))
	str="$str$(first_last $y $x)"
	(( y = y + 1 ))
	str="$str$(first_last $y $x)"
	(( y = y + 1 ))
	str="$str$(all $y $x)"
	echo "$str"
}

one () {
	local x=$1
	local y=$2
	str="$(last $y $x)"
	(( y = y + 1 ))
	str="$str$(last $y $x)"
	(( y = y + 1 ))
	str="$str$(last $y $x)"
	(( y = y + 1 ))
	str="$str$(last $y $x)"
	(( y = y + 1 ))
	str="$str$(last $y $x)"
	echo "$str"
}

two () {
	local x=$1
	local y=$2
	str="$(all $y $x)"
	(( y = y + 1 ))
	str="$str$(last $y $x)"
	(( y = y + 1 ))
	str="$str$(all $y $x)"
	(( y = y + 1 ))
	str="$str$(first $y $x)"
	(( y = y + 1 ))
	str="$str$(all $y $x)"
	echo "$str"
}

three () {
	local x=$1
	local y=$2
	str="$(all $y $x)"
	(( y = y + 1 ))
	str="$str$(last $y $x)"
	(( y = y + 1 ))
	str="$str$(all $y $x)"
	(( y = y + 1 ))
	str="$str$(last $y $x)"
	(( y = y + 1 ))
	str="$str$(all $y $x)"
	echo "$str"
}

four () {
	local x=$1
	local y=$2
	str="$(first_last $y $x)"
	(( y = y + 1 ))
	str="$str$(first_last $y $x)"
	(( y = y + 1 ))
	str="$str$(all $y $x)"
	(( y = y + 1 ))
	str="$str$(last $y $x)"
	(( y = y + 1 ))
	str="$str$(last $y $x)"
	echo "$str"
}

five () {
	local x=$1
	local y=$2
	str="$(all $y $x)"
	(( y = y + 1 ))
	str="$str$(first $y $x)"
	(( y = y + 1 ))
	str="$str$(all $y $x)"
	(( y = y + 1 ))
	str="$str$(last $y $x)"
	(( y = y + 1 ))
	str="$str$(all $y $x)"
	echo "$str"
}

six () {
	local x=$1
	local y=$2
	str="$(all $y $x)"
	(( y = y + 1 ))
	str="$str$(first $y $x)"
	(( y = y + 1 ))
	str="$str$(all $y $x)"
	(( y = y + 1 ))
	str="$str$(first_last $y $x)"
	(( y = y + 1 ))
	str="$str$(all $y $x)"
	echo "$str"
}

seven () {
	local x=$1
	local y=$2
	str="$(all $y $x)"
	(( y = y + 1 ))
	str="$str$(last $y $x)"
	(( y = y + 1 ))
	str="$str$(last $y $x)"
	(( y = y + 1 ))
	str="$str$(last $y $x)"
	(( y = y + 1 ))
	str="$str$(last $y $x)"
	echo "$str"
}

eight () {
	local x=$1
	local y=$2
	str="$(all $y $x)"
	(( y = y + 1 ))
	str="$str$(first_last $y $x)"
	(( y = y + 1 ))
	str="$str$(all $y $x)"
	(( y = y + 1 ))
	str="$str$(first_last $y $x)"
	(( y = y + 1 ))
	str="$str$(all $y $x)"
	echo "$str"
}

nine () {
	local x=$1
	local y=$2
	str="$(all $y $x)"
	(( y = y + 1 ))
	str="$str$(first_last $y $x)"
	(( y = y + 1 ))
	str="$str$(all $y $x)"
	(( y = y + 1 ))
	str="$str$(last $y $x)"
	(( y = y + 1 ))
	str="$str$(all $y $x)"
	echo "$str"
}

divider() {
	local x=$1
	local y=$2
	(( y = y + 1 ))
	str="$str$(middle $y $x)"
	(( y = y + 1 ))
	(( y = y + 1 ))
	str="$str$(middle $y $x)"
	(( y = y + 1 ))
	(( y = y + 1 ))
	echo "$str"
}

num_to_shape() {
	local num=$1
	local x=$2
	local y=$3
	if [ $num -eq 0 ]; then echo $(zero $x $y)
	elif [ $num -eq 1 ]; then echo $(one $x $y)
	elif [ $num -eq 2 ]; then echo $(two $x $y)
	elif [ $num -eq 3 ]; then echo $(three $x $y)
	elif [ $num -eq 4 ]; then echo $(four $x $y)
	elif [ $num -eq 5 ]; then echo $(five $x $y)
	elif [ $num -eq 6 ]; then echo $(six $x $y)
	elif [ $num -eq 7 ]; then echo $(seven $x $y)
	elif [ $num -eq 8 ]; then echo $(eight $x $y)
	elif [ $num -eq 9 ]; then echo $(nine $x $y)
	fi
}

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
