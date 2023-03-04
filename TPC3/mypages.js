//Modulo mypages : gerar paginas HTML
exports.genMainPage = function(lista,data){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8"/>
            <link href="w3.css" rel="stylesheet" type="text/css"/>
        </head>
        <body>
        <header class="w3-container w3-blue">
            <h1>Tabela de registos</h1>
        </header>
            <table class="w3-table w3-striped w3-bordered">
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Idade</th>
                <th>Sexo</th>
                <th>Cidade</th>
            </tr>
            `
    for(let c=0; c<lista.length;c++){
        pagHTML+=`
                    <tr>
                        <td>${lista[c].id}</td>
                        <td><a href="/pessoas/${lista[c].id}">${lista[c].nome}</a></td>
                        <td>${lista[c].idade}</td>
                        <td>${lista[c].sexo}</td>
                        <td>${lista[c].morada.cidade}</td>
                    </tr>
                `
    }
    pagHTML+=`
        </table>
                <footer class="w3-container w3-blue">
                    <h5>Generated at ${data}</h5>
                </footer>
            </body>
    </html>
    `
    return pagHTML
}


exports.genPersonPage =function(pessoa,data){
    pagHTML = `
            <!DOCTYPE HTML>
            <html>
            <head>
                <meta charset="utf-8"/>
                <link rel="stylesheet" type="text/css" href="w3.css"/>
            </head>
            <body>
                <p><h2>${pessoa.nome}</h2></p>
                <p><b>Idade:</b> ${pessoa.idade}</p>
                <p><b>Sexo:</b> ${pessoa.sexo}</p>
                <p><b>Morada:</b> ${pessoa.morada.cidade}, ${pessoa.morada.distrito}</p>
                <p><b>CC:</b> ${pessoa.BI}</p>
                <p>${pessoa.descricao}</p>
                <p><b>Profissão:</b> ${pessoa.profissao}</p>
                <p><b>Partido</b> ${pessoa.partido_politico.party_name} (${pessoa.partido_politico.party_abbr})</p>
                <p><b>Desportos:</b>`
    for (let i=0;i<pessoa.desportos.length;i++){
            pagHTML +=` ${pessoa.desportos[i]};`
    }
    pagHTML+=`</p>
    <p><b>Animais:</b>`
    for (let i=0;i<pessoa.animais.length;i++){
            pagHTML +=` ${pessoa.animais[i]};`
    }
    pagHTML+=`</p>
    <p><b>Figuras públicas favoritas:</b>`
    for (let i=0;i<pessoa.figura_publica_pt.length;i++){
        pagHTML +=` ${pessoa.figura_publica_pt[i]};`
    }
    pagHTML+=`</p>
    <p><b>Marca do automóvel:</b> ${pessoa.marca_carro}</p>
    <p><b>Destinos favoritos:</b>
    `
    for (let i=0;i<pessoa.destinos_favoritos.length;i++){
        pagHTML +=` ${pessoa.destinos_favoritos[i]};`
    }
    pagHTML+=`</p>
    <p><b>Atributos:</b>`
    if(pessoa.atributos.fumador==true){
        pagHTML+=` Fumador |`
    }
    if(pessoa.atributos.gosta_cinema==true){
        pagHTML+=` Cinéfilo |`
    }
    if(pessoa.atributos.gosta_viajar==true){
        pagHTML+=` Viajante |`
    }
    if(pessoa.atributos.acorda_cedo==true){
        pagHTML+=` Madrugador |`
    }
    if(pessoa.atributos.gosta_ler==true){
        pagHTML+=` Leitura |`
    }
    if(pessoa.atributos.gosta_musica==true){
        pagHTML+=` Música |`
    }
    if(pessoa.atributos.gosta_comer==true){
        pagHTML+=` Gastronomia |`
    }
    if(pessoa.atributos.gosta_animais_estimacao==true){
        pagHTML+=` Pet Lover |`
    }
    if(pessoa.atributos.gosta_dancar==true){
        pagHTML+=` Dança |`
    }
    pagHTML+=`</p>`
    pagHTML+=`    
            <footer class="w3-container w3-blue">
            <h5>Generated at ${data}</h5>
        </footer>
        </body>
        </html>
        `

    return pagHTML
}

exports.genTopPage = function(pessoas){
    var dict = {}
    profissoes = []
    pagHTML = `
    <!DOCTYPE HTML>
    <html>
    <head>
        <meta charset="utf-8"/>
        <link rel="stylesheet" type="text/css" href="w3.css"/>
    </head>
    <body>
    <h1>Top 10 Profissões</h1>
    <table class="w3-table w3-striped w3-hoverable">
        <th>Profissão</th>
        <th>Frequência</th>
    `
    for(let p=0;p<pessoas.length;p+=1){
        if(!(pessoas[p].profissao in dict)){
            dict[pessoas[p].profissao]=1
        }else if(pessoas[p].profissao in dict){
            dict[pessoas[p].profissao]+=1
        }
    }

    orderedList = Object.entries(dict) //lista de entries [profissao,frequencia]
    .sort(([k1,v1],[k2,v2]) => v2-v1) //ordenacao desc pelo valor da frequencia
    .slice(0,10) // apenas os 10 primeiros
    .map(([n])=>n) // converter para lista de profissoes
    for(let j=0;j< orderedList.length;j++){
        pagHTML+=
        `<tr>
            <td>${orderedList[j]}</td>
            <td>${dict[orderedList[j]]}</td>
         </tr>
        `
    }
    pagHTML+=
    `       </table>
        </body>
     </html>
    `
    return pagHTML
}

//TPC 
// lista de pessoas 0
// lista de pessoas ordenadas 1
// distribuicao por sexo
// distribuicao por desporte
// top 10 profissao  