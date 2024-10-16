const Sequelize = require('sequelize');
const conexao = require('../database/basedados');
const Funcionario = conexao.define('funcionario',{
    id_funcionario:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    setor:{
        type: Sequelize.STRING,
        allowNull: false
    },
    salario:{
        type: Sequelize.REAL,
        allowNull: false
    }
});
Funcionario.sync();
module.exports = Funcionario;