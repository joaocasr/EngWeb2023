var http = require('http');
var meta = require("./aux")
var url = require('url')
var fs = require('fs')

var myServer =http.createServer(function(req,res){
    console.log(req.method+" "+req.url+ " "+ meta.myDateTime())
    var pedido= url.parse(req.url,true)

    fs.readFile("index"+pedido.substring(0,1)+".html",function(err,data){
        res.writeHead(200,{'Content-type':'text/html; charset=utf-8'})
        if(err){
            res.write("ERROR: "+err)        
        }else{
            res.write(data)        
        }
        res.end()
    })
})

myServer.listen(7777)
console.log("servidor à escuta na porta 7777")
