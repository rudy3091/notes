// iterator protocol
// object implements next() method
// zero-argument function that returns
// an object with at least the following
// two properties
//
// i) done: boolean
// false if the iterator was able to produce
// the next value in the sequence
// true if the iterator has completed its
// sequence
//
// ii) value: any
// any javascript value returned by the iterator
// can be omitted if done is true
//
// if non-object value has returned, TypeError
// "iterator-next() returned a non-object value"
// will be thrown


// String Iterator
const str = "Hello";
const iterator = str[Symbol.iterator]();
console.log(iterator) // [object String Iterator]

// iterating str with iterator
console.log(iterator.next()); // { value: "H", done: false }
console.log(iterator.next()); // { value: "e", done: false }
console.log(iterator.next()); // { value: "l", done: false }
console.log(iterator.next()); // { value: "l", done: false }
console.log(iterator.next()); // { value: "o", done: false }
console.log(iterator.next()); // { value: undefined, done: true }
console.log(iterator.next()); // { value: undefined, done: true }

console.log("...str:", ...str);


// customize iteration behavior
// need to construct a String object explicitly
// to avoid auto-boxing

// typeof new String("World") - object
// typeof "World" - string
const str2 = new String("World");

str2[Symbol.iterator] = function() {
	return {
		next: function() {
			return this._isFirst ? {
				value: 'bye',
				done: (this._isFirst = false)
			} : {
				done: true
			}
		},
		_isFirst: true
	};
};

const iterator2 = str2[Symbol.iterator]();

// iterating str with iterator
console.log(iterator2.next()); // { value: "bye", done: false }
console.log(iterator2.next()); // { value: undefined, done: true }
console.log(iterator2.next()); // { value: undefined, done: true }

// redefined iterator protocol affects
// built-in iteration protocol
console.log(...str2); // bye
