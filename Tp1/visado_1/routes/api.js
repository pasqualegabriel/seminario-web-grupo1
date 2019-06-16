'use strict';

const express = require('express');
const artists = require('../controllers/artistaController');
const albums = require('../controllers/albumController');
const playList = require('../controllers/playListController');
const { Validator } = require('express-json-validator-middleware');
const { artistSchema, albumSchema } = require('../middlewares/schemas');

const validator = new Validator({ allErrors: true });
const validate = validator.validate;

const api = express.Router();

api.get('/artists', artists.all);
api.get('/artists', artists.findByName);
api.get('/artists/:id', artists.findBy);

api.post('/artists', validate({ body: artistSchema }), artists.save);
api.post('/artists/:id', artists.addAlbum);

api.delete('/artists/:id', artists.deleteA);
api.put('/artists/:id', artists.update);

api.get('/albums', albums.all);
api.get('/albums/:id', albums.findBy);

api.post('/albums', validate({ body: albumSchema }), albums.save);

api.put('/albums/:id', albums.updateYear);

api.delete('/albums/:id', albums.deleteA);

api.post('/playlists', playList.create);
api.post('/playlists', playList.createByTracks);

api.get('/playlists', playList.filter);
api.get('/playlists/:id', playList.findBy);

api.delete('/playlists', playList.deleteP);

module.exports = api;
