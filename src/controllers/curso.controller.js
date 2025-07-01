const bancoDados = require ("../config/banco-dados")

async function listar(request,response){

const cursos = await bancoDados.conexao.query("select * from cursos")
console.log("cursos",cursos)


response.send("função responsavel pela listagem de professores ")


}

function listar(require, response) {
    response.send('Listar curso');
};

function criar(require, response) {
    response.send('Criar curso');
};

function deletar(require, response) {
    response.send('Deletar curso');
};

function atualizar(require, response) {
    response.send('Atualizar curso');
};

module.exports = {
    listar,
    criar,
    deletar,
    atualizar
};