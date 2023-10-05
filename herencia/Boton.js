class Boton {

  constructor(x, y, tam, texto, colorA, colorB) {
    this.x = x
      this.y = y
      this.tam = tam
      this.texto = texto
      this.colorA = colorA
      this.colorB = colorB
  }

  dibujar() {

    push()
      fill(this.colorA)
      rect(this.x, this.y, this.tam, this.tam)
      fill(this.colorB)
      text(this.texto, this.x + this.tam/12, this.y  + this.tam/2)
      pop()
  }

  mouseClicked() {
      //MANEJAMOS EVENTOS DE CLICK AQUI (SE PUEDE MEJORAR)
      if (mouseX > this.x && mouseY > this.y && mouseX < this.x + this.tam && mouseY < this.y + this.tam) {
        if (app.estado.getEstado() == "Inicio") {
            app.estado.setEstado("Juego")
      }
    }
  }
}
