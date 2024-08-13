// iniciando
const express = require("express");
const routerHome = require("./routes/homeRoute");
const app = express();

// habilitar para pegar a requisição pelo body
app.use(express.urlencoded({express:true}));
// para o ejs funcionar
app.set("view engine", "ejs");

app.use("/", routerHome);

// iniciando servidor remoto
app.listen(5000, function () {
    console.log("servidor iniciado!\n");
})
