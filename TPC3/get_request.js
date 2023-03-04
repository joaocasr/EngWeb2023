const axios = require('axios')

axios.get("http://localhost:3000/pessoas")
    .then(function(resp){
        var pessoas = resp.data //lista de dicionarios
        console.log("Size: "+pessoas.length)
        console.log("4ª pessoa: "+pessoas[3].nome)
    })//response from get
    .catch(erro => { //anonymous function
        console.log(erro)
    })//error case