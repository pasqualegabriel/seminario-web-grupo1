class ArtistRepository {

    constructor() {
        this.artists = { }
        this.nextId = 1
    }

    save(artist) {
        this.artists[nextId] = artist
        this.nextId++
    }

    delete(id) {
        delete this.artists[id]
    }

    findBy(id) {
        return this.artists[id]
    }

    findAllByName(name) {
        return Object.values(this.artists).filter(artist => artist.name.includes(name))
    }

    findAllAlbums() {
        
    }

    findAlbumsByName(name) {
        return Object.values
    }


}

module.exports = {
    ArtistRepository
}