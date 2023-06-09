/*
NOMBRE
 COMISION
 LINK AL VIDEO DE YOUTUBE
 */
int ancho, alto;
int cantidad =  10;

int cantidadXDeModulos;
int cantidadYDeModulos;

int anchoDeModulo;
int altoDeModulo;

void setup() {
  size(800, 400);
  rectMode(CENTER);
  cantidadXDeModulos = 1;
  cantidadYDeModulos = 1;



  anchoDeModulo = width/cantidadXDeModulos;
  altoDeModulo = height/cantidadYDeModulos;


  alto = altoDeModulo/cantidad;
  ancho = anchoDeModulo/cantidad;
}

void draw() {
  background(0);


  for (int i = 0; i < cantidadXDeModulos; i++) {
    for (int j = 0; j < cantidadYDeModulos; j++) {
      dibujarModulo(i, j);
    }
  }
}


void modulo(int x, int pX, int pY) {
  color colorA = color(255, 0, 0);
  color colorB = color(255, 255, 0);
  push();
  if (x % 2 == 0) {
    fill(0);
  } else {
    fill(lerpColor(colorA, colorB, map(x,0,9,0,1)));
  }
  translate(pX * anchoDeModulo, pY * altoDeModulo);
  rotate(radians(frameCount));

  rect(0, 0, ancho * x, alto * x);


  /*LERP
   NUMEROS, NUMEROS, NUMERO, 0.0,1
   X, Y, Z
   */

  //println(lerpColor(colorA, colorB, .3));
  fill(lerpColor(colorA, colorB, .8));
  circle(0, 0, ancho );
  pop();
}


void dibujarModulo(int parametroX, int parametroY) {

  for (int i = cantidad; i > 0; i--) {
    modulo(i, parametroX, parametroY);
  }
}

void mouseMoved() {
  cantidadYDeModulos  = int(map(mouseY, 0, height, 1, 20));

  cantidadXDeModulos  = int(map(mouseX, 0, width, 1, 20));




  anchoDeModulo = width/cantidadXDeModulos;
  altoDeModulo = height/cantidadYDeModulos;




  alto = altoDeModulo/cantidad;
  ancho = anchoDeModulo/cantidad;
}
