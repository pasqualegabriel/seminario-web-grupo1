const request = require('request');

exports.request = (options, logRequest) =>
  new Promise((resolve, reject) => {
    request[options.method](options, (error, response) => {
      if (error) {
        console.log(`Error to send request: ${logRequest}`);
        console.log(error);
        return reject(error);
      } else {
        if (response.statusCode >= 500)
          return reject({ status: response.statusCode, message: 'Server error' });
        if (response.statusCode >= 400) return reject({ body: response.body, status: response.statusCode });
        return resolve(response);
      }
    });
  });
