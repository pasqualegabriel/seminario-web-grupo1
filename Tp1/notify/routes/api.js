'use strict';

const express = require('express');
const { notifyController } = require('../controllers/postmanController');
const { Validator } = require('express-json-validator-middleware');

const validator = new Validator({ allErrors: true });
const validate = validator.validate;

const api = express.Router();

api.post('/notify', notifyController);

module.exports = api;
