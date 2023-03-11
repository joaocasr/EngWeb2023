exports.tasksPage = function(tarefas,tarefa,data){
    
    var pagHtml=`<!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <link rel="stylesheet" href="w3.css"/>
            <title>Student Management</title>
        </head>
        <body>
                <header class="w3-container w3-teal">
                    <h1>Task Manager</h1>
                </header>
                <form class="w3-container" method="POST">
                <fieldset>
                    <legend>Adicionar Tarefa</legend>
                    <label>ID</label>
                    <input class="w3-input w3-round" type="text" name="id" readonly value="task${tarefas.length}"/>
                    <label>Duedate</label>
                    <input class="w3-input w3-round" type="text" name="duedate"/>
                    <label>User</label>
                    <input class="w3-input w3-round" type="text" name="user"/>
                    <label>Description</label>
                    <input class="w3-input w3-round" type="text" name="description"/>
                    <input hidden class="w3-input w3-round" type="hidden" name="done" value="0" readonly/>
                </fieldset>
                <br/>
                <button class="w3-btn w3-purple w3-mb-2" type="submit">Submeter tarefa</button></br>
                </form>
                `

            if(tarefa==null){
                pagHtml+=`<form class="w3-container" method="POST">
                <fieldset>
                    <legend>Editar Tarefa</legend>
                    <label>ID</label>
                    <input class="w3-input w3-round" type="text" name="id" value=""/>
                    <label>Duedate</label>
                    <input class="w3-input w3-round" type="text" value="" name="duedate"/>
                    <label>User</label>
                    <input class="w3-input w3-round" type="text" value="" name="user"/>
                    <label>Description</label>
                    <input class="w3-input w3-round" type="text" value="" name="description"/>
                    <label>Done</label>
                    <input class="w3-input w3-round" type="text" value="" name="done" value="0"/>
                </fieldset>
                <br/>
                <button class="w3-btn w3-purple w3-mb-2" type="submit">Editar tarefa</button></br>
                </form>
                `
            }else{
                pagHtml+=`<form class="w3-container" method="POST">
                <fieldset>
                    <legend>Editar Tarefa</legend>
                    <label>ID</label>
                    <input class="w3-input w3-round" type="text" value=${tarefa.id} name="id"/>
                    <label>Duedate</label>
                    <input class="w3-input w3-round" type="text" value=${tarefa.duedate} name="duedate"/>
                    <label>User</label>
                    <input class="w3-input w3-round" type="text" value=${tarefa.user} name="user"/>
                    <label>Description</label>
                    <input class="w3-input w3-round" type="text" value=${tarefa.description} name="description"/>
                    <label>Done</label>
                    <input class="w3-input w3-round" type="text" value=${tarefa.done} name="done" value="0"/>
                </fieldset>
                <br/>
                <button class="w3-btn w3-purple w3-mb-2" type="submit">Editar Tarefa</button></br>
                </form>
                `
            }

            pagHtml+=` <div class="tables-style">
            <div class="table1">
                <table class="w3-hoverable">
                    <tr>
                    <th>TO DO</th>
                    <th>User</th>
                    <th>Duedate</th>
                    <th>Done</th>
                    </tr>
    `
    for(let i=0;i<tarefas.length;i++){
        if(tarefas[i].done=="0"){
            pagHtml+=`
                <tr>
                            <td>
                                <label><a href="/tasks/${tarefas[i].id}">${tarefas[i].id}</a>: <b>${tarefas[i].description}</b></label>
                            </td>
                            <td>
                                <label><b>${tarefas[i].user}</b><label>
                            </td>
                            <td>
                                <label><b>${tarefas[i].duedate}</b><label>
                            </td>
                            <td>
                                <input class="w3-check" type="checkbox" name="${tarefas[i].id}" value="${tarefas[i].done}" onclick="return false;"/>
                            </td>
                </tr>
                `
        }
    }
    pagHtml+=`</table>
            </div">
            <div class="table2">
            <table class="w3-hoverable">
                <tr><th>Tasks Done<th></tr>
    `
    for(let i=0;i<tarefas.length;i++){
        if(tarefas[i].done=="1"){
            pagHtml+=`
                <tr>
                            <td>
                                <label>${tarefas[i].id}: <b>${tarefas[i].description}</b> by <b>${tarefas[i].user}</b></label>
                            </td>
                            <td>
                                <input class="w3-check" type="checkbox" name="${tarefas[i].id}" value="${tarefas[i].done}" checked onclick="return false;"/>
                            </td>
                </tr>
                `
        }
    }
    pagHtml+=`  </table>
                </div>
                </div>
            <footer class="w3-container w3-teal">
                <address>Gerado por João Castro::EngWeb2023 em ${data}</address>
            </footer>
        </body>
        </html>`
    return pagHtml
}


exports.errorPage = function(errorMessage,d){
    return `<p>Error: Date:${d} Message:${errorMessage}</p>`
}