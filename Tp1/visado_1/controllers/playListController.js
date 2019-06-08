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

module.exports = { create, createByTracks };
