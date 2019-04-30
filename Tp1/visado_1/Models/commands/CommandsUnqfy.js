  

  const {Handler} = require('../Handler/Handler');
  
  
  
  
 
  
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
       const handler = new Handler();
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
        console.log(unqfy.getArtistById(artistId))
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
        console.log(unqfy.getTrackById(trackId));
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
        const artistId = Number(args[0]);
        unqfy.getTracksMatchingArtist(artistId);
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

class DeleteArtistCommand{
    invoke(args,unqfy){
        const nombreDeArtista = unqfy.getArtistById(args).name
        unqfy.deleteArtist(args)
        console.log("Se ha Borrado a "+nombreDeArtista+" exitosamente");
        
    }
}

class DeleteAlbumCommand{
    invoke(args,unqfy){
        unqfy.deleteAlbum(args)
        console.log("Se ha Borrado a exitosamente");
    }
}

class DeleteTrackCommand{
    invoke(args,unqfy){
        unqfy.deleteTrack(args)
        console.log("Se ha Borrado a exitosamente");
        
    }
}

class AddUsuario{
    invoke(args,unqfy){
        unqfy.addUsuario(args[0]);
        console.log("Se ha Creado a exitosamente");
        
    }
}




class Escuchar{
    invoke(args,unqfy){       
        unqfy.escuchar(Number(args[0]),Number(args[1]));
        console.log("Alto Tema!");
        
    }
}

class TemasEscuchadosCommand{
    invoke(args,unqfy){       
        console.log(unqfy.temasEscuchados(Number(args[0])));  
    }
}

class VecesEscuchadosCommand{
    invoke(args,unqfy){       
        console.log(unqfy.vecesEscuchado(Number(args[0]),Number(args[1])));  
    }
}


class TopTrackCommand{
    invoke(args,unqfy){
        const top = unqfy.topTrack();
        console.log('Nuestro top track');
        console.log(top);
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
    AddUsuario,
    Escuchar,
    TopTrackCommand,
    TemasEscuchadosCommand,
    VecesEscuchadosCommand,
};