'use strict';

const express = require('express');

const api = express.Router();

const monitoring = () => setInterval(() => console.log('AAAAAAAAAAA'), 1500);

let interval;

api.post('/set', (req, res, next) => {
  interval = monitoring();
  return res.status(200).send({});
});

api.post('/clear', (req, res, next) => {
  clearInterval(interval);
  return res.status(200).send({});
});

module.exports = api;
