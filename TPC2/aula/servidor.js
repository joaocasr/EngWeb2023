var http = require('http') 

http.createServer(function(req,res){//coloca servidor em funcionamento esta em loop à espera de um pedido
    res.writeHead(200,{'Content-type':'text/plain'});//codigo 200 (ok) para informar se o pedido foi bem processado //estou a enviar texto
    res.end('Hello');//fechar o pacote
}).listen(7777); //o servidor pode ter varios servicos

console.log("servidor à escuta na porta 7777")
//curl permite fazer pedidos http | curl 'localhost:7777/'
//um servidor que funciona em node é melhor que uma que usa apache


