class Album{
    constructor({id,name,year}){
        this.id=id;
        this.nombre=name;
        this.anioCreacion=year;
        this.tracks=[]
    }

    agregarTrack(track){
        this.tracks.push(track);
    }

    deleteTrack(track){
        this.tracks.pop(track);
    }
}