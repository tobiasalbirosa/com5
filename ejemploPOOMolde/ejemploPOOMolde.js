let app

function setup() {
  createCanvas(400, 400)
  app = new App()

}

function draw() {
 app.dibujar()
}

function mousePressed(){
  app.mousePressed()
}
