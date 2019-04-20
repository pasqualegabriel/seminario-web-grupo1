class Album{
    constructor({id = 0,name,year}){
        this.id=id;
        this.name=name;
        this.year=year;
        this.tracks=[]
    }

    agregarTrack(track){
        this.tracks.push(track);
    }

    deleteTrack(track){
        this.tracks.pop(track);
    }
}

module.exports = {
    Album,
  };