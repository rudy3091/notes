struct Foo<'a> /* lifetime  specifier 'a */ {
    name: &'a str,
    bar: Bar<'a>,
}

struct Bar<'a> {
    name: &'a str,
}

impl Drop for Bar<'_> /* indicating annonymous lifetime */ {
    fn drop(&mut self) {
        println!("{} is dropped from memory", self.name);
    }
}

impl Drop for Foo<'_> {
    fn drop(&mut self) {
        println!("{} is dropped from memory", self.name);
    }
}

fn main() {
    let _foo = Foo {
        name: "Foo",
        bar: Bar { name: "Bar" },
    };
    println!("Running main function");

    {
        println!("Entering scope #2");
        let _foo = Foo {
            name: "Foo2",
            bar: Bar { name: "Bar2" },
        };
    }
    println!("Escaping scope #2");
}

// result stdout
//
// Running main function
// Entering scope #2
// Foo2 is dropped from memory
// Bar2 is dropped from memory
// Escaping scope #2
// Foo is dropped from memory
// Bar is dropped from memory
