function miKeyPressed(status) {
  if (key == "d" || key == "a") {
    if (status == "pressed") {
      avanzar = true
        comienzoAnimacion = millis()
        statusPressed = true
    } else if (status == "released") {
      statusPressed = false
    }
  }
}

function playAdelantar() {

  if (avanzar == true) {
    if (key == "d") {

      miPersonajeX += 1
    } else if (key == "a") {

      miPersonajeX -= 1
    }

    enteroFrame = int(
      map(
      millis(),
      comienzoAnimacion,
      comienzoAnimacion + 1000,
      0,
      5)
      )
  }


  if (enteroFrame >= 5) {
    if (    statusPressed == false) {
      avanzar = false
    }

    enteroFrame = 0
      comienzoAnimacion = millis()
  }

  personajeImagen = sprites[enteroFrame]
}

function juego() {
  playAdelantar()
    dibujarPersonaje()
}

function dibujarPersonaje() {
  if (key == "d") {
    translate(miPersonajeX, 0)

      scale(1, 1)
  }
  if (key == "a") {
    translate(miPersonajeX, 0)
      scale(-1, 1)
  }

    image(personajeImagen, 0, miPersonajeY)
}
