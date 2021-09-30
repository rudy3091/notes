fn main() {
    let s = String::from("Hello!");
    let len = not_taking_ownership(&s);
    // 소유권은 여전히 s가 갖고 있기 때문에 함수가 호출되어도
    // 메모리에서 drop되지 않음
    println!("{}, length: {}", s, len);

    let mut changeable = String::from("Hello");
    can_change(&mut changeable);
    let len = not_taking_ownership(&changeable);
    println!("{}, length: {}", changeable, len);

    // 가변 참조자의 제약조건
    // 스코프 내에 가변 참조자는 하나만 존재해야 함
    // 이 조건 때문에 'data race'를 방지할 수 있음
    let mut ss = String::from("hello");

    let rf1 = &mut ss;
    // error: cannot borrow as mutable more than once
    // let rf2 = &mut ss;

    // println!("{}, {}", rf1, rf2);
    println!("{}", rf1);

    // 가변 참조자와 불변 참조자의 혼용 시 동시에 가변 참조자와
    // 불변 참조자를 빌릴 수 없음
    let mut s = String::from("hello");

    let rf1 = &s;
    // error: cannot borrow 's' as mutable because it is
    // also borrowed as immutable
    let rf2 = &mut s;
    println!("{}, {}", rf1, rf2);

    // 댕글링 참조자(dangling reference)
    // 댕글링 포인터는 어떤 메모리를 가리키는 포인터를 가지고 있는
    // 동안 그 메모리를 해제함으로서 다른 개체가 사용하고 있을지도
    // 모르는 메모리를 참조하고 있는 포인터를 의미
    // 러스트에서는 컴파일러가 댕글링 포인터가 발생하지 못하도록 막음
    //
    // 어떤 데이터의 참조자를 만들었다면 그 참조자가 스코프 밖으로
    // 벗어나기 전까지는 데이터가 스코프 밖을 벗어나지 않는다는 것을
    // 확인해줌
    //
    let dangled = dangle();
}

fn not_taking_ownership(s: &String) -> usize {
    s.len()
} // 참조자의 형태로 값을 전달해 소유권을 옮기지 않음
  // 이를 빌림(borrow)라고 부름

// 빌린 값을 변경하려고 하면?
fn change(s: &String) {
    // error: 빌린 값을 고치려고 하면 에러 발생
    // s.push_str(" world!");
}

// mut 키워드를 이용한 가변 참조자 생성
fn can_change(s: &mut String) {
    s.push_str(" world!");
}

// error: missing lifetime specifier
// 라이프타임이라는 개념을 도입해 댕글링 포인터 문제 해결
fn dangle() -> &String {
    let s = String::from("hello");
    &s // s의 참조자를 반환하지만, s의 값은 스코프를 벗어나
       // 메모리에서 drop됨
}
