// 이상없이 작동하는 코드
// num을 선언하지 않고 사용해도 에러가 나지 않음
num = 5;
console.log(num + 1);

// 이렇게 해도 이상없음
// var 키워드는 변수 선언시 중복가능하기 때문
num = 5;
var num = 10;

// 근데 이렇게 하면 이상이 생김
num = 5;
let num;
console.log(num + 1);


// 그 이유는 '호이스팅'때문
// 자바스크립트가 실행되기 전 함수 스코프 내에 선언된
// 호이스팅: 변수와 함수를 유효범위 내의 최상단으로
// 끌어올리는 것
// 단, 실제로 코드에는 변화가 없음
// 또한 let/const 으로 선언된 변수와 변수에 할당된
// 익명함수는 호이스팅되지 않음
// 즉, 함수 선언식은 호이스팅되지만 함수 표현식은 그렇지
// 않음


console.log(funcDeclaration());

function funcDeclaration() {
	return 10;
}

console.log(funcExpression());	// Error: funcExpression is not a function

var funcExpression = function () {
	return 15;
}

// var 로 선언하든, let/const로 선언하든 함수 표현식은
// 호이스팅 되지 않음
const funcExpressionConst = function () {
	return 20;
}

