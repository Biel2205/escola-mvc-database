
// importando o módulo do express 
const express = require('express')

// criando uma instância do express 
const app= express()

//importação dos controller
const cursoController = require('./controllers/curso.controller')

// criar uma rota 
app.get('/cursos',cursoController.listar )

// iniciando o servidor na porta 3000
app.listen(3000,function(){
    console.log("servidor rodando na porta 3000")
})
