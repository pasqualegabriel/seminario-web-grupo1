const internalError = (message, internalCode) => ({
  message,
  internalCode
});

const DEFAULT_ERROR = 'default_error';
const defaultError = message => internalError(message, exports.DEFAULT_ERROR);

module.exports = { DEFAULT_ERROR, defaultError };
