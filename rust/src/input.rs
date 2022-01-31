use std::io::{self, BufRead};

///
/// ### example
/// ```
/// fn main() {
///     let s = read_string!();
///     println!("your input: {}", s);
///
///     let a = read_int!();
///     let b = read_int!();
///     println!("{} + {} = {}", a, b, a + b);
/// }
/// ```
///
macro_rules! read_string {
    () => {{
        let stdin = io::stdin();
        let mut buf = String::new();
        stdin.lock().read_line(&mut buf).unwrap();
        buf.truncate(buf.len() - 1);
        buf
    }};
}

macro_rules! read_int {
    () => {{
        let s = read_string!();
        let n: i32 = s.parse().unwrap();
        n
    }};
}


fn main() {
    let stdin = io::stdin();
    let mut buf = String::new();

    // read one line as string
    stdin.lock().read_line(&mut buf);
    let buf = buf.trim();
    println!("{}", buf);

    // method2: collect all in a vector
    let v = stdin
        .lock()
        .lines()
        .map(|x| x.unwrap().parse().unwrap())
        .collect::<Vec<i32>>();
    println!("{:?}", v);
}
