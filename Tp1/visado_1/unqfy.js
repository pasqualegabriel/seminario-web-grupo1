const picklify = require('picklify'); // para cargar/guarfar unqfy
const fs = require('fs'); // para cargar/guarfar unqfy
const { Artista } = require('./Models/Artista');
const { Album } = require('./Models/Album');
const { Track } = require('./Models/Track');
const { Playlist } = require('./Models/Playlist');
const { Usuario } = require('./Models/Usuario');
const { LogsClient } = require('./clients/logsClient');
const { NotifyClient } = require('./clients/notifyClient');

const {
  ErrorArtistaInexistente,
  ErrorAlbumInexistente,
  ErrorTrackInexistente,
  ErrorArtistaRepetido,
  ErrorTrackRepetido,
  ErrorUsuarioRepetido,
  ErrorAlbumRepetido
} = require('./Models/Errores');
const { flatMap } = require('lodash');
const { errors } = require('./errors');

class UNQfy {
  constructor() {
    this.listaDeArtistas = [];
    this.listaDePlayList = [];
    this.nextIdArtist = 1;
    this.nextIdAlbum = 1;
    this.nextIdTrack = 1;
    this.nextIdPlayList = 1;
    this.nextIdUsuario = 1;
    this.listaDeUsuarios = [];
  }

  // eslint-disable-next-line class-methods-use-this
  notify(artist, album) {
    const subject = `Nuevo Album para artsta ${artist.name} `;
    const message = `Se ha agregado el album ${album.name} al artista ${artist.name}`;
    const suscritoresEmail = artist.suscriptores.map(suscriptores => suscriptores.name);
    const notifyClient = new NotifyClient();
    notifyClient.enviar(suscritoresEmail, subject, message);
  }

  suscribe(artistId, email) {
    const artist = this.getArtistById(artistId);
    if (!artist.isSuscritor(email)) {
      const user = this.listaDeUsuarios.find(usuario => usuario.name === email);
      artist.addSuscriptor(user);
    }
  }

  unsubscribe(artistId, email) {
    const artist = this.getArtistById(artistId);
    artist.unsubscribe(email);
    return artist;
  }

  subscriptors(artistId) {
    console.log(artistId);
    const artist = this.getArtistById(artistId);
    console.log(artist);
    const suscritoresEmail = artist.suscriptores.map(suscriptores => suscriptores.name);
    return suscritoresEmail;
  }

  borrarSubscriptors(artistId) {
    console.log(artistId);
    const artist = this.getArtistById(artistId);
    console.log(artist);
    artist.clearSubscriptors();
    return artist;
  }

  addUsuario(name) {
    const checkUser = this.listaDeUsuarios.find(usuario => usuario.name === name);
    if (checkUser) {
      throw new ErrorUsuarioRepetido();
    }

    const nuevoUsuario = new Usuario(this.nextIdUsuario, name);
    this.listaDeUsuarios.push(nuevoUsuario);
    this.nextIdUsuario++;
  }

  temasEscuchados(userId) {
    const usuarioEncontrado = this.listaDeUsuarios.find(usuario => usuario.id === userId);
    return usuarioEncontrado.temasEscuchados();
  }

  vecesEscuchado(trackId, userId) {
    const usuarioEncontrado = this.listaDeUsuarios.find(usuario => usuario.id === userId);
    const track = this.getTrackById(trackId);

    return usuarioEncontrado.vecesEscuchado(track.name);
  }

  escuchar(trackId, userId) {
    const usuarioEncontrado = this.listaDeUsuarios.find(usuario => usuario.id === userId);

    const track = this.getTrackById(trackId);
    usuarioEncontrado.escucharTrack(track.name);
  }
  sumTrackEscuchado(nameTrack) {
    const sum = this.listaDeUsuarios.reduce(
      (acum, usuario) => (acum + usuario.vecesEscuchado(nameTrack) ? usuario.vecesEscuchado(nameTrack) : 0),
      0
    );
    return sum;
  }

  topTrack(artistId) {
    const tracks = this.getTracksMatchingArtist(artistId);
    const object = {};
    tracks.forEach(track => {
      object[track.name] = this.sumTrackEscuchado(track.name);
    });
    const topTrack = Object.keys(object)
      .sort((a, b) => object[a] < object[b])
      .splice(0, 3);
    return topTrack;
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
  addArtist({ name, country }) {
    const checkArtist = this.listaDeArtistas.find(artist => artist.name === name);
    const logger = new LogsClient();
    if (checkArtist) {
      logger.registerError(errors.ARTISTA_REPETIDO_ERROR, name);
      throw new ErrorArtistaRepetido(errors.ARTISTA_REPETIDO_ERROR);
    }
    const nuevoArtista = new Artista(this.nextIdArtist, name, country);

    this.listaDeArtistas.push(nuevoArtista);
    this.nextIdArtist++;
    logger.registerAddArtist(name);
    console.log('Se Registro Exitosamente');
    console.log(`artistaId: ${this.nextIdArtist - 1}`);
    return this.getArtistById(nuevoArtista.id);
  }

  updateArtist(id, { name, country }) {
    const artists = this.getArtistById(id);
    console.log(artists);
    if (!artists) {
      // TODO:TIPAR ERRO DE FORMA CORRECTA
      throw new ErrorArtistaRepetido();
    }
    artists.name = name;
    artists.country = country;
    return artists;
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
  addAlbum(artistId, { name, year }) {
    const artist = this.getArtistById(artistId, errors.AGREGAR_ALBUM_A_ARTISTA_INEXISTENTE_ERROR);
    const album = new Album(this.nextIdAlbum, name, year);
    const checkAlbum = this.findAllAlbums().find(anAlbum => anAlbum.name === name);
    const logger = new LogsClient();
    if (checkAlbum) {
      logger.registerError(errors.ALBUM_REPETIDO_ERROR, name);
      throw new ErrorAlbumRepetido(errors.ALBUM_REPETIDO_ERROR);
    }

    artist.addAlbum(album);
    this.nextIdAlbum++;
    logger.registerAddAlbum(name, artist.name);
    this.notify(artist, album);
    return album;
  }

  updateYear(albumId, { year }) {
    const album = this.getAlbumById(albumId);
    album.year = year;
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
  addTrack(albumId, { name, duration, genres }) {
    console.log(this.findAllAlbums());
    const logger = new LogsClient();
    const checkTrack = flatMap(this.findAllAlbums(), album => album.getTracks()).find(
      track => track.name === name
    );
    if (checkTrack) {
      logger.registerError(errors.TRACK_REPETIDO_ERROR, name);
      throw new ErrorTrackRepetido(errors.TRACK_REPETIDO_ERROR);
    }

    const album = this.getAlbumById(albumId);
    const track = new Track(this.nextIdTrack, name, duration, genres);
    album.agregarTrack(track);
    this.nextIdTrack++;
    logger.registerAddTrack(name, album.name);
    return track;
  }

  deleteArtist(id) {
    const artistToDelete = this.getArtistById(id);
    this.listaDeArtistas = this.listaDeArtistas.filter(artist => artist !== artistToDelete);
    const logger = new LogsClient();
    logger.registerDeleteArtist(artistToDelete.name);
  }

  deletePlayList(id) {
    this.listaDeArtistas = this.listaDePlayList.filter(artist => artist.id !== id);
  }

  deleteAlbum(id) {
    const albumToDelete = this.getAlbumById(id);
    this.listaDeArtistas.forEach(artist => artist.deleteAlbum(id));
    const logger = new LogsClient();
    logger.registerDeleteAlbum(albumToDelete.name);
  }

  deleteTrack(id) {
    const trackToDelete = this.getTrackById(id);
    this.listaDeArtistas.forEach(artist => artist.buscarYBorrarTracks(id));
    const logger = new LogsClient();
    logger.registerDeleteTrack(trackToDelete.name);
    console.log(`Se borro el track ${id}`);
  }

  getArtistById(id, error) {
    const artist = this.listaDeArtistas.find(anArtist => anArtist.id == id);
    if (!artist) {
      const logger = new LogsClient();
      logger.registerError(error || errors.ARTISTA_INEXISTENTE_ERROR, id);
      throw new ErrorArtistaInexistente(error || errors.ARTISTA_INEXISTENTE_ERROR);
    }
    return artist;
  }

  populateAlbumsForArtist(artistId, spotifyClient) {
    const artistName = this.getArtistById(artistId).name;

    return spotifyClient
      .getArtistByName(artistName)
      .then(idArtistSpotify => spotifyClient.populateAlbumsForArtist(idArtistSpotify))
      .then(albums => {
        albums.forEach(element => {
          this.addAlbumSinObjeto(artistId, element.name, element.release_date);
        });
      })
      .catch(error => console.log(error));
  }

  addAlbumSinObjeto(artistId, name, year) {
    const artist = this.getArtistById(artistId);
    const album = new Album(this.nextIdAlbum, name, year);
    artist.addAlbum(album);

    this.nextIdAlbum++;
    return album;
  }

  getAlbumById(id) {
    const artistaDeAlbum = this.listaDeArtistas.find(artista => artista.buscarAlbum(id));

    if (!artistaDeAlbum) {
      const logger = new LogsClient();
      logger.registerError(errors.ALBUM_INEXISTENTE_ERROR, id);
      throw new ErrorAlbumInexistente(errors.ALBUM_INEXISTENTE_ERROR);
    }

    return artistaDeAlbum.buscarAlbum(id);
  }

  getTrackById(id) {
    const artist = this.listaDeArtistas.find(artista => artista.buscarTracks(id));
    const album = artist.buscarTracks(id);
    const track = album.buscarTrack(id);
    if (!track) {
      const logger = new LogsClient();
      logger.registerError(errors.TRACK_INEXISTENTE_ERROR, id);
      throw new ErrorTrackInexistente(errors.TRACK_INEXISTENTE_ERROR);
    }
    return track;
  }

  getPlaylistById(id) {
    const playlist = this.listaDePlayList.find(aPlaylist => aPlaylist.id === id);
    return playlist;
  }

  // genres: array de generos(strings)
  // retorna: los tracks que contenga alguno de los generos en el parametro genres
  getTracksMatchingGenres(genres) {
    const tracks = this.getAllTrack();
    const tracksFilteredByGenres = tracks.filter(track =>
      track.getGenres().some(genre => genres.includes(genre))
    );

    return tracksFilteredByGenres;
  }

  // artistName: nombre de artista(string)
  // retorna: los tracks interpredatos por el artista con nombre artistName
  getTracksMatchingArtist(artistId) {
    const artist = this.getArtistById(artistId);
    const tracks = flatMap(artist.getAlbums(), album => album.getTracks());
    return tracks;
  }

  // name: nombre de la playlist
  // genresToInclude: array de generos
  // duration: duración en segundos
  // retorna: la nueva playlist creada
  /** * Crea una playlist y la agrega a unqfy. ***
    El objeto playlist creado debe soportar (al menos):
      * una propiedad name (string)
      * un metodo duration() que retorne la duración de la playlist.
      * un metodo hasTrack(aTrack) que retorna true si aTrack se encuentra en la playlist.
  */
  createPlaylist({ name, genresToInclude, duration }) {
    const tracks = this.getTracksMatchingGenres(genresToInclude);
    let checkDuration = 0;

    const newTrack = tracks.filter(elem => {
      checkDuration += elem.duration;
      return duration >= checkDuration;
    });

    const playlist = new Playlist(this.nextIdPlayList, name, genresToInclude, duration, newTrack);
    this.nextIdPlayList++;
    this.listaDePlayList.push(playlist);
    return playlist;
  }
  createPlaylistByTracks({ name, tracks, duration }) {
    const traksConcret = tracks.map(idTrack => this.getTrackById(idTrack));
    const genresToInclude = traksConcret.map(track => track.genres);
    const playlist = new Playlist(this.nextIdPlayList, name, genresToInclude, duration, traksConcret);
    this.nextIdPlayList++;
    this.listaDePlayList.push(playlist);
    return playlist;
  }

  getAllArtist() {
    return this.listaDeArtistas;
  }
  getAllTrack() {
    return flatMap(this.findAllAlbums(), album => album.getTracks());
  }

  findAllArtistByName(name) {
    return this.listaDeArtistas.filter(artist => artist.name.toLowerCase().includes(name.toLowerCase()));
  }

  findAllAlbums() {
    return flatMap(this.listaDeArtistas, artist => artist.albums);
  }

  findAllAlbumsByName(name) {
    return this.findAllAlbums().filter(album => album.name.toLowerCase().includes(name.toLowerCase()));
  }

  findAllTracksByName(name) {
    // return this.artists.reduce( (acc, artist) =>
    //       acc.concat( artist.albums.reduce((acc2, album) =>
    //          album.tracks.list( track => track.name.includes(name)) )));

    return this.getAllTrack().filter(track => track.name.toLowerCase().includes(name.toLowerCase()));
  }

  findAllPlaylistsByName(name) {
    return this.listaDePlayList.filter(playlist => playlist.name.toLowerCase().includes(name.toLowerCase()));
  }

  searchByName(name) {
    return {
      artists: this.findAllArtistByName(name),
      albums: this.findAllAlbumsByName(name),
      tracks: this.findAllTracksByName(name),
      playlists: this.findAllPlaylistsByName(name)
    };
  }

  getLyrics(trackId, musicMatchClient) {
    const tema = this.getTrackById(trackId);

    if (!tema.lyrics.length) {
      return musicMatchClient
        .searchTrackId(tema.name)
        .then(respuestaID => musicMatchClient.getTrackLyrics(respuestaID))
        .then(respuestaLyrics => tema.setLyrics(respuestaLyrics));
    } else {
      return tema.lyrics;
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
    const serializedData = fs.readFileSync(filename, { encoding: 'utf-8' });
    // COMPLETAR POR EL ALUMNO: Agregar a la lista todas las clases que necesitan ser instanciadas
    const classes = [UNQfy, Artista, Album, Track, Playlist, Usuario];
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
