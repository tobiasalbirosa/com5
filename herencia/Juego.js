class Juego {

  constructor(estado) {
    this.estado = estado
      this.personaje = new Personaje(width/2, height-50, 50, 50, "#1241244")
      this.disco = new Disco(width/2 + 25, height-50, 50, 50, "#E33535")
  }
  dibujar() {

    background(127)
      this.personaje.dibujar()
      this.disco.dibujar()
  }
  mover (keyCode) {

    this.personaje.mover(keyCode)
      this.disco.mover(keyCode)
  }
}
