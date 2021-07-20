function is_dir() {
	if [ -d $1 ]; then
		echo "$1 is directory"
	else
		echo "$1 is not directory"
	fi
}

function is_normal_file() {
	if [ -d $1 ]; then
		echo "$1 is normal file"
	else
		echo "$1 is not normal file"
	fi
}

function is_readable() {
	if [ -x $1 ]; then
		echo "$1 is readable"
	else
		echo "$1 is not readable"
	fi
}

function is_executable() {
	if [ -x $1 ]; then
		echo "$1 is executable"
	else
		echo "$1 is not executable"
	fi
}

function is_string() {
	if [ -x $1 ]; then
		echo "$1 is string"
	else
		echo "$1 is not string"
	fi
}

echo $(is_dir $1)
echo $(is_normal_file $1)
echo $(is_readable $1)
echo $(is_executable $1)
echo $(is_string $1)
