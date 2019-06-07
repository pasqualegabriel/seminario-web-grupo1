class Track{
  constructor(id,name,duration,genres){
    this.id=id;
    this.name=name;
    this.duration=duration;
    this.genres=genres;
  }

  getGenres(){
    return this.genres;
  }
}

module.exports = {
  Track,
};