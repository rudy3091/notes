void main() {
  int cnt = 0;

  // dart's function is first class object
  Function incr = () { cnt++; };
  Function show = () => cnt;

  Function showAndIncr = () => ++cnt;
  Function doSomethingWithCnt = () {
    cnt += 1;
    if (cnt % 2 == 0) {
      cnt *= 2;
    }
    return cnt;
  };

  print(cnt); // 0
  incr();
  print(cnt); // 1

  print(show()); // 1
  print(showAndIncr()); // 2

  incr(); // 2
  print(doSomethingWithCnt()); // 8
  print(show()); // 8
}
