/** 소유권 규칙
 * 1. 러스트의 각각의 값은 해당값의 오너(owner)라고 불리우는 변수를 갖고 있다.
 * 2. 한번에 딱 하나의 오너만 존재할 수 있다.
 * 3. 오너가 스코프 밖으로 벗어나는 때, 값은 버려진다(dropped).
 */

fn main() {
    let s = "hello";
    println!("{}", s);
    {
        let ss = "hello";
    }
    // error: 다른 프로그래밍 언어와 비슷하게 스코프 규칙을 따름
    // 스코프 밖으로 변수가 벗어나면 더이상 유효하지 않음
    // println!("{}", ss);

    let x = 10;
    println!("{}", x);
    let y = x;
    println!("{}", x); // y에는 x의 복사본이 저장되기 때문에 가능

    let s1 = String::from("hello");
    println!("{}", s1);
    let s2 = s1; // 여기서 s1의 문자열의 소유권이 s2로 이동함(move)
    // 여기서 소유권의 move 이후 소유권을 빌리려(borrow)하고 있음 -> 에러
    // println!("{}", s1);

    /** 설명충:
     * String 타입의 데이터는 힙 영역에 저장되고, 변수 s1는 스택에
     * 저장돼 힙 영역을 가리킴. 이때 s2에 s1을 대입하면 스택에 있는
     * 포인터가 복사되고, 힙 영역의 데이터는 복사되지 않음.
     * 만약 s2와 s1가 스코프 밖으로 벗어나면 둘 다 같은 메모리를 해제
     * 하려 할 것임. 이러면 double free 오류를 일으키기 때문에 안됨.
     * 러스트는 s1가 유효하지 않다고 간주하고 s1가 스코프 밖으로 벗어
     * 났을 때에 아무 메모리도 해제하지 않음.
     * 만약 위처럼 String 변수의 값을 복사하고 싶으면 s1.clone() 메소
     * 드를 사용하면 됨
     */
}
