var fs = require('fs');

//Si este archivo fuera muy grande, puede demorar el proceso al compilar
//var archivo = fs.readFileSync('./archivos/archivo1.txt');


//Carateres texto
/*var stream = fs.createReadStream('./archivos/archivo1.txt', "UTF-8");
var texto = "";
stream.on('data', (textoParcial)=>{
    console.log(textoParcial.length);
    console.log('\n');
    texto += textoParcial;
});
console.log('Texto leido: ',texto.length);*/

//Caracteres leidos al final con chunks
/*var stream = fs.createReadStream('./archivos/archivo1.txt', "UTF-8");
var texto = "";
stream.on('data', (textoParcial)=>{
    console.log('Caracteres leidos: ',textoParcial.length);
    console.log('\n');
    texto += textoParcial;
});

stream.on('end',()=>{
    console.log('Texto leido: ',texto.length);
});*/

//Lee cuando inicia la carga
var stream = fs.createReadStream('./archivos/archivo1.txt', "UTF-8");
var texto = "";
stream.once('data', ()=>{
    console.log('Inicio de carga');
});

stream.on('data', (textoParcial)=>{
    console.log('Caracteres leidos: ',textoParcial.length);
    texto += textoParcial;
});

stream.on('end',()=>{
    console.log('Texto leido: ',texto.length);
});