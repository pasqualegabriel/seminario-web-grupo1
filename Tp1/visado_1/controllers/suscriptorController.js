exports.suscribe = (req, res, next) => {
  console.log('llegue');

  res.locals.unqfy.suscribe(parseInt(req.body.artistId), req.body.email);
  return next({ status: 200, data: {} });
};

exports.unsubscribe = (req, res, next) => {
  const artista = res.locals.unqfy.unsubscribe(parseInt(req.body.artistId), req.body.email);

  return next({ status: 200, data: { artista } });
};

exports.subscriptors = (req, res, next) => {
  const artistId = parseInt(req.params.artitsId);
  const subscriptors = res.locals.unqfy.subscriptors(artistId);
  const datos = {
    artistId,
    subscriptors
  };
  return next({ status: 200, data: datos });
};
