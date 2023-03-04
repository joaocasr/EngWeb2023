var http = require('http')
var fs = require('fs')
const axios = require('axios')
var mypages = require('./mypages.js')


function get_Date(){
    return new Date().toISOString().substring(0,19)
}

var server = http.createServer(function(req, res){ //request, response
    console.log(req.method + " "+ req.url +" "+get_Date())
    if(req.url=="/pessoas"){
        axios.get("http://localhost:3000/pessoas")
        .then(function(resp){
        var pessoas = resp.data //lista de dicionarios
        var d = get_Date()
        res.writeHead(200,{'Content-type':'text/html; charset=utf-8'})
        res.write(mypages.genMainPage(pessoas,d))
        res.end()
    }) 
    .catch(erro => { //anonymous function
        console.log(erro)
        res.writeHead(200,{'Content-type':'text/html; charset=utf-8'})
        res.end()
    }) 
    }else if(req.url=="/pessoasOrdenadas"){
        axios.get("http://localhost:3000/pessoas?_sort=nome")
        .then(function(resp){
        var pessoas = resp.data //lista de dicionarios
        var d = get_Date()
        res.writeHead(200,{'Content-type':'text/html; charset=utf-8'})
        res.write(mypages.genMainPage(pessoas,d))
        res.end()
    }) 
    .catch(erro => { //anonymous function
        console.log(erro)
        res.writeHead(200,{'Content-type':'text/html; charset=utf-8'})
        res.end()
    }) 
    }else if(req.url.match("\/pessoas\/p\\d+")){
        axios.get("http://localhost:3000/pessoas/"+req.url.substring(9))
        .then(function(resp){
        var pessoa = resp.data //dicionario da pessoa
        var d = get_Date()
        res.writeHead(200,{'Content-type':'text/html; charset=utf-8'})
        res.write(mypages.genPersonPage(pessoa,d))
        res.end()
    }) 
    .catch(erro => { //anonymous function
        console.log(erro)
        res.writeHead(200,{'Content-type':'text/html; charset=utf-8'})
        res.end()
    }) 
    }else if(req.url=="/pessoas/top10profissoes"){
        axios.get("http://localhost:3000/pessoas")
        .then(function(resp){
        var pessoas = resp.data 
        res.writeHead(200,{'Content-type':'text/html; charset=utf-8'})
        res.write(mypages.genTopPage(pessoas))
        res.end()
    }) 
    .catch(erro => { //anonymous function
        console.log(erro)
        res.writeHead(200,{'Content-type':'text/html; charset=utf-8'})
        res.end()
    }) 
    }
    else if(req.url=="/pessoas/sexo"){
        axios.get('http://localhost:3000/pessoas').then(function (resp){
            var pessoas= resp.data
            res.writeHead(200,{'Content-type':'text/html; charset=utf-8'})
            res.write(mypages.genSexoPage(pessoas))
            res.end()
        })
        .catch(erro => { //anonymous function
        console.log(erro)
        res.writeHead(200,{'Content-type':'text/html; charset=utf-8'})
        res.end()
    }) 
    }else if(req.url=="/pessoas/desportos"){
        axios.get('http://localhost:3000/pessoas').then(function (resp){
            var pessoas= resp.data
            res.writeHead(200,{'Content-type':'text/html; charset=utf-8'})
            res.write(mypages.genDesportosPage(pessoas))
            res.end()
        })
        .catch(erro => { //anonymous function
        console.log(erro)
        res.writeHead(200,{'Content-type':'text/html; charset=utf-8'})
        res.end()
    }) 
    }else if(req.url.match("\/w3\.css$")){
        //console.log("entrou")
        fs.readFile("w3.css",function(err,data){
            if(err){
                res.writeHead(404,{'Content-type':'text/html; charset=utf-8'})
                res.write("ERROR: "+err)        
                res.end()
            }else{
                res.writeHead(200,{'Content-type':'text/css'})
                res.write(data)        
                res.end()
            }
        })
    }else{
        res.writeHead(404,{'Content-type':'text/html; charset=utf-8'})
        res.write("Operação não suportada: "+req.url)
        res.end()
    }
})

server.listen(4444)
console.log("Listening on port 4444...")

