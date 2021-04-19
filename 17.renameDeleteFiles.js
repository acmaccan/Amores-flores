var fs = require('fs');

//Síncrona
/*try {
    fs.renameSync('./17.archivoModificado.js', './17.archivoModificado.txt');
} catch (error) {
    console.log(error);
}*/

//Asíncrona - en el segundo no es necesario indicarle el path
/*fs.rename('./17.archivoModificado.txt', '17.archivoModificado.js', (err)=>{
    if (err) {
        console.log(err);
    } else {
        console.log('Archivo renombrado\n');
    }
});*/

//Borrar archivos Síncrona
/*try {
    fs.unlinkSync('17.archivoModificado.js');
} catch (err) {
    console.log(err);
}*/

//Borrar archivos Asíncrona
fs.unlink('17.archivoModificado.js', (err)=>{
    if (err) {
        console.log(err);
    } else {
        console.log('Archivo eliminado\n');
    }
});

//IMPORTANTE: NO HAY RECYCLE BIN, UNA VEZ QUE SE BORRA UN ARCHIVO NO SE PUEDE RECUPERAR