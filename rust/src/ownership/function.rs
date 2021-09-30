fn main() {
    let s = String::from("hello"); // s에 대한 소유권 생성
    ownership_moved(s); // s의 소유권이 함수 ownership_moved로 이동함

    // rror: 함수로 수유권이 이동했기 때문에 이후로는 사용할 수 없음
    // println!("{}", s);

    let x = 10;
    let y = 20;
    let sum = add(x, y); // 함수로 소유권이 이동했지만 i32 타입은 Copy되어 사용됨
    println!("{}, {}", x, y); // 따라서 이후에 사용해도 문제 없음

    let ss = receive_ownership(); // receive_ownership 내부로부터 문자열의 소유권을 가져옴
}

fn ownership_moved(s: String) {
    println!("{}", s);
} // s는 스코프 밖으로 이동해서 메모리에서 drop됨

fn add(x: i32, y: i32) -> i32 {
    return x + y;
}

fn receive_ownership() -> String {
    let s = String::from("hello!");
    s
} // 값을 반환하면 그 소유권이 함수를 호출한 쪽으로 넘어감
