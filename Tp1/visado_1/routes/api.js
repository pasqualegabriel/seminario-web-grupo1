'use strict';

const express = require('express');
const {save,findBy} = require('../controllers/artistaController');  

const api = express.Router();


api.post('/artists', save);
api.get('/artists/:id',findBy);

module.exports = api;
