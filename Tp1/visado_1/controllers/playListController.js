const { getUNQfy, saveUNQfy } = require('../config/db');

exports.create = (req, res, next) => {
  try {
    const unqfy = getUNQfy();
    const playList = unqfy.createPlaylist(req.body);
    saveUNQfy(unqfy);
    return res.status(201).send(playList);
  } catch (error) {
    return next(error);
  }
};

exports.createByTracks = (req, res, next) => {
  try {
    const unqfy = getUNQfy();
    const playList = unqfy.createPlaylistByTracks(req.body);
    saveUNQfy(unqfy);
    return res.status(201).send(playList);
  } catch (error) {
    return next(error);
  }
};

exports.findBy = (req, res, next) => {
  try {
    const unqfy = getUNQfy();
    const playList = unqfy.getPlaylistById(parseInt(req.params.id));
    saveUNQfy(unqfy);
    return res.status(200).send(playList);
  } catch (error) {
    return next(error);
  }
};

exports.deleteP = (req, res, next) => {
  try {
    const unqfy = getUNQfy();
    unqfy.deletePlayList(parseInt(req.params.id));
    saveUNQfy(unqfy);
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
};

exports.filter = (req, res, next) => {
  try {
    const unqfy = getUNQfy();
    unqfy.playListListFilter(req.query.name, parseInt(req.query.durationLT), parseInt(req.query.durationGT));
    saveUNQfy(unqfy);
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
};
