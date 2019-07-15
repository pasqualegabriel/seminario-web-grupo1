const request = require('request'),
  { slackUrl } = require('../constants');

const requestToApi = options =>
  new Promise((resolve, reject) => {
    request[options.method](options, (error, response) => (error ? reject(error) : resolve(response)));
  });

exports.getStatus = url =>
  requestToApi({
    url,
    method: 'get',
    json: true,
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(() => 'Connected')
    .catch(() => 'Disconnected');

exports.notifyToSlack = text =>
  requestToApi({
    url: slackUrl,
    method: 'post',
    json: true,
    headers: {
      'Content-Type': 'application/json'
    },
    body: { text }
  }).catch(err => console.log(err.message));
