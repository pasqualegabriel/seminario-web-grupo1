const { getUNQfy, saveUNQfy } = require('../config/db');

const save = (req, res, next) => {
  try {
    const unqfy = getUNQfy();
    const albums = unqfy.addAlbum(parseInt(req.body.artistId), req.body);
    saveUNQfy(unqfy);
    return res.status(201).send(albums);
  } catch (error) {
    return next(error);
  }
};

const findBy = (req, res, next) => {
  try {
    const unqfy = getUNQfy();
    const albums = unqfy.getAlbumById(parseInt(req.params.id));
    saveUNQfy(unqfy);
    return res.status(200).send(albums);
  } catch (error) {
    return next(error);
  }
};

const updateYear = (req, res, next) => {
  try {
    const unqfy = getUNQfy();
    const albums = unqfy.updateYear(parseInt(req.params.id), req.body);
    saveUNQfy(unqfy);
    return res.status(200).send(albums);
  } catch (error) {
    return next(error);
  }
};

const deleteA = (req, res, next) => {
  try {
    const unqfy = getUNQfy();
    unqfy.deleteAlbum(parseInt(req.params.id));
    saveUNQfy(unqfy);
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
};

const all = (req, res, next) => {
  try {
    const unqfy = getUNQfy();
    const albums = req.query.name ? unqfy.findAllAlbums() : unqfy.findAllAlbumsByName(req.query.name);
    saveUNQfy(unqfy);
    return res.status(200).send(albums);
  } catch (error) {
    return next(error);
  }
};

module.exports = { save, findBy, updateYear, deleteA, all };
