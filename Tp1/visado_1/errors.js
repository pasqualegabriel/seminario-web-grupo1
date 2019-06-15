const internalError = (status, errorCode) => ({
  status,
  errorCode
});

const errors = {
  DEFAULT_ERROR: 'defaultError',
  ARTISTA_REPETIDO_ERROR: 'artistaRepetidoError',
  ARTISTA_INEXISTENTE_ERROR: 'artistaInexistenteError',
  ALBUM_INEXISTENTE_ERROR: 'albumInexistenteError'
};

const errorsCode = {
  [errors.DEFAULT_ERROR]: () => internalError(500, errors.DEFAULT_ERROR),
  [errors.ARTISTA_REPETIDO_ERROR]: () => internalError(409, 'RESOURCE_ALREADY_EXISTS'),
  [errors.ARTISTA_INEXISTENTE_ERROR]: () => internalError(404, 'RESOURCE_NOT_FOUND'),
  [errors.ALBUM_INEXISTENTE_ERROR]: () => internalError(404, 'RESOURCE_NOT_FOUND')
};

module.exports = { errors, errorsCode };
