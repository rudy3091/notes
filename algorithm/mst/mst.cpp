// mst: minimum-spanning-tree

#include <vector>
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

