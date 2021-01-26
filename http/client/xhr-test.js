(function () {
	const spinner = document.querySelector(".spinner");

	const x = new Xhr("http://localhost:8080/req", "GET", (data) => {
		spinner.classList.add("hidden");
		document.body.innerHTML += `<span>response: ${data}</span>`
	});

	function getData() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve("hi");
			}, 3000);
		});
	}
	getData().then(hi => console.log(hi));

	x.send();
})();

