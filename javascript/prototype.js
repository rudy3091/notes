const objA = {
	a: "a"
}
const objB = {
	b: "b"
}

console.log(objA.b); // undefined

objA.__proto__ = objB
console.log(objA.b); // b
// objA의 프로토타입을 objB로 지정하여
// objB의 프로퍼티를 objA에서도 사용가능

const person = {
	name: "HM",
	greet: function () {
		console.log(`hi i'm ${this.name}`);
	}
}

const student = {
	greet: function () {
		console.log(`hi i'm ${this.name} and i'm a student`);
	}
}

const programmer = {}

person.greet(); // hi i'm HM
// student에는 name 프로퍼티가 없으므로 undefined 출력
student.greet(); // hi i'm undefined and i'm a student

// Object.setPrototypeOf 메소드를 이용해 프로토타입을 지정가능
Object.setPrototypeOf(student, person);
student.greet(); // hi i'm HM and i'm a student

Object.setPrototypeOf(programmer, person);
programmer.greet(); // hi i'm HM


// -------------------------------------
// 클래스 객체의 프로토타입
class Foo {
	constructor() {
		this.foo = "foo";
	}

	print() {
		console.log(this.foo);
	}
}

class Bar extends Foo {
	constructor() {
		super();
		this.bar = "bar";
	}
}

const bar = new Bar();
// bar에서 Foo에서 상속받은 foo프로퍼티를 사용가능
console.log(bar); // Bar { foo: "foo", bar: "bar" }

// 프로토타입을 확인하는 두가지 방법
console.log(bar.__proto__); // Foo {}
console.log(Object.getPrototypeOf(bar)); // Foo {}

// 상속받은 Foo의 메소드 역시 사용가능
bar.print(); // foo


// -------------------------------------
// 함수 객체의 프로토타입
function FooFunc() {
	this.foo = "foo";
	this.print = function () {
		console.log(this.foo);
	}
}

function BarFunc() {
	FooFunc();
	this.bar = "bar";
}

const barFunc = new BarFunc();
console.log(barFunc);
