class Edificio {

  constructor(x, y, ancho, alto) {


    this.x = x
      this.y = height - alto
      this.ancho = ancho
      this.alto = alto

      this.puerta = new Puerta(x, this.y, ancho, alto)


      this.ventana = []

      for (let i = 1; i < 3; i++) {
      for (let j = 1; j < 3; j++) {
        this.ventana.push(new Ventana(x, this.y, this.ancho, this.alto, i, j))
      }
    }

  }

  dibujar() {
    rect(this.x, this.y, this.ancho, this.alto)
      this.puerta.dibujar()

      for (let i = 0; i < this.ventana.length; i++) {

      this.ventana[i].dibujar()
    }
  }
}
