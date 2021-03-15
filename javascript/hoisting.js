// 호이스팅: 변수의 선언부와 초기화/할당부를 분리시키고
// 선언부를 유효 스코프의 최상단으로 끌어올리는 것
// 단, 실제로 코드에는 변화가 없음
// 또한 변수에 할당된 익명함수는 호이스팅되지 않음
// 즉, 함수 선언식은 호이스팅되지만 함수 표현식은 그렇지
// 않음


console.log(funcDeclaration());

// 함수 선언식
function funcDeclaration() {
	return 10;
}

console.log(funcExpression());	// Error: funcExpression is not a function

// 함수 표현식
var funcExpression = function () {
	return 15;
}

// var 로 선언하든, let/const로 선언하든 함수 표현식은
// 호이스팅 되지 않음
const funcExpressionConst = function () {
	return 20;
}

// var 변수 뿐 아니라 let 변수와 const 변수
// 역시 호이스팅 되지만, 변수 선언 전에 접근할 수 없음
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 10;
