//Import Express

//1. Require express module
var express = require('express');
var bodyParser = require('body-parser');
//create object of express
var app = express();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));//Static files


app.get('/', function(req,res){
  //Send a string
  //res.send('this is the homepage');
  //res.sendFile(__dirname + '/index.html');
  res.render('index');
});

app.get('/contact', function(req,res){
  //res.send('this is the contact page');
  //res.sendFile(__dirname + '/contact.html');

  //console.log(req.query); //Print the string query
  //res.render('contact'); //

  res.render('contact', {qs: req.query});
});

//Using middleware
app.post('/contact', urlencodedParser, function(req,res){
  console.log(req.body);
  res.render('contact-success', {data: req.body});
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
