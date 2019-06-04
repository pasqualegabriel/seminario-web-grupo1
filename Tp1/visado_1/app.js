'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routes/api');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false, useNewUrlParser: true }));



app.use('/api', api);

module.exports = app;
