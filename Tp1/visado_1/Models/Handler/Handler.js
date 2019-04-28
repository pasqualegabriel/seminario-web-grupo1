class Handler{
    handleAlbumError(){
      console.log("El Album no existe")
    }

    handleArtistaInexistenceError(){
      console.log("El artista no existe")  
    }
}

  
module.exports = {
    Handler,
  };