class Track{
    constructor({id = 0,name,duration,genres}){
        this.id=id;
        this.name=name;
        this.duration=duration;
        this.genres=genres;
    }
}

module.exports = {
    Track
  };