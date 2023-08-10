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
  if(!fondoSonoro.isPlaying()){
    fondoSonoro.play();
  }
    personaje(personajeX, 50, 50)
  pop()
}

function personaje(personajeXParam, personajeTamX, personajeTamY) {

  if (avanzar == true) {
    personajeX++
  }
  if (retroceder == true) {
    personajeX--
  }

  rect(personajeXParam, personajeY, personajeTamX, personajeTamY)

}
function disparos() {
}
function obstaculos() {
}
