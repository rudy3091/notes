fn new_array() -> Vec<i32> {
    // (x..y) : std::ops::Range
    assert_eq!((1..7), std::ops::Range { start: 1, end: 7 });
    (1..7).collect()
}

// map iterator
fn foo() {
    let arr = new_array();
    let arr1 = arr.iter().map(|n| n * 2).collect::<Vec<_>>();
    assert_eq!(vec![2, 4, 6, 8, 10, 12], arr1);

    let arr2: Vec<i32> = arr.iter().map(|n| n * n).collect();
    assert_eq!(vec![1, 4, 9, 16, 25, 36], arr2);
}

// filter iterator
fn bar() {
    let arr = new_array();
    // even numbers
    // closure in filter: FnMut(&I) -> bool
    // ** into_iter(): consumes arr **
    // ref (https://www.reddit.com/r/rust/comments/3bmua6/can_someone_help_me_understand_stditerfilter/)
    let arr1: Vec<i32> = arr.into_iter().filter(|&n| n % 2 == 0).collect();
    assert_eq!(vec![2, 4, 6], arr1);

    // shadowing arr
    let arr = new_array();
    let arr2: Vec<i32> = arr.iter().map(|n| n * n).filter(|&n| n > 9).collect();
    assert_eq!(vec![16, 25, 36], arr2);
}

// fold
fn baz() {
    let arr = new_array();
    let sum = arr.iter().fold(0, |x, y| x + y);
    assert_eq!(21, sum);

    let arr = new_array();
    // partial sum using scan
    let partial_sum: Vec<i32> = std::iter::once(0)
        .chain(arr.iter().scan(0, |xs, x| {
            *xs += x;
            Some(*xs)
        }))
        .collect();
    assert_eq!(vec![0, 1, 3, 6, 10, 15, 21], partial_sum);
}

fn main() {
    foo();
    bar();
    baz();
}
