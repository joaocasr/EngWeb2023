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


/*GET DA PAGINA DE REGISTO*/
router.get('/alunos/registo',function(req,res,next){
  var data = new Date().toISOString().substring(0, 16)
  res.render('registo',{d:data});
})
/*GET DA PAGINA DE EDICAO DE UM ALUNO*/
router.get('/alunos/edit/:alunoID',function(req,res,next){
  var data = new Date().toISOString().substring(0, 16)
  aluno.getaluno(req.params.alunoID).then(student=>{
    res.render('updatealuno',{alunodata:student,d:data});
  }).catch(error=>{
    res.render('Erro:',{erro: error,message:"Erro na obtenção da lista de alunos"})
  })
})

/*POST DE UM ALUNO*/
router.post('/alunos/edit',function(req,res,next){
  var data = new Date().toISOString().substring(0, 16)
  aluno.updateAluno(req.body).then(student=>{
    res.render('aluno',{alunodata: req.body,d:data});
  }).catch(error=>{
    res.render('Erro:',{erro: error,message:"Erro na obtenção da lista de alunos"})
  })
})

router.get('/alunos/:alunoID', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  aluno.getaluno(req.params.alunoID).then(student=>{
    res.render('aluno', { alunodata: student, d: data });
  }).catch(error=>{
    res.render('Erro:',{erro: error,message:"Erro na obtenção do aluno"})
  })
})

router.post('/alunos/delete/:idAluno',function(req,res){
  var data = new Date().toISOString().substring(0, 16)
  aluno.removeAluno(req.params.idAluno).then(student=>{
  aluno.list().then(alunos=>{
      res.render('index', { slist: alunos, d: data });
    }).catch(error=>{
      res.render('Erro:',{erro: error,message:"Erro na obtenção da lista de alunos"})
    })
  }).catch(error=>{
    res.render('Erro:',{erro: error,message:"Erro na eliminacao do aluno"})
  })
})


router.get('/alunos/delete/:idAluno',function(req,res){
  var data = new Date().toISOString().substring(0, 16)
  aluno.getaluno(req.params.idAluno).then(student=>{
    res.render('deletealuno',{alunodata:student, d:data});
  }).catch(error=>{
    res.render('Erro:',{erro: error,message:"Erro na obtenção do aluno"})
  })
})


router.post('/alunos/registo',function(req,res){
  var data = new Date().toISOString().substring(0, 16)
  aluno.addAluno(req.body)
  .then(student=>{
      res.render('aluno',{alunodata:student, d:data});
  }).catch(error=>{
      res.render('Erro:',{erro: error,message:"Erro na obtenção do aluno"})
  })
})


module.exports = router;