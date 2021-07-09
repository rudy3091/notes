struct Vector2 {
    x: i32,
    y: i32
}

fn dot_product(alpha: Vector2, beta: Vector2) -> Vector2 {
    let x = alpha.x * beta.x;
    let y = alpha.y * beta.y;
    Vector2 { x, y }
}

impl Vector2 {
    fn invert(&self) -> Vector2 {
        Vector2 { x: self.y, y: self.x }
    }
}

struct Sequence {
    a1: i32,
    d: i32
}

impl Sequence {
    fn nth(&self, n: i32) -> i32 {
        self.a1 + (n - 1) * self.d
    }

    fn sum(&self, n: i32) -> i32 {
        n * (self.a1 + self.nth(n)) / 2
    }
}

fn main() {
    let alpha = Vector2 { x: 10, y: 10 };
    let beta = Vector2 { x: 5, y : 2 };

    let res = dot_product(alpha, beta);
    assert_eq!(res.x, 50);
    assert_eq!(res.y, 20);

    let inverted = res.invert(); // Vector2::invert(&res), borrowed
    assert_eq!(inverted.x, 20);
    assert_eq!(inverted.y, 50);

    assert_eq!(res.x, 50); // not dropped, can be used here

    let seq = Sequence { a1: 0, d: 3 };
    assert_eq!(27, seq.nth(10));
    assert_eq!(135, seq.sum(10));
}
