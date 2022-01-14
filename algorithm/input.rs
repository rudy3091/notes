use std::io::{self, BufRead};

// 3
// 1 2
// 2 3
// 4 5
//
// ->
//
// [[1, 2], [2, 3], [4, 5]]
fn multi_int_multi_line() {
    let stdin = io::stdin();
    let v = stdin
        .lock()
        .lines()
        .skip(1)
        .map(|x| x.unwrap())
        .collect::<Vec<String>>();

    let v = v
        .into_iter()
        .map(|pair| {
            pair.split_whitespace()
                .map(|x| x.parse().unwrap())
                .collect::<Vec<i32>>()
        })
        .collect::<Vec<Vec<i32>>>();
}
