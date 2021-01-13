#include <vector>
#include <tuple>
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

int main() {
	kruskal(parent, edges);
	return 0;
}

