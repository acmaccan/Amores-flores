//console.log(process.argv);

function busca(llave){
    var i = process.argv.indexOf(llave);
    return (i===-1) ? null : process.argv[i+1];
}

var usuario = busca("--u");
var saludo = busca("--s");

if(usuario || saludo) {
    console.log(`Bienvenido ${usuario}, ${saludo}`);
} else {
    console.log(`Lo siento, pero no te conozco`);
}