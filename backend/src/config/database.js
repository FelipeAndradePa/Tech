const mysql = require("mysql2/promise"); //fornece uma abordagem mais limpa e prática para trabalhar com promises
let connection = null  //variável de monitoramento para a existência de conexão

async function connect() {
    //se não há conexão com o banco, uma conexão é criada
    if(!connection){
        const client = await mysql.createConnection({
            host: process.env.host,
            user: process.env.user,
            password: process.env.password,
            database: process.env.database,
          });
    }

    return client;
}

async function disconnect() {
    if (!connection) {
        return true;
    }
        
    // Feche a conexão com o banco de dados MySQL
    await connection.end();
    connection = null;
    return true;
}

module.exports = {connect, disconnect}