// Conexão com o Banco de Dados
const Sequelize = require("sequelize")
const sequelize = new Sequelize("postapp", "root", "hfisenpiifbg03", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
