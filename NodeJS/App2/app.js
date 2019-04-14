//Import Express

//1. Require express module
var express = require('express');

//create object of express
var app = express();

app.get('/', function(req,res){
  res.send('this is the homepage');
});
app.get('/contact', function(req,res){
  res.send('this is the contact page');
});

app.get('/404', function(req,res){
  res.send('404 Error - Not Found');
});

//3. Listen to desired port
app.listen(3000);
