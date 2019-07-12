const { getStatus, notifyToSlack } = require('../services/request'),
  { logsUrl, notifyUrl } = require('../constants');

const apiStatus = () =>
  getStatus(logsUrl).then(logsApiStatus =>
    getStatus(notifyUrl).then(notifyApiStatus => ({
      logsApiStatus,
      notifyApiStatus
    }))
  );

let logsStatus = '';

let logsNotify = '';

const notifySlack = () => {
  console.log('checking apis');
  return apiStatus().then(({ logsApiStatus, notifyApiStatus }) => {
    if (logsApiStatus !== logsStatus) {
      logsStatus = logsApiStatus;
      notifyToSlack(`logs api ${logsApiStatus}`);
    }
    if (notifyApiStatus !== logsNotify) {
      logsNotify = notifyApiStatus;
      notifyToSlack(`notify api ${notifyApiStatus}`);
    }
  });
};

const monitoring = () => setInterval(notifySlack, 2500);

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
  apiStatus().then(status => {
    console.log(status);
    res.status(200).send(status);
  });
