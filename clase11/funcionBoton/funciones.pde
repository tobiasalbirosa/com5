void dibujarBoton(String forma, float x, float y, float tam, int siguiente) {
  push();
  if (forma == "circ") {
    circle(x, y, tam);
    if (mousePressed && on) {
      if (dist(mouseX, mouseY, x, y) < tam / 2) {
        pantalla = siguiente;
        on = false;
      }
    }
  } else if (forma == "cuad") {
    square(x, y, tam);
    if (mousePressed && on) {
      if (mouseX > x && mouseY > y - tam/2 && mouseY < y + tam/2 && mouseX < x + tam/2) {
        pantalla = siguiente;
        on = false;
      }
    }
  }
  pop();
}
