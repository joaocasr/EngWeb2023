var express = require('express');
var router = express.Router();
var aluno = require('../controllers/aluno')

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  aluno.list().then(alunos=>{
    res.render('index', { slist: alunos, d: data });
  }).catch(error=>{
    res.render('Erro:',{erro: error,message:"Erro na obtenção da lista de alunos"})
  })
});

router.get('/alunos/:alunoID', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  aluno.getaluno(req.params.alunoID).then(student=>{
    res.render('aluno', { alunodata: student, d: data });
  }).catch(error=>{
    res.render('Erro:',{erro: error,message:"Erro na obtenção do aluno"})
  })
});

module.exports = router;