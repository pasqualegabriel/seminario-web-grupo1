var winston = require('winston');
var loggly = require('node-loggly-bulk');

var client = loggly.createClient({
    token: "ddbf6d70-e12c-4ce8-a3d6-791ddd589c71",
    subdomain: "seminarioweb",
    auth: {
      username: "seminario",
      password: "12345678"
    },
    tags: ['UNQFY']
  });

exports.save = (req, res, next) => {
    client.log("HOLA MUNDO")
}

/*
winston.add(new Loggly({
    token: "ddbf6d70-e12c-4ce8-a3d6-791ddd589c71",
    subdomain: "seminarioweb",
    tags: ["UNQFY"],
    json: true
}));

winston.log('info', "Hello World from Node.js!");
*/