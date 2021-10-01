fn main() {
    let res = exec(|x: i32| x * 2, 3);
    assert_eq!(res, 6);

    let add = |x| move |y| x + y;
    let add3 = add(3);
    assert_eq!(add3(6), 9);

    let string_add = |mut s1: String| move |s2: &str| {
        s1.push_str(s2);
        s1
    };
    let add_hello = string_add(String::from("hello"));
    assert_eq!(add_hello(" world"), "hello world");
}

fn exec<F: Fn(T) -> T, T>(f: F, x: T) -> T {
    f(x)
}
