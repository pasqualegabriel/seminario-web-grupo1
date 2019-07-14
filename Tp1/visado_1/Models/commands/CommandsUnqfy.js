/* eslint-disable class-methods-use-this */

const util = require('util');
const { Handler } = require('../Handler/Handler');
const { SpotifyClient } = require('../../clients/Spotify');
const { MusicMatchClient } = require('../../clients/musicMatch');
const { LogsClient } = require('../../clients/logsClient')
// artistData: objeto JS con los datos necesarios para crear un artista
//   artistData.name (string)
//   artistData.country (string)
class AddArtistCommand {
  invoke(args, unqfy) {
    const artistData = {
      name: args[0],
      country: args[1]
    };
    const logger = new LogsClient();
    console.log(unqfy.addArtist(artistData, logger));
    console.log('Se agrego el artista de forma correcta.');
  }
}

// albumData: objeto JS con los datos necesarios para crear un album
//   albumData.name (string)
//   albumData.year (number)
class AddAlbumCommand {
  invoke(args, unqfy) {
    const handler = new Handler();
    const artistId = Number(args[0]);
    const albumData = {
      name: args[1],
      year: Number(args[2])
    };
    const logger = new LogsClient();
    console.log(unqfy.addAlbum(artistId, albumData, logger));
    console.log('Se agrego el album de forma correcta.');
  }
}

// trackData: objeto JS con los datos necesarios para crear un track
//   trackData.name (string)
//   trackData.duration (number)
//   trackData.genres (lista de strings)
class AddTrackCommand {
  invoke(args, unqfy) {
    const albumId = Number(args.shift());
    const name = args.shift();
    const duration = Number(args.shift());
    const trackData = {
      name,
      duration,
      genres: args
    };
    const logger = new LogsClient();
    console.log(unqfy.addTrack(albumId, trackData, logger));
    console.log('Se agrego el track de forma correcta.');
  }
}

class GetArtistByIdCommand {
  invoke(args, unqfy) {
    const artistId = Number(args[0]);
    console.log(unqfy.getArtistById(artistId));
  }
}

class GetAlbumByIdCommand {
  invoke(args, unqfy) {
    const albumId = Number(args[0]);
    unqfy.getAlbumById(albumId);
  }
}

class GetTrackByIdCommand {
  invoke(args, unqfy) {
    const trackId = Number(args[0]);
    console.log(unqfy.getTrackById(trackId));
  }
}

class GetPlaylistByIdCommand {
  invoke(args, unqfy) {
    const playListId = Number(args[0]);
    console.log(unqfy.getPlaylistById(playListId));
  }
}

class GetTracksMatchingGenresCommand {
  invoke(args, unqfy) {
    console.log(unqfy.getTracksMatchingGenres(args));
  }
}

class GetTracksMatchingArtistCommand {
  invoke(args, unqfy) {
    const artistId = Number(args[0]);
    console.log(unqfy.getTracksMatchingArtist(artistId));
  }
}
// name: nombre de la playlist
// genresToInclude: array de generos
// maxDuration: duración en segundos
class CreatePlaylistCommand {
  invoke(args, unqfy) {
    const name = args.shift();
    const maxDuration = Number(args.pop());
    console.log(unqfy.createPlaylist(name, args, maxDuration));
  }
}

class DeleteArtistCommand {
  invoke(args, unqfy) {
    const nombreDeArtista = unqfy.getArtistById(args).name;
    unqfy.deleteArtist(args);
    console.log(`Se ha Borrado a ${nombreDeArtista} exitosamente`);
  }
}

class DeleteAlbumCommand {
  invoke(args, unqfy) {
    unqfy.deleteAlbum(args);
    console.log('Se ha Borrado a exitosamente');
  }
}

class DeleteTrackCommand {
  invoke(args, unqfy) {
    unqfy.deleteTrack(args);
    console.log('Se ha Borrado a exitosamente');
  }
}

class AddUsuarioCommand {
  invoke(args, unqfy) {
    unqfy.addUsuario(args[0]);
    console.log('Se ha Creado a exitosamente');
  }
}

class EscucharCommand {
  invoke(args, unqfy) {
    unqfy.escuchar(Number(args[0]), Number(args[1]));
    console.log('Alto Tema!');
  }
}

class TemasEscuchadosCommand {
  invoke(args, unqfy) {
    console.log(unqfy.temasEscuchados(Number(args[0])));
  }
}

class VecesEscuchadosCommand {
  invoke(args, unqfy) {
    console.log(unqfy.vecesEscuchado(Number(args[0]), Number(args[1])));
  }
}

class TopTrackCommand {
  invoke(args, unqfy) {
    const top = unqfy.topTrack(Number(args[0]));
    console.log('Nuestro top track');
    console.log(top);
  }
}

class AllArtistByNameCommand {
  invoke(args, unqfy) {
    const top = unqfy.findAllArtistByName(args[0]);
    console.log('All artist by name');
    console.log(top);
  }
}

class AllAlbumByNameCommand {
  invoke(args, unqfy) {
    const top = unqfy.findAllAlbumsByName(args[0]);
    console.log('All Album by name');
    console.log(top);
  }
}

class PopulateAlbumsForArtist {
  invoke(args, unqfy) {
    return unqfy.populateAlbumsForArtist(Number(args[0]), new SpotifyClient());
  }
}

class GetLyricsCommand {
  invoke(args, unqfy) {
    return unqfy.getLyrics(Number(args[0]), new MusicMatchClient());
  }
}

module.exports = {
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
  GetLyricsCommand
};
