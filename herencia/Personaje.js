class Personaje {

  constructor(x, y, w, h, colorA) {

    this.x = x
      this.y = y
      this.w = w
      this.h = h
      this.colorA = colorA
  }

  dibujar() {

    rect(this.x, this.y, this.w, this.h)
  }

  mover(codigoDeTeclado) {

    if (codigoDeTeclado == '68') {
      this.x++
    } else if (codigoDeTeclado == '65') {
      this.x--
    }
  }
}

class Disco extends Personaje {

  constructor(x, y, w, h, colorA) {
    super(x, y, w, h, colorA)
  }

  dibujar() {
    push()
      print(this.colorA)
      fill(this.colorA)
      ellipse(this.x, this.y, this.w, this.h)
      pop()
  }
}
