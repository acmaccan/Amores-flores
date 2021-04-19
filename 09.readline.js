var readline = require("readline");
var rl = readline.createInterface({input:process.stdin, output:process.stdout});

let num = Math.floor((Math.random()*10)+1);
let limite = 4;
let int = 1;

rl.question('Adivina el número entre 1y 10: ', (respuesta)=>{
    //console.log(respuesta);
    int++;
    if(respuesta.trim() == num){
        rl.close();
    } else {
        rl.setPrompt('Intento '+int+' adivine nuevamente');
        rl.prompt();
        rl.on('line', (respuesta)=>{
            if(respuesta.trim() == num){
                rl.close();
            } else {
                int++;
                if(int<limite){
                rl.setPrompt('Intento '+int+' adivine nuevamente');
                rl.prompt();
                } else {
                    rl.close();
                }
            }
        })
    }
});

rl.on('close', ()=>{
    console.log('El número mágico es'+num);
})