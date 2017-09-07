var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var port = 8000;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

var expressHandlebars = require("express-handlebars");

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

var routes = require("./controllers/burgerController.js");

app.use("/", routes);

app.listen(port);
