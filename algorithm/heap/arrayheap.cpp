#include <iostream>
#include <vector>
#define HEAP_MAX_CAPACITY 100
using namespace std;

struct ArrayHeap {
	int arr[HEAP_MAX_CAPACITY];
	int len;
	int capacity = HEAP_MAX_CAPACITY;

	ArrayHeap() : len(0) {
		fill(arr, arr + 100, 0);
	}

	bool is_empty() {
		if (this -> len == 0) return true;
		return false;
	}

	void insert(int val) {
		if (this -> capacity == this -> len) {
			cout << "maximum capacity exceeded" << '\n';
			return;
		}
		this -> len += 1;
		int i = this -> len; // 힙의 마지막요소 다음 인덱스

		// upheap
		// 부모인덱스 == 자식인덱스 / 2
		// 힙의 마지막요소부터 시작해 삽입대상값이 부모노드의
		// 키값보다 크면 부모노드와 자리를 교체
		while (i != 1 && val > this -> arr[i / 2]) {
			this -> arr[i] = this -> arr[i / 2];
			i /= 2;
		}
		// 더이상 부모노드의 키값이 삽입대상값보다 작지 않으면
		// 그 자리에 대상 값 삽입
		this -> arr[i] = val;
	}

	int _delete() {
		if (this -> len == 0) {
			cout << "no item remaining in the heap" << '\n';
			return -1;
		}

		int val = this -> arr[1]; // 루트요소
		int tmp = this -> arr[this -> len]; // 힙의 마지막요소
		this -> len -= 1;

		int parent = 1; // 루트인덱스
		int child = 2; // 루트인덱스의 왼쪽 자식 인덱스

		// downheap
		// 루트요소를 삭제한 뒤 힙의 마지막요소를 루트자리에 옮김
		// 이후 자식노드들과 값을 비교해가며 규칙에 맞는 자리로 이동
		while (child <= this -> len) {
			// child 인덱스의 요소가 형제노드(같은 부모를 가진 노드)보다
			// 작은 키값을 가지면 더 큰 노드를 위쪽으로 올려야하므로
			// child 인덱스를 하나 증가시켜 형제 노드쪽으로 진행
			// 형제 노드가 존재하지 않는다면 그대로 진행해야 하므로 힙의
			// 총 노드의 개수와 child 인덱스를 먼저 비교
			if ((child < this -> len) &&
					(this -> arr[child] < this -> arr[child + 1]))
				child++;

			// 힙의 마지막요소의 키값이 현재 child인덱스의 키값보다
			// 크거나 같으면 그 자리가 규칙에 맞는 인덱스
			if (tmp >= this -> arr[child]) break;

			// 그렇지 않다면(힙의 마지막요소의 키값이 현재 child
			// 인덱스의 키값보다 작다면) child 인덱스의 요소와 자리 교체
			this -> arr[parent] = this -> arr[child];
			parent = child;

			// 왼쪽 자식인덱스 == 부모인덱스 * 2
			child *= 2;
		}

		this -> arr[parent] = tmp;
		return val;
	}
};

