import json

def ordCidade(c):
    return c['nome']

f=open('/home/joao/EngWeb2023/TPC2/Mapa-webapp/mapa.json')
mapa= json.load(f)
cidades = mapa['cidades']
ligacoes = mapa['ligações']
cidades.sort(key=ordCidade)

links= dict()


def find_links():
    for city in cidades:
        flag=0
        for link in ligacoes:
            if link['origem']==city['id']:
                if(flag==0): links[city['nome']]=list()
                links[city['nome']].append((link['destino'],link['distância']))
                flag=1
    return links

def get_cidade_byID(id):
    for city in cidades:
        if(city['id']==id):
            return city['nome']


def build_indexMapa():
    index_html="""
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8"/>
            <title>Mapa Virtual</title>
            <link href="style.css" rel="stylesheet" type="text/css"/>
        </head>
    <body>
        <center><h1>Mapa Virtual</h1></center>
        <div class="indice-stl">
            <h2><u>Índice</u></h2>
            <ul>
    """
    for city in cidades:
        index_html+=f"""<li>
                            <a href="cidades/{city['id']}">{city['nome']}</a>
                        </li>
                    """
    index_html+="""
            </ul>
        </div>
    </body>
    </html>
    """
    with open("/home/joao/EngWeb2023/TPC2/Mapa-webapp/mapa.html","w") as file:
        file.write(index_html)


def build_Cities():
    for city in cidades:
        with open("/home/joao/EngWeb2023/TPC2/Mapa-webapp/cidades/"+city['id']+".html","w") as file:
            city_html=f"""
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8"/>
                    <title>Mapa Virtual</title>
                    <link href="../style.css" rel="stylesheet" type="text/css"/>
                </head>
            <body>
                <div class="city-style">
                        <h1>{city['nome']}</h1>
                        <p><b>População:</b> {city['população']}</p>
                        <p><b>Descrição:</b> {city['descrição']}</p>
                        <p><b>Distrito:</b> {city['distrito']}</p>
                </div>
                <div class="ligacoes-style">
                    <h2>Ligações</h2>
                    <ul>
            """
            if(city['nome'] in links.keys()):
                for (nome,distancia) in links[city['nome']]:
                    city_html+=f"""
                            <li>
                                <p><b>Nome:</b><a href="../cidades/{nome}">{get_cidade_byID(nome)}</a></p>
                                <p><b>Distância:</b> {distancia} km</p>
                            </li>
                    """
            city_html+="""<a href="../mapa"><h6>[Voltar ao menu principal]</h6></a>
                    </ul>
                    </div>
                </body>
                </html>
            """
            file.write(city_html)
        city_html=""

def main():
    find_links()
    #print(links)
    build_indexMapa()
    build_Cities()

if __name__ == "__main__":
    main()