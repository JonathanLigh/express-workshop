var chalk = require('chalk');
var server = require('http').createServer();
var express = require('express');
var app = express();

server.on('request', app);

var PORT = 8000;

server.listen(PORT, function() {
        console.log(chalk.blue('server started on port', chalk.magenta(PORT)));
    });
/*
Server routing code here:

*/
