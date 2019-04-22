class ErrorArtistaInexistente extends Error {
    handle(x){
        x.handleAlbumError()
    }
}

module.exports = {
    ErrorArtistaInexistente
  };