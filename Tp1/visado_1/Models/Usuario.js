class Usuario {
  constructor(_id, _name) {
    this.id = _id;
    this.name = _name;
    this.tracksEscuchados = {};
  }

  escucharTrack(track) {
    const checkTemaaEscuchar = this.tracksEscuchados[track];
    this.tracksEscuchados[track] = checkTemaaEscuchar ? checkTemaaEscuchar + 1 : 1;
  }

  temasEscuchados() {
    return Object.keys(this.tracksEscuchados);
  }

  vecesEscuchado(track) {
    return this.tracksEscuchados[track];
  }
}

module.exports = {
  Usuario
};
