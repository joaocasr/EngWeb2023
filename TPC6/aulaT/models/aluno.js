const mongoose = require('mongoose')

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

module.exports = mongoose.model('student', studentSchema)
