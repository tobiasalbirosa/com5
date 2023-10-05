class App {
  constructor() {
    //ESTADO GENERAL DEL PROGRAMA:
      this.estado = new Estado()
      //INSTANCIA DEL JUEGO
      this.juego = new Juego()
      
      //OBTENEMOS EL ESTADO ACTUAL
      this.estadoActual = this.estado.getEstado()
      
      //PROGRAMAMOS LA PRIMER INTERACCIÓN
      this.botones = [new Boton(width/2, height/2, 50, "Iniciar", 0, 255)]
  }

  dibujar() {
    this.estadoActual = this.estado.getEstado()
    //DIBUJAMOS SEGUN EL ESTADO
      if (this.estadoActual == "Inicio") {
        
      this.botones[0].dibujar()

     } else {
      //DIBUJAMOS EL JUEGO EN EL ESTADO CORRESPONDIENTE
      this.juego.dibujar()
    }
  }
  mouseClicked() {
    this.botones[0].mouseClicked()
  }

  keyPressed(keyCode) {
    this.juego.mover(keyCode)
  }
}
