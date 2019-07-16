const {notificarSuscriptor} = require('../send-mail-example/sendMail');
exports.notify = (req, res, next) => {
  notificarSuscriptor(req.body.mails, req.body.subject, req.body.message);
  return next({ status: 200, data: {} });

};