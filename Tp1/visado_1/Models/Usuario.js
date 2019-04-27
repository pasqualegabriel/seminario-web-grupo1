class Usuario {
    constructor(_id,_name){
        this.id = _id;
        this.name= _name
        this.tracksEscuchados = {};
    }

    escucharTrack(track){
      const temaAEscuchar = this.tracksEscuchados[track]
        if(temaAEscuchar){
            this.tracksEscuchados[track]++
        }else{
            this.tracksEscuchados[track]=1;
        }
    }

    
    temasEscuchados(){
        return Object.keys(this.tracksEscuchados)
      }
  
    vecesEscuchado(track){
        return this.tracksEscuchados[track]
    }
}


module.exports = {
    Usuario,
  };

