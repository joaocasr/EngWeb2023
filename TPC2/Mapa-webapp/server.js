var http = require('http')
var url = require('url')
var fs = require('fs')

function get_Date(){
    return new Date().toISOString().substring(0,19)
}

const dir = '/home/joao/EngWeb2023/TPC2/Mapa-webapp';

var server = http.createServer(function(req, res){ //request, response
    var pedido = url.parse(req.url,true)
    path=pedido.pathname
    if(path=="/") path="/mapa"
    path_dir = dir+path+".html"
    if(path=="/style.css") path_dir=dir+path
    fs.readFile(path_dir,function(error,data){
        console.log("Request: "+req.url+" Time:"+get_Date())
        if(path=="/style.css") res.writeHead(200,{'Content-type':'text/css; charset=utf-8'})
        else res.writeHead(200,{'Content-type':'text/html; charset=utf-8'})
        if(error){
            res.write("ERROR "+error)
        }else{ 
            res.write(data)
        }
        res.end()
    })
})

server.listen(4444)
console.log("Listening on port 4444...")

