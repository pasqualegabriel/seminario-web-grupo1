const util = require('util');
const fs = require('fs'); // necesitado para guardar/cargar unqfy
const unqmod = require('./unqfy'); // importamos el modulo unqfy
const {
  AddArtistCommand,
  AddAlbumCommand,
  AddTrackCommand,
  GetArtistByIdCommand,
  GetAlbumByIdCommand,
  GetTrackByIdCommand,
  GetPlaylistByIdCommand,
  GetTracksMatchingGenresCommand,
  GetTracksMatchingArtistCommand,
  CreatePlaylistCommand,
  DeleteArtistCommand,
  DeleteAlbumCommand,
  DeleteTrackCommand,
  AddUsuarioCommand,
  EscucharCommand,
  TopTrackCommand,
  TemasEscuchadosCommand,
  VecesEscuchadosCommand,
  AllAlbumByNameCommand,
  AllArtistByNameCommand,
  PopulateAlbumsForArtist,
  GetLyricsCommand,
  SubscribeCommand,
  UnSuscribeCommand,
  SubscriptorsCommand,
  BorrarSubscriptorsCommand
} = require('./Models/commands/CommandsUnqfy');
const { Handler } = require('./Models/Handler/Handler.js');

// Retorna una instancia de UNQfy. Si existe filename, recupera la instancia desde el archivo.
function getUNQfy(filename = 'data.json') {
  let unqfy = new unqmod.UNQfy();
  if (fs.existsSync(filename)) {
    unqfy = unqmod.UNQfy.load(filename);
  }
  return unqfy;
}

function saveUNQfy(unqfy, filename = 'data.json') {
  console.log('Termine');

  unqfy.save(filename);
}

/*
 En esta funcion deberán interpretar los argumentos pasado por linea de comandos
 e implementar los diferentes comandos.

  Se deberán implementar los comandos:
    - Alta y baja de Artista
    - Alta y Baja de Albums
    - Alta y Baja de tracks

    - Listar todos los Artistas
    - Listar todos los albumes de un artista
    - Listar todos los tracks de un album

    - Busqueda de canciones intepretadas por un determinado artista
    - Busqueda de canciones por genero

    - Dado un string, imprimmir todas las entidades (artistas, albums, tracks, playlists) que coincidan parcialmente
    con el string pasado.

    - Dada un nombre de playlist, una lista de generos y una duración máxima, crear una playlist que contenga
    tracks que tengan canciones con esos generos y que tenga como duración máxima la pasada por parámetro.

  La implementacion de los comandos deberá ser de la forma:
   1. Obtener argumentos de linea de comando
   2. Obtener instancia de UNQfy (getUNQFy)
   3. Ejecutar el comando correspondiente en Unqfy
   4. Guardar el estado de UNQfy (saveUNQfy)

*/
class HandleCommand {
  constructor() {
    this.commands = {
      addArtist: new AddArtistCommand(),
      addAlbum: new AddAlbumCommand(),
      addTrack: new AddTrackCommand(),
      getArtistById: new GetArtistByIdCommand(),
      getAlbumById: new GetAlbumByIdCommand(),
      getTrackById: new GetTrackByIdCommand(),
      getPlaylistById: new GetPlaylistByIdCommand(),
      getTracksMatchingGenres: new GetTracksMatchingGenresCommand(),
      getTracksMatchingArtist: new GetTracksMatchingArtistCommand(),
      createPlaylist: new CreatePlaylistCommand(),
      deleteArtist: new DeleteArtistCommand(),
      deleteAlbum: new DeleteAlbumCommand(),
      deleteTrack: new DeleteTrackCommand(),
      addUsuario: new AddUsuarioCommand(),
      escuchar: new EscucharCommand(),
      topTrack: new TopTrackCommand(),
      temasEscuchados: new TemasEscuchadosCommand(),
      vecesEscuchado: new VecesEscuchadosCommand(),
      allArtistByName: new AllArtistByNameCommand(),
      allAlbumByName: new AllAlbumByNameCommand(),
      populateAlbumsForArtist: new PopulateAlbumsForArtist(),
      getLyricsCommand: new GetLyricsCommand(),
      subscribe: new SubscribeCommand(),
      unsuscribe: new UnSuscribeCommand(),
      subscriptors: new SubscriptorsCommand(),
      borrarSubscriptors: new BorrarSubscriptorsCommand()
    };
  }
  get(key) {
    return this.commands[key];
  }
}

const main = async () => {
  const unqFy = getUNQfy();

  const nameFunction = process.argv[2];
  const args = process.argv.splice(3);
  const operation = new HandleCommand();

  const command = operation.get(nameFunction);
  console.log(command);

  await command.invoke(args, unqFy);
  saveUNQfy(unqFy);
};

main();
