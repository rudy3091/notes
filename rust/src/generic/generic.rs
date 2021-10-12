fn main() {
    let bigger = bigger_i32(2, 4); // 4
    println!("{}", bigger);

    // 에러:
    // 함수 시그니처에 맞지 않는 argument를 전달함
    // 이를 해결하기 위해 필요한 개념이 제네릭
    //
    // let bigger = bigger_i32(2.4, 5.2);
    // println!("{}", bigger);

    // 하지만 이거도 에러:
    // 제네릭을 사용하긴 했지만 제네릭 타입이 값의 비교를
    // 위한 트레잇 std::cmp::PartialOrd 를 구현하지 않았기 때문
    //
    // let bigger = bigger(2.4, 5.2);
    // println!("{}", bigger);

    // 이렇게 해야 잘 돌아감
    let bigger = bigger_generic(2.4, 5.2);
    println!("{}", bigger); // 5.2
}

fn bigger_i32(a: i32, b: i32) -> i32 {
    if a > b {
        a
    } else {
        b
    }
}

fn bigger_f32(a: f32, b: f32) -> f32 {
    if a > b {
        a
    } else {
        b
    }
}

// fn bigger<T>(a: T, b: T) -> T {
//     if a > b {
//         a
//     } else {
//         b
//     }
// }

// 제네릭 타입 T 는 PartialOrd 를 구현한 타입에 한정
fn bigger_generic<T: PartialOrd>(a: T, b: T) -> T {
    if a > b {
        a
    } else {
        b
    }
}
