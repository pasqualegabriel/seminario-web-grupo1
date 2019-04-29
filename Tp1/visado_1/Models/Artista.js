class Artista {
    constructor(id, name, country){
        this.id=id;
        this.name=name;
        this.country=country;
        this.albums =[];
    }

    addAlbum(album){
        this.albums.push(album);
    }

    getAlbums(){
        return this.albums
    }

    buscarAlbum(id){
        return this.albums.find(album => album.id === id)
    }

    buscarYBorrarTracks(id){
        this.albums.forEach(albums => albums.deleteTrack(id));
    }

    buscarTracks(id){
        return this.albums.find(albums => albums.buscarTrack(id));
    }
    deleteAlbum(id){
        this.albums = this.albums.filter(album => album.id != id);
    }
}


module.exports = {
    Artista,
  };