#include <cstring>
#define ALPHABET_SIZE 26

#ifndef __TRIE_H__
#define __TRIE_H__

struct TrieNode {
	bool is_end;
	struct TrieNode *children[ALPHABET_SIZE];

	TrieNode() : is_end(false) {
		memset(children, 0, ALPHABET_SIZE);
	}

	~TrieNode() {
		for (int i = 0; i < ALPHABET_SIZE; i++) {
			if (children[i]) delete children[i];
		}
	}

	void insert(const char* key) {
		if (*key == '\0') {
			is_end = true;
		} else {
			int idx = *key - 'A';
			if (children[idx] == NULL) {
				children[idx] = new TrieNode();
			}
			children[idx] -> insert(key + 1);
		}
	}

	TrieNode* search(const char* key) {
		if (*key == 0) return this;
		int idx = *key - 'A';
		if (children[idx] == NULL) return NULL;
		return children[idx] -> search(key + 1);
	}
};

#endif
