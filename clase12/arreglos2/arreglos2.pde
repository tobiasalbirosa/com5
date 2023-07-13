int mapa[][];
int tam;
float x;
float y;
void setup() {
  size(400, 400);
  mapa = new int[5][5];
  tam = width/5;
  x = tam/2;
  y = tam * 1.5;

  for (int i = 0; i < mapa.length; i++) {
    for (int j = 0; j < mapa.length; j++) {

      mapa[i][j] =  0;

      if (i == 0 && j == 1 ||
        i == 1 && j == 1 ||
        i == 2 && j == 1 ||
        i == 2 && j == 2 ||
        i == 2 && j == 3 ||
        i == 2 && j == 3 ||
        i == 3 && j == 3 ||
        i == 4 && j == 3)
      {

        mapa[i][j] =  1;
      }
    }
  }
}

void draw() {
  dibujarMapa();
  dibujar();
}
void dibujar() {

  if (funcionLimiteInferior(x, y, 0, 160, 160, 160)) {
  } else {
    y++;
  }
  circle(x, y, tam /2);
}
void dibujarMapa() {
  for (int i = 0; i < mapa.length; i++) {
    for (int j = 0; j < mapa.length; j++) {
      if (mapa[i][j] == 0) {
        fill(255);
      } else {
        fill(0);
      }
      square(i * tam, j * tam, tam);
    }
  }
}
boolean funcionLimiteInferior(float x, float y, float x1, float y1, float x2, float y2) {
  pushStyle();
  stroke(255, 0, 0);
  strokeWeight(12);
  line(x1, y1, x2, y2);
  popStyle();
  y1 = y1-tam/4;
  if (y >= y1 && x <= x2) {
    return true;
  } else {
    return false;
  }
}


void keyPressed() {
  if (key == 'd' || key == 'D') {
    x++;
  }
}
