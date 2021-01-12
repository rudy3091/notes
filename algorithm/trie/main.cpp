#include <iostream>
#include "trie.h"
using namespace std;

int main() {
	TrieNode* t = new TrieNode;
	t -> insert("hi");
	t -> insert("fell");

	TrieNode* result = t -> search("hi");
	if (result) cout << "EXISTS" << endl;
	else cout << "NOT FOUND" << endl;

	TrieNode* result2 = t -> search("hello");
	if (result2) cout << "EXISTS" << endl;
	else cout << "NOT FOUND" << endl;

	TrieNode* result3 = t -> search("ell");
	if (result3) cout << "EXISTS" << endl;
	else cout << "NOT FOUND" << endl;

	delete t;
	return 0;
}
