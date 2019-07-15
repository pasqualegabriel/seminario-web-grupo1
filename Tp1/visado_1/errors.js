const internalError = (status, errorCode) => ({
  status,
  errorCode
});

const errors = {
  DEFAULT_ERROR: 'defaultError',
  NOT_FOUND_ERROR: 'notFoundError',
  BAD_REQUEST_ERROR: 'badRequestError',
  ARTISTA_REPETIDO_ERROR: 'artistaRepetidoError',
  ARTISTA_INEXISTENTE_ERROR: 'artistaInexistenteError',
  ALBUM_INEXISTENTE_ERROR: 'albumInexistenteError',
  AGREGAR_ALBUM_A_ARTISTA_INEXISTENTE_ERROR: 'agregarAlbumAArtistaInexistenteError',
  ALBUM_REPETIDO_ERROR: 'albumRepetidoError',
  TRACK_REPETIDO_ERROR: 'trackRepetidoError',
  TRACK_INEXISTENTE_ERROR: 'trackInexistenteError'
};

const errorsCode = {
  [errors.DEFAULT_ERROR]: () => internalError(500, 'DEFAULT_ERROR'),
  [errors.NOT_FOUND_ERROR]: () => internalError(404, 'RESOURCE_NOT_FOUND'),
  [errors.BAD_REQUEST_ERROR]: () => internalError(400, 'BAD_REQUEST'),
  [errors.ARTISTA_REPETIDO_ERROR]: () => internalError(409, 'RESOURCE_ALREADY_EXISTS'),
  [errors.ARTISTA_INEXISTENTE_ERROR]: () => internalError(404, 'RESOURCE_NOT_FOUND'),
  [errors.ALBUM_INEXISTENTE_ERROR]: () => internalError(404, 'RESOURCE_NOT_FOUND'),
  [errors.AGREGAR_ALBUM_A_ARTISTA_INEXISTENTE_ERROR]: () => internalError(404, 'RELATED_RESOURCE_NOT_FOUND'),
  [errors.ALBUM_REPETIDO_ERROR]: () => internalError(409, 'RESOURCE_ALREADY_EXISTS'),
  [errors.TRACK_REPETIDO_ERROR]: () => internalError(409, 'RESOURCE_ALREADY_EXISTS'),
  [errors.TRACK_INEXISTENTE_ERROR]: () => internalError(404, 'RESOURCE_NOT_FOUND')
};

module.exports = { errors, errorsCode };
