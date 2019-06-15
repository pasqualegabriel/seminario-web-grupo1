const { errorsCode } = require('../errors');

const DEFAULT_STATUS_CODE = 500;

exports.handle = (error, req, res, next) => {
  const message = error.message;
  const err = errorsCode[message] ? errorsCode[message]() : message;
  const statusCode = err.status || DEFAULT_STATUS_CODE;
  return res.status(statusCode).send(err);
};
