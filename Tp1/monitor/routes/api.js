const express = require('express'),
  api = express.Router(),
  { activate, deactivate, status } = require('../controllers/monitor');

api.post('/activate', activate);
api.post('/deactivate', deactivate);
api.post('/deactivate', status);

module.exports = api;
