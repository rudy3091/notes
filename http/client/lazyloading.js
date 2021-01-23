/* demo:
 * https://codepen.io/rudypark3091/pen/MWjdXJR
 *
 * html, css is needed to make this fully functional
 *
 */

window.onload = () => {
	const images = Array.from(document.querySelectorAll("img"));

	const inter = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting && entry.target.classList[0] !== "fade-in") {
				const target = entry.target;
				const src = target.getAttribute("data-src");

				target.setAttribute("src", src);
				target.classList.add("fade-in");
				observer.unobserve(target);
			}
		});
	});

	images.forEach((image) => {
		inter.observe(image);
	});
};

