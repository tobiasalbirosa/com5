//youtube.com/linkalvideo
int pantalla = 0;
boolean on;
PImage imagenes[];
String texto[];
String textosPantallaUno[];
void setup() {
  size(600, 600);
  rectMode(CENTER);

  imagenes = new PImage[12];

  for (int i = 0; i <12; i++) {
    imagenes[i] = loadImage(i+".png");
    imagenes[i].resize(width, height);
  }

  texto = loadStrings("texto.txt");

  textSize(48);
}
void draw() {

  dibujarPantallas();
}
void dibujarPantallas() {

  image(imagenes[pantalla], 0, 0);
  text(texto[pantalla], mouseX, mouseY);

  if (pantalla == 0) {
    text(texto[pantalla], 200,200);
    
        text(texto[3], 0, 50);

    //for (int i = 0; i <12; i++) {
  //}
    
    
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
