enum Tree<T> {
    Empty,
    Node(T, Box<Tree<T>>, Box<Tree<T>>),
}

impl<T> Tree<T> {
    fn new(value: T) -> Self {
        Tree::Node(value, Box::new(Tree::Empty), Box::new(Tree::Empty))
    }
}

fn main() {
    let value = 10;
    let node = Tree::new(value);
    match node {
        Tree::Empty => (),
        Tree::Node(x, _, _) => assert_eq!(x, value),
    }
}
