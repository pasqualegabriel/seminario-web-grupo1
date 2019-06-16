exports.save = (req, res, next) => {
  const albums = res.locals.unqfy.addAlbum(parseInt(req.body.artistId), req.body);
  return next({ status: 201, data: albums });
};

exports.findBy = (req, res, next) => {
  const albums = res.locals.unqfy.getAlbumById(parseInt(req.params.id));
  return next({ status: 200, data: albums });
};

exports.updateYear = (req, res, next) => {
  const albums = res.locals.unqfy.updateYear(parseInt(req.params.id), req.body);
  return next({ status: 200, data: albums });
};

exports.deleteA = (req, res, next) => {
  res.locals.unqfy.deleteAlbum(parseInt(req.params.id));
  return next({ status: 204, data: 'ok' });
};

exports.all = (req, res, next) => {
  const albums = req.query.name
    ? res.locals.unqfy.findAllAlbumsByName(req.query.name)
    : res.locals.unqfy.findAllAlbums();
  return next({ status: 200, data: albums });
};
