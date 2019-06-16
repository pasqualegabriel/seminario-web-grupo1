'use strict';

const express = require('express');
const artists = require('../controllers/artistaController');
const albums = require('../controllers/albumController');
const playList = require('../controllers/playListController');
const { Validator } = require('express-json-validator-middleware');
const { artistSchema, albumSchema } = require('../middlewares/schemas');
const { getUnqfy } = require('../config/unqfy');

const validator = new Validator({ allErrors: true });
const validate = validator.validate;

const api = express.Router();

api.get('/artists', getUnqfy, artists.all);
api.get('/artists', getUnqfy, artists.findByName);
api.get('/artists/:id', getUnqfy, artists.findBy);

api.post('/artists', validate({ body: artistSchema }), getUnqfy, artists.save);
api.post('/artists/:id', getUnqfy, artists.addAlbum);

api.delete('/artists/:id', getUnqfy, artists.deleteA);
api.put('/artists/:id', getUnqfy, artists.update);

api.get('/albums', getUnqfy, albums.all);
api.get('/albums/:id', getUnqfy, albums.findBy);

api.post('/albums', validate({ body: albumSchema }), getUnqfy, albums.save);

api.patch('/albums/:id', getUnqfy, albums.updateYear);

api.delete('/albums/:id', getUnqfy, albums.deleteA);

api.post('/playlists', getUnqfy, playList.create);
api.post('/playlists', getUnqfy, playList.createByTracks);

api.get('/playlists', getUnqfy, playList.filter);
api.get('/playlists/:id', getUnqfy, playList.findBy);

api.delete('/playlists', getUnqfy, playList.deleteP);

module.exports = api;
