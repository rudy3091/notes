#include <iostream>
using namespace std;

#ifndef __BINARY_TREE__
#define __BINARY_TREE__

struct Node {
	int val;
	Node* left;
	Node* right;

	Node(int v) : val(v) {
		left = nullptr;
		right = nullptr;
	}

	~Node() {
		if (left != nullptr) {
			delete left;
			left = nullptr;
		}
		if (right != nullptr) {
			delete right;
			right = nullptr;
		}
	}

	bool search(int key) {
		Node* t = this;
		Node* p = nullptr;
		while (t != nullptr) {
			if (t -> val == key) return true;
			p = t;
			if (t -> val < key) {
				t = t -> right;
			} else {
				t = t -> left;
			}
		}
		return false;
	}

	void insert(int key) {
		Node* t = this;
		Node* p = nullptr;
		while (t != nullptr) {
			if (val == key) return;
			p = t;
			if (t -> val < key) {
				t = t -> right;
			} else {
				t = t -> left;
			}
		}

		if (p -> val < key) p -> right = new Node(key);
		else p -> left = new Node(key);
	}

	void remove(int key) {
		Node* t = this;
		Node* p = this;
		while (t != nullptr) {
			if (t -> val == key) break;
			p = t;
			t = t -> val < key ? t -> right : t -> left;
		}
		if (t == nullptr) return;

		Node* l = t -> left;
		Node* r = t -> right;
		// no child
		if (l == nullptr && r == nullptr) {
			p -> left = nullptr;
			p -> right = nullptr;
			delete t;
		}
		// has left child only
		else if (l != nullptr && r == nullptr) {
			Node* subright = l;
			Node* temp = subright;
			while (subright -> right != nullptr) {
				temp = subright;
				subright = subright -> right;
			}
			if (temp != nullptr) temp -> right = nullptr;

			p -> left = subright;
			if (l != subright) subright -> left = l;

			t -> left = nullptr;
			delete t;
		}
		// has right child only
		else if (l == nullptr && r != nullptr) {
			Node* subleft = r;
			Node* temp = subleft;
			while (subleft -> left != nullptr) {
				temp = subleft;
				subleft = subleft -> left;
			}
			if (temp != nullptr) temp -> left = nullptr;

			p -> right = subleft;
			if (r != subleft) subleft -> right = r;

			t -> right = nullptr;
			delete t;
		}
		// has both children
		else if (l != nullptr && r != nullptr) {
			Node* subleft = r;
			Node* temp = subleft;
			while (subleft -> left != nullptr) {
				temp = subleft;
				subleft = subleft -> left;
			}
			if (temp != nullptr) temp -> left = nullptr;

			p -> right = subleft;
			subleft -> left = l;
			if (r != subleft) {
				subleft -> right = r;
			}

			t -> left = nullptr;
			t -> right = nullptr;
			delete t;
		}
	}

	void preorder(Node* t) {
		Node* l = t -> left;
		Node* r = t -> right;
		cout << t -> val << ' ';
		if (l != nullptr) preorder(l);
		if (r != nullptr) preorder(r);
		if (l == nullptr && r == nullptr) return;
	}

	void inorder(Node* t) {
		Node* l = t -> left;
		Node* r = t -> right;
		if (l != nullptr) preorder(l);
		cout << t -> val << ' ';
		if (r != nullptr) preorder(r);
		if (l == nullptr && r == nullptr) return;
	}

	void postorder(Node* t) {
		Node* l = t -> left;
		Node* r = t -> right;
		if (l != nullptr) preorder(l);
		if (r != nullptr) preorder(r);
		cout << t -> val << ' ';
		if (l == nullptr && r == nullptr) return;
	}
};

#endif
