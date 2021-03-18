// 객체의 프로퍼티는 데이터 프로퍼티와 접근자
// 프로퍼티로 나
// 그 중 접근자 프로퍼티는 값을 가지지 않고 값을
// get하고 set하는 역할을 함
// 함수이지만 객체 외부에서는 프로퍼티처럼 보임

const person = {
	lastName: "",
	firstName: "",

	// getter property
	get fullName() {
		return this.lastName + ' ' + this.firstName;
	},

	// setter property
	set fullName(fn) {
		[this.lastName, this.firstName] = fn.split(" ");
	}
}

person.fullName = "HM Kim";
console.log(person.fullName); // HM Kim


// 이걸 잘 활용하면 값의 검증 등으로 사용할 수 있음

const userInfo = {
	set email(val) {
		if (typeof val !== "string") {
			throw new Error("email must be a string");
			return;
		}
		if (val.indexOf("@") === -1) {
			throw new Error("this email is not valid");
			return;
		}
		this._email = val;
	},

	get email() {
		return this._email;
	}
}

// userInfo.email = 10; // Error: email must be a string
// userInfo.email = "aaa"; // Error: this email is not valid
console.log(userInfo.email); // undefined
userInfo.email = "asdf@asd.com";
console.log(userInfo.email); // asdf@asd.com
