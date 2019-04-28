const picklify = require('picklify'); // para cargar/guarfar unqfy
const fs = require('fs'); // para cargar/guarfar unqfy
const {Artista} = require('./Models/Artista');
const {Album} = require('./Models/Album');
const {Track} = require('./Models/Track');
const {Playlist} = require('./Models/Playlist');
const {Usuario} = require('./Models/Usuario');
const {ErrorArtistaInexistente} = require('./Models/Errores');
const {ErrorAlbumInexistente} = require('./Models/Errores');

const {flatMap} = require('lodash');
//const {Handler} = require('.Models/Handler/Handler');




class UNQfy {
  
  constructor(){
    this.listaDeArtistas = [];
    this.listaDePlayList = [];
    this.nextIdArtist   = 1;
    this.nextIdAlbum = 1;
    this.nextIdTrack = 1;
    this.nextIdPlayList = 1;
    this.nextIdUsuario = 1;
    this.listaDeUsuarios =[];
  }

  addUsuario(args){
    let nuevoUsuario = new Usuario(this.nextIdUsuario,args);
    this.listaDeUsuarios.push(nuevoUsuario);
    this.nextIdUsuario ++;
  }

  escuchar(trackId,userId){

    const usuarioEncontrado = this.listaDeUsuarios.find(usuario => usuario.id === userId)
    
    const track = this.getTrackById(trackId); 
    usuarioEncontrado.escucharTrack(track);
  }

  imprimirThisIs(){

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
    const nuevoArtista =new Artista(this.nextIdArtist, artistData.name, artistData.country);
    console.log(nuevoArtista);
    
    this.listaDeArtistas.push(nuevoArtista);
    this.nextIdArtist ++;
    console.log("Se Registro Exitosamente");
    return this.getArtistById(nuevoArtista.id);
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
  addAlbum(artistId, {name, year}) {
    const artist = this.getArtistById(artistId);
    if (artist) {
      const album = new Album(this.nextIdAlbum, artistId, name, year);
      artist.addAlbum(album);
      this.nextIdAlbum++;
      return album;
    }else {
      throw new ErrorArtistaInexistente()
    }
    
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

  addTrack(albumId, { name, duration, genres }) {
    const album = this.getAlbumById(albumId);
    const track = new Track(this.nextIdTrack, name, duration, genres);
    album.agregarTrack(track);
    this.nextIdTrack++;
    return track;
  }


  deleteArtist(id){
   this.listaDeArtistas = this.listaDeArtistas.filter(artist => artist.id != id)   

  }

  deleteAlbum(id){
    this.listaDeArtistas.forEach(artist => artist.deleteAlbum(id));
  }

  deleteTrack(id){
    this.listaDeArtistas.forEach(artist => artist.buscarYBorrarTracks(id));
    console.log(`Se borro el track ${id}`)
  }

  getArtistById(id) {
    const artist = this.listaDeArtistas.find(artist => artist.id === id)
    if(!artist) {
      throw new ErrorArtistaInexistente;
    } 
    return artist 
  }

  getAlbumById(id) {
    const artistaDeAlbum = this.listaDeArtistas.find(artista => artista.buscarAlbum(id));
    if(!artistaDeAlbum) {
      throw new ErrorAlbumInexistente;
    } 
    return(artistaDeAlbum.buscarAlbum(id) );
    
   
  }

  getTrackById(id) {
    const track = this.listaDeArtistas.find(artista => artista.buscarTracks(id));
    return track;
  }

  getPlaylistById(id) {
    const playlist = this.listaDePlayList.find(playlist => playlist.id === id);
    console.log(`get playlist ${id}`);
    console.log(playlist);
    return playlist;
  }

  // genres: array de generos(strings)
  // retorna: los tracks que contenga alguno de los generos en el parametro genres
  getTracksMatchingGenres(genres) {
    const albums = flatMap(this.listaDeArtistas, artist => artist.getAlbums());
    const tracks = flatMap(albums, album => album.getTracks());
    const tracksFilteredByGenres = tracks.filter(track => track.getGenres().some(genre => genres.includes(genre)));
    console.log('Test getTracksMatchingGenres');
    console.log(tracksFilteredByGenres);
    return tracksFilteredByGenres;
  }

  // artistName: nombre de artista(string)
  // retorna: los tracks interpredatos por el artista con nombre artistName
  getTracksMatchingArtist(artistId) {
    const artist = this.getArtistById(artistId);
    const tracks = flatMap(artist.getAlbums(), album => album.getTracks());
    console.log(`Test getTracksMatchingArtist: ${artistId}`);
    console.log(tracks);
    return tracks;
  }


  // name: nombre de la playlist
  // genresToInclude: array de generos
  // duration: duración en segundos
  // retorna: la nueva playlist creada
  /*** Crea una playlist y la agrega a unqfy. ***
    El objeto playlist creado debe soportar (al menos):
      * una propiedad name (string)
      * un metodo duration() que retorne la duración de la playlist.
      * un metodo hasTrack(aTrack) que retorna true si aTrack se encuentra en la playlist.
  */
 createPlaylist(name, genresToInclude, duration) {
    const playlist = new Playlist(this.nextIdPlayList, name, genresToInclude, duration);
    this.nextIdPlayList++;
    this.listaDePlayList.push(playlist);
    console.log(`Se ha creado playlist, id: ${playlist.id}, name: ${name}`)
    return playlist;
  }

  findAllArtistByName(name) {
    return this.listaDeArtistas.filter(artist => artist.name.includes(name));
  }

  findAllAlbums() {
    return flatMap(this.listaDeArtistas, artist => artist.getAlbums());
  }

  findAllAlbumsByName(name) {
    return this.findAllAlbums().filter(album => album.name.includes(name));
  }

  findAllTracksByName(name) {
    //return this.artists.reduce( (acc, artist) =>
    //       acc.concat( artist.albums.reduce((acc2, album) => 
    //          album.tracks.list( track => track.name.includes(name)) )));

    return flatMap(this.findAllAlbums(), album => album.getTracks()).filter(track => track.name.includes(name))
  }

  findAllPlaylistsByName(name) {
    return this.listaDePlayList.filter(playlist => playlist.name.includes(name));
  }

  searchByName(name) {
    return {  artists: this.findAllArtistByName(name),
              albums: this.findAllAlbumsByName(name),
              tracks: this.findAllTracksByName(name),
              playlists: this.findAllPlaylistsByName(name),
    }

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
    const classes = [UNQfy, Artista, Album, Track, Playlist,Usuario,];
    return picklify.unpicklify(JSON.parse(serializedData), classes);
  }
}


// COMPLETAR POR EL ALUMNO: exportar todas las clases que necesiten ser utilizadas desde un modulo cliente
module.exports = {
  UNQfy,
  Artista,
  Album,
  Track,
  Playlist,
  Usuario
};

