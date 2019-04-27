class Playlist {
  constructor(id, name, genresToInclude, duration){
    this.id = id;
    this.name = name;
    this.genresToInclude = genresToInclude;
    this.duration = duration;
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