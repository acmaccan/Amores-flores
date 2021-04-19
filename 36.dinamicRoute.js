var express = require("express");
var app = express();

const pug = require("pug");

app.use(express.static(__dirname+"/public"));

var flores_array = [
    {nombre:"Crisantemo",texto:"De las favoritas de Japón",imagen:"Crisantemo.jpg"},
    {nombre:"Verbena",texto:"De las favoritas de España",imagen:"Verbena.jpg"},
    {nombre:"Ceibo",texto:"De las favoritas de Argentina",imagen:"Ceibo.jpg"},
    {nombre:"Iris",texto:"La que está en el jardín del fondo",imagen:"Iris.jpg"},
]

app.get("/", (req, res)=>{
    //res.send("index.html");
    res.render("index.pug",{
        titulo: "Flores del mundo",
        texto: "Selecciona una flor",
        imagen: "flores.jpg",
        flores: flores_array
    });
});

app.get("/flor/:nombre",(req, res)=>{
    var datosFlor = flores_array.filter((flor)=>{
        if(req.params.nombre==flor.nombre){
            return flor;
        }
    })[0];

    res.render("flor.pug",{
        nombre: req.params.nombre,
        data: datosFlor
    });
});


app.listen(3000,()=>{
    console.log("Servidor en el puerto 3000");
});