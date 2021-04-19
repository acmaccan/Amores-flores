var fs = require('fs');

/*
//Síncrona
var archivos = fs.readdirSync('./');
console.log(archivos);
*/

//Asíncrona - con fc callbak - "Es mejor"
fs.readdir('./',(err,archivos)=>{
    if(err){
        throw err;
    }
    console.log(archivos);
});

//Leyenda de callback
console.log('Leyendo los archivos del directorio');