#include <iostream>
using namespace std;

void _swap(int& x, int& y) {
	int t = x;
	x = y;
	y = t;
}

void bubble_sort(int arr[], int n) {
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++) {
			if (arr[i] < arr[j]) {
				_swap(arr[i], arr[j]);
			}
		}
	}
}

int main() {
	int arr[] = {6, 4, 2, 5, 3, 1};
	bubble_sort(arr, 6);

	for (int i = 0; i < 6; i++) {
		cout << arr[i] << '\n';
	}

	return 0;
}
