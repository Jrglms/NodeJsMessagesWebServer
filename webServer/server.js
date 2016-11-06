var http = require('http');
var express = require("express");
var app = express();

app.set("view engine", "vash");

var server = http.createServer(app);
server.listen(3001);