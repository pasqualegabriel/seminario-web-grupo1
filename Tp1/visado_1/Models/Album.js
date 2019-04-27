class Album{
    constructor(id,artistId,name,year){
        this.id=id;
        this.artistId=artistId;
        this.name=name;
        this.year=year;
        this.tracks=[]
    }

    agregarTrack(track){
        this.tracks.push(track);
    }

    getTracks(){
        return this.tracks;
    }

    buscarTrack(id){
        return (this.tracks.find(track =>track.id ===id))
    }

    deleteTrack(id){
        this.tracks = this.tracks.filter(track => track.id !==id);
    }
}

module.exports = {
    Album,
  };