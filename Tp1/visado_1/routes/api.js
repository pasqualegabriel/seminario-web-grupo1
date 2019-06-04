'use strict';

const express = require('express');
const artists = require('../controllers/artistaController');  

const api = express.Router();


api.post('/artists', artists.save);
api.post('/artists/:id',artists.addAlbum);
api.get('/artists/:id',artists.findBy);
api.delete('/artists/:id',artists.deleteA);
api.get('/artists',artists.findByName);
api.get('/artists',artists.all);
api.put('/artists/:id',artists.update);
module.exports = api;
