var mongoose = require('mongoose')
var mongoDB = 'mongodb://127.0.0.1/EngWeb2023'
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true})
var db = mongoose.connection

db.on('error', console.log.bind(console, 'MongoDB connection error...'))
db.once('open', function() {
    console.log('Conexão ao MongoDb realizada com sucesso')

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

    var studentModel = mongoose.model('student', studentSchema)  // nome da coleção da base de dados no singular, schema
/*
    studentModel.find()
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


    studentModel.find({_id:'A97223'})
    .then(student => {
        console.log(student)
    })
    .catch(erro => {
        console.log("Erro: " + erro)
})
    
    studentModel.deleteOne({
        _id:'A9233732'})
    .then(student => {
        console.log(student)
    })
    .catch(erro => {
        console.log("Erro: " + erro)
    })

*/

    studentModel.create({
        _id:'A9233732',
        nome:'Francis',
        repositório:'francis.com',
        tpc1:"0",
        tpc2:"0",
        tpc3:"0",
        tpc4:"1",
        tpc5:"0",
        tpc6:"0",
        tpc7:"0",
        tpc8:"0"})
    .then(student => {
        console.log(student)
    })
    .catch(erro => {
        console.log("Erro: " + erro)
    })




})