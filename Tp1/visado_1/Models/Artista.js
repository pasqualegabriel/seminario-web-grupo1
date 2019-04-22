class Artista {
    constructor({name,country},id){
        this.id=id;
        this.name=name;
        this.country=country;
        this.albumsCreados =[];
    }

    addAlbum(album){
        this.albumsCreados.push(album);
    }

    getAlbumsCreados(){
        return this.albumsCreados
    }

    buscarAlbum(id){
        return this.albumsCreados.find(album => album.id === id)
    }

    deleteAlbum(album){
        this.albumsCreados.pop(album);
    }
}


module.exports = {
    Artista,
  };