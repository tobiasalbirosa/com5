/*
IMPORTANTE
PARA EL TP2:

COMISION 5
NOMBRE Y LEGAJO
LINK AL VIDEO EXPLICANDO EL CODIGO
*/
int cantidadX = 10;
int cantidadY = 10;
int ancho, alto;
void setup() {
  size(800, 800);
  rectMode(CENTER);
  ancho = width/cantidadX;
  alto = width/cantidadY;
  textSize(24);
}

void draw() {
  background(127);

  for (int i = 0; i < cantidadX; i++) {
    for (int j = 0; j < cantidadY; j++) {

      push();
      translate(i * ancho + ancho/2, j * alto + alto/2);
      if (i % 2 == 0 && j % 2 == 0) {
        fill(0,255,0);
        rotate(radians(frameCount));
      }
      if (i % 2 == 0 && j % 2 !=0) {
        fill(255);
        rotate(-radians(frameCount));
      }
      if (i % 2 != 0 && j % 2 == 0) {
        fill(255,0,0);
        rotate(-radians(frameCount));
      }

      if (i % 2 != 0 && j % 2 != 0) {
        fill(0);
        rotate(radians(frameCount));
      }
      rect(0, 0, ancho, alto);
      pop();
    }
  }
}
