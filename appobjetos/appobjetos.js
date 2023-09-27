let aplicacion

  function setup() {
  createCanvas(windowWidth, windowHeight)

    aplicacion = new App("Nombre de la app")
    //aplicacion3 = new App("Nombre de la app")
    print(aplicacion.nombre)
}


function draw() {
  aplicacion.dibujar()
}

function mouseClicked() {
  aplicacion.mouseClicked()
}


function keyPressed() {
  aplicacion.keyPressed()
}
