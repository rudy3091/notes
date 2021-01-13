#include <iostream>
#include <vector>
#include <tuple>
#include <algorithm>
#include "mst.cpp"
using namespace std;

vector<int> parent(7);
vector<tuple<int, int, int>> edges = {
	{0, 1, 29}, {0, 4, 75},
	{1, 2, 35}, {1, 5, 34},
	{2, 3, 7},
	{3, 5, 23}, {3, 6, 13},
	{4, 5, 53},
	{5, 6, 25},
};

bool cmp(tuple<int, int, int> a, tuple<int, int, int> b) {
	return get<2>(a) < get<2>(b);
}

int main() {
	int cost_sum = 0;

	for (int i = 0; i < 7; i++) {
		parent[i] = i;
	}
	sort(edges.begin(), edges.end(), cmp);

	for (auto edge : edges) {
		int a = get<0>(edge);
		int b = get<1>(edge);
		int cost = get<2>(edge);

		if (find_parent(parent, a) != find_parent(parent, b)) {
			_union(parent, a, b);
			cout << "add edge between vertex " << a+1
				<< " and " << b+1 << endl;
			cost_sum += cost;
		}
	}
	cout << "cost sum for building MST: " << cost_sum << endl;
	return 0;
}

