var tiempo = 3000;
var tiempoActual = 0;
var tiempoIntervalo = 50;
var porCien = 0;

function porcentaje(p){
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write('Porcien: '+p+'%');
}

var intervalo = setInterval(function(){
    tiempoActual += tiempoIntervalo;
    porCien = Math.floor((tiempoActual/tiempo)*100);
    porcentaje(porCien);
    //console.log('Tiempo transcurrido: '+(tiempoActual/1000)+' segundos\n');
}, tiempoIntervalo);

setTimeout(function(){
    clearInterval(intervalo);
    porcentaje(100);
    console.log('\n\nGame over\n\n');
}, tiempo);

porcentaje(porCien);