#!/bin/sh

help () {
	echo ""
	echo "Usage: ./timer.sh -h 0 -m 0 -s 0"
	echo "-h amount of hour"
	echo "-m amount of minute"
	echo "-s amount of second"
	echo "after the time you asked, there will be a BEEP"
	exit 1
}

while getopts "h:m:s:" opt
do
	case $opt in
		h) hour=$OPTARG ;;
		m) min=$OPTARG ;;
		s) sec=$OPTARG ;;
		?) help ;;
	esac
done

echo -n "timer - "
amt=""
if ! [ -z ${hour} ]; then
	amt="$amt $hour hour"
fi

if ! [ -z ${min} ]; then
	amt="$amt $min minute"
fi

if ! [ -z ${sec} ]; then
	amt="$amt $sec second"
fi
echo "$amt\n"

time=$((hour * 3600 + min * 60 + sec))

for i in $(seq 1 $time)
do
	echo -n " $((time - i))\r"
	sleep 1
	echo -n "\e[2K"
done

./beep.sh
