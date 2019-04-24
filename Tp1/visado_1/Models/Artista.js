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

    buscarYBorrarTracks(id){
        this.albumsCreados.forEach(albums => albums.deleteTrack(id));
    }

    deleteAlbum(id){
        this.albumsCreados = this.albumsCreados.filter(album => album.id !==id);
    }
}


module.exports = {
    Artista,
  };