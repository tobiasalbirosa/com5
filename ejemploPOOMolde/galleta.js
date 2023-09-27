class Galletita {

  constructor(tipo, x, y) {

    this.tipo = tipo
      
    this.colorDeRelleno = color(255)
      this.x = x
      this.y = y

      if (tipo == "chips") {
      this.chipsX = []
        this.chipsY = []

        this.generarChips()
    }
  }

  dibujar() {

    if (this.tipo == "chocolate") {
      this.colorDeRelleno = color("#2E2B1F")
    } else if (this.tipo == "chips") {

      this.colorDeRelleno = color("#9D821D")
    }
    fill(this.colorDeRelleno)
      ellipse(this.x, this.y, 50, 50)
      if (this.tipo == "chips") {

      this.dibujarChips()
    }
  }

  generarChips() {
    for (let i = 0; i < 10; i++) {
      this.chipsX[i] = random(this.x-20, this.x+20)
        this.chipsY[i] = random(this.y-20, this.y+20)
    }
  }

  dibujarChips() {
    for (let i = 0; i < 10; i++) {
      ellipse(this.chipsX[i], this.chipsY[i], 5, 5 )
    }
  }
}
