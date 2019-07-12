const express = require('express'),
  api = express.Router();

api.get('/active', (req, res, next) => res.status(200).send('ok'));

module.exports = api;
