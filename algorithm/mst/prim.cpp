#include <iostream>
#include <vector>
using namespace std;

int V = 7;
int INF = 987654321;

void prim(vector<int>& _parent, vector<tuple<int, int, int>> _graph) {
	cout << "=== prim algorithm ===" << '\n';

	vector<bool> added(V, false);
	vector<int> min_weight(V, INF);
	for (int i = 0; i < _parent.size(); i++) {
		_parent[i] = -1;
	}

	// converting edges information into adjacent list
	vector<pair<int, int>> adj_list[100];
	for (int i = 0; i < _graph.size(); i++) {
		int a = get<0>(_graph[i]);
		int b = get<1>(_graph[i]);
		int cost = get<2>(_graph[i]);
		adj_list[a].push_back({b, cost});
		adj_list[b].push_back({a, cost});
	}

	int total_cost = 0;
	min_weight[0] = 0;
	_parent[0] = 0;

	for (int iter = 0; iter < V; iter++) {
		int u = -1;
		for (int v = 0; v < V; v++) {
			if (!added[v] && (u == -1 || min_weight[u] > min_weight[v])) {
				u = v;
			}
		}

		if (_parent[u] != u) {
			cout << "connected " << _parent[u] + 1 << " and "
				<< u + 1 << " at cost " << min_weight[u] << '\n';
		}
		total_cost += min_weight[u];
		added[u] = true;

		for (int i = 0; i < adj_list[u].size(); i++) {
			int v = adj_list[u][i].first;
			int weight = adj_list[u][i].second;
			if (!added[v] && min_weight[v] > weight) {
				_parent[v] = u;
				min_weight[v] = weight;
			}
		}
	}
	cout << "total cost: " << total_cost << '\n';
}
