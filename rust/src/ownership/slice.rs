fn main() {
    // 슬라이스: 소유권을 갖지 않는 데이터 타입 중 하나
    let mut s = String::from("Hello world");
    let word = first_word(&s);
    println!("{}", word); // 5

    s.clear(); // s에 저장된 문자열을 삭제
    // 이제 word라는 변수에 저장된 5는 아무 의미가 없어짐
    // 이 문제를 해결하기 위해 있는 개념이 '스트링 슬라이스'
}

// 예제: 문자열을 입력받아 첫번째 단어를 반환하는 함수
// 스트링의 '일부'에 대해 표현할 수 없기 때문에 끝부분 문자열의
// 인덱스를 usize 타입으로 반환
fn first_word(s: &String) -> usize {
    let bytes = s.as_bytes();

    for (i, &item) in bytes.iter().enumerate() {
        if item == b' ' {
            return i;
        }
    }

    s.len()
}
