const { getUNQfy, saveUNQfy } = require('../config/db');

const save = (req, res, next) => {
  try {
    const unqfy = getUNQfy();
    const artists = unqfy.addArtist(req.body);
    saveUNQfy(unqfy);
    return res.status(201).send(artists);
  } catch (error) {
    return next(error);
  }
};

const update = (req, res, next) => {
  try {
    const unqfy = getUNQfy();
    const artists = unqfy.updateArtist(parseInt(req.params.id), req.body);
    saveUNQfy(unqfy);
    return res.status(200).send(artists);
  } catch (error) {
    return next(error);
  }
};

const all = (req, res, next) => {
  try {
    console.log(req.query.name);
    const unqfy = getUNQfy();
    const artists = req.query.name ? unqfy.findAllArtistByName(req.query.name) : unqfy.getAllArtist();
    saveUNQfy(unqfy);
    return res.status(200).send(artists);
  } catch (error) {
    return next(error);
  }
};

const addAlbum = (req, res, next) => {
  try {
    const unqfy = getUNQfy();
    const artists = unqfy.addAlbum(parseInt(req.params.id), req.body);
    saveUNQfy(unqfy);
    return res.status(200).send(artists);
  } catch (error) {
    return next(error);
  }
};

const deleteA = (req, res, next) => {
  try {
    const unqfy = getUNQfy();
    unqfy.deleteArtist(parseInt(req.params.id));
    saveUNQfy(unqfy);
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
};

const findByName = (req, res, next) => {
  try {
    const unqfy = getUNQfy();
    const artists = unqfy.findAllArtistByName(req.query.name);
    saveUNQfy(unqfy);
    return res.status(200).send(artists);
  } catch (error) {
    return next(error);
  }
};

const findBy = (req, res, next) => {
  try {
    const unqfy = getUNQfy();
    const artists = unqfy.getArtistById(parseInt(req.params.id));
    saveUNQfy(unqfy);
    return res.status(200).send(artists);
  } catch (error) {
    return res.status(409).send('artists');
  }
};

module.exports = { save, findBy, addAlbum, deleteA, findByName, all, update };
