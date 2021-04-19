var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer((req, res)=>{
    console.log(`${req.method} solicitud ${req.url}`);

    if(req.url==='/'){
        fs.readFile('./public/index.html', 'UTF-8',(err,html)=>{
            res.writeHead(200,{'Content-type':'text/html'});
            res.end(html);
        });
    } else if(req.url.match(/.css$/)){
        var cssArchivo = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(cssArchivo, 'UTF-8');
        fileStream.pipe(res);
    } else if(req.url.match(/.jpg$/)){
        var imagen = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(imagen);
        res.writeHead(200,{'Content-type':'image/jpeg'});
        fileStream.pipe(res);
    } else {
        res.writeHead(404,{'Content-type':'text/plain'});
        res.end('404 Pagina no encontrada');
    }
}).listen(3000);

console.log('Visualizando puerto 3000'); 
// Si compilás por cmd y vas modificando sólo esta línea (ej) y vas guardando, ves como automáticamente
// Se va modificando la salida en el cmd