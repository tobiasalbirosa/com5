String mensaje1, mensaje2, mensaje3;
int segundoSetup, segundoGrafica, segundo;
void setup() {
  surface.setTitle("Funciones TP2 ");
  surface.setResizable(true);
  textSize(72);
  size(640, 480);
  segundoSetup = second();
}

void draw() {
  background(0);
  graficaDeTiempo(second());
  text(segundoGrafica, width/10, height/2);
}

void graficaDeTiempo(int segundoReal) {
  segundo = segundoReal-segundoSetup;
  if (segundo >= 0) {
    segundoGrafica = segundo;
  } else {
    segundoGrafica = segundo + 60;
  }
}
