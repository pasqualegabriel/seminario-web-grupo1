var winston = require('winston');

const localLogger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'UNQFY' },
    transports: [
      new winston.transports.File({ filename: 'logFiles/errores.log', level: 'error' }),
      new winston.transports.File({ filename: 'logFiles/logs.log' })
    ]
  });

exports.save = (req, res, next) => {
    localLogger.log({
        level: req.query.level,
        message: req.query.message
    })
};
