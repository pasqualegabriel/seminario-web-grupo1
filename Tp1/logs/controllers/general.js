const localLogger = require('../controllers/local');
const loggly = require('../controllers/loggly')

let activated = true;

exports.save = (req, res, next) => {
    if(activated) {
        localLogger.save(req, res, next);
        loggly.save(req, res, next);
    }
    return res.status(200).end();
};

exports.activate = (req, res, next) => {
    activated = true;
    res.status(200).end()
}

exports.desactivate = (req, res, next) => {
    activated = false;
    res.status(200).end()
}