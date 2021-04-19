//Crea interface
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var fs = require('fs');

rl.question('Dame la fecha de tus pendientes (YYYYMMDD)', (data)=>{
    //Crear archivo - Cuando estás en el CMD te va a pedir el ingreso de la fecha
    //y en cada línea te va a pedir que ingreses una tarea
    //Hasta que pongas fin, creará el archivo y podrás verlo
    fs. writeFileSync(data+'.txt', "Pendientes para el día "+data+'\n');
    rl.setPrompt('Pendiente para el día de hoy o fin: ');
    rl.prompt();
    rl.on('line', (pendiente)=>{
        fs.appendFileSync(data+'.txt', pendiente.trim()+'\n');
    
        if(pendiente.toLowerCase().trim()==='fin'){
            rl.close();
        } else {
            rl.setPrompt('Pendiente para el día de hoy o fin: ');
            rl.prompt();
        }
    });
});

rl.on('close', ()=>{
    console.log('\n Gracias, hasta la vista baby!');
    process.exit;
});