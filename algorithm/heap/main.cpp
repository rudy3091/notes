#include <iostream>
#include "arrayheap.cpp"
using namespace std;

int main() {
	ArrayHeap* h = new ArrayHeap();
	h -> insert(10);
	h -> insert(5);
	h -> insert(40);
	h -> insert(30);

	cout << "Array Heap with maximum capacity " <<
		HEAP_MAX_CAPACITY << '\n';
	cout << h -> _delete() << '\n';
	cout << h -> _delete() << '\n';
	cout << h -> _delete() << '\n';
	cout << h -> _delete() << '\n';

	delete h;

	return 0;
}
