let app

function preload() {
  
    app = new App()
    
}

function setup() {
  
  createCanvas(windowWidth, windowHeight)
  background(127)
  
}


function draw() {
  
  app.actualizar()
  
}
