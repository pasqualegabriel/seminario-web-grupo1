const rp = require('request-promise');
const cred = require('../credentials/spotifyCreds.json')

rp.get(options).then((response) => //hacer algo con response);

class SpotifyClient {

    constructor() {
        apiKey = cred.access_token
    }

    getArtistByName(artistName) {
        const options = {
            url: 'https://api.spotify.com/v1/search',
            headers: { Authorization: 'Bearer ' + this.apiKey },
            q: artistName,
            type: "artist",
            limit: 1, 
            json: true,
          };
        
          return rp.get(options).then((response) => response.artists.items[0]).catch(console.log("ROMPIO"));
    }

    populateAlbumsForArtist(artistId) {
        const options = {
            url: 'https://api.spotify.com/v1/artists/'+artistId+'/albums',
            headers: { Authorization: 'Bearer ' + this.apiKey },

            json: true,
          };

        return rp.get(options).then((response) => response.items).catch(console.log("ROMPIO"));
    }



}