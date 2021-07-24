class Foo {
  int? x;
  int? y;

  Foo(int x, int y) {
    this.x = x;
    this.y = y;
  }
}

class Bar {
  Foo? _foo;

  Bar(Foo foo) {
    this._foo = foo;
  }
}

class Baz {
  int? _x;
  int get x {
    return _x! * 10;
  }

  void set change(int x) {
    this._x = x;
  }

  Baz(int x) {
    this._x = x;
  }
}

class Fooo {
  // this.x in parameter
  Fooo({this.x, required this.y});
  int? x;
  int y;
}

void main() {
  Foo f = new Foo(10, 11);
  print(f.x); // 10
  print(f.y); // 11

  Bar b = new Bar(f);
  print(b._foo?.x); // 10

  Baz baz = new Baz(2);
  print(baz._x); // 2
  print(baz.x); // 20

  baz.change = 1;
  print(baz._x); // 1
  print(baz.x); // 10

  Fooo f2 = Fooo(x: 1, y: 2);
  print(f2.x); // 1
  print(f2.y); // 2
}