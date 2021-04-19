var fs = require('fs');


//Mover directorio síncrona
/*fs.renameSync('./01/02', './02');
console.log('Carpeta movida');*/

//Borrar directorio síncrona
/*fs.rmdirSync('./01');
console.log('Carpeta borrada');*/

//Borrar dir asíncrona

//Esta primera call es para vaciar la carpeta y después no tire error
fs.readdirSync('./02').forEach((archivo)=>{
    fs.unlinkSync('./02/'+archivo);
})

//Esta call es para borrar la carpeta
fs.rmdir('./02', (err)=>{
    if (err) {
        throw err; //Tirará throw si la carpeta no esta borrada, devuelve ENOTEMPTY
    } else {
        console.log('Carpeta borrada'); 
    }
});