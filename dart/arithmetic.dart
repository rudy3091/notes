int add(int a, int b) {
  return a + b;
}

int sub(int a, int b) {
  return a - b;
}

int mul(int a, int b) {
  return a * b;
}

int div(int a, int b) {
  // // divide and returns non-integer
  // return a / b;

  // divide and returns integer
  return a ~/ b;
}

void main(List<String> args) {
  int x, y;
  if (args.length == 0) {
    x = 6;
    y = 3;
  } else {
    x = int.parse(args[0]);
    y = int.parse(args[1]);
  }

  print(add(x, y));
  print(sub(x, y));
  print(mul(x, y));
  print(div(x, y));
}
