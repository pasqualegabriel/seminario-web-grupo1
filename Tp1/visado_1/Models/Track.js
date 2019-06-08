class Track{
    constructor(id,name,duration,genres){
        this.id=id;
        this.name=name;
        this.duration=duration;
        this.genres=genres;
        this.lyrics=''
    }

    getGenres(){
        return this.genres;
    }

    setLyrics(lyrics_){
    this.lyrics = lyrics_;
    }

    getLyrics(){
        return this.lyrics;
    }
}

module.exports = {
    Track,
  };