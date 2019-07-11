const request = require('../services/request');

const verifyLogsApiStatus = () => 1;

const verifyNotifyApiStatus = () => 1;

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

exports.status = (req, res, next) =>
  verifyLogsApiStatus().then(({ body: logsApiStatus }) =>
    verifyNotifyApiStatus().then(({ body: notifyApiStatus }) =>
      res.status(200).send({
        logsApiStatus,
        notifyApiStatus
      })
    )
  );
