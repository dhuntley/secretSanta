var express = require("express");
var app = express();

app.set("port", (process.env.PORT || 5000));

app.get("/", function(request, response) {
  const params = request.query;
  console.log(params.codename);
  response.setHeader("content-type", "text/javascript");
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.send(JSON.stringify(params));
});

app.listen(app.get("port"), function() {
  console.log("Node app is running on port", app.get("port"));
});