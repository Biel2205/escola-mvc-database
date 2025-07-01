function listar(require, response) {
    response.send('Listar alunos');
};

function criar(require, response) {
    response.send('Criar alunos');
};

function deletar(require, response) {
    response.send('Deletar alunos');
};

function atualizar(require, response) {
    response.send('Atualizar alunos');
};

module.exports = {
    listar,
    criar,
    deletar,
    atualizar
};