var fs = require('fs');

fs.mkdirSync('dir2');
fs.rmdirSync('dir2');

//Asynchronous way
fs.mkdir('stuff',function(){
  fs.readFile('readMe.txt', 'utf8', function(err, data){
    fs.writeFile('./stuff/writeMe.txt', data);
  });
});


fs.unlink('./stuff/writeMe.txt', function(){
  fs.rmdir('stuff');
});
