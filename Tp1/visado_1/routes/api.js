'use strict';

const express = require('express');
const artists = require('../controllers/artistaController');  

const api = express.Router();

api.get('/artists',artists.all);
api.get('/artists',artists.findByName);
api.get('/artists/:id',artists.findBy);

api.post('/artists', artists.save);
api.post('/artists/:id',artists.addAlbum);

api.delete('/artists/:id',artists.deleteA);
api.put('/artists/:id',artists.update);
module.exports = api;
