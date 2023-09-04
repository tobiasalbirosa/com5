let personajeX, personajeY, presionoTecla
  let saltando, cayendo
  let avanzar
  function setup() {

  createCanvas(windowWidth, windowHeight)
    personajeX=windowWidth/2
    personajeY=windowHeight-100
    background(120)
    saltando = false
}

function draw() {
  funciones()
}
function keyPressed() {

  if (key == " " && saltando == false) {
    saltando = true
  }
  if (key == 'a' ) {
    presionoTecla = true

      avanzar=false
  }
  if (key == 'd') {
    presionoTecla = true
      avanzar=true
  }
  print(key)
}
function keyReleased() {
  print(key, "rel")
    if (key == " " && saltando == false) {
  }
  if (key == 'a' ) {
    avanzar=true
      if (avanzar==true) {
      presionoTecla = false
    }
  }
  if (key == 'd') {
    if (avanzar==true) {
      presionoTecla = false
    }
    avanzar=false
  }
}
