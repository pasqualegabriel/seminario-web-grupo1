const { getUNQfy, saveUNQfy } = require('./db');

exports.getUnqfy = (req, res, next) => {
  res.locals.unqfy = getUNQfy();
  return next();
};

exports.unqfyResponse = (response, req, res, next) => {
  if (response.data && req.method !== 'GET') {
    saveUNQfy(res.locals.unqfy);
  }
  return response.data ? res.status(response.status).send(response.data) : next(response);
};
