#include <iostream>
using namespace std;

// insert arr[idx] into arr[target]
void insert(int arr[], int n, int idx, int target) {
	int val = arr[idx];
	if (idx < target) return;
	for (int i = idx; i > target; i--) {
		arr[i] = arr[i - 1];
	}
	arr[target] = val;
}

void insertion_sort(int arr[], int n) {
	for (int i = 1; i < n; i++) {
		for (int j = 0; j < i; j++) {
			if (arr[j] > arr[i]) {
				insert(arr, n, i, j);
			}
		}
	}
}

int main() {
	/* int arr[] = {6, 4, 2, 5, 3, 1}; */
	/* int n = 6; */
	/* insertion_sort(arr, 6); */

	int arr[] = {9, 1, 3, 2, 7, 5, 4, 8};
	int n = 8;
	insertion_sort(arr, n);

	for (int i = 0; i < n; i++) {
		cout << arr[i] << '\n';
	}

	return 0;
}

