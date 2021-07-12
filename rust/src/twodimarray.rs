fn main() {
    // plain two dimensional array
    // 2 by 3
    let arr = [[0i32; 2]; 3];
    assert_eq!(arr, [[0, 0], [0, 0], [0, 0]]);

    // mutable array
    let mut arr = [[0i32; 2]; 3];
    arr[2][1] = 1;
    assert_eq!(arr, [[0, 0], [0, 0], [0, 1]]);

    // // this is not allowed
    // let n = 4;
    // let arr = [0i32; n]; // n is not constant

    // but this is
    const n: usize = 4;
    let arr = [0i32; n]; // because n is constant

    // dynamically sized 2 dim vector
    let x = 2;
    let y = 3;

    // // this is not allowed
    // let mut arr = vec![[0i32; x]; y];

    // so it should be done like this
    let mut arr = vec![0; x * y];
    let mut arr: Vec<_> = arr.as_mut_slice().chunks_mut(x).collect();
    let mut arr = arr.as_mut_slice();
    assert_eq!(arr, [[0, 0], [0, 0], [0, 0]]);

    arr[2][1] = 1;
    assert_eq!(arr, [[0, 0], [0, 0], [0, 1]]);

    /*
     * chunks_mut:
     *
     * let mut slice = [1, 2, 3, 4, 5];
     * let v: Vec<_> = slice.chunks_mut(2).collect();
     * println!("{:?}", v); // [[1, 2], [3, 4], [5]]
     *
     */ 
}
