var http = require('http');

var server = http.createServer((req, res)=>{
    //Encabezado
    res.writeHead(200, {'Content-type':'text/html'});
    res.end(`<!doctype html>
             <html>
             <head>
             <title>Pagina</title>
             </head>
             <body>
             <h1>Pagina HTML</h1>
             <h2>${req.url}</h2>
             <h2>${req.method}</h2>
             </body>
             </html>`)
});

server.listen(3000);
console.log('El servidor revisa el puerto 3000');