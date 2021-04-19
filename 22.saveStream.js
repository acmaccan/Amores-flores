var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var fs = require('fs');

rl.question('Dame la fecha de tus pendientes (YYYYMMDD)', (data)=>{
    var stream = fs.createWriteStream(data+'.txt');
    stream.write('Pendientes para el día '+data+'\n')
    
    rl.setPrompt('Pendiente para el día de hoy o fin: ');
    rl.prompt();
    rl.on('line', (pendiente)=>{
        if(pendiente.toLowerCase().trim()==='fin'){
            stream.close();
            rl.close();
        } else {
            stream.write(pendiente.trim()+'\n');

            rl.setPrompt('Pendiente para el día de hoy o fin: ');
            rl.prompt();
        }
    });
});

rl.on('close', ()=>{
    console.log('\n Gracias, hasta la vista baby!');
    process.exit;
});