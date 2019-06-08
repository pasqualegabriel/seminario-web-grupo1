const { getUNQfy, saveUNQfy } = require('../config/db');

const create = (req, res, next) => {
  try {
    const unqfy = getUNQfy();
    const playList = unqfy.createPlaylist(req.body);
    saveUNQfy(unqfy);
    return res.status(201).send(playList);
  } catch (error) {
    return next(error);
  }
};

const createByTracks = (req, res, next) => {
  try {
    const unqfy = getUNQfy();
    const playList = unqfy.createPlaylistByTracks(req.body);
    saveUNQfy(unqfy);
    return res.status(201).send(playList);
  } catch (error) {
    return next(error);
  }
};

const findBy = (req, res, next) => {
  try {
    const unqfy = getUNQfy();
    const playList = unqfy.getPlaylistById(parseInt(req.params.id));
    saveUNQfy(unqfy);
    return res.status(200).send(playList);
  } catch (error) {
    return next(error);
  }
};

const deleteP = (req, res, next) => {
  try {
    const unqfy = getUNQfy();
    unqfy.deletePlayList(parseInt(req.params.id));
    saveUNQfy(unqfy);
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
};

const filter = (req, res, next) => {
  try {
    const unqfy = getUNQfy();
    unqfy.playListListFilter(req.query.name, parseInt(req.query.durationLT),parseInt(req.query.durationGT));
    saveUNQfy(unqfy);
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
};

module.exports = { create, createByTracks ,findBy,deleteP,filter};
