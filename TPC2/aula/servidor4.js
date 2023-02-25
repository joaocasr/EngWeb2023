var http = require('http');
var meta = require("./aux")
var url = require('url')
var soma =0

var myServer =http.createServer(function(req,res){//coloca servidor em funcionamento esta em loop à espera de um pedido
    res.writeHead(200,{'Content-type':'text/plain; charset=utf-8'})//codigo 200 (ok) para informar se o pedido foi bem processado //estou a enviar texto
    console.log(req.method+" "+req.url+ " "+ meta.myDateTime())

    var q = url.parse(req.url,true)
    res.write("<pre>"+JSON.stringify(q)+"</pre>")
    if(q.pathname=="/add"){
        for( const [k,v] of q.query.valueOf){
            soma += v
        }
    }
    res.write("SOMA"+soma)
    res.end();//fechar o pacote
}); //o servidor pode ter varios servicos

myServer.listen(7777)
console.log("servidor à escuta na porta 7777")
//curl permite fazer pedidos http | curl 'localhost:7777/'
//um servidor que funciona em node é melhor que uma que usa apache
//callback executa apos o termino da outra


