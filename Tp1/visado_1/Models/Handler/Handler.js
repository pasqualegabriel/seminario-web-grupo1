/* eslint-disable class-methods-use-this */
class Handler {
  handleAlbumError() {
    console.log('El Album no existe');
  }

  handleArtistaInexistenceError() {
    console.log('El artista no existe');
  }

  handleTrackInexistenteError() {
    console.log('El Track no existe');
  }

  handleArtistaRepetido() {
    console.log('Ya existe un artista con ese nombre');
  }

  handleTrackRepetido() {
    console.log('ya existe un track con ese nombre');
  }
  handleUserRepetido() {
    console.log('ya existe un user con ese nombre');
  }
  handleAlbumRepetido() {
    console.log('ya existe un album con ese nombre');
  }
}

module.exports = {
  Handler
};
