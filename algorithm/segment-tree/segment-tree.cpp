#include <iostream>
#include <vector>
using namespace std;

vector<int> tree;

int init(vector<int> arr, int node_index, int left, int right) {
	if (left == right) {
		return tree[node_index] = arr[left];
	}

	int mid = (left + right) / 2;
	return tree[node_index] = 
		init(arr, node_index * 2, left, mid) +
		init(arr, node_index * 2 + 1, mid + 1, right);
}

void update(int node_index, int index, int left, int right, int diff) {
	if (!(left <= index && index <= right)) {
		return;
	}

	tree[node_index] += diff;

	if (left != right) {
		int mid = (left + right) / 2;
		update(node_index * 2, index, left, mid, diff);
		update(node_index * 2 + 1, index, mid + 1, right, diff);
	}
}

int query(int node_index, int a, int b, int left, int right) {
	if (b < left || right < a) {
		return 0;
	}

	if (a <= left && right <= b) {
		return tree[node_index];
	}

	int mid = (left + right) / 2;
	return query(node_index * 2, a, b, left, mid) +
		query(node_index * 2 + 1, a, b, mid + 1, right);
}

int main() {
	vector<int> arr = { 3, 5, 6, 7, 2, 9, 4, 5, 2, 8, 1, 5 };
	int left = 0;
	int right = arr.size() - 1;
	int root = 1;

	tree.reserve(4 * right);

	init(arr, root, left, right);
	cout << query(root, 0, 2, left, right) << '\n'; // 14 (3 + 5 + 6)

	update(root, 1, left, right, +6); // 3 -> 9
	cout << query(root, 0, 2, left, right) << '\n'; // 20 (9 + 5 + 6)

	update(root, 2, left, right, -2); // 5 -> 3
	cout << query(root, 0, 2, left, right) << '\n'; // 18 (9 + 3 + 6)

	cout << query(root, 3, 3, left, right) << '\n'; // 7

	return 0;
}
