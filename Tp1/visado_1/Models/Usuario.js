class Usuario {
    constructor(){
        this.tracksEscuchados = {}
    }

    escucharTrack(track){
      const temaAEscuchar = this.tracksEscuchados[track]
        if(temaAEscuchar){
            this.tracksEscuchados[track]++
        }else{
            this.tracksEscuchados[track]=1
        }
       
    }

    
    temasEscuchados(){
        return Object.keys(this.tracksEscuchados)
      }
  
    vecesEscuchado(track){
        return this.tracksEscuchados[track]
      }
}



    

