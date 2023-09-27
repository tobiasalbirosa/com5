class Puerta {

  constructor(x, y, ancho, alto) {

   this.x = x + random( ancho - ancho / 3)
   this.y = y
   this.ancho = ancho
   this.alto = alto
   
  }

  dibujar() {
    rect(
      this.x,
      this.y + this.alto -  this.alto/8,
      this.ancho/4,
      this.alto/8)
  }
}
