const internalError = (status, errorCode) => ({
  status,
  errorCode
});

const errors = {
  NOT_FOUND_ERROR: 'notFoundError'
};

const errorsCode = {
  [errors.NOT_FOUND_ERROR]: () => internalError(404, 'RESOURCE_NOT_FOUND')
};

module.exports = { errors, errorsCode };
