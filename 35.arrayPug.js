var express = require("express");
var app = express();

const pug = require("pug");

app.use(express.static(__dirname+"/public"));

var flores_array = [
    {nombre:"Crisantemo",texto:"De las favoritas de Japón", imagen:"crisantemo.jpg"},
    {nombre:"Verbena",texto:"De las favoritas de España", imagen:"verbena.jpg"},
    {nombre:"Ceibo",texto:"De las favoritas de Argentina", imagen:"ceibo.jpg"},
    {nombre:"Iris",texto:"La que está en el jardín del fondo", imagen:"iris.jpg"},
]

app.get("/", (req, res)=>{
    //res.send("index.html");
    res.render("index.pug",{
        titulo: "Kiku",
        texto: "El crisantemo es una flor apreciada en Japón",
        imagen: "flowers.jpg",
        flores: flores_array
    });
});

app.listen(3000,()=>{
    console.log("Servidor en el puerto 3000");
});