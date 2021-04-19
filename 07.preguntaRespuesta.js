//process.stdout.write("Hola ");
//process.stdout.write("cara de bola\n\n");

var preguntas = ["Cuál es tu nombre?", "Cuál es tu apellido?"];
var respuestas = [];

function pregunta(i){
    process.stdout.write(`\n ${preguntas[i]}`);
    process.stdout.write(": ");
}

//Recibe data
process.stdin.on('data', function(data){
    //process.stdout.write('\n' +data.toString().trim()+'\n');
    respuestas.push(data.toString().trim());
    if(respuestas.length < preguntas.length){
        pregunta(respuestas.length);
    } else {
        process.exit();
    }
});

process.on('exit', function() {
    process.stdout.write('\n Hasta la vista, '+respuestas[0]+' '+respuestas[1]+'\n\n');
})

pregunta(0);