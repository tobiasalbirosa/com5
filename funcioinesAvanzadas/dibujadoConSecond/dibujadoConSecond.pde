float valor;
float tamanioDelCirculo;
void setup() {
  size(640, 480);
  surface.setResizable(true);
  colorMode(HSB);
}

void draw() {
  tamanioDelCirculo = map(second(), 0, 59, 20, width/3);

  valor = map(second(), 0, 59, 0, width);
  int colorDeFondo = int(map(second(), 0, 59, 0, 255));
  println(colorDeFondo);
  background(colorDeFondo, 255, 255);
  fill(colorDeFondo/2, 255, 255, 120);
  rect(0, 0, valor, height);
  dibujarCirculo(50, 50, tamanioDelCirculo) ;
  dibujarCirculo(150, 250, tamanioDelCirculo/2) ;
  dibujarCirculo(400, 400, tamanioDelCirculo * 1.1) ;
}

void dibujarCirculo(float x, float y, float tam) {

  fill(map(mouseX, 0, width, 30, 49), 255, 255);
  circle(x, y, tam);
}
