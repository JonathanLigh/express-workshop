var chalk = require('chalk');
var server = require('http').createServer();
var express = require('express');
var jokes = require('./jokeHandler');
var app = express();

server.on('request', app);

var PORT = 8000;

server.listen(PORT, function() {
        console.log(chalk.blue('server started on port', chalk.magenta(PORT)));
    });

app.use('/knockknock', function(req, res){
  res.status(200).send(jokes.createKnockKnock());
});

app.use('/oneliner', function(req, res){
  res.status(200).send(jokes.createOneLiner());
});
