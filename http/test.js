const x = new Xhr("http://localhost:8080/req", "GET", {}, (data) => {
	console.log(data);
}).send();

const y = new Xhr("http://localhost:8080/req", "GET", {}, (res) => {
	console.log("response:", res);
})
y.send();
