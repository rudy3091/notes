use std::str;
use std::fs::OpenOptions;
use std::fs::File;
use std::io::Read;

fn main() {
    let file_name = "./example.txt";

    let file = OpenOptions::new()
        .read(true)
        .append(true)
        .open(file_name);

    let mut file = match file {
        Ok(file) => file,
        Err(_) => {
            println!("cannot open file, creating one");
            File::create(file_name).unwrap()
        }
    };

    let mut buf = Vec::new();
    let _res = file.read_to_end(&mut buf);

    let s = match str::from_utf8(&buf) {
        Ok(v) => v,
        Err(_) => panic!("something went wrong")
    };
    print!("{}", s); // hello world!
}
