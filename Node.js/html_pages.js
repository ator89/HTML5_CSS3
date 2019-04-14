//Pipes work to simplifly readable and Writeable streams

var http = require('http');

var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);
  res.writeHead(200,{'Content-Type': 'text/html'});
  var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf-8');
  //var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

  myReadStream.pipe(res);
  //res.end('Hey now');
});

server.listen(3000,'127.0.0.1');
console.log('now listening to port 3000');
