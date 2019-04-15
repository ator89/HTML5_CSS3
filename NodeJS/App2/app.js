//Import Express

//1. Require express module
var express = require('express');

//create object of express
var app = express();


app.set('view engine', 'ejs');


app.get('/', function(req,res){
  //Send a string
  //res.send('this is the homepage');
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req,res){
  res.send('this is the contact page');
});

app.get('/404', function(req,res){
  res.send('404 Error - Not Found');
});

//Inject dynamic content
app.get('/profile/:name', function(req,res){
  //res.send('You are viewing the profile of ' + req.params.name);
  //res.render('profile');
  var data = {age: 29, job: 'coder', hobbies: ['eating', 'learning', 'coding']};
  res.render('profile', {person: req.params.name, data: data });
});

//3. Listen to desired port
app.listen(3000);
