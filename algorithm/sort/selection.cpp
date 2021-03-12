#include <iostream>
using namespace std;

void _swap(int& x, int& y) {
	int t = x;
	x = y;
	y = t;
}

void selection_sort(int arr[], int n) {
	for (int i = 0; i < n; i++) {
		int _min = i;
		for (int j = i; j < n; j++) {
			if (arr[j] < arr[_min]) {
				_min = j;
			}
		}
		_swap(arr[i], arr[_min]);
	}
}

int main() {
	int arr[] = {6, 4, 2, 5, 3, 1};
	selection_sort(arr, 6);

	for (int i = 0; i < 6; i++) {
		cout << arr[i] << '\n';
	}

	return 0;
}
