geraJson="""{
                "alunos":
                         [
"""

with open('/home/joao/EngWeb2023/TPC4/aula4/aula4/alunos.csv', "r") as csvfile:
    lines = csvfile.readlines()
    size=(len(lines))
    i=1
    for row in lines:
        geraJson+="""
                    {
            """
        geraJson+=f"""
                    "id":"{row.split(";")[0]}",
                    "nome":"{row.split(";")[1]}",
                    "repositório":"{row.split(";")[2].strip()}"
                    """
        if(i<size):geraJson+="""
                    },"""
        if(i==size): geraJson+="""
        }"""
        i+=1
    geraJson+="""
    ]
    }"""

with open("alunos.json","w") as jsonfile:
    jsonfile.write(geraJson)