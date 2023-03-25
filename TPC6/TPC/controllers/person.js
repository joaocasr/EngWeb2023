var PersonModel = require('../models/person')

module.exports.getPeople = () => {
    return PersonModel.find().sort({nome:1})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            console.log("Erro: " + erro)
        })
}

module.exports.getPerson = id => {
    return PersonModel.findOne({_id:id})
        .then(data => {
            return data
        })
        .catch(erro => {
            console.log("Erro: " + erro)
        })
}

module.exports.addPerson = p => {
    return PersonModel.create(p)
        .then(data => {
            return data
        })
        .catch(erro => {
            console.log("Erro: " + erro)
        })
}

module.exports.updatePerson= p =>{
    return PersonModel.updateOne({_id:p._id},p)
    .then(resp=>{
        return resp
    }).catch(error=>{
        return error
    })
}

module.exports.removePerson= id =>{
    return PersonModel.deleteOne({_id:id})
    .then(resp =>{
        return resp
    })
    .catch(error=>{
        return error
    })
}

