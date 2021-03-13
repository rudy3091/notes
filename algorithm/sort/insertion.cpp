#include <iostream>
using namespace std;

void insertion_sort(int arr[], int n) {
	for (int i = 1; i < n; i++) {
		int key = arr[i];
		for (int j = i - 1; j >= 0; j--) {
			if (key < arr[j]) {
				arr[j + 1] = arr[j];
				arr[j] = key;
			} else {
				break;
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

