var loggly = require('loggly');
 
const client = loggly.createClient({
  token: "ddbf6d70-e12c-4ce8-a3d6-791ddd589c71",
  subdomain: "seminarioweb",
  auth: {
    username: "seminario",
    password: "12345678"
  },
  tags: ['UNQFY'],
  json: true
});

exports.save = (req, res, next) => {
  let data = {
    json: {
      level: req.query.level,
      message: req.query.message
    }
  }

  client.log(data)
}
