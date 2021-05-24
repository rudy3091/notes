// List monad
// lazily computed list of values
function* unit(value) {
	yield value;
}

function* bind(list, f) {
	for (let item of list) {
		yield* f(item);
	}
}

const resultList =
	bind([0, 1, 2], (element1) =>
		bind([0, 1, 2], function* (element2) {
			yield element1 + element2;
		})
	);

Array.from(resultList).forEach((item) => console.log(item)); // 0 1 2 1 2 3 2 3 4
