exports.create = (req, res, next) => {
  const playList = res.locals.unqfy.createPlaylist(req.body);
  return next({ status: 201, data: playList });
};

exports.createByTracks = (req, res, next) => {
  const playList = res.locals.unqfy.createPlaylistByTracks(req.body);
  return next({ status: 201, data: playList });
};

exports.findBy = (req, res, next) => {
  const playList = res.locals.unqfy.getPlaylistById(parseInt(req.params.id));
  return next({ status: 200, data: playList });
};

exports.deleteP = (req, res, next) => {
  res.locals.unqfy.deletePlayList(parseInt(req.params.id));
  return next({ status: 204, data: 'ok' });
};

exports.filter = (req, res, next) => {
  res.locals.unqfy.playListListFilter(
    req.query.name,
    parseInt(req.query.durationLT),
    parseInt(req.query.durationGT)
  );
  return next({ status: 204, data: 'ok' });
};
