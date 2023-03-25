var express = require('express');
var Person = require('../controllers/person')
var router = express.Router();

router.get('/people', function(req, res) {
  Person.getPeople().then(people =>{
    res.status(200).json(people)
  }).catch(error =>{
    res.status(520).json({erro:error,message:"Não foi possível obter a lista de pessoas."})
  })
});

router.get('/people/:id', function(req, res) {
  Person.getPerson(req.params.id).then(person =>{
    res.status(200).json(person)
  }).catch(error =>{
    res.status(521).json({erro:error,message:"Não foi possível obter a pessoa."})
  })
});

router.post('/people', function(req, res) {
  Person.addPerson(req.body).then(person =>{
    res.status(201).json(person)
  }).catch(error =>{
    res.status(522).json({erro:error,mensagem:"Não foi possível adicionar a pessoa."})
  })
});


router.put('/people/:id', function(req, res) {
  Person.updatePerson(req.body).then(person =>{
    res.status(201).json(person)
  }).catch(error =>{
    res.status(523).json({erro:error,mensagem:"Não foi possível alterar o registo."})
  })
});

router.delete('/people/:id', function(req, res) {
  Person.removePerson(req.params.id).then(person =>{
    res.status(201).json(person)
  }).catch(error =>{
    res.status(524).json({erro:error,mensagem:"Não foi possível remover a pessoa."})
  })
});




module.exports = router;
