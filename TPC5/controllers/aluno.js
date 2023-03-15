var axios = require('axios')

module.exports.list= () =>{
    return axios.get('http://localhost:3000/alunos?_sort=nome')
    .then(resp =>{
        return resp.data
    })
    .catch(error=>{
        return error
    })
}

module.exports.getaluno= id =>{
    return axios.get('http://localhost:3000/alunos/'+id)
    .then(resp =>{
        return resp.data
    })
    .catch(error=>{
        return error
    })
}