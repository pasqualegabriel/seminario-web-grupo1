const rp = require('request-promise');

class LogsClient {

    constructor() {
        this.url = "http://127.0.0.1",
        this.port = "8003"
    }

    createOptions(level, message) {
        const options = {
            url: `${this.url}:${this.port}/save`,
            qs: {
                level: level,
                message: message
            }
        };

        return options;
    }

    registerError(message, value) {
        const options = this.createOptions("error", `${message}: ${value}`)

        rp.post(options)
    }

    registerAddArtist(artistName) {
        const options = this.createOptions("info", `Se agrego al artista ${artistName}.`)

        rp.post(options)
    }

    registerDeleteArtist(artistName) {
        const options = this.createOptions("info", `Se elimino al artista ${artistName}.`)

        rp.post(options)
    }

    registerAddAlbum(albumName, artistName) {
        const options = this.createOptions("info", `Se agrego el album ${albumName} al artista ${artistName}.`)

        rp.post(options)
    }

    registerDeleteAlbum(albumName) {
        const options = this.createOptions("info", `Se elimino el album ${albumName}.`)

        rp.post(options)
    }

    registerAddTrack(trackName, albumName) {
        const options = this.createOptions("info", `Se agrego el track ${trackName} al album ${albumName}.`)

        rp.post(options)
    }

    registerDeleteTrack(trackName) {
        const options = this.createOptions("info", `Se elimo el track ${trackName}.`)

        rp.post(options)
    }
}

module.exports = {
    LogsClient,
};