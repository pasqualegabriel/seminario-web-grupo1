const fs = require('fs');
const promisify = require('util').promisify;
const { google } = require('googleapis');
const getGmailClient = require('./gmailClient');

// Obtiene un objeto JJJJJ a partir del credentials.json y token.json
const gmailClient = getGmailClient();

exports.notificarSuscriptor = (listaMail, sujeto, mensaje) => {
  listaMail.forEach(mail => {
    gmailClient.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: createMessage(mail, sujeto, mensaje)
      }
    });
  });
};

function createMessage(mail, sujeto, mensaje) {
  // You can use UTF-8 encoding for the subject using the method below.
  // You can also just use a plain string if you don't need anything fancy.
  const utf8Subject = `=?utf-8?B?${Buffer.from(sujeto).toString('base64')}?=`;
  const messageParts = [
    'From: UNQfy <UNQfy.notifications@gmail.com> ',
    `To: Lautaro Woites ${mail}`,
    'Content-Type: text/html; charset=utf-8',
    'MIME-Version: 1.0',
    `Subject: ${utf8Subject}`,
    `${mensaje}`
  ];
  const message = messageParts.join('\n');

  // The body needs to be base64url encoded.
  const encodedMessage = Buffer.from(message)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  return encodedMessage;
}
