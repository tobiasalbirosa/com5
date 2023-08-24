let x, y, tam
function setup() {
  createCanvas(windowWidth, windowHeight)
  x = width/2
  y = height/2
  tam = height/10
}


function draw() {
  background(120)
  juego()
}

function mouseMoved(){
  
  x = mouseX
  y = mouseY

}
