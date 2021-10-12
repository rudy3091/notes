fn main() {
    let mut arr: [i32; 8] = [6, 9, 14, 4, 7, 3, 1, 10];
    let n = 8;
    quick_sort(&mut arr, 0, n - 1);

    println!("{:?}", arr); // [1, 3, 4, 6, 7, 9, 10, 14]
}

fn quick_sort(arr: &mut [i32; 8], start: usize, end: usize) {
    if start >= end {
        return;
    }

    let pivot = start;
    let mut left = start + 1;
    let mut right = end;

    while left <= right {
        while left <= end && arr[left] <= arr[pivot] {
            left += 1;
        }
        while right > start && arr[right] >= arr[pivot] {
            right -= 1;
        }
        if left <= right {
            let tmp = arr[left];
            arr[left] = arr[right];
            arr[right] = tmp;
        } else {
            let tmp = arr[right];
            arr[right] = arr[pivot];
            arr[pivot] = tmp;
        }
    }

    quick_sort(arr, start, right - 1);
    quick_sort(arr, right + 1, end);
}
