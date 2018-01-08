var chalk = require('chalk');
var express = require('express');
var jokes = require('./jokeHandler');
var app = express();
var utils = require('./utils');

app.get('/knockknock', function(req, res){
  res.status(200).send(jokes.createKnockKnock());
});

app.get('/knockknock/inCaps', function(req, res){
  res.status(200).send(utils.inCaps(jokes.createKnockKnock()));
});

app.get('/knockknock/inQuotes', function(req, res){
  res.status(200).send(utils.inQuotes(jokes.createKnockKnock()));
});

app.get('/knockknock/xTimes/:num', function(req, res){
  res.status(200).send(utils.xTimes(jokes.createKnockKnock, req.params.num));
});

app.get('/oneliner', function(req, res){
  res.status(200).send(jokes.createOneLiner());
});

app.get('/oneliner/inCaps', function(req, res){
  res.status(200).send(utils.inCaps(jokes.createOneLiner()));
});

app.get('/oneliner/inQuotes', function(req, res){
  res.status(200).send(utils.inQuotes(jokes.createOneLiner()));
});

app.get('/oneliner/xTimes/:num', function(req, res){
  res.status(200).send(utils.xTimes(jokes.createOneLiner, req.params.num));
});

var PORT = 8000;

app.listen(PORT, function() {
  console.log(chalk.blue('server started on port', chalk.magenta(PORT)));
});
