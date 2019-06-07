const rp = require('request-promise');
const cred = require('../credentials/musicMatchCreds.json')


class MusicMatchClient {

  constructor() {
      this.apiKey = cred.apiKey
      this.baseURL = 'http://api.musixmatch.com/ws/1.1'
  }


  searchTrackId(trackName) {
    const options = {
      uri: this.baseURL + '/track.search',
      qs: {
      apikey: this.apiKey,
      q_track: trackName,
      },
      json: true
    };
        
        
        return rp.get(options).then((response) =>response.message.body.track_list[0].track.track_id).catch(error =>console.log(error));
  }

  getTrackLyrics(trackID) {
    const options = {
      uri: this.baseURL + '/track.lyrics.get',
      qs: {
      apikey: this.apiKey,
      track_id: trackID,
      },
      json: true
    }
      return rp.get(options).then((response) =>response.message.body.lyrics.lyrics_body).catch(error =>console.log(error));
  }



}
module.exports = {
  MusicMatchClient,
};

