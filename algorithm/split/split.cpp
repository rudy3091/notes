#include <iostream>
#include <vector>
#include <sstream>

std::vector<std::string> split(std::string s, char divider) {
	std::vector<std::string> container;
	std::istringstream strm(s);
	std::string buf;

	while (getline(strm, buf, divider)) {
		container.push_back(buf);
	}

	return container;
}
