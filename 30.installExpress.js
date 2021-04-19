var express = require("express");
var app = express();

app.get("/", (req, res)=>{
    res.send("Hola desde express");
});

app.listen(3000,()=>{
    console.log("Servidor en el puerto 3000");
});