// composition operator
// for function composition
Function.prototype["."] = function (f) {
  return (...args) => this( f(...args));
};

const doub = x => x * 2;
const plus1 = x => x + 1;
const div2 = x => x / 2;

console.log(doub ["."] (plus1) (3)); // (3 + 1) * 2 = 8
console.log(plus1 ['.'] (doub) (3)); // (3 * 2) + 1 = 7

console.log(doub ["."] (plus1) ['.'] (div2) (3)); // ((3 / 2) + 1) * 2 = 5
console.log(plus1 ['.'] (doub) ['.'] (div2) (3)); // ((3 / 2) * 2) + 1 = 4

const mul100 = x => x * 100;
const bigger = (x, y) => x > y ? x : y;
// (bigger one) * 100
console.log(mul100 ['.'] (bigger) (3, 7)); // 700


// pipe operator
Array.prototype['->'] = function (f) {
  return this.map(f);
}

const triple = x => x * 3;
const minus1 = x => x - 1;
const square = x => x * x;

const arr = [1, 2, 3, 4];

console.log(arr ['->'] (triple) ['->'] (minus1) ['->'] (square)); // [ 4, 25, 64, 121 ]
console.log(arr ['->'] (minus1) ['->'] (square) ['->'] (triple)); // [ 0, 3, 12, 27 ]

