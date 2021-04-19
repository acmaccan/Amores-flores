var path = require('path');
var saludo = 'Hola cara de bola';

console.log(saludo);
console.log(__filename);
console.log(__dirname);
console.log(path.basename(__filename));

console.log(`El archivo ${path.basename(__filename)} se está ejecutando`);