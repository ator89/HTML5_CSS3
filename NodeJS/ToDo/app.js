var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

//Set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//Fire controllers
todoController(app);

//listen to port
app.listen(3001);
console.log('You are listening to port 3001');
