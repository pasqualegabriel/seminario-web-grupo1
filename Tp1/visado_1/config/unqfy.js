const { getUNQfy, saveUNQfy } = require('./db');

exports.getUnqfy = (req, res, next) => {
  res.locals.unqfy = getUNQfy();
  return next();
};

exports.unqfyResponse = (response, req, res, next) => {
  if (response.data) {
    saveUNQfy(res.locals.unqfy);
    return res.status(response.status).send(response.data);
  }
  return next(response);
};
