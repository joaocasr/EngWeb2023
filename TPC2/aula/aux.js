//criar modulo para usar no servidor
exports.myDateTime = function(){
    var d = new Date().toISOString().substring(0,16)
    return d
}

exports.myName = function() {
    return "joão paulo"
}

//exportar variavel
exports.turma = "engWeb2023-tp1"