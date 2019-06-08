class ErrorArtistaInexistente extends Error {
  handle(x){
    x.handleArtistaInexistenceError();
  }
}

class ErrorAlbumInexistente extends Error {
  handle(x){
    x.handleAlbumError();
  }
}

class ErrorTrackInexistente extends Error {
  handle(x){
    x.handleTrackInexistenteError();
  }
}

class ErrorArtistaRepetido extends Error {
  handle(x){
    x.handleArtistaRepetido();
  }
}
class ErrorTrackRepetido extends Error {
  handle(x){
    x.handleTrackRepetido();
  }
}

class ErrorUsuarioRepetido extends Error{
  handle(x){
    x.handleUserRepetido();
  }
}
class ErrorAlbumRepetido extends Error{
  handle(x){
    x.handleAlbumRepetido();
  }
}

module.exports = {
  ErrorArtistaInexistente,
  ErrorAlbumInexistente,
  ErrorTrackInexistente,
  ErrorArtistaRepetido,
  ErrorTrackRepetido,
  ErrorUsuarioRepetido,
  ErrorAlbumRepetido,
};