'use strict';

const app = require('./app');

require('dotenv').config();

const port = process.env.PORT || 8001;

app.listen(port, () => {
  console.log(`api is listening on port ${port}`);
});

module.exports = app;
