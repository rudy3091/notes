/*
 * demo:
 * https://codepen.io/rudypark3091/pen/gOLOPrB
 *
 * html, css is needed to make this fully functional
 */

(function () {
	window.onload = () => {
		// to use Array.push(), use Array.from()
		// document.querySelectorAll returns not "Array", but "NodeList"
		const boxes = Array.from(document.querySelectorAll(".box"));
		let n = boxes.length;

		const inter = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				// operation for content seen on screen
				if (entry.isIntersecting) {
					const target = entry.target;
					target.style.backgroundColor = "#fff";
					observer.unobserve(target);
				}

				// if the last content is seen on screen
				// load more content
				if (target === boxes[n - 1]) {
					loadMore();
					n = boxes.length;
				}
			});
		});

		function loadMore() {
			// loading additional content
			for (let i = 0; i < 5; i++) {
				const box = document.createElement("div");
				box.classList.add("box");
				document.body.appendChild(box);
				boxes.push(box);
				inter.observe(box);
			}
		}

		// observe content
		boxes.forEach(_box => {
			inter.observe(_box);
		});
	}
})();
