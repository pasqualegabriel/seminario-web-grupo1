const { errors, errorsCode } = require('../errors');
const { ValidationError } = require('express-json-validator-middleware');

const DEFAULT_STATUS_CODE = 500;

exports.handleError = (error, req, res, next) => {
  const message =
    error.statusCode === 400 || error instanceof ValidationError ? errors.BAD_REQUEST_ERROR : error.message;
  const err = errorsCode[message] ? errorsCode[message]() : message;
  const statusCode = err.status || DEFAULT_STATUS_CODE;
  return res.status(statusCode).send(err);
};

exports.notFoundError = (req, res, next) => next({ message: errors.NOT_FOUND_ERROR });
