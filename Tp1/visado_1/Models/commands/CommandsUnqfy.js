  // artistData: objeto JS con los datos necesarios para crear un artista
  //   artistData.name (string)
  //   artistData.country (string)
class AddArtistCommand{
    invoke(args,unqfy){
        const artistData = {
            name       : args[0],
            country    : args[1],
        }
        unqfy.addArtist(artistData)
    }
}

  // albumData: objeto JS con los datos necesarios para crear un album
  //   albumData.name (string)
  //   albumData.year (number)
class AddAlbumCommand{
    invoke(args,unqfy){
        const artistId = Number(args[0]);
        const albumData = {
            name       : args[1],
            year       : Number(args[2]),
        }
        unqfy.addAlbum(artistId,albumData)
    }
}

  // trackData: objeto JS con los datos necesarios para crear un track
  //   trackData.name (string)
  //   trackData.duration (number)
  //   trackData.genres (lista de strings)
class AddTrackCommand{
    invoke(args,unqfy){
        const albumId  = Number(args.shift());
        const name = args.shift();
        const duration = Number(args.shift());
        
        const trackData = {
            name      : name,
            duration  : duration,
            genres    : args,
        }
        unqfy.addTrack(albumId,trackData);
    }
}

class GetArtistByIdCommand{
    invoke(args,unqfy){
        const artistId  = Number(args[0]);
        unqfy.getArtistById(artistId);
    }
}

class GetAlbumByIdCommand{
    invoke(args,unqfy){
        const albumId  = Number(args[0]);
        unqfy.getAlbumById(albumId);
    }
}

class GetTrackByIdCommand{
    invoke(args,unqfy){
        const trackId  = Number(args[0]);
        unqfy.getTrackById(trackId);
    }
}

class GetPlaylistByIdCommand{
    invoke(args,unqfy){
        const playListId  = Number(args[0]);
        unqfy.getPlaylistById(playListId);
    }
}

class GetTracksMatchingGenresCommand{
    invoke(args,unqfy){
        unqfy.getTracksMatchingGenres(args);
    }
}

class GetTracksMatchingArtistCommand{
    invoke(args,unqfy){
        const artistName = args[0];
        unqfy.getTracksMatchingArtist(artistName);
    }
}
  // name: nombre de la playlist
  // genresToInclude: array de generos
  // maxDuration: duración en segundos
class CreatePlaylistCommand{
    invoke(args,unqfy){
        const name = args.shift();
        const maxDuration = Number(args.pop());
        unqfy.createPlaylist(name,args,maxDuration);
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
};