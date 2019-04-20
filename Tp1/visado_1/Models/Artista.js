class Artista {
    constructor({id,name,country}){
        this.id=id;
        this.nombre=name;
        this.pais=country;
        this.albumsCreados =[]
    }

    addAlbum(album){
        this.albumsCreados.push(album)
    }

    deleteAlbum(album){
        this.albumsCreados.pop(album);
    }
}