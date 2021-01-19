#include <iostream>
#include <vector>
#include <queue>
using namespace std;

void topology_sort(vector<int>* _graph, vector<int> _deg) {
	queue<int> q;
	for (int i = 1; i < _deg.size(); i++) {
		if (_deg[i] == 0) q.push(i);
	}

	cout << "-- result --" << '\n';
	while (!q.empty()) {
		int now = q.front();
		cout << now << ' ';
		q.pop();

		for (int i = 0; i < _graph[now].size(); i++) {
			int node = _graph[now][i];
			_deg[node] -= 1;
			if (_deg[node] == 0)
				q.push(node);
		}
	}
	cout << '\n';
}
