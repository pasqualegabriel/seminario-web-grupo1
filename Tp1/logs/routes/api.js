'use strict';

const express = require('express');
const logger = require('../controllers/general');

const api = express.Router();

api.post('/activate', logger.activate);
api.post('/desactivate', logger.desactivate);
api.post('/save', logger.save);
api.get('/active', (req, res, next) => res.status(200).send('ok'));

module.exports = api;

