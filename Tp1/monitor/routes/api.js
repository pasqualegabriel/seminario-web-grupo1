const express = require('express'),
  api = express.Router(),
  { activate, deactivate } = require('../controllers/monitor');

api.post('/activate', activate);

api.post('/deactivate', deactivate);

module.exports = api;
