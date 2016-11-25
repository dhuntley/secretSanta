var express = require("express");
var fs = require("fs");

var app = express();
var matches = JSON.parse(fs.readFileSync("matches.json", "utf8"));

app.set("port", (process.env.PORT || 5000));

app.get("/", function(request, response) {
	const params = request.query;
	console.log(params.codename);
	response.setHeader("content-type", "text/javascript");
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.send(JSON.stringify({
		realName: "Daniel",
		targetName: "Jenny"
	}));
});

app.listen(app.get("port"), function() {
	console.log("Node app is running on port", app.get("port"));
});