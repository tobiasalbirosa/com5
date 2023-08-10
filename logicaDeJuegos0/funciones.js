function programa() {
  switch(estado) {
  case 0:
    background(0)
      boton(width/2, height/2, width/2, "Inicio", 255, 0);
    break
    case 1:
    background(255)
      juego()
      break
  }
}

function boton(x, y, tam, texto, fondo, colorDeTexto) {
  push()

    fill(fondo)
    if (mousePress &&
    dist(mouseX, mouseY, x, y) < tam / 2) {
    irA(texto)
  }

  circle(x, y, tam)
    fill(colorDeTexto)
    text(texto, x, y)

    pop()
}


function irA(texto) {

  if (texto == "Inicio") {
    estado = 1
  }
}


function juego() {
  push()
    personaje(personajeX, 50, 50)
    pop()
}

function personaje(personajeXParam, personajeTamX, personajeTamY) {



  if (personajeSalto) {

    logicaDeSalto()
  } else {

    if (avanzar == true) {
      print("foward")
        personajeX++
    }
    if (retroceder == true) {
      print("foward")
        personajeX--
    }
  }
  print(personajeX)

    rect(personajeXParam, personajeY, personajeTamX, personajeTamY)
}

function logicaDeSalto() {

  if (!personajeSaltando) {

    let distanciaDelSuelo = dist(personajeX, personajeY, personajeX, piso);
    velocidad = map(distanciaDelSuelo, 1, 100, 5, 2)
      personajeY-=velocidad
      if (personajeY <= techo) {
      personajeSaltando = true
    }
  }
  if (!personajeCayendo && personajeSaltando) {

    let distanciaDelSuelo = dist(personajeX, personajeY, personajeX, piso);
    velocidad = 3

      personajeY+=velocidad

      print(velocidad)

      if (personajeY >= piso) {
      personajeCayendo = false
        personajeSaltando = false
        personajeSalto = false
    }
  }
}

function obstaculos() {
}
