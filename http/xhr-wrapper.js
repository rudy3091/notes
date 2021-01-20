class Xhr {
	constructor(url, method, data, done) {
		this.data = data;
		this.xhr = new XMLHttpRequest();
		this.xhr.onreadystatechange = () => {
			const yes = this.xhr.readyState === 4 &&
				parseInt(this.xhr.status/100) === 2;
			const no = this.xhr.readyState === 4 &&
				parseInt(this.xhr.status/100) === 4 ||
				parseInt(this.xhr.status/100) === 5;
			if (yes) done(this.xhr.response);
		};
		this.xhr.open(method, url);
		this.xhr.setRequestHeader("Content-Type", "application/json");
	}

	send() {
		this.xhr.send(this.data);
	}
}
