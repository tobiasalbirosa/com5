class App {

  constructor() {
    this.galletitaDeChocolate
      this.galletitaDeChips = []
      this.galletitaDeChocolate = new Galletita("chocolate", 20, 20)
      for (let i = 0; i < 20; i++) {
      this.galletitaDeChips[i] = new Galletita("chips", random(width), random(height))
    }
  }

  dibujar() {
    background(255)
    this.galletitaDeChocolate.dibujar()

      for (let i = 0; i < 20; i++) {
      this.galletitaDeChips[i].dibujar()
    }
  }

  mousePressed() {
    for (let i = 0; i < 20; i++) {
      this.galletitaDeChips[i] = new Galletita("chips", random(width), random(height))
    }
  }
}
