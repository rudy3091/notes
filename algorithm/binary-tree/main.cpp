#include <iostream>
#include "binary-tree.hpp"
using namespace std;

int main() {
	Node* root = new Node(3);
	root -> insert(1);
	root -> insert(5);
	root -> insert(9);
	root -> insert(11);
	root -> insert(10);
	root -> insert(15);
	root -> insert(13);
	root -> remove(9);

	root -> preorder(root);
	cout << endl;
	return 0;
}
