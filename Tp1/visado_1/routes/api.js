'use strict';

const express   = require('express');
const artists   = require('../controllers/artistaController');  
const albums    = require('../controllers/albumController');
const playList  = require('../controllers/playListController');
const api = express.Router();

api.get('/artists',artists.all);
api.get('/artists',artists.findByName);
api.get('/artists/:id',artists.findBy);

api.post('/artists', artists.save);
api.post('/artists/:id',artists.addAlbum);

api.delete('/artists/:id',artists.deleteA);
api.put('/artists/:id',artists.update);

api.get('/albums',albums.all);
api.get('/albums/:id',albums.findBy);

api.post('/albums',albums.save);

api.put('/albums/:id',albums.updateYear);

api.delete('/albums/:id',albums.deleteA);


api.put('/playlists',playList.create);


module.exports = api;
