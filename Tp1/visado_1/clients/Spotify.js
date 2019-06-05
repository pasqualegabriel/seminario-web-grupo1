const rp = require('request-promise');
const cred = require('../credentials/spotifyCreds.json')


class SpotifyClient {

    constructor() {
        this.apiKey = cred.access_token
    }

    getArtistByName(artistName) {
        const options = {
            url: 'https://api.spotify.com/v1/search',
            headers: { Authorization: 'Bearer ' + this.apiKey },
            qs:{
            q: artistName,
            type: "artist",
            },
            limit: 1, 
            json: true,
          };
          
          
          return rp.get(options).then((response) =>response.artists.items[0].id).catch(error =>console.log(error));
    }

    populateAlbumsForArtist(artistId) {
        const options = {
            url: 'https://api.spotify.com/v1/artists/'+artistId+'/albums',
            headers: { Authorization: 'Bearer ' + this.apiKey },

            json: true,
          };

        return rp.get(options).then((response) =>response.items).catch(error =>console.log(error));
    }



}
module.exports = {
    SpotifyClient,
  };