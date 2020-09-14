const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

//= =======================-_NODEMAILER (config gmail)_-========================
//              (!)(!) A compléter au niveaux de comentaires (!)(!)

router.post('/', (req) => {
  console.log(req.body)
  const {
    name, email, country, message,
  } = req.body;
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // (!)autorisation obligatoire(!) => https://myaccount.google.com/lesssecureapps
    auth: {
      user: 'barbier.alexis06@gmail.com', // adresse GMAIL uniquement
      pass: '', // mot de passe gmail
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const htmlBody = `
    <h3>Contact</h3>
    <ul>  
      <li>Name: ${name}</li>
      <li>Email: ${email}</li>
      <li>Country: ${country}</li>
    </ul>
    <h3>Message</h3>
    <p>${message}</p>`;
  console.log(htmlBody);

  const mailBody = {
    from: email,
    to: 'barbier.alexis06@gmail.com', // adresse(s) mail
    country,
    message,
    html: htmlBody,
  };

  transporter.sendMail(mailBody, (error, info) => {
    if (error) {
      console.log('Error when sending mail !');
      console.log(error);
    } else {
      console.log('Mail send with success !');
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    }
  });
});


module.exports = router;
