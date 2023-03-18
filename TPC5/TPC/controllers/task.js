var axios = require('axios')

module.exports.getTasks = () =>{
    return axios.get('http://localhost:3000/tasks?_sort=description')
    .then(resp =>{
        return resp.data
    })
    .catch(error=>{
        return error
    })
} 

module.exports.getTask = id =>{
    return axios.get('http://localhost:3000/tasks/'+id)
    .then(resp =>{
        return resp.data
    }).catch(error=>{
        return error
    })
}

module.exports.addTask= t => {
    return axios.post('http://localhost:3000/tasks/',t)
    .then(resp=>{
        return resp.data
    }).catch(error =>{
        return error
    })
}

module.exports.updateTask= t => {
    return axios.put('http://localhost:3000/tasks/'+t.id,t)
    .then(resp=>{
        return resp.data
    }).catch(error =>{
        return error
    })
}