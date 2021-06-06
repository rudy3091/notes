fn foo() {
    let a = [1, 2, 3, 4, 5, 6];
    let mut it = a.iter();

    let n1 = it.next();
    assert_eq!(Some(&1), n1);

    let n2 = it.next().unwrap();
    assert_eq!(&2, n2);

    // match & if let
    // match statements
    match it.next() {
        Some(num) => assert_eq!(&3, num),
        None => println!("iteration finished"),
    }

    // expressions using match
    let n3 = match it.next() {
        Some(num) => num,
        None => {
            println!("iteration finished");
            &-1
        }
    };
    assert_eq!(&4, n3);

    // concise control flow with if let
    if let Some(num) = it.next() {
        assert_eq!(&5, num);
    };

    // returning value with if let - else
    let n4 = if let Some(num) = it.next() {
        num
    } else {
        println!("iteration finished");
        &-1
    };
    assert_eq!(&6, n4);
}

fn bar() {
    let arr = [1, 2, 3, 4];
    let mut it = arr.iter();

    let n1 = it.next().unwrap();
    assert_eq!(&1, n1);

    let n2 = it.next().unwrap();
    assert_eq!(&2, n2);

    let n3 = it.next().unwrap();
    assert_eq!(&3, n3);

    // if the Result is Ok variant, unwrap_or returns the value
    let n4 = it.next().unwrap_or(&-1);
    assert_eq!(&4, n4);

    // if the Result is Err variant, unwrap_or returns the value
    // taken as parameter
    let n5 = it.next().unwrap_or(&-1);
    assert_eq!(&-1, n5);

    // unwrap_or_else takes closure
    let n6 = it.next().unwrap_or_else(|| &-1);
    assert_eq!(&-1, n6);
}

fn main() {
    foo();
    bar();
}
