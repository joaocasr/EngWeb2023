var examModel = require('../models/emd')

module.exports.list = () => {
    return examModel.find().sort({dataEMD:-1})
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

module.exports.getExam= id =>{
    return examModel.findOne({_id:id})
    .then(exam => {
        return exam
    })
    .catch(erro => {
        console.log("Erro: " + erro)
})
}

module.exports.addExam= e =>{
    return examModel.create(e)
    .then(exam => {
        return exam
    })
    .catch(erro => {
        console.log("Erro: " + erro)
})
}

module.exports.updateExam= e =>{
    return examModel.updateOne({_id:e._id},e)
    .then(resp=>{
        return resp
    }).catch(error=>{
        return error
    })
}

module.exports.removeExam= id =>{
    return axios.deleteOne({_id:id})
    .then(resp =>{
        return resp
    })
    .catch(error=>{
        return error
    })
}