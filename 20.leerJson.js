/*var paquete = require('./package.json');
console.log(paquete);

//Si dentro del objeto hay arreglos, se puede hacer un for para ver
for (let index = 0; index < 5; index++) {
    console.log(paquete); //Dentro del parámetro indicar qué queremos ver
}*/

//No es necesario leerlo con filesystem, pero si tuviéramos que hacerlo así:
var fs = require('fs');

fs.readFile('./package.json', (err, datos)=>{
    console.log(JSON.parse(datos));
});