let app

function setup() {
    
    createCanvas(windowWidth, windowHeight)
    app = new App()

}


function draw() {

  app.dibujar()

}

function keyPressed() {
  
  app.keyPressed(keyCode)

}

function mouseClicked(){
  
  app.mouseClicked()
}
