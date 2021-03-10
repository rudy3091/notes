class Counter {
	constructor(end) {
		this.end = end;
	}

	[Symbol.iterator]() {
		let i = 0;
		return {
			end: this.end,
			next: function() {
				return {
					value: i++,
					done: i > this.end ? true : false
				}
			}
		}
	}
}

const cnt = new Counter(10);
const iter = cnt[Symbol.iterator]();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

const iter2 = cnt[Symbol.iterator]();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

for (let i of cnt) {
	console.log(i);
	if (i > 20) break;
}


// iterating over range defined by class constructor
// like range() in python
class Range {
	constructor(start, end, step = 1) {
		this.start = start;
		this.end = end;
		this.step = step;
	}

	[Symbol.iterator]() {
		let step = this.step;
		let end = this.end;
		let val = this.start - step;

		return {
			next: function() {
				return {
					value: (val += step),
					done: val >= end ? true : false
				}
			}
		}
	}
}

console.log("Range class");
for (let i of new Range(1, 8, 3)) {
	console.log(i);
}


// iterating over 2 dim matrix
class Matrix {
	constructor(arr) {
		this.matrix = arr
	}

	*[Symbol.iterator]() {
		for (let row of this.matrix) {
			for (let col of row) {
				yield col
			}
		}
	}
}

console.log("Matrix class");
const matrix = new Matrix(
	[
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	]
);
for (let cell of matrix) {
	console.log(cell);
}

