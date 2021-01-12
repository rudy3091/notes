#include <iostream>
#include "./union-find.cpp"
#include "./cycle-detection.cpp"
using namespace std;

int main() {
	// 부모노드를 자기 자신으로 미리 초기화
	for (int i = 0; i < 6; i++) {
		parent[i] = i;
	}

	// 주어진 union 연산 수행
	for (auto op : union_ops) {
		_union(parent, op[0] - 1, op[1] - 1);
	}

	// 연산 결과 출력
	cout << "-- result --" << '\n';
	for (int i = 0; i < parent.size(); i++) {
		cout << "vertex " << i+1 << "'s union: " << find_parent_comp(parent, i)+1 << '\n';
	}

	// cycle detection
	cout << "Cycle Detection: ";
	for (int i = 0; i < parent_cycle.size(); i++) {
		parent_cycle[i] = i;
	}
	cout << detect_cycle(parent_cycle, graph) << endl;
	return 0;
}

