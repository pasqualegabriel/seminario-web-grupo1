const picklify = require('picklify'); // para cargar/guarfar unqfy
const fs = require('fs'); // para cargar/guarfar unqfy
const {Artista} = require('./Models/Artista');
const {Album} = require('./Models/Album');
const {Track} = require('./Models/Track');
const {ErrorArtistaInexistente} = require('./Models/Errores');

class Handler{
  handleAlbumError(){
    console.log("El Artista no existe")
  }
}


class UNQfy {
  
  constructor(){
    this.handler =new Handler()
    this.listaDeArtistas = [];
    this.listaDePlayList = [];
  }
  // artistData: objeto JS con los datos necesarios para crear un artista
  //   artistData.name (string)
  //   artistData.country (string)
  // retorna: el nuevo artista creado
    /* Crea un artista y lo agrega a unqfy.
  El objeto artista creado debe soportar (al menos):
    - una propiedad name (string)
    - una propiedad country (string)
  */
  addArtist(artistData) {
    let nuevoArtista =new Artista(artistData,this.listaDeArtistas.length);
    this.listaDeArtistas.push(nuevoArtista);
    return(this.getArtistById(this.listaDeArtistas.length-1))
  }


  // albumData: objeto JS con los datos necesarios para crear un album
  //   albumData.name (string)
  //   albumData.year (number)
  // retorna: el nuevo album creado
    /* Crea un album y lo agrega al artista con id artistId.
    El objeto album creado debe tener (al menos):
     - una propiedad name (string)
     - una propiedad year (number)
  */
  addAlbum(artistId, albumData) {
    const artist = this.getArtistById(artistId);
    const album = new Album(albumData,artistId);
    artist.addAlbum(album);
    return album;
  }


  // trackData: objeto JS con los datos necesarios para crear un track
  //   trackData.name (string)
  //   trackData.duration (number)
  //   trackData.genres (lista de strings)
  // retorna: el nuevo track creado
    /* Crea un track y lo agrega al album con id albumId.
  El objeto track creado debe tener (al menos):
      - una propiedad name (string),
      - una propiedad duration (number),
      - una propiedad genres (lista de strings)
  */
  addTrack(albumId, trackData) {
    const album = this.getAlbumById(albumId);
    const track = new Track(trackData);
    album.agregarTrack(track);
    return track;
  }


  deleteArtist(id){
   this.artist = this.artist.filter(artist => artist.id !== id)
  }

  deleteAlbum(id){
    this.artist.forEach(artist => artist.deleteAlbum(id));
  }

  deleteTrack(id){
    this.artist.forEach(artist => artist.buscarYBorrarTracks(id))
  }

  getArtistById(id) {
    return this.listaDeArtistas.find(artist =>artist.id ==id) 
  }

  getAlbumById(id) {
    const artistaDeAlbum = this.listaDeArtistas.find(artista => artista.buscarAlbum(id));
    try {
      if (artistaDeAlbum==undefined) {
       throw new ErrorArtistaInexistente;
      } else {
        return(artistaDeAlbum.buscarAlbum(id) );
      }
    } catch (e) {
      e.handle(this.handler)
    }
   
    
  }

  getTrackById(id) {
    let albumDondeEstaElTrack =this.getAlbumById(id)
    return (albumDondeEstaElTrack.buscarTrack(id))
  }

  getPlaylistById(id) {

  }

  // genres: array de generos(strings)
  // retorna: los tracks que contenga alguno de los generos en el parametro genres
  getTracksMatchingGenres(genres) {

  }

  // artistName: nombre de artista(string)
  // retorna: los tracks interpredatos por el artista con nombre artistName
  getTracksMatchingArtist(artistName) {

  }


  // name: nombre de la playlist
  // genresToInclude: array de generos
  // maxDuration: duración en segundos
  // retorna: la nueva playlist creada
  createPlaylist(name, genresToInclude, maxDuration) {
  /*** Crea una playlist y la agrega a unqfy. ***
    El objeto playlist creado debe soportar (al menos):
      * una propiedad name (string)
      * un metodo duration() que retorne la duración de la playlist.
      * un metodo hasTrack(aTrack) que retorna true si aTrack se encuentra en la playlist.
  */

  }

  save(filename) {
    const listenersBkp = this.listeners;
    this.listeners = [];

    const serializedData = picklify.picklify(this);

    this.listeners = listenersBkp;
    fs.writeFileSync(filename, JSON.stringify(serializedData, null, 2));
  }

  static load(filename) {
    const serializedData = fs.readFileSync(filename, {encoding: 'utf-8'});
    //COMPLETAR POR EL ALUMNO: Agregar a la lista todas las clases que necesitan ser instanciadas
    const classes = [UNQfy, Artista, Album,Track];
    return picklify.unpicklify(JSON.parse(serializedData), classes);
  }
}

// COMPLETAR POR EL ALUMNO: exportar todas las clases que necesiten ser utilizadas desde un modulo cliente
module.exports = {
  UNQfy,
  Artista,
  Album,
  Track,
};

