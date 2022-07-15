const Sequelize = require("sequelize")
const sequelize = new Sequelize("sistemadecadastro", "root", "12345", {
    host: "localhost",
    dialect: "mysql"
})

const Pessoas = sequelize.define("pessoas", {
    nome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    }
})

// Pessoas.sync({ force: true })

Pessoas.create({
    nome: "Juvino",
    idade: 18
})

// const Postagem = sequelize.define("postagens", {
//     title: {
//         type: Sequelize.STRING,
//     },
//     conteudo: {
//         type: Sequelize.TEXT
//     }
// })

// Postagem.sync({ force: true })

// Postagem.create({
//     title: "Título qualquer",
//     conteudo: "ajbbhbwebdbhubicjnjincbhurbhcujncjbfuhbcunfjincjnfuhbhucbfhvbchfnbcuhbfinchbucniowsmomowjnsjibuhwbzh"
// })

// const Usuario = sequelize.define("usuarios", {
//     nome: {
//         type: Sequelize.STRING
//     },
//     sobrenome: {
//         type: Sequelize.STRING
//     },
//     idade: {
//         type: Sequelize.INTEGER
//     },
//     email: {
//         type: Sequelize.STRING
//     }
// })

// Usuario.sync({ force: true })

// Usuario.create({
//     nome: "João",
//     sobrenome: "Santos",
//     idade: 19,
//     email: "joao.santoss75180@gmail.com"
// })

// verificar autencicação

sequelize.authenticate()
    .then(() => {
        console.log("Conectado com sucesso!")
    })
    .catch(erro => {
        console.log("Falha ao conectar-se ao bando de dados: ", + erro)
    })