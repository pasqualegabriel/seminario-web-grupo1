const errors = require('../errors');
const { inspect } = require('util');

const DEFAULT_STATUS_CODE = 500;

const statusCodes = {
  [errors.DEFAULT_ERROR]: 500
};

const handle = (error, req, res, next) => {
  if (error.internalCode) {
    res.status(statusCodes[error.internalCode] || DEFAULT_STATUS_CODE);
  } else {
    // Unrecognized error, notifying it to rollbar.
    next(error);
    res.status(DEFAULT_STATUS_CODE);
  }
  console.log(inspect(error, { depth: null }));
  return res.send({ message: error.message, internal_code: error.internalCode });
};

module.exports = { handle };
