var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer((req, res)=>{
    console.log(`${req.method} solicitud ${req.url}`);
}).listen(3000);

console.log('Servidor local en el puerto 3000');