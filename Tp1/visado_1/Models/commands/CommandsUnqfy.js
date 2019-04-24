class AddArtistCommand{
    invoke(args,unqfy){
        const artistData = {
            name       : args[0],
            country    : args[1],
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
        const albumId  = args[0];
        const trackData = {
            name      : args[1],
            duration  : args[2],
            genres    : args[3].split(','),
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
        const genres = args[0].split(',');
        unqfy.getTracksMatchingGenres(genres);
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
        const name = args[0];
        const genresToInclude = args[1].split(',');
        const maxDuration = args[2];
        unqfy.createPlaylist(name,genresToInclude,maxDuration);
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