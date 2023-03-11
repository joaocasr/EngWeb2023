var http = require('http')
var axios = require('axios')
var templates = require('./templates')
var static = require('./static.js')

var server = http.createServer(function (req, res) {
    // Logger: what was requested and when it was requested
    var d = new Date().toISOString().substring(0, 16)
    console.log(req.method + " " + req.url + " " + d)

    if(static.staticResource(req)){
        console.log("STATIC: "+req)
        static.serveStaticResource(req, res)
    }
    else{
    switch(req.method){
        case "GET": 
            // GET /tasks --------------------------------------------------------------------
            if((req.url == "/") || (req.url == "/tasks")){
                axios.get("http://localhost:3000/tasks")
                    .then(response => {
                        var tarefas = response.data
                        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                        res.end(templates.tasksPage(tarefas, d))
                    })
                    .catch(function(erro){
                        res.writeHead(404, {'Content-Type': 'text/html;charset=utf-8'})
                        res.end(templates.errorPage("Não foi possível disponibilizar as tarefas",d))
                    })
            }
        }
    }
})

server.listen(7777)