function pantallas() {
  if (pantalla == 0) {
    bonusJuntados = 0
      vidas = 3
      iniciar()
      background(0)
  } else if (pantalla == 1) {
    juego()
  } else if (pantalla == 2) {
    background(255, 255, 0)
      text("Ganaste", mouseX, mouseY)
  } else if (pantalla == 3) {

    background(0, 0, 255)

      text("Perdiste", mouseX, mouseY)
  }
}

function juego() {

  background(255)
    if (bonusJuntados >= 3) {
    pantalla = 2
  }
  if (vidas <= 0) {
    pantalla = 3
  }

  obstaculos()
    bonus()

    print( "Bonus juntados: "+bonusJuntados, "Vidas: "+vidas)
}


function obstaculos() {

  for (let i = 0; i < 5; i++) {

    if (obstaculosY[i] > height) {
      //obstaculosY[i] = random(-100, 0)
      tam[i] =  random(5, 25)

        obstaculosVel[i] = -obstaculosVel[i]
    }
    if (obstaculosY[i] < 0) {
      tam[i] =  random(5, 25)

        obstaculosVel[i] = obstaculosVel[i]*-1
    }
    obstaculosY[i]+=obstaculosVel[i]


      if (mouseX > obstaculosX[i]  && mouseX < obstaculosX[i] +  tam[i] &&
      mouseY > obstaculosY[i] && mouseY < obstaculosY[i] +   tam[i]
      ) {
      fill(0)
        if ( desaparecer[i]  == false) {
        vidas--
      }
      desaparecer[i] = true
    } else {
      fill(255)
    }
    if (desaparecer[i] == true) {
    } else {
      rect(obstaculosX[i], obstaculosY[i], tam[i], tam[i])
    }
  }
}


function bonus() {
  for (let i = 0; i < 5; i++) {
    if (bonusY[i] > height) {

      bonusVel[i] = -bonusVel[i]
    }
    if (bonusY[i] < 0) {

      bonusVel[i] = bonusVel[i]*-1
    }
    bonusY[i]+=bonusVel[i]

      push()

      if (dist(mouseX, mouseY, bonusX[i], bonusY[i]) < bonusTam[i]) {
      fill(0)

        if (  desaparecerBonus[i] == false) {
        bonusJuntados++
      }
      desaparecerBonus[i] = true
    } else {
      fill(255)
    }
    if (desaparecerBonus[i] == true) {
    } else {


      fill(0, 255, 0)
        circle(bonusX[i], bonusY[i], bonusTam[i])
    }



    pop()
  }
}



function iniciar() {

  for (let i = 0; i < 5; i++) {
    obstaculosY[i] = random(0, 0)
      obstaculosVel[i] =  random(1, 5)
      obstaculosX[i] =  random(0, width- 25)
      desaparecer[i] = false
      tam[i] =  random(5, 25)
  }

  for (let i = 0; i < 5; i++) {


    bonusY[i] = random(0, 0)
      bonusVel[i] =  random(1, 5)
      bonusX[i] =  random(0, width- 25)
      desaparecerBonus[i] = false
      bonusTam[i] =  random(5, 25)
  }
}
