//FUNCIONES Y FOR
PImage cero;
int cantidad, ancho;
boolean estoyEnElCuadro [];
PImage imagenes [];
String textos [];
color colorDeTexto = 0;
color colorDeCuadro = color(0, 200);
PFont fuente;

void setup() {
  size(800, 600);
  cantidad = 5;
  ancho = width/cantidad;
  estoyEnElCuadro = new boolean [cantidad];
  imagenes = new PImage [cantidad];
  textos = loadStrings("textos/textos.txt");
  for (int i = 0; i < cantidad; i ++) {
    imagenes[i] = loadImage("imagenes/"+i+".png");
    imagenes[i].resize(ancho, height);
  }

  textSize(48);
  fuente = loadFont("Verdana-48.vlw"); 
  textFont(fuente);
}

void draw() {

  dibujar();
}
