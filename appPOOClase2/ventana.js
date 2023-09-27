class Ventana {

  constructor(x, y, ancho, alto, i, j) {


    this.ancho = ancho/5
      this.alto = alto/5

      if (i%2 != 0) {
      this.x = x + ancho / 8
    } else {
      this.x = x + ancho / 2
    }

    if (j%2 != 0) {
      this.y = y + j + alto / 8
    } else {
      this.y = y + j + alto / 2
    }
  }


  dibujar() {
    rect(
      this.x,
      this.y,
      this.ancho,
      this.alto)
  }
}
