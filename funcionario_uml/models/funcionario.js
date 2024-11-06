const database = require('./database')//Importando o banco de dados
const departamento = require('./departamento')
//importando a tabela departamento
//criando a tabela
const funcionario = database.sequelizeConfig.define(
    'funcionario',//nome da tabela
    {
        nome:{
            type:database.sequelizeDb.STRING
        },
        salario:{
            type:database.sequelizeDb.FLOAT
        },
        cargo:{
            type:database.sequelizeDb.STRING
        }

    }
)
/*
não iremos criar os campos id_funcionário e a chave estrageira pois o sequelize irá criar esses campos automaticamente, ou seja, tanto a chave primária quanto a chave estrangeira são criados pelo sequelize

*/

//Criando a chave estrangeira
//estou dizendo que departamento possui muitos funcionários 
departamento.hasMany(funcionario,{
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
})
funcionario.belongsTo(departamento)//Estou dizendo que funcionário pertence a apenas 1 departamento

funcionario.sync()
module.exports = funcionario





