var http = require('http')
var meta = require("./aux")

var myServer =http.createServer(function(req,res){//coloca servidor em funcionamento esta em loop à espera de um pedido
    res.writeHead(200,{'Content-type':'text/plain; charset=utf-8'})//codigo 200 (ok) para informar se o pedido foi bem processado //estou a enviar texto
    console.log(req.method+" "+req.url+ " "+ meta.myDateTime())
    res.write("<p>"+meta.myName()+ "turma: "+meta.turma+"</p>")
    res.write("URL:<p>"+req.url+"</p>")
    res.end();//fechar o pacote
}); //o servidor pode ter varios servicos

myServer.listen(7777)
console.log("servidor à escuta na porta 7777")
//curl permite fazer pedidos http | curl 'localhost:7777/'
//um servidor que funciona em node é melhor que uma que usa apache


