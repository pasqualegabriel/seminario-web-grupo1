class Playlist {
  constructor(id, name, genresToInclude, maxDuration){
    this.id = id;
    this.name = name;
    this.genresToInclude = genresToInclude;
    this.maxDuration = maxDuration;
    this.tracks = [];
  }

  addTrack(track){
    this.tracks.push(track);
  }

  getTracks(){
    return this.tracks
  }

  hasTrack(track){
    return this.tracks.some(aTrack => aTrack.id === track.id);
  }

}


module.exports = {
  Playlist,
};