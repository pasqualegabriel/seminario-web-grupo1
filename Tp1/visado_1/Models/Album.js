class Album{
    constructor({id,name,year}){
        this.id=id;
        this.name=name;
        this.year=year;
        this.tracks=[]
    }

    agregarTrack(track){
        this.tracks.push(track);
    }

    buscarTrack(id){
        return (this.tracks.find(track =>track.id ===id))
    }

    deleteTrack(track){
        this.tracks.pop(track);
    }
}

module.exports = {
    Album,
  };