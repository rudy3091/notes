fn new_array() -> Vec<i32> {
    // (x..y) : std::ops::Range
    assert_eq!((1..7), std::ops::Range { start: 1, end: 7 });
    (1..7).collect()
}

// map iterator
fn foo() {
    let arr = new_array();
    let arr1 = arr.iter().map(|n| n * 2).collect::<Vec<_>>();
    assert_eq!(Vec::from([2, 4, 6, 8, 10, 12]), arr1);

    let arr2: Vec<i32> = arr.iter().map(|n| n * n).collect();
    assert_eq!(Vec::from([1, 4, 9, 16, 25, 36]), arr2);
}

// filter iterator
fn bar() {
    let arr = new_array();
    // even numbers
    // closure in filter: FnMut(&I) -> bool
    // ** into_iter(): consumes arr **
    // ref (https://www.reddit.com/r/rust/comments/3bmua6/can_someone_help_me_understand_stditerfilter/)
    let arr1: Vec<i32> = arr.into_iter().filter(|&n| n % 2 == 0).collect();
    assert_eq!(Vec::from([2, 4, 6]), arr1);

    // shadowing arr
    let arr = new_array();
    let arr2: Vec<i32> = arr.iter().map(|n| n * n).filter(|&n| n > 9).collect();
    assert_eq!(Vec::from([16, 25, 36]), arr2);
}

fn main() {
    foo();
    bar();
}
