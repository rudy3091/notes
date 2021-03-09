// iterable protocol
// allows Javascript objects to customize
// iteration behavior like when values
// looped over in a 'for ... of' loop


const iterable = new Object();

// Symbol.iterator
// returns default iterator of the object
// used by for ... of
iterable[Symbol.iterator] = function* () {
	yield 1;
	yield 2;
	yield 3;
	yield 4;
};

console.log(typeof iterable) // object

// iterating iterable
for (let item of iterable) {
	console.log(item);
}


// if used by Array.prototype.from()
const arr = Array.from(iterable);
console.log(arr);

// destructuring
console.log(...iterable);
