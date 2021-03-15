// mst: minimum-spanning-tree

#include <iostream>
#include <vector>
#include <algorithm>
#include <tuple>
using namespace std;

int find_parent(vector<int>& _parent, int x) {
	if (_parent[x] != x) _parent[x] = find_parent(_parent, _parent[x]);
	return _parent[x];
}

void _union(vector<int>& _parent, int a, int b) {
	a = find_parent(_parent, a);
	b = find_parent(_parent, b);
	if (a > b) _parent[a] = b;
	else _parent[b] = a;
};

bool cmp(tuple<int, int, int> a, tuple<int, int, int> b) {
	return get<2>(a) < get<2>(b);
}

void kruskal(vector<int>& _parent, vector<tuple<int, int, int>>& _edges) {
	cout << "=== kruskal algorithm ===" << '\n';
	int cost_sum = 0;
	for (int i = 0; i < 7; i++) {
		_parent[i] = i;
	}
	sort(_edges.begin(), _edges.end(), cmp);

	for (auto edge : _edges) {
		int a = get<0>(edge);
		int b = get<1>(edge);
		int cost = get<2>(edge);

		if (find_parent(_parent, a) != find_parent(_parent, b)) {
			_union(_parent, a, b);
			cout << "add edge between vertex " << a+1
				<< " and " << b+1 << " with cost " << cost << endl;
			cost_sum += cost;
		}
	}
	cout << "cost sum for building MST: " << cost_sum << endl;
}
