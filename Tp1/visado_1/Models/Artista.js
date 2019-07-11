class Artista {
  constructor(id, name, country) {
    this.id = id;
    this.name = name;
    this.country = country;
    this.albums = [];
    this.suscriptores= [];
  }

  addSuscriptor(suscriptor){
    this.suscriptores.push(suscriptor)
  }

  isSuscritor(suscriptor){
    this.suscriptores.find(aSuscriptor => aSuscriptor.name === suscriptor);
  }

  unsubscribe(emailSuscriptor){
    this.suscriptores.filter(aSuscriptor => aSuscriptor.name !== emailSuscriptor);
  }

  addAlbum(album) {
    this.albums.push(album);
  }

  getAlbums() {
    return this.albums;
  }

  getSuscriptores(){
    return this.suscriptores;
  }

  buscarAlbum(id) {
    return this.albums.find(album => album.id === id);
  }

  buscarYBorrarTracks(id) {
    this.albums.forEach(albums => albums.deleteTrack(id));
  }

  buscarTracks(id) {
    return this.albums.find(albums => albums.buscarTrack(id));
  }
  deleteAlbum(albumId) {
    this.albums = this.albums.filter(album => album.id !== albumId);
  }
}

module.exports = {
  Artista
};
