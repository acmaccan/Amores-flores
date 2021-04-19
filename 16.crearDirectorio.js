//Crea interface
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var fs = require('fs');
var path = require('path');
var dir = 'pendientes';

if(fs.existsSync()){
    console.log('La carpeta ya existe\n\n');
} else {
    fs.mkdir(dir,(err)=>{
        if(err){
            console.log(err);
        } else {
            console.log('Carpeta creada\n\n')
        }
    });
}

rl.question('Dame la fecha de tus pendientes (YYYYMMDD)', (data)=>{

    //Es parácticamente el ej anterior, pero se agrega esta línea para la creación
    //del directorio y se cambian más abajo el data.txt por la var archivo
    var archivo = path.join(__dirname, dir, data+'.txt');

    fs. writeFileSync(archivo, "Pendientes para el día "+data+'\n');
    rl.setPrompt('Pendiente para el día de hoy o fin: ');
    rl.prompt();
    rl.on('line', (pendiente)=>{
        fs.appendFileSync(archivo, pendiente.trim()+'\n');
    
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