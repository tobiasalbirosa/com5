class Juego {
  constructor() {
    this.estado = "Iniciar"
      this.personaje = new Personaje(width/2, height, 100)

      this.enemigos = []
      this.cantidadDeEnemigos  = 10
      for (let i = 0; i < this.cantidadDeEnemigos; i++) {
      this.enemigos[i] = new Enemigo(random(-width/2, width), random(height/2), random(20, 50))
    }
    this.fondo = loadImage("assets/0.webp")
  }

  actualizar() {
    stroke(255, 255, 0)
      strokeWeight(3)

      for (let i = 0; i < this.cantidadDeEnemigos; i++) {
      this.enemigos[i].mover()
    }
    for (let i = 0; i < this.cantidadDeEnemigos; i++) {

      line(
        this.personaje.x,
        this.personaje.y,
        this.enemigos[i].x,
        this.enemigos[i].y)
        if (dist(
        this.personaje.x,
        this.personaje.y,
        this.enemigos[i].x,
        this.enemigos[i].y) < this.personaje.tam/2 + this.enemigos[i].tam/2) {
        this.personaje.colorA = "#D61313"
          this.personaje.colision = true
          this.personaje.tam--
      } else {
        this.personaje.colorA = color(255)
      }
    }

    if (this.personaje.tam <= 50) {
      this.estado = "Perdiste"
    }

    if (this.personaje.y <= 0) {

      this.estado = "Ganaste"
    }
  }

  dibujar() {

    //  background(0)

    if (this.estado == "Iniciar") {
      background(120)
    } else if (this.estado == "Juego") {


      image(this.fondo, 0, 0, width, height)
        this.actualizar()
        this.personaje.actualizar()
        this.personaje.dibujar()

        for (let i = 0; i < this.cantidadDeEnemigos; i++) {
        this.enemigos[i].dibujar()
      }
    } else if (this.estado == "Ganaste" || this.estado == "Perdiste" ) {

      background(255)
    }
  }

  keyPressed() {
    if (this.estado == "Iniciar") {
      this.estado = "Juego"
    }
    this.personaje.keyPressed()
  }
}
