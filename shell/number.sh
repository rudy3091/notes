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
	str="$str$(first_last $(( y + 1 )) $x)"
	str="$str$(first_last $(( y + 2 )) $x)"
	str="$str$(first_last $(( y + 3 )) $x)"
	str="$str$(all $(( y + 4 )) $x)"
	echo "$str"
}

one () {
	local x=$1
	local y=$2
	str="$(last $y $x)"
	str="$str$(last $(( y + 1 )) $x)"
	str="$str$(last $(( y + 2 )) $x)"
	str="$str$(last $(( y + 3 )) $x)"
	str="$str$(last $(( y + 4 )) $x)"
	echo "$str"
}

two () {
	local x=$1
	local y=$2
	str="$(all $y $x)"
	str="$str$(last $(( y + 1 )) $x)"
	str="$str$(all $(( y + 2 )) $x)"
	str="$str$(first $(( y + 3 )) $x)"
	str="$str$(all $(( y + 4 )) $x)"
	echo "$str"
}

three () {
	local x=$1
	local y=$2
	str="$(all $y $x)"
	str="$str$(last $(( y + 1 )) $x)"
	str="$str$(all $(( y + 2 )) $x)"
	str="$str$(last $(( y + 3 )) $x)"
	str="$str$(all $(( y + 4 )) $x)"
	echo "$str"
}

four () {
	local x=$1
	local y=$2
	str="$(first_last $y $x)"
	str="$str$(first_last $(( y + 1 )) $x)"
	str="$str$(all $(( y + 2 )) $x)"
	str="$str$(last $(( y + 3 )) $x)"
	str="$str$(last $(( y + 4 )) $x)"
	echo "$str"
}

five () {
	local x=$1
	local y=$2
	str="$(all $y $x)"
	str="$str$(first $(( y + 1 )) $x)"
	str="$str$(all $(( y + 2 )) $x)"
	str="$str$(last $(( y + 3 )) $x)"
	str="$str$(all $(( y + 4 )) $x)"
	echo "$str"
}

six () {
	local x=$1
	local y=$2
	str="$(all $y $x)"
	str="$str$(first $(( y + 1 )) $x)"
	str="$str$(all $(( y + 2 )) $x)"
	str="$str$(first_last $(( y + 3 )) $x)"
	str="$str$(all $(( y + 4 )) $x)"
	echo "$str"
}

seven () {
	local x=$1
	local y=$2
	str="$(all $y $x)"
	str="$str$(last $(( y + 1 )) $x)"
	str="$str$(last $(( y + 2 )) $x)"
	str="$str$(last $(( y + 3 )) $x)"
	str="$str$(last $(( y + 4 )) $x)"
	echo "$str"
}

eight () {
	local x=$1
	local y=$2
	str="$(all $y $x)"
	str="$str$(first_last $(( y + 1 )) $x)"
	str="$str$(all $(( y + 2 )) $x)"
	str="$str$(first_last $(( y + 3 )) $x)"
	str="$str$(all $(( y + 4 )) $x)"
	echo "$str"
}

nine () {
	local x=$1
	local y=$2
	str="$(all $y $x)"
	str="$str$(first_last $(( y + 1 )) $x)"
	str="$str$(all $(( y + 2 )) $x)"
	str="$str$(last $(( y + 3 )) $x)"
	str="$str$(all $(( y + 4 )) $x)"
	echo "$str"
}

divider() {
	local x=$1
	local y=$2
	str="$str$(middle $(( y + 1 )) $x)"
	str="$str$(middle $(( y + 3 )) $x)"
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
