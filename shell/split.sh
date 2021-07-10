#!/bin/bash

str="some,string,to,split"

IFS=','

read -ra arr <<< "$str";

for item in "${arr[@]}";
do
	echo $item
done


str="some/string/to/split"

IFS='/'

read -ra arr <<< "$str";

for item in "${arr[@]}";
do
	echo $item
done

