var fs = require('fs');
var path = require('path');

fs.readdir('./archivos', (err, archivos)=>{
    archivos.forEach((archivo)=>{
        var file = path.join(__dirname, 'archivos', archivo);
        var datos = fs.statSync(file);
        
        //Nos devuelve cada archivo y su metainformación
        //console.log(file, datos);

        //Enlista los archivos y sus rutas
        /*if(datos.isFile()){
            console.log(file);
        }
        */

        //Lee el nombre y el texto contenido en los archivos
        if(datos.isFile() && archivo!== '.DS_Store'){
            fs.readFile(file, 'UTF-8', (err, data)=>{
                console.log(archivo, data);
                console.log('************************************************');
            });
        }

    });
});