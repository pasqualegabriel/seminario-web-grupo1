const DEFAULT_STATUS_CODE = 500;

exports.handle = (error, req, res, next) => {
  const statusCode = error.status || DEFAULT_STATUS_CODE;
  return res.status(statusCode).send(error);
};
