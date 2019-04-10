//Read and Write files

//Import fs modules
var fs = require('fs');

//readFileSync() método para leer archivos
//Bloquea el flujo del código hasta que se completa
//var readMe = fs.readFileSync('readMe.txt', 'utf-8');

//Print content of readMe variable
//console.log(readMe);


//fs.writeFileSync('writeMe.txt', readMe);

//var newReadMe = fs.readFileSync('writeMe.txt', 'utf-8');
//console.log(newReadMe);


//Método sin sincronizar, puede ejecutarse sin detener el flujo del código
fs.readFile('readMe.txt', 'utf8', function(err, data){
  //console.log(data);
  fs.writeFile('write.txt',data);
});



console.log('test');
