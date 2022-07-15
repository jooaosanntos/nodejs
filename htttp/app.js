const http = require("http")

http.createServer(function(req, res) {
    res.end("Hello, world!")
}).listen(8080)

console.log("Servidor exectando...")
