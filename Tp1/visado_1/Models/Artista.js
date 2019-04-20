class Artista {
    constructor({id=0,name,country}){
        this.id=id;
        this.name=name;
        this.country=country;
        this.albumsCreados =[];
    }

    addAlbum(album){
        this.albumsCreados.push(album);
    }

    deleteAlbum(album){
        this.albumsCreados.pop(album);
    }
}


module.exports = {
    Artista,
  };