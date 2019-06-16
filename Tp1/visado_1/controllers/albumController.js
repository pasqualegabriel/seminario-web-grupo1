const { getUNQfy, saveUNQfy } = require('../config/db');

exports.save = (req, res, next) => {
  try {
    const unqfy = getUNQfy();
    const albums = unqfy.addAlbum(parseInt(req.body.artistId), req.body);
    saveUNQfy(unqfy);
    return res.status(201).send(albums);
  } catch (error) {
    return next(error);
  }
};

exports.findBy = (req, res, next) => {
  try {
    const unqfy = getUNQfy();
    const albums = unqfy.getAlbumById(parseInt(req.params.id));
    saveUNQfy(unqfy);
    return res.status(200).send(albums);
  } catch (error) {
    return next(error);
  }
};

exports.updateYear = (req, res, next) => {
  try {
    const unqfy = getUNQfy();
    const albums = unqfy.updateYear(parseInt(req.params.id), req.body);
    saveUNQfy(unqfy);
    return res.status(200).send(albums);
  } catch (error) {
    return next(error);
  }
};

exports.deleteA = (req, res, next) => {
  try {
    const unqfy = getUNQfy();
    unqfy.deleteAlbum(parseInt(req.params.id));
    saveUNQfy(unqfy);
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
};

exports.all = (req, res, next) => {
  try {
    const unqfy = getUNQfy();
    const albums = req.query.name ? unqfy.findAllAlbumsByName(req.query.name) : unqfy.findAllAlbums();
    saveUNQfy(unqfy);
    return res.status(200).send(albums);
  } catch (error) {
    return next(error);
  }
};
