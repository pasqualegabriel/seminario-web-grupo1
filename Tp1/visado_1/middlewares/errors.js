const errors = require('../errors');
const rollbar = require('../../config/rollbar');
const { inspect } = require('util');
const logger = require('../logger');

const DEFAULT_STATUS_CODE = 500;

const statusCodes = {
  [errors.DEFAULT_ERROR]: 500,
};

exports.handle = (error, req, res, next) => {
  if (error.internalCode) {
    res.status(statusCodes[error.internalCode] || DEFAULT_STATUS_CODE);
  } else {
    // Unrecognized error, notifying it to rollbar.
    next(error);
    res.status(DEFAULT_STATUS_CODE);
  }
  logger.error(inspect(error, { depth: null }));
  rollbar.error(inspect(error, { depth: null }));
  return res.send({ message: error.message, internal_code: error.internalCode });
};