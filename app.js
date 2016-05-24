
var port = process.env.PORT || 5000;
process.env.PWD = process.cwd();

var compression = require('compression');
var express = require("express");
var http = require("http");
var app = express();

app.use(compression());

app.use(express.static(process.env.PWD));

app.get("/", function(request, response) {
    response.send('Hey!!');

});


app.listen(port);