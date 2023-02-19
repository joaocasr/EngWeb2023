import json
import sys

def ordCidade(c):
    return c['nome']

ligacoesDict=dict() # codigo1: {pares: [(nomex,distanciax),(nomex,distanciay)]}


f= open('/home/joao/EngWeb2023/TPC1/Mapa/mapa.json')
mapa= json.load(f)
cidades = mapa['cidades']
ligacoes = mapa['ligações']

cidades.sort(key=ordCidade)

def cria_pares():
    for cidade in cidades:
        insert_dic(cidade['id'],devolve_cidades(cidade['id']))

def insert_dic(codigo,cities):
    ligacoesDict[codigo]=dict()
    ligacoesDict[codigo]['pares']=list()
    for city in cities:
        ligacoesDict[codigo]['pares'].append(city)

def devolve_cidades(cod):
    cities=list()
    for lig in ligacoes:
        if(cod==lig['origem']):
            for city in cidades:
                if(city['id']==lig['destino']):
                    cities.append((city['nome'],lig['distância']))
    return cities

def constroi_HTML():
    geraHTML="""
    <!Doctype HTML>
    <html>
        <head>
            <title>Mapa Virtual</title>
            <meta charset="utf-8"/>
            <link rel="stylesheet" type="text/css" href="style.css" />
            </head>
        <body>
            <center>
                <h1>Mapa Virtual</h1>
            </center>
            <table>
                <tr><!--define uma linha-->
                    <a name="indice">
                        <td valign="top" width=30%><h2>Índice</h2><!--define uma coluna--></a>
                    <ul>
    """

    for cidade in cidades:
        geraHTML+=f"""
                        <li class="link-style"><a href="#{cidade['id']}">{cidade['nome']}</a></li>
        """

    geraHTML+="""
                    </ul>
                    </td>
                    <td id="info" width=70%>
    """

    for cidade in cidades:
        geraHTML+= f"""
                        <a name="{cidade['id']}"><h2><u>{cidade['nome']}</u></h2>
                            <p><b>População:</b> {cidade['população']}</p>
                            <p><b>Descrição:</b> {cidade['descrição']}</p>
                            <p><b>Distrito:</b> {cidade['distrito']}</p>
                            <p><h2>Ligações</h2></p>
                            <ul>
                    """
        for city in ligacoesDict[cidade['id']]['pares']:
                geraHTML+=f"""
                                <li>
                                    <p><b>{city[0]}</b>: {city[1]} km</p>
                                </li>
                    """
        geraHTML+="""
                            </ul>
                            <a href="#indice"><h6>[Voltar ao índice]</h6></a>
                                <center>
                                    <hr width="80%"/>
                                </center>
                            </a>
        """
    geraHTML+="""
                        </td>
                                    </tr>
                                </table>
                            </body>
                        </html>
    """
    return geraHTML

def main():
    cria_pares()
    html=constroi_HTML()
    with open('Mapa/mapa.html',"w") as sys.stdout:
        print(html)

if __name__ == "__main__":
    main()