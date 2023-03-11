var fs = require('fs')

function staticResource(request){ //metodo que verifica se está a ser pedido um recurso que se encontra em public
    names = request.url.split('/')
    namefile= names[names.length-1]
    if (fs.existsSync('public/')) {
        files = fs.readdirSync('public/')
        //console.log(files)
        return files.includes(namefile)
    } else {
        console.log("Directory does not exist")
        return false
    }
}

exports.staticResource = staticResource

function serveStaticResource(req, res){
    var partes = req.url.split('/')
    var file = partes[partes.length -1 ]
    //console.log(file+" "+partes+" "+req.url)
    fs.readFile('public/' + file, (erro, dados)=>{
        if(erro){
            console.log('Erro: ficheiro não encontrado ' + erro)
            res.statusCode = 404
            res.end('Erro: ficheiro não encontrado ' + erro)
        }
        else{
            if(file == '.*\/?\w\.ico$'){
                //console.log("a servir favicon.ico")
                res.setHeader('Content-Type', 'image/x-icon')
                res.end(dados)
            }
            else if(file.match(".*\/?w3\.css$")){
                res.setHeader('Content-Type', 'text/css')
                res.end(dados)
            }
            // PNG images
            else{
                res.setHeader('Content-Type', 'image/png')
                res.end(dados)
            }    
        }
    })
}

exports.serveStaticResource = serveStaticResource