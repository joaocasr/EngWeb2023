var http = require('http')
var axios = require('axios')
var templates = require('./templates')
var static = require('./static.js')
const { parse } = require('querystring');

// Aux functions
function collectRequestBodyData(request, callback) {
    if(request.headers['content-type'] === 'application/x-www-form-urlencoded') {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            callback(parse(body));
        });
    }
    else {
        callback(null);
    }
}

// Server creation

var server = http.createServer(function (req, res) {
    // Logger: what was requested and when it was requested
    var d = new Date().toISOString().substring(0, 16)
    console.log(req.method + " " + req.url + " " + d)

    // Handling request
    if(static.staticResource(req)){
        static.serveStaticResource(req, res)
    }
    else{
        switch(req.method){
            case "GET": 
                // GET /alunos --------------------------------------------------------------------
                if((req.url == "/") || (req.url == "/tasks")){
                    axios.get("http://localhost:3000/tasks")
                        .then(response => {
                            var tasks = response.data
                            // Render page with the student's list
                            res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                            res.write(templates.tasksPage(tasks,null, d))
                            res.end()
                        })
                        .catch(function(erro){
                            res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                            res.write("<p>Não foi possível obter a lista de alunos... Erro: " + erro)
                            res.end()
                        })
                }
                else if(req.url.match("/tasks/task[0-9]+")){
                    console.log("fez match")
                    id=req.url.split("/")[2]
                    axios.get("http://localhost:3000/tasks")
                        .then(response => {
                            var tasks = response.data
                            axios.get("http://localhost:3000/tasks/"+id)
                            .then(responsetask => {
                            // Render page with the student's list
                                var task = responsetask.data
                                res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                                res.write(templates.tasksPage(tasks,task, d))
                                res.end()
                            })
                            .catch(function(erro){
                                res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                                res.write("<p>Não foi possível obter a lista de alunos... Erro: " + erro)
                                res.end()
                            })
                        })
                        .catch(function(erro){
                            res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                            res.write("<p>Não foi possível obter a lista de alunos... Erro: " + erro)
                            res.end()
                        })
                }
                break
            case "POST":
                if(req.url == "/tasks"){
                    console.log("POST condition")
                    collectRequestBodyData(req, result => {
                        if(result){
                            axios.post('http://localhost:3000/tasks', result)
                                .then(resp => {
                                    axios.get("http://localhost:3000/tasks")
                                    .then(response => {
                                        var tasks = response.data
                                        res.writeHead(201, {'Content-Type': 'text/html;charset=utf-8'})    
                                        res.end(templates.tasksPage(tasks,null,d))
                                    }).catch(error => {
                                        console.log('Erro: ' + error);
                                        res.writeHead(500, {'Content-Type': 'text/html;charset=utf-8'})
                                        res.write("<p>Unable to insert record...</p>")
                                        res.end()
                                    });
                                })
                                .catch(error => {
                                    console.log('Erro: ' + error);
                                    res.writeHead(500, {'Content-Type': 'text/html;charset=utf-8'})
                                    res.write("<p>Unable to insert record...</p>")
                                    res.end()
                                });
                        }
                        else{
                            res.writeHead(201, {'Content-Type': 'text/html;charset=utf-8'})
                            res.write("<p>Unable to collect data from body...</p>")
                            res.end()
                        }
                    })
                }
                else if(req.url.match('/tasks/task[0-9]+')){
                    collectRequestBodyData(req, result => {
                        if(result){
                            axios.put('http://localhost:3000/tasks/'+result.id, result)
                                .then(resp => {
                                    axios.get("http://localhost:3000/tasks")
                                    .then(response => {
                                        var tasks = response.data
                                        res.writeHead(201, {'Content-Type': 'text/html;charset=utf-8'})    
                                        res.end(templates.tasksPage(tasks,null,d))
                                    }).catch(error => {
                                        console.log('Erro: ' + error);
                                        res.writeHead(500, {'Content-Type': 'text/html;charset=utf-8'})
                                        res.write("<p>Unable to insert record...</p>")
                                        res.end()
                                    });
                                })
                                .catch(error => {
                                    console.log('Erro: ' + error);
                                    res.writeHead(500, {'Content-Type': 'text/html;charset=utf-8'})
                                    res.write("<p>Unable to insert record...</p>")
                                    res.end()
                                });
                        }
                        else{
                            res.writeHead(201, {'Content-Type': 'text/html;charset=utf-8'})
                            res.write("<p>Unable to collect data from body...</p>")
                            res.end()
                        }
                    })
                }
                else{
                    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                    res.write('<p>Unsupported POST request: ' + req.url + '</p>')
                    res.write('<p><a href="/">Return</a></p>')
                    res.end()
                }
                break
            default: 
                res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                res.write("<p>" + req.method + " unsupported in this server.</p>")
                res.end()
        }
    }
    
})

server.listen(7777, ()=>{
    console.log("Servidor à escuta na porta 7777...")
})


