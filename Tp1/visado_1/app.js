'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routes/api');
const errors = require('./middlewares/errors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false, useNewUrlParser: true }));

app.use('/api', api);
app.use(errors.handle);

module.exports = app;
