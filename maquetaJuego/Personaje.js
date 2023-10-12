class Personaje  {

  constructor(x, y, tam) {

    this.x = x
      this.y = y
      this.tam = tam

      this.colorA = color(120)

      this.colision = false


      this.imagen = loadImage("assets/0.webp")
  }

  actualizar() {
  }

  dibujar() {
    fill(this.colorA)
      circle(this.x, this.y, this.tam)
      image(this.imagen, this.x-this.tam/2, this.y-this.tam/2, this.tam, this.tam)
  }

  mover(param1, param2) {
  

    this.x =  this.x+param1
      this.y =  this.y+param2
  }

  keyPressed() {
    if (keyCode === 37) {
      this.mover(-20, 0)
    } else  if (keyCode === 39) {
      this.mover(20, 0)
    }
    print(keyCode)
      if (keyCode === 38) {
      this.mover(0, 20)
    } else  if (keyCode === 40) {
      this.mover(0, -20)
    }
  }
}

class Enemigo extends Personaje {

  constructor(x, y, tam) {
    super(x, y, tam)
  }

  mover() {
    this.x = this.x +8

      if (this.x > width) {
      this.x = 0
    }
  }
}
