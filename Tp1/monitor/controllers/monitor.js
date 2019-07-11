const request = require('../services/request');

const monitoring = () => setInterval(() => console.log('AAAAAAAAAAA'), 1500);

let interval;

exports.activate = (req, res, next) => {
  interval = monitoring();
  return res.status(200).end();
};

exports.deactivate = (req, res, next) => {
  clearInterval(interval);
  return res.status(200).end();
};
