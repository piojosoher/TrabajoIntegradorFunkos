/*
--CLase 18
const http = require ("http")

const port = 3030
const servidor= "localhost"

http.createServer((req, res)=>{
    res.writeHead(200,{"content-Type":"text/plain"})
    //res.end("Este es mi prmer server");

    if(req.url=="/"){
        res.end("Este es el home")
    }
    else if(req.url=="/conocenos"){
        res.end("Estas en la vista de conocenos")
    }
    else {
        res.writeHead(404,{"content-Type":"text/plain"})
        res.end("ERROR")
    }

}) .listen(port, servidor)
*/
const express = require("express") //Me exporto todas las funciones de Express
const app = express()  //Ejecuto las funciones de Express

const port = 3030
const servidor= "localhost"

app.use(express.static("public"))
//app.use(express.static(__dirname + '/public/'))

app.get("/", (req, res)=>{
    res.send("Home con Express")

});

app.get("/home", (req, res)=>{
    console.log(__dirname + '/public/')
    res.send("estas en HOME")
});

app.get("/conocenos", (req, res)=>{
    res.send("Pagina Conocenos")

});

//escucha
app.listen(port,()=>{
    console.log(`servidor ok en el puerto ${port}`)
}) 





