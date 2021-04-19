var exec = require('child_process').exec;
var interval = setInterval(()=>{
    numeros = "";
    for(var i = 0; i < 7; i++){
        numeros += Math.floor((Math.random()*100)+1)+" ";
    }
    process.stdout.write(numeros+'\n');
},1000);

var spawn = require('child_process').spawn;
var cp = spawn('node',['numeros']);
cp.stdout.on('data',(data)=>{
    console.log('Melate: '+data.toString().trim());
});

process.stdin.on('data',(data)=>{
    console.log('Buena suerte...');
    process.exit();
})