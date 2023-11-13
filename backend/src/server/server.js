require("express-async-errors") // biblioteca para tratamento de erros assíncronos
const express = require("express");
const morgan = require("morgan"); // middleware registro de solicitações HTTP (log de requisições)
let server = null

async function start(api, repository) { // função assíncrona para iniciar o servidor
    const app = express(); // inicia o express
    app.use(morgan("dev")); // usa o morgan para registrar log de requisições

    app.use((err, req, res, next) => {  // definição do middleware de tratamento de erros
        console.error(err);
        res.sendStatus(500);
    })

    api(app, repository);
    server = app.listen(process.env.PORT)
    return server;
}

async function stop() {
    if (server) {
        await server.close();
    }
    return true;
}

module.exports = {start, stop}