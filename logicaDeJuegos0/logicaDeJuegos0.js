let estado = 0
  let pressed = false
  let personajeSalto
  let personajeCayendo
  let personajeSaltando
  let personajeY, personajeX
  let velocidad = 1
  let width = window.innerWidth
  let height = window.innerHeight
  let mousePress
  let piso
  let techo
  let avanzar
  let retroceder

  function setup() {
  createCanvas(width, height)
    textSize(28)
    textAlign(CENTER)
    personajeY = height - 50
    personajeX = width/10
    piso = height - 50
    techo = height - 150
}

function draw () {
  programa()
}

function keyPressed() {
  if (key == ' ' && estado == 1 && !personajeSalto) {
    personajeSalto = true
  }

  if (key == 'a' || key == 'A') {
    retroceder=true;
  }
  if (key == 'd' || key == 'D') {
    avanzar=true;
  }
}

function keyReleased() {
  if (key == 'a' || key == 'A') {
    retroceder=false
  }
  if (key == 'd' || key == 'D') {
    avanzar=false
  }
}


function mousePressed() {
  mousePress = !mousePress
}
