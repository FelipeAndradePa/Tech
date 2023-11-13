const connection = require("../config/database");

async function insertForm(body) {
    try {
        const {name, company, email, subject, help} = body; // Supondo que os dados do frontend são enviados como JSON
        const query = 'INSERT INTO chamados (name, company, email, subject, help) VALUES (?, ?, ?, ?, ?)';
        await connection.execute(query, [name, company, email, subject, help]);

        return {sucess: true, message: "Dados inseridos com sucesso!"};

    }catch(error) {
         console.error('Erro ao inserir dados:', error);
         return { success: false, message: 'Erro ao inserir dados.' };
    }
}

async function sendEmail(body) {
    const {name, company, email, subject, help} = body;
    
}

module.exports = {insertForm}