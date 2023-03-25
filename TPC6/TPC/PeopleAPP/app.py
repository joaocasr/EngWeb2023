import requests
import re
import json

API_URL = "http://localhost:7777/"

while(True):
    print("1- manual")
    r=None
    funcionalidade = input("PPL> ")
    if(funcionalidade=="1"):
        print("db.pessoas.find() - Obter listagem de pessoas")
        print("db.pessoas.findOne({_id:'p0'}) - Obter pessoa com id p0")
        print("db.pessoas.create({_id:'p0'}) - Criar registo da pessoa com id p0")
    if(funcionalidade=="db.pessoas.find()"):
        URL_REQUEST=API_URL+"people"
        r=requests.get(URL_REQUEST)
    m = re.match(r'db\.pessoas\.findOne\(\{_id:\'(\w+)\'\}',funcionalidade)
    if m:
        URL_REQUEST=API_URL+"people/"+m.group(1)
        r=requests.get(URL_REQUEST)
        print(URL_REQUEST)
    m = re.match(r'db\.pessoas\.create\(\{((\w+):\'(\w+)\',?)+\}\)',funcionalidade)
    if m:
        URL_REQUEST=API_URL+"people"
        dic= dict()
        dic[m.group(2)]=m.group(3)
        print(dic)
        r=requests.post(URL_REQUEST,json=dic)
    m = re.match(r'db\.pessoas\.delete\(\{_id:\'(\w+)\'\}\)',funcionalidade)
    if m:
        print(m.group(1))
        URL_REQUEST=API_URL+"people/"+m.group(1)
        print(URL_REQUEST)
        r=requests.delete(URL_REQUEST)
    if(r!=None and (r.status_code==200 or r.status_code==201)):
        print(r.json())
    if(r!=None and r.status_code!=200):
        print("status: "+str(r.status_code))        



#print(people[0])