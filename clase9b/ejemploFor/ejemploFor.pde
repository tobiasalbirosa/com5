int cantidad;

void setup() {
  cantidad = 5;
  size(400, 400);
  colorMode(HSB);
  noStroke();
  smooth();
}

void draw() {
   background(0);
  for (int i = cantidad; i > 0; i--) {
    // H, S, B
    // HUE, SATURATION, BRIGTHNESS
    // COLOR, SATURACION, BRILLO
    fill(devolverColor(i), mouseX, mouseY);
    circle(width/2, height/2, i * width/cantidad);
  }
}
color devolverColor (int indice) {
  return int(map(indice* 255/cantidad, 0, 255, 80, 180));
}

void mouseMoved() {
  cantidad = int(map(mouseX, 0, width, 1, 5));
}
