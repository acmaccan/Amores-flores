var exec = require('child_process').exec;

//Para abrir ventana explorador
//exec('explorer');

//Para ver lo que tenemos en el dir
/*exec('dir', (err, salida)=>{
    if(err){
        throw err;
    }
    console.log(salida);
});*/

//Si queremos saber la versión de Git que tenemos instalada
exec('git version', (err, salida)=>{
    if(err){
        throw err;
    }
    console.log(salida);
});