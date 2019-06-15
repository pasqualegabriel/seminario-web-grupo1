const internalError = (status, errorCode) => ({
  status,
  errorCode
});

exports.DEFAULT_ERROR = 'defaultError';
exports.defaultError = () => internalError(500, exports.DEFAULT_ERROR);

exports.ARTISTA_REPETIDO_ERROR = 'artistaRepetidoError';
exports.artistaRepetidoError = () => internalError(409, 'RESOURCE_ALREADY_EXISTS');

exports.ARTISTA_INEXISTENTE_ERROR = 'artistaInexistenteError';
exports.artistaInexistenteError = () => internalError(404, 'RESOURCE_NOT_FOUND');