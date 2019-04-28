class ErrorArtistaInexistente extends Error {
    handle(x){
        x.handleArtistaInexistenceError()
    }
}

class ErrorAlbumInexistente extends Error {
    handle(x){
        x.handleAlbumError()
    }
}

module.exports = {
    ErrorArtistaInexistente,
    ErrorAlbumInexistente
  };