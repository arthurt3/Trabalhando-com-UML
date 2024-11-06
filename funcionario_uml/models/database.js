const sequelizeDb = require("sequelize")
const sequelizeConfig = new sequelizeDb(
    'empresa', //o nome do banco de dados
    'root',// informando  o usuario
    '',// informando a senha do banco

    {
        dialect:'sqlite',
        storage:'./empresa.sqlite'//nome do arquivo onde será salvo o nosso banco
    }
)
module.exports = {sequelizeDb, sequelizeConfig}