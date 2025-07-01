function listar(require, response) {
    response.send('Listar professor');
};

function criar(require, response) {
    response.send('Criar professor');
};

function deletar(require, response) {
    response.send('Deletar professor');
};

function atualizar(require, response) {
    response.send('Atualizar professor');
};

module.exports = {
    listar,
    criar,
    deletar,
    atualizar
};