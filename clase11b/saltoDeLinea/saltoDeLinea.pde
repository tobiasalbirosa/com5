//youtube.com/linkalvideo
int pantalla = 0;
boolean on;
String texto[];
void setup() {
  size(600, 600);
  rectMode(CENTER);
  texto = loadStrings("texto.txt");
  //HACEMOS QUE PROCESSING ENTIENDA LOS SALTO DE LINEA
  //LOS SALTOS DE LINEAS LOS HACEMOS CON \n
  //PERO SI CARGAMOS ESTOS CON LOAD STRINGS
  //PARA QUE PROCESSING LOS INTEPRETE
  //DEBEMOS HACER LO SIGUIENTE
  for (int i = 0; i < texto.length; i++) {
    String verificar = texto[i];
    texto[i] = verificar.replaceAll("\\\\n", "\n");
  }
  textSize(48);
  text(texto[0], 50,50);
}
void draw() {
  noLoop();
  //background(0);
  //dibujarPantallas();
}
void dibujarPantallas() {

  text(texto[pantalla], mouseX, mouseY);

  if (pantalla == 0) {
    text(texto[pantalla], 200, 200);

    text(texto[0], 0, 50);

    dibujarBoton("circ", width/2, height/2, 40, 1, "Avanzar");
  } else if (pantalla == 1) {
    dibujarBoton("cuad", width/3, height/3, 20, 2, "Avanzar 2");
  } else if (pantalla == 2) {
    dibujarBoton("cuad", width-20, height-20, 20, 1, "Atras");
    dibujarBoton("circ", 20, 20, 20, 0, "Reiniciar");
  }
}
void mouseMoved() {
  on = true;
}
