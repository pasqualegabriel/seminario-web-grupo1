'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routes/api');
const { handleError, notFoundError } = require('./middlewares/errors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false, useNewUrlParser: true }));

app.use('/api', api);
app.use('/*', notFoundError);
app.use(handleError);

module.exports = app;
