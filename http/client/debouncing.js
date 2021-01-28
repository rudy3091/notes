(function() {
	// event handler 외부에 변수를 선언
	// event가 발생되면 500 초 뒤에 setTimeout 내 함수 실행
	// 이 방법으로 debouncing 구현시 모든 interaction이 종료되어야
	// 의도한 작업이 실행되는 단점이 존재
	// 즉, event의 trailing에 작업이 진행됨
	let tick;
	let cnt = 0;
	function handleScroll(e) {
		if (tick) clearTimeout(tick);

		tick = setTimeout(() => {
			console.log(cnt);
			cnt += 1;
		}, 200);
	}

	const doSomething = () => {
		// do something
		console.log("hey");
	}

	// 이렇게 쓰면 좀 더 함수형 프로그래밍 맛이 남
	// func에 handler function을 전달하면 됨(예시에서 doSomething)
	function debounce(func, offset) {
		let _tick;
		return function() {
			if (_tick) clearTimeout(_tick);
			_tick = setTimeout(func, offset);
		}
	}

	// 위에서 말한 것처럼 event를 trailing이 아니라
	// leading 에서 실행하고 싶으면,
	// 즉 event가 발생하는 그 시점에 실행 후 일정 시간동안
	// handler를 실행하고 싶지 않으면 아래와 같이 사용함
	function debounceLeading(func, offset) {
		let _tick;

		return function() {
			let yes = !_tick;
			clearTimeout(_tick);
			_tick = setTimeout(_ => _tick = null, offset);

			if (yes) func();
		}
	}

	// doSomething을 handler로 200ms동안 debounce
	window.addEventListener("scroll", debounceLeading(doSomething, 200));
})();
