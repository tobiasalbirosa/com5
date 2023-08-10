let estado = 0
var fondoSonoro;

let pressed = false
  let personajeY, personajeX
  let velocidad = 1
  let width = window.innerWidth
  let height = window.innerHeight
  let mousePress
  let piso
  let avanzar
  let retroceder


function preload() {
  fondoSonoro = loadSound('assets/fondoSonoro.wav')
}


function setup() {

  createCanvas(width, height)

    textSize(28)
    textAlign(CENTER)
    personajeY = height - 50
    personajeX = width/2
    piso = height - 50
}

function draw () {
  programa()
}

function keyPressed() {
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
