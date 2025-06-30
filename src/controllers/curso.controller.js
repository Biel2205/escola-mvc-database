function listar(request,response){
response.send("controller responsável pela listagem")
}

function cadastrar(request,response){
    response.send("função responsavel por cadastrar um curso")
}

function deletar(request,response){
    response.send("função responsavel por deletar curso")
}

module.exports={
listar,
cadastrar,
deletar

}