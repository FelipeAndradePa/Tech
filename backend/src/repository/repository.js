const connection = require("../config/database");
const nodemailer = require("nodemailer");

async function insertMessage(body) {
    try {
        const {name, company, email, subject, help} = body; // Supondo que os dados do frontend são enviados como JSON
        const query = 'INSERT INTO message (name,company,email,assunto,help) VALUES (?, ?, ?, ?, ?)';
        conexao = await connection.connect();
        await conexao.execute(query, [name, company, email, subject, help]);

        return {sucess: true, message: "Dados inseridos com sucesso!"};

    } catch(error) {
          console.error('Erro ao inserir dados:', error);
          return { success: false, message: 'Erro ao inserir dados.' };
    }
}

async function insertForm(body) {
    try {
        const {name, company, email, subject, help} = body; // Supondo que os dados do frontend são enviados como JSON
        const query = 'INSERT INTO form (name,company,email,assunto,help) VALUES (?, ?, ?, ?, ?)';
        conexao = await connection.connect();
        await conexao.execute(query, [name, company, email, subject, help]);

        return {sucess: true, message: "Dados inseridos com sucesso!"};

    } catch(error) {
          console.error('Erro ao inserir dados:', error);
          return { success: false, message: 'Erro ao inserir dados.' };
    }
}

async function consultLogin(body) {
    try {
        const {login, senha} = body;
        const query = 'SELECT * FROM login WHERE login = ? AND senha = ?';
        conexao = await connection.connect();
        const rows = conexao.execute(query, [login, senha]);

        return {sucess: true, message: rows.length};

    } catch (error) {
          console.error('Erro na consulta dos dados:', error);
          return { sucess: false, message: 'Erro ao inserir dados.' };
    }
}
async function sendEmailSuport(body) {
    try {
        const {name, company, email, subject, help} = body;
    
        const transporter = nodemailer.createTransport({
            host: process.env.HOST_SMTP,
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAILSPT,
                pass: process.env.PASS
            }
        });

        // Configurações do e-mail
        const mailOptions = {
            from: email,
            to: process.env.EMAIL,
            subject: subject,
            text: `Você recebeu uma mensagem através do Sistema de Chamados \n\n 
                   nome: ${name} \n
                   empresa: ${company} \n\n
                   ${help}`
        };

        // Enviando o e-mail
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Erro ao enviar o e-mail:', error);
            } else {
                console.log('E-mail enviado com sucesso:', info.response);
            }
        });
    } catch (error) {
        console.error('Erro no envio do email de suporte:', error);
        return { sucess: false, message: 'Erro ao enviar o email.' };
    }
  
}

async function sendEmailComercial(body) {
    try {
        const {name, company, email, subject, help} = body;
    
        const transporter = nodemailer.createTransport({
            host: process.env.HOST_SMTP,
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAILCOM,
                pass: process.env.PASS
            }
        });

        // Configurações do e-mail
        const mailOptions = {
            from: email,
            to: process.env.EMAIL,
            subject: subject,
            text: `Você recebeu uma mensagem: \n\n 
                   nome: ${name} \n
                   empresa: ${company} \n\n
                   ${help}`
        };

        // Enviando o e-mail
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Erro ao enviar o e-mail:', error);
            } else {
                console.log('E-mail enviado com sucesso:', info.response);
            }
        });
    } catch (error) {
        console.error('Erro no envio do email de contato:', error);
        return { sucess: false, message: 'Erro ao enviar o email.' };
    }
  
}

module.exports = {insertForm, insertMessage, sendEmailSuport, sendEmailComercial, consultLogin}