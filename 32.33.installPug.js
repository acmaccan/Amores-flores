//Antes se llamaba jade

var express = require("express");
var app = express();

const pug = require("pug");

app.use(express.static(__dirname+"/public"));

app.get("/", (req, res)=>{
    //res.send("index.html");
    res.render("index.pug");
});

app.listen(3000,()=>{
    console.log("Servidor en el puerto 3000");
});