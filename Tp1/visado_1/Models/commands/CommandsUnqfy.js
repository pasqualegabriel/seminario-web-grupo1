class AddArtistCommand{
    invoke(args,unqfy){
        const artistData = {
            name       : args[0],
            country    : args[1],s
        }
        unqfy.addArtist(artistData)
    }
}

class AddAlbumCommand{
    invoke(args,unqfy){
        const artistId = args[0];
        const albumData = {
            name       : args[1],
            year       : args[2],
        }
        unqfy.addAlbum(artistId,albumData)
    }
}


class AddTrackCommand{
    invoke(args,unqfy){
        const albumId  = args.shift();
        const name = args.shift();
        const duration = args.shift();
        
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
        const artistId  = args[0];
        unqfy.getArtistById(artistId);
    }
}

class GetAlbumByIdCommand{
    invoke(args,unqfy){
        const albumId  = args[0];
        unqfy.getAlbumById(albumId);
    }
}

class GetTrackByIdCommand{
    invoke(args,unqfy){
        const trackId  = args[0];
        unqfy.getTrackById(trackId);
    }
}

class GetPlaylistByIdCommand{
    invoke(args,unqfy){
        const playListId  = args[0];
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

class CreatePlaylistCommand{
    invoke(args,unqfy){
        const name = args.shift();
        const maxDuration = args.pop();
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