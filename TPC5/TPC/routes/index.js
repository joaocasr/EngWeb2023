var express = require('express');
var router = express.Router();
var Tasks = require('../controllers/task')

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Tasks.getTasks().then(tarefas=>{
    n = tarefas.length
    res.render('index', { list: tarefas,tarefa:null, d: data, size: n });
  }).catch(error=>{
    res.render('error',{erro: error,message:"Erro na obtenção da lista de tarefas"})
  })
});

router.get('/tasks/:idTask', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Tasks.getTasks().then(tarefas=>{
    Tasks.getTask(req.params.idTask).then(task=>{
      n = tarefas.length
      res.render('index', { list: tarefas,tarefa:task, d: data, size: n });
      console.log("entrou no rendering do index")
    }).catch(error=>{
      console.log("erro na obtencao da task")
      res.render('error',{erro: error,message:"Erro na obtenção da tarefa"})
    })
  }).catch(error=>{
    console.log("erro na obtencao da lista de tasks")
    res.render('error',{erro: error,message:"Erro na obtenção da lista de tarefas"})
  })
});

router.post('/add', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Tasks.addTask(req.body).then(task =>{
    Tasks.getTasks().then(tarefas=>{
      n = tarefas.length
      res.render('index', { list: tarefas,tarefa:null, d: data, size: n });
      console.log("entrou no rendering do index")
    }).catch(error=>{
      console.log("erro na obtencao da lista de tasks")
      res.render('error',{erro: error,message:"erro na obtencao da lista de tasks"})
    })
  }).catch(error=>{
    console.log("erro na adicao da task")
    res.render('error',{erro: error,message:"erro na adicao da task"})
  })
});

router.post('/edit', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Tasks.updateTask(req.body).then(task =>{
    Tasks.getTasks().then(tarefas=>{
      n = tarefas.length
      res.render('index', { list: tarefas,tarefa:null, d: data, size: n });
      console.log("entrou no rendering do index")
    }).catch(error=>{
      console.log("erro na obtencao da lista de tasks")
      res.render('error',{erro: error,message:"erro na obtencao da lista de tasks"})
    })
  }).catch(error=>{
    console.log("erro na adicao da task")
    res.render('error',{erro: error,message:"erro na adicao da task"})
  })
});




module.exports = router;
