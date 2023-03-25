var express = require('express');
var router = express.Router();
var exame = require('../controllers/emd')

/* GET home page. */
router.get('/emds', function(req, res, next) {
  exame.list().then(dados =>{
    res.status(200).json(dados);
  }).catch(error =>{
    res.status(520).json({erro:error,mensagem:"Não foi possível obter a lista"})
  })
});


router.get('/emds/:id', function(req, res) {
  exame.getExam(req.params.id).then(dados =>{
    res.status(200).json(dados);
  }).catch(error =>{
    res.status(521).json({erro:error,mensagem:"Não foi possível obter o exame "})
  })
});

router.post('/emds', function(req, res) {
  exame.addExam(req.body).then(dados =>{
    res.status(201).json(dados);
  }).catch(error =>{
    res.status(522).json({erro:error,mensagem:"Não foi possível adicionar o exame "})
  })
});


router.put('/emds/:id', function(req, res) {
  exame.updateExam(req.body).then(dados =>{
    res.status(201).json(dados);
  }).catch(error =>{
    res.status(523).json({erro:error,mensagem:"Não foi possível alterar o exame "})
  })
});

router.delete('/emds/:id', function(req, res) {
  exame.removeExam(req.params.id).then(dados =>{
    res.status(201).json(dados);
  }).catch(error =>{
    res.status(524).json({erro:error,mensagem:"Não foi possível remover o exame "})
  })
});



module.exports = router;
