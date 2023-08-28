let pantalla = 0
  let obstaculosY = []
  let obstaculosX = []
  let obstaculosVel = []
  let desaparecer = []
  let tam = []

  let bonusY = []
  let bonusX = []
  let bonusVel = []
  let desaparecerBonus = []
  let bonusTam = []


  let bonusJuntados = 0
  let vidas = 3
  function setup() {
  createCanvas(windowWidth, windowHeight)

   iniciar()
}


function draw() {

  pantallas()
}


function mousePressed() {

  if (pantalla == 0) {
    pantalla = 1
  }
    if (pantalla == 2) {
    pantalla = 0
  }
    if (pantalla == 3) {
    pantalla = 0
  }
}
