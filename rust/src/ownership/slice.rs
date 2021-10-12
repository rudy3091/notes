fn main() {
    // 슬라이스: 소유권을 갖지 않는 데이터 타입 중 하나
    let mut s = String::from("Hello world");
    let word = first_word(&s);
    println!("{}", word); // 5

    s.clear(); // s에 저장된 문자열을 삭제
    // 이제 word라는 변수에 저장된 5는 아무 의미가 없어짐
    // 이 문제를 해결하기 위해 있는 개념이 '스트링 슬라이스'

    let mut s = String::from("Hello world");
    // 스트링 슬라이스 선언
    // 참조자와 비슷하지만, 전체 문자열에 대한 참조자가 아닌
    // 일부분에 대한 참조자임
    // [start..from] 이라면 start 포함, end 미포함 범위를 가짐
    let hello = &s[0..5];
    let world = &s[6..11];
    println!("{}, {}!", hello, world); // Hello, world!

    // 아래와 같은 코드는 에러를 일으킴
    // s.clear();
    // println!("{}, {}", hello, world);
    //
    // 스트링 슬라이스 역시 참조자의 일종이므로 원래 데이터가
    // 없어지면 컴파일 타임에 에러가 발생함

    let arr = [1, 2, 3, 4, 5, 6];
    let part_of_arr = &arr[1..4]; // 타입: &[i32]
    println!("{:?}", part_of_arr); // [2, 3, 4]

    let sum = sum_slice(part_of_arr);
    println!("sum: {}", sum); // 9

    // sum_slice 함수로 슬라이스를 전달했기 때문에 이후에도
    // part_of_arr의 소유권은 옮겨가지 않았음
    println!("{:?}", part_of_arr); // [2, 3, 4]
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

fn sum_slice(sl: &[i32]) -> i32 {
    let mut sum = 0;
    sl.iter().for_each(|x| { sum += *x });
    sum
}
