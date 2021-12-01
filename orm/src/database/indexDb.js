const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js');

const conexao = new Sequelize(dbConfig);

const operadora = require('../api/models/operadoraModels.js')
const telefone = require('../api/models/telefoneModels.js')


try {
    conexao.authenticate();
    console.log('Conexão estabelecida!!!');
} catch (error) {
    console.log('Conexão não estabelecida!!!', error);
}

operadora.init(conexao);
telefone.init(conexao);

module.exports = conexao;