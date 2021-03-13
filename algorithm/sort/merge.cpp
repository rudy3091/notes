#include <iostream>
using namespace std;

int sorted[100];

void merge(int arr[], int start, int mid, int end) {
	int i = start;
	int j = mid + 1;
	for (int k = start; k <= end; k++) {
		if (j > end) sorted[k] = arr[i++];
		else if (i > mid) sorted[k] = arr[j++];
		else if (arr[i] <= arr[j]) sorted[k] = arr[i++];
		else sorted[k] = arr[j++];
	}

	for (i = start; i <= end; i++) arr[i] = sorted[i];
}

void merge_sort(int arr[], int start, int end) {
	if (start >= end) return;

	int mid = (end + start) / 2;
	merge_sort(arr, start, mid);
	merge_sort(arr, mid + 1, end);
	merge(arr, start, mid, end);
}

int main() {
	/* int arr[] = {6, 4, 2, 5, 3, 1}; */
	/* int n = 6; */
	/* merge_sort(arr, 0, n - 1); */

	int arr[] = {6, 9, 14, 4, 7, 3, 1, 10};
	int n = 8;
	merge_sort(arr, 0, n - 1);

	for (int i = 0; i < n; i++) {
		cout << arr[i] << '\n';
	}

	return 0;
}

