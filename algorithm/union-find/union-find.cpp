#include <vector>
using namespace std;

// 정점 6, 간선 4개의 트리
int v = 6, e = 4;
// zero-based indexing
vector<int> parent(6);
int union_ops[4][2] = {
	{1, 4},
	{2, 3},
	{2, 4},
	{5, 6},
};

// 그냥 구현한 find_parent
int find_parent(vector<int> &_parent, int x) {
	if (_parent[x] != x) return find_parent(_parent, _parent[x]);
	return x;
}
// 경로 압축 기법을 사용한 find_parent
int find_parent_comp (vector<int> &_parent, int x) {
	if (_parent[x] != x) parent[x] = find_parent_comp(_parent, parent[x]);
	return _parent[x];
}

void _union(vector<int> &_parent, int a, int b) {
	a = find_parent_comp(_parent, a);
	b = find_parent_comp(_parent, b);
	if (a > b) _parent[a] = b;
	else _parent[b] = a;
}

