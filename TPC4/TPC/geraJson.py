import random as rnd

tarefas="""Ally with
Besiege
Take
Destroy
Kill
Confuse
Build
Assassinate
Obliterate
Destroy
Defeat
Negotiate with
Ambush
Blow up
Obliterate
Beset
Blow up
Battle
Assist
Assassinate
Invade
Smuggle
Invade
Battle
Blow up
Assault
Battle
Assault
Ally with
Assassinate
Kill
Capture
Beset
Besiege
Assassinate
Arm
Destroy
Find
Serve
Blow up
Tag
Hunt
Retrieve
Capture
Oppose
Entreat
Deliver
Reveal
Strike
Look at
Ambush
Understand
Reveal
Besiege
Dispel
Meet
Injure
Lead
Bombard
Assault
Escort
Arm
Invade
Foil
Ambush
Advise
Assassinate
Battle
Steal
Provide Disaster Relief To
Besiege
Imitate
Destroy
Revive
Destroy
Arm
Repair
Locate
Quarrel with
Amuse
Besiege
Assault
Intercept
Track
Resist
Smuggle
Injure
Ambush
Destroy
Conceal
Destroy
Fight
Arm
Capture
Kill
Understand
Obliterate
Transport
Injure
Besiege
""".splitlines()

nomes="""Sarah Cardoso
Lorena Sales
Carlos Eduardo Moraes
Srta. Luiza Pereira
Lavínia Barros
Maria Fernanda Viana
João Vitor Carvalho
Davi Lucas Correia
Helena Gomes
Theo Souza
Brenda Monteiro
Erick Araújo
Anthony das Neves
Carlos Eduardo Dias
Lucas Gabriel da Cruz
Fernanda Vieira
Luiz Miguel Oliveira
Manuela Martins
Dr. Daniel da Rocha
Caio Rocha
Kaique Ribeiro
Eduarda Silveira
Theo Farias
Dr. Luiz Miguel Farias
Nathan da Mata
Srta. Maria Vitória Dias
Dra. Helena Correia
Maria Azevedo
Vitor Porto
Alice Carvalho
Lívia Freitas
Sr. Luiz Henrique Novaes
Natália Pinto
Gustavo Oliveira
Bianca Pires
João Guilherme Ribeiro
Breno da Rosa
Dra. Manuela Melo
Ana Sophia Monteiro
Ana Laura Araújo
Maria Alice Cardoso
Calebe da Costa
Gustavo Henrique Alves
Pietro das Neves
Lorena Silveira
Heloísa Castro
Joana Duarte
Cauê das Neves
Sophia Viana
Davi Moreira
Luiz Otávio Dias
Sr. Samuel Souza
Dra. Rafaela da Cunha
Maria Alice Barros
Gustavo Henrique Pereira
Dr. Bryan Lopes
Vicente Silva
Lorena Fogaça
Matheus Pereira
Nicole da Luz
Carolina Rezende
Matheus da Mata
Helena da Conceição
Maitê Cardoso
Sr. João Gabriel Sales
Luiz Felipe Silveira
Bruna Costela
Ana Clara Souza
Dra. Bianca da Conceição
Noah Pereira
Matheus Farias
Sr. Miguel da Mota
Carolina Ramos
Joaquim Nogueira
Gabriela Martins
Maria Julia Araújo
Kaique Fernandes
Sabrina Freitas
Ana Peixoto
Camila Duarte
Ana Clara Melo
Sr. Lucas Rodrigues
Kamilly da Mota
Pedro Lucas Cunha
Carolina Aragão
Bryan Melo
Vitor Hugo Ferreira
Lorena Novaes
Nathan Silveira
Dr. Paulo Rezende
Sr. Pedro Lucas Porto
Laís Silveira
Luiza Correia
Yuri Pinto
Raquel Melo
Pedro Henrique da Mota
Maysa Jesus
Sra. Vitória Ferreira
Rafael Cavalcanti
Caio Barros
""".splitlines()


geraJson="""
{
    "tasks": [
        """
allUsers=list()
for j in range(0,99):
    id="user"+str(j)
    allUsers.append(id)

i=0
while(i<100):
    ano=rnd.randint(2023,2024)
    month=rnd.randint(1,12)
    day = rnd.randint(1,30)
    user= allUsers[rnd.randint(0,98)]
    tarefa = tarefas[rnd.randint(0,len(tarefas)-1)]
    done = rnd.randint(0,1)
    if(i==99):
        geraJson+="""   {
        """
        geraJson+=f"""
                        "id":"task{i}",
                        "duedate":"{ano}/{month}/{day}",
                        "user":"{user}",
                        "description":"{tarefa}",
                        "done":"{done}"
        """
        geraJson+="""   }
        """
    else:
        geraJson+="""   {
        """
        geraJson+=f"""
                        "id":"task{i}",
                        "duedate":"{ano}/{month}/{day}",
                        "user":"{user}",
                        "description":"{tarefa}",
                        "done":"{done}"
        """
        geraJson+="""   },
        """
    i+=1
    
geraJson +="""
                ],
            
            "users":[
"""
i=0
for pessoa in nomes:
    id="user"+str(i)
    if(i==99):
        geraJson+="""   {
        """
        geraJson +=f"""
                        "id":"{id}",
                        "nome":"{pessoa}"
        """
        geraJson+="""   }
        """
    else:
        geraJson+="""   {
        """
        geraJson +=f"""
                        "id":"{id}",
                        "nome":"{pessoa}"
        """
        geraJson+="""   },
        """
    i+=1

geraJson +="""
            ]            
}
"""

with open("tasks.json","w") as jsonfile:
    jsonfile.write(geraJson)


"""
/**
 *  uma unica pagina
 *  4 AREAS (2 horizontais(form insercao -botao post|form edicao- botao put)| 2 verticais(to do - vai ter botao para passar para done| done))
 *  tarefa:
 *          duedate:|user:|description:
 *  1 colecao user(id,nome)
 *  1 colecao task(duedate,user,description,done)
 */
"""
