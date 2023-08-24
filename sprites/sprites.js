  let sprites = []
  let miPersonajeX = 0
  let miPersonajeY
  let velocidad = 1
  let personajeImagen
  let avanzar = false
  let statusPressed = false
  let comienzoAnimacion
  let enteroFrame = 0
  function preload() {
  for (let i = 0; i < 6; i++) {
    sprites[i] = loadImage("assets/pj/"+i+".png")
  }
  personajeImagen = sprites[0]

}


function setup() {
  createCanvas(windowWidth, windowHeight)
  miPersonajeY = height-personajeImagen.height
}


function draw() {
  background(120)
    juego()
}

function keyPressed() {

  miKeyPressed("pressed")
  
}

function keyReleased() {

  miKeyPressed("released")
}
