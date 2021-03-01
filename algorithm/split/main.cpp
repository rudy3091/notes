#include <iostream>
#include <vector>
#include "./split.cpp"
using namespace std;

int main() {
	string s = "Hello World This is split";
	vector<string> v = split(s, ' ');

	for (string item : v) {
		cout << item << '\n';
	}
	return 0;
}
