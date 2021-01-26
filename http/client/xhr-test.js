(function () {
	const spinner = document.querySelector(".spinner");

	// setTimeout(() => {
	// 	spinner.classList.add("hidden");
	// }, 2500);

	const x = new Xhr("http://localhost:8080/req", "GET", (data) => {
		spinner.classList.add("hidden");
		document.body.innerHTML += "<span>response: " + data + "</span>";
	}).send();
})();

