// String타입의 chars()메소드를 이용한 인덱싱
fn main() {
    let s = String::from("hello");
    // Struct std::str::Chars
    let c1 = s.chars();
    println!("{:?}", c1); // Chars(['h', 'e', 'l', 'l', 'o'])

    // chars의 개별 요소에 대한 접근
    // 반환값은 Option 타입
    let c2 = s.chars().nth(1);
    println!("{:?}", c2); // Some('e')
    println!("{}", c2.unwrap()); // e

    // chars를 변수에 담아두고 접근하기 위해선 mut 키워드가
    // 필요함
    let mut c3 = s.chars();
    let c3 = c3.nth(1);
    println!("{}", c3.unwrap()); // e
}
