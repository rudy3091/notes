const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

app.use(express.static("./"));

app.get("/", (req, res) => {
	fs.readFile(path.join(__dirname, "/test.html"), (err, data) => {
		res.end(data);
	});
});

app.get("/req", (req, res) => {
	res.end("hey");
})

app.listen(8080, () => {
	console.log("listening");
});
