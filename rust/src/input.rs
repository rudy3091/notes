use std::io::{self, BufRead};

fn main() {
    let stdin = io::stdin();
    let mut buf = String::new();

    // read one line as string
    stdin.lock().read_line(&mut buf);
    let buf = buf.trim();
    println!("{}", buf);

    // method2: collect all in a vector
    let v = stdin.lock().lines().map(|x| {
        x.unwrap().split_whitespace().collect::<Vec<_>>();
    });
    println!("{:?}", v);
}
