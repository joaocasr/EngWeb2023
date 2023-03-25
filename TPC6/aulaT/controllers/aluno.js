var studentModel = require('../models/aluno')

module.exports.list = () => {
    return studentModel.find().sort({nome:1})
        .then(dados => {
            alldata = []
            for(let i=0;i<dados.length;i++){
                alldata[i]=dados[i]
            }
            return alldata
        })
        .catch(erro => {
            console.log("Erro: " + erro)
        })
}


module.exports.getaluno= id =>{
    return studentModel.findOne({_id:id})
    .then(student => {
        return student
    })
    .catch(erro => {
        console.log("Erro: " + erro)
})
}

module.exports.addAluno= a =>{
    return studentModel.create({
        _id:a.id,
        nome:a.nome,
        repositório:a.repositório,
        tpc1:a.tpc1,
        tpc2:a.tpc2,
        tpc3:a.tpc3,
        tpc4:a.tpc4,
        tpc5:a.tpc5,
        tpc6:a.tpc6,
        tpc7:a.tpc7,
        tpc8:a.tpc8})
        .then(resp=>{
            return resp
        })        
    .catch(error=>{
        return error
    })
}

module.exports.updateAluno= a =>{
    return studentModel.updateOne({_id:a._id},a)
    .then(resp=>{
        return resp
    }).catch(error=>{
        return error
    })
}

module.exports.removeAluno= id =>{
    return studentModel.updateOne({_id:id})
    .then(resp=>{
        return resp
    }).catch(error=>{
        return error
    })
}
/*
module.exports.removeAluno= id =>{
    return axios.delete('http://localhost:3000/alunos/'+id)
    .then(resp =>{
        return resp.data
    })
    .catch(error=>{
        return error
    })
}



*/