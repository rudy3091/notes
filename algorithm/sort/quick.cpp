#include <iostream>
using namespace std;

void _swap(int& x, int& y) {
	int t = x;
	x = y;
	y = t;
}

void quick_sort(int arr[], int start, int end) {
	if (start >= end) return;

	int pivot = start;
	int left = start + 1;
	int right = end;

	while (left <= right) {
		while (left <= end && arr[left] <= arr[pivot]) {
			left += 1;
		}
		while (right > start && arr[right] >= arr[pivot]) {
			right -= 1;
		}
		if (left <= right) {
			_swap(arr[left], arr[right]);
		} else {
			_swap(arr[right], arr[pivot]);
		}
	}

	quick_sort(arr, start, right - 1);
	quick_sort(arr, right + 1, end);
}

int main() {
	/* int arr[] = {6, 4, 2, 5, 3, 1}; */
	/* int n = 6; */
	/* quick_sort(arr, 0, n - 1); */

	int arr[] = {6, 9, 14, 4, 7, 3, 1, 10};
	int n = 8;
	quick_sort(arr, 0, n - 1);

	for (int i = 0; i < n; i++) {
		cout << arr[i] << '\n';
	}

	return 0;
}
