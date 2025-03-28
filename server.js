// Importando o express e o nodemailer
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

// Configurar o servidor Express
const app = express();
const port = 3000;

// Middleware para processar o corpo da requisição
app.use(bodyParser.urlencoded({ extended: true }));

// Rota para o formulário
app.post('/enviar-formulario', (req, res) => {
  const { nome, email, mensagem } = req.body;

  // Configuração do Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Ou o serviço de sua escolha
    auth: {
      user: 'seuemail@gmail.com', // Seu e-mail
      pass: 'suasenha' // Sua senha ou um App Password se usar o 2FA
    }
  });

  // Configurar a mensagem do e-mail
  const mailOptions = {
    from: email,
    to: 'adrianrazin60@gmail.com', // E-mail que receberá as mensagens
    subject: 'Nova Mensagem de Contato',
    text: `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`
  };

  // Enviar o e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Erro ao enviar a mensagem.');
    } else {
      console.log('E-mail enviado: ' + info.response);
      res.status(200).send('Mensagem enviada com sucesso!');
    }
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
