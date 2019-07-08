const { MusicMatchClient } = require('../clients/musicMatch');

exports.getLyrics = (req, res, next) => {
  const lyrics = res.locals.unqfy.getLyrics(parseInt(req.params.id), MusicMatchClient);
    return next({ status: 200, data: lyrics });
};
