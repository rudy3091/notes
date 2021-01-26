const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

app.use(express.static("./client"));

app.get("/", (req, res) => {
	fs.readFile(path.join(__dirname, "/client/test.html"), (err, data) => {
		res.end(data);
	});
});

app.get("/req", (req, res) => {
	setTimeout(() => {
		res.end("hey");
	}, 1500);
})

app.listen(8080, () => {
	console.log("listening");
});
