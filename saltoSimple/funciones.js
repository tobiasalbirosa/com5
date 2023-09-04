function funciones() {

  salto()
  mover()
  personaje()
}

function salto() {

  if (saltando) {
    personajeY--
      if (personajeY <= windowHeight-200) {
      saltando = false
        cayendo = true
    }
  } else if (cayendo) {
    personajeY++

      if (personajeY >= windowHeight - 100) {
      saltando = false
        cayendo = false
    }
  }
}

function mover() {
  if (presionoTecla) {
    if (!avanzar) {
      personajeX--
    }
    if (avanzar) {
      personajeX++
    }
  }
}

function personaje() {
  rect(personajeX, personajeY, 100, 100)
}
