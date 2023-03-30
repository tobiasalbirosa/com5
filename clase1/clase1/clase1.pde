
void setup() {
  size(800, 400);
  textSize(48);
  smooth();
}

void draw() {

  background(0);

  fill(255);
  text("Hola soy un texto", mouseX, mouseY);


  fill(0, 200, 0);
  stroke(255);
  strokeWeight(10);
  // pos en x, pos en y, ancho , alto

  ellipse(width/2, height/2, 120, 240);
  // x, y, x1, y1, x2, y2

  stroke(255, 200, 0);
  strokeWeight(25);

  triangle(0, 0, 100, 0, 0, 100);
  //x, y, x1, y1,  x2, y2, x3
  quad(350, 0, 400, 0, 400, 50, 300, 100);

  //beginShape(); y endShape();
  fill(200, 0, 0);
  beginShape();
  vertex(402, 87);
  vertex(414, 165);
  vertex(452, 159);
  vertex(425, 204);
  vertex(450, 261);
  vertex(412, 239);
  vertex(356, 262);
  vertex(377, 212);
  vertex(340, 165);
  vertex(378, 176);
  vertex(402, 87);
  endShape();
  //color y transparencia
  fill(0,0,255,127);
  noStroke();
  rect(mouseX, mouseY, 40, 40);
}


void mousePressed() {
  println("vertex("+mouseX+","+mouseY+");");
}
