# Engenharia Web 2023


docker cp alunos.json monho6:/tmp/alunos.json
docker exec mongo6 monhoimport -d eNGWEB2923 -C students -- file /tmp/alunos.json -jsonArray

#>docker exec -it <container-name> mongo
#>docker cp xxx.json <container-name-or-id>:/tmp/xxx.json
#>docker exec <container-name-or-id> mongoimport -d <db-name> -c <c-name> --file /tmp/xxx.json
