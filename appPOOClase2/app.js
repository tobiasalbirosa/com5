class App {

  constructor() {
    this.edificio = new Edificio(50, 100, 50, 200)
      this.edificio2 = new Edificio(200, 100, 50, 200)
      this.edificio3 = new Edificio(400, 100, 50, 50)
  }

  dibujar() {
    background(127)
      this.edificio.dibujar()
      this.edificio2.dibujar()
      this.edificio3.dibujar()
  }

  actualizar() {
    // print(key)
  }
}
