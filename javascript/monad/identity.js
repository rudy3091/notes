// Identity monad
// wraps a value
function I(value) {
	this.value = value;
}

I.prototype.bind = function (f) {
	return f(this.value);
};

// 5 + 6 = 11
const resultIdentity =
	new I(5).bind((value1) =>
		new I(6).bind((value2) =>
			new I(value1 + value2)
		)
	);

console.log(resultIdentity); // I { value: 11 }
