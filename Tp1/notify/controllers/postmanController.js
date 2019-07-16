const { notificarSuscriptor } = require('../send-mail-example/sendMail');

exports.notifyController = (req, res, next) => {
  console.log('caca');

  notificarSuscriptor(req.query.mails, req.query.subject, req.query.message);
  // return next({ status: 200, data: {} });
  return res.status(200).end();
};
