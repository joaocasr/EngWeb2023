var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1:27017/EngWeb2023';
mongoose.set('strictQuery', true);
mongoose.connect(mongoDB,{useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
var studentModel;
db.on('error', console.error.bind(console,'MongoDB connection error...'));
db.once('open',function(){
    console.log("Conexão ao MongoDB realizada com sucesso...")

    var studentSchema = new mongoose.Schema({
        _id: String,
        nome: String,
        repositório: String,
        tpc1: String,
        tpc2: String,
        tpc3: String,
        tpc4: String,
        tpc5: String,
        tpc6: String,
        tpc7: String,
        tpc8: String
    })

    studentModel = mongoose.model('students', studentSchema)
})


module.exports.list = () => {
    return studentModel.find()
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
    return studentModel.find({_id:id})
    .then(student => {
        return student[0]
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


module.exports.updateAluno= a =>{
    return axios.put('http://localhost:3000/alunos/'+a.id,a)
    .then(resp=>{
        return resp.data
    }).catch(error=>{
        return error
    })
}
*/