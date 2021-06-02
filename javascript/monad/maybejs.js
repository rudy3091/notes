// Maybe monad
// stores a value & can represent empty state
function J(value) {
	this.value = value;
}

J.prototype.bind = function (f) {
	return f(this.value);
};

const Nothing = {
	bind: function () {
		return this;
	},
};

// 5 + 6 = 11
const resultJust =
	new J(5).bind((value1) =>
		new J(6).bind((value2) =>
			new J(value1 + value2)
		)
	);

console.log(resultJust); // J { value: 11 }

// empty value propagation
// 5 + nothing = nothing
const resultNothing =
	new J(5).bind((value1) =>
		Nothing.bind((value2) =>
			new J(value1 + value2)
		)
	);
console.log(resultNothing); // Nothing { bind: f () }

// appication of just monad
function getUser() {
	return new Just({
		getAvatar: function () {
			return Nothing;
		},
	});
}

const url = getUser()
	.bind((user) => user.getAvatar())
	.bind((avatar) => avatar.url);

if (url instanceof Just) {
	// there is url: url.value
} else {
	// url is empty
}
