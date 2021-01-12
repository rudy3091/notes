#include <vector>
#include <string>
using namespace std;

// 정점 3개, 간선 3개의 cyclic 무방향 그래프
// 원소들은 각각 edge 를 나타냄
// {0, 1} -> vertex 0 & 1 사이에 edge 가 존재함
vector<pair<int, int>> graph = {
	{1, 2}, {0, 2}, {0, 1}
};
vector<int> parent_cycle(3);

int find_parent_cycle(vector<int> &_parent, int x) {
	if (_parent[x] != x) _parent[x] = find_parent_cycle(_parent, _parent[x]);
	return _parent[x];
}

void _union_cycle(vector<int> &_parent, int a, int b) {
	a = find_parent_cycle(_parent, a);
	b = find_parent_cycle(_parent, b);
	if (a > b) _parent[a] = b;
	else _parent[b] = a;
}

string detect_cycle(vector<int> &_parent, vector<pair<int, int>> &_graph) {
	bool cyclic = false;

	for (pair<int, int> edge : _graph) {
		int a = find_parent_cycle(_parent, edge.first);
		int b = find_parent_cycle(_parent, edge.second);
		if (a == b) {
			cyclic = true;
			break;
		} else {
			_union_cycle(parent_cycle, a, b);
		}
	}

	return cyclic ? "Cycle Detected" : "No Cycles";
}
