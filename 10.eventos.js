/*var events = require('events').EventEmitter;
var emisor = new events.EventEmitter();

emisor.on('miEvento', (mensaje, status)=>{
    console.log(status, mensaje);
});
emisor.emit('miEvento','Hola, cara de bola', 200);*/

//Creamos clase
var EventEmitter = require('events').EventEmitter;
//Creamos instancia
var util = require('util');
//Llamamos
var Mascota = function(nombre){
    this.nombre = nombre;
}

util.inherits(Mascota, EventEmitter);

//crear instancia
var canela = new Mascota('Canela');

canela.on('dice', function(dice){
    console.log(this.nombre+' dice: '+dice);
});

//Emitimos
canela.emit('dice','Guau, guau, guau');
