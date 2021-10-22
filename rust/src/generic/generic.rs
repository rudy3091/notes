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

    use_coord();
    use_tuple();
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

// 제네릭을 사용한 구조체 타입
struct Coord<T> {
    x: T,
    y: T,
}

fn use_coord() {
    // 타입 추론으로 자동으로 이뤄지는 제네릭 타입 추론
    let x = Coord { x: 1, y: 10 };
    let y = Coord { x: 1., y: 10. };

    // 명시적으로 제네릭 타입을 지정해줄 수도 있음
    let x = Coord::<i32> { x: 1, y: 10 };
    let y = Coord::<f32> { x: 1., y: 10. };

    // // 명시적으로 타입을 지정했을땐 맞지않는 타입을 넣으면 에러
    // let x = Coord::<i32> { x: 1, y: 10.4 };
}

// 복수개의 제네릭 타입 사용
struct Tuple<T, U> {
    first: T,
    last: U,
}

fn use_tuple() {
    // use_coord() 함수와는 다르게 다른 타입이 들어가도 에러가 발생하지 않음
    let x = Tuple { first: 1, last: "hi" };
    let y = Tuple { first: "asdf", last: String::from("asdf") };

    // 명시적인 타입 지정도 가능함
    let x = Tuple::<i32, f32> { first: 1, last: 1. };
    let y = Tuple::<String, &str> { first: String::from("asdf"), last: "asdf" };
}

// 구조체와 다른 제네릭 타입을 사용해 정의한 구조체 메소드
impl<T> Coord<T> {
    // 메소드의 제네릭 타입은 U, 구조체의 제네릭 타입은 T
    // 두 타입을 섞어 Tuple 로 넘겨 Tuple 구조체의 제네릭 시그니처는
    // <T, U> 가 됨
    fn mix<U>(self, other: Coord<U>) -> Tuple<T, U> {
        Tuple { first: self.x, last: other.y }
    }
}
