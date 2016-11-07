var http = require('http');
var express = require("express");
var app = express();

app.set("view engine", "vash");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

var session = require("express-session");
app.use(session({ "NodeJsMessagesServer" }));

require("./controllers").init(app);

var server = http.createServer(app);
server.listen(3001);