const request = require('request-promise');

module.exports = () => {
  const options = {
    url: '',
    headers: {}
  };
  return request(options);
};