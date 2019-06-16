exports.save = (req, res, next) => {
  const artists = res.locals.unqfy.addArtist(req.body);
  return next({ status: 201, data: artists });
};

exports.update = (req, res, next) => {
  const artists = res.locals.unqfy.updateArtist(parseInt(req.params.id), req.body);
  return next({ status: 200, data: artists });
};

exports.all = (req, res, next) => {
  const artists = req.query.name
    ? res.locals.unqfy.findAllArtistByName(req.query.name)
    : res.locals.unqfy.getAllArtist();
  return next({ status: 200, data: artists });
};

exports.addAlbum = (req, res, next) => {
  const artists = res.locals.unqfy.addAlbum(parseInt(req.params.id), req.body);
  return next({ status: 200, data: artists });
};

exports.deleteA = (req, res, next) => {
  res.locals.unqfy.deleteArtist(parseInt(req.params.id));
  return next({ status: 204, data: 'ok' });
};

exports.findByName = (req, res, next) => {
  const artists = res.locals.unqfy.findAllArtistByName(req.query.name);
  return next({ status: 200, data: artists });
};

exports.findBy = (req, res, next) => {
  const artists = res.locals.unqfy.getArtistById(parseInt(req.params.id));
  return next({ status: 200, data: artists });
};
