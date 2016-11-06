var http = require('http');
var express = require("express");
var app = express();

app.set("view engine", "vash");

require("./controllers").init(app);

var server = http.createServer(app);
server.listen(3001);