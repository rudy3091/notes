let x = 'global';

// 자바스크립트는 렉시컬 스코프 규칙을 따르기 때문에 f 안
// 에서든 밖에서든 g 함수를 호출하면 x의 값은 global이 출력
// 됨
function f() {
  let x = 'local';
  g();
}

function g() {
  console.log(x);
}

f(); // global
g(); // global
