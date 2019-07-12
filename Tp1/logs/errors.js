const internalError = (status, errorCode) => ({
  status,
  errorCode
});

const errors = {
  DEFAULT_ERROR: 'defaultError',
  NOT_FOUND_ERROR: 'notFoundError',
  BAD_REQUEST_ERROR: 'badRequestError'
};

const errorsCode = {
  [errors.DEFAULT_ERROR]: () => internalError(500, 'DEFAULT_ERROR'),
  [errors.NOT_FOUND_ERROR]: () => internalError(404, 'RESOURCE_NOT_FOUND'),
  [errors.BAD_REQUEST_ERROR]: () => internalError(400, 'BAD_REQUEST')
};

module.exports = { errors, errorsCode };
