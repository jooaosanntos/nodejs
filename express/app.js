const express = require("express")
const app = express()

const porta = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Rotas
app.get("/", function (req, res, next) {
    res.sendFile(__dirname + "/index.html")
})

app.get("/blog", function (req, res, next) {
    res.send("<h2>Explore artigos sobre vários temas relevantes:<h2>")
})

app.get("/sobre", function (req, res, next) {
    res.sendFile(__dirname + "/html/sobre.html")
})

// Parâmetros
app.get("/nome/:nome/:cargo", function (req, res, next) {
    res.send(`Olá,  ${req.params.cargo} ${req.params.nome}`)
})

app.listen(porta, () => {
    console.log("Servidor executando na porta: ", porta)
})
