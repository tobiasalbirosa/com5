int pantalla = 0;
boolean on;
void setup() {
  size(200, 200);
  rectMode(CENTER);
}
void draw() {
  background(0);
  println(pantalla);
  dibujarPantallas();
}
void dibujarPantallas() {
  if (pantalla == 0) {
    dibujarBoton("circ", width/2, height/2, 20, 1);
  } else if (pantalla == 1) {
    dibujarBoton("cuad", width/3, height/3, 20, 0);
  }
}
void mouseMoved() {
  on = true;
}
