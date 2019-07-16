const fs = require('fs');
const promisify = require('util').promisify;
const { google } = require('googleapis');
const getGmailClient = require('./gmailClient');

// Obtiene un objeto JJJJJ a partir del credentials.json y token.json
const gmailClient = getGmailClient();

exports.notificarSuscriptor = (listaMail, sujeto, mensaje) => {
  console.log(listaMail);
  console.log(sujeto);
  console.log(mensaje);
  listaMail.forEach(mail => {
    gmailClient.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: createMessage(mail, sujeto, mensaje)
      }
    });
  });
};

const createMessage = (subEmail, subject, content) => {
  const utf8Subject = `=?utf-8?B?${Buffer.from(subject).toString('base64')}?=`;
  const messageParts = [
    `To: <${subEmail}>`,
    'Content-Type: text/html; charset=utf-8',
    'MIME-Version: 1.0',
    `Subject: ${utf8Subject}`,
    '',
    content
  ];
  const message = messageParts.join('\n');

  // The body needs to be base64url encoded.
  const encodedMessage = Buffer.from(message)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  return encodedMessage;
};
