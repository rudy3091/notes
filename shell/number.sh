#!/bin/bash

pixel() {
	echo "\\u2588\\u2588"
}

space() {
	echo "\\u0020\\u0020"
}

all () {
	str=""
	for i in $(seq 1 3); do
		str="$str$(pixel)"
	done
	echo "\n$str"
}

first() {
	str="$(pixel)"
	str="$str$(space)"
	str="$str$(space)"
	echo "\n$str"
}

middle() {
	str="$(space)"
	str="$str$(pixel)"
	str="$str$(space)"
	echo "\n$str"
}

last() {
	str="$(space)"
	str="$str$(space)"
	str="$str$(pixel)"
	echo "\n$str"
}

first_middle() {
	str="$(pixel)"
	str="$str$(pixel)"
	str="$str$(space)"
	echo "\n$str"
}

first_last() {
	str="$(pixel)"
	str="$str$(space)"
	str="$str$(pixel)"
	echo "\n$str"
}

middle_last() {
	str="$(space)"
	str="$str$(pixel)"
	str="$str$(pixel)"
	echo "\n$str"
}

zero () {
	str="$(all)"
	str="$str$(first_last)"
	str="$str$(first_last)"
	str="$str$(first_last)"
	str="$str$(all)"
	echo "$str"
}

one () {
	str="$(last)"
	str="$str$(last)"
	str="$str$(last)"
	str="$str$(last)"
	str="$str$(last)"
	echo "$str"
}

two () {
	str="$(all)"
	str="$str$(last)"
	str="$str$(all)"
	str="$str$(first)"
	str="$str$(all)"
	echo "$str"
}

three () {
	str="$(all)"
	str="$str$(last)"
	str="$str$(all)"
	str="$str$(last)"
	str="$str$(all)"
	echo "$str"
}

four () {
	str="$(first_last)"
	str="$str$(first_last)"
	str="$str$(all)"
	str="$str$(last)"
	str="$str$(last)"
	echo "$str"
}

five () {
	str="$(all)"
	str="$str$(first)"
	str="$str$(all)"
	str="$str$(last)"
	str="$str$(all)"
	echo "$str"
}

six () {
	str="$(all)"
	str="$str$(first)"
	str="$str$(all)"
	str="$str$(first_last)"
	str="$str$(all)"
	echo "$str"
}

seven () {
	str="$(all)"
	str="$str$(last)"
	str="$str$(last)"
	str="$str$(last)"
	str="$str$(last)"
	echo "$str"
}

eight () {
	str="$(all)"
	str="$str$(first_last)"
	str="$str$(all)"
	str="$str$(first_last)"
	str="$str$(all)"
	echo "$str"
}

nine () {
	str="$(all)"
	str="$str$(first_last)"
	str="$str$(all)"
	str="$str$(last)"
	str="$str$(all)"
	echo "$str"
}

echo -e $(zero)
echo -e $(one)
echo -e $(two)
echo -e $(three)
echo -e $(four)
echo -e $(five)
echo -e $(six)
echo -e $(seven)
echo -e $(eight)
echo -e $(nine)
