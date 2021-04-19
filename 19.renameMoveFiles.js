var fs = require('fs');

//Rename
/*fs.rename('./archivos/archivo1.txt','./archivos/archivo01.txt', (err)=>{
    if(err) throw err;
    console.log('Archivo renombrado');
});*/

//Move
fs.rename('./archivos/archivo01.txt','./archivo01.txt', (err)=>{
    if(err) throw err;
    console.log('Archivo movido');
});