#include <iostream>
#include <vector>
#include "topology-sort.cpp"
using namespace std;

// one-based index
vector<int> graph[8] = {
	{},
	{2, 5},
	{3, 6},
	{4},
	{7},
	{6},
	{4},
	{},
};

vector<int> deg = {
	0, 0, 1, 1, 2, 1, 2, 1 
};

int main() {
	topology_sort(graph, deg);
	return 0;
}
