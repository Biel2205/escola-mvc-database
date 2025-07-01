// importar a biblioteca do mysql para se conectar ao banco de dados mysql
const mysql = require('mysql2/promise')

// configuraçoes daconeção com o banco de dados 
const conexao = mysql.createConnection({
    host: 'localhost', //endereço do servidor 
    user:'root', // usuario do banco de dados 
    password:'root', // senha do banco de dados 
    database:'sistema_escolar' // nome do banco de dados 
})

mudule.exports= {
    conexao
}