'use strict';

const express = require('express');

const api = express.Router();

api.get('/artists', (req, res, next) => {
  return res.status(200).send({});
});

module.exports = api;
