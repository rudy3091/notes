console.log('*************************');
console.log('** array overhaed test **');
console.log('*************************');

function foo(arr, context) {
  console.log(arr[0] + arr[1]);
  console.timeEnd(context);
}

const shortArr = [1, 2];
console.time('short');
foo(shortArr, 'short'); // 0.463ms

const longArr = Array.from(new Array(1_000_000), (_, i) => i + 1)
console.time('long');
foo(longArr, 'long'); // 0.268.ms

// -> makes no significant difference
