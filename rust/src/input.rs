use std::io::{self, BufRead};

fn main() {
    let stdin = io::stdin();
    let mut buf = String::new();

    // read one line as string
    stdin.lock().read_line(&mut buf);
    let buf = buf.trim();
    println!("{}", buf);
}
