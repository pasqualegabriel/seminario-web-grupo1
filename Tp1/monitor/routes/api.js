'use strict';

const express = require('express');
const { activate, deactivate, status } = require('../controllers/monitor');

const api = express.Router();

api.post('/activate', activate);
api.post('/deactivate', deactivate);
api.get('/status', status);

module.exports = api;
