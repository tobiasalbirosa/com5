String [] renglones;
PImage [] imagenes;

int pantalla;

int resultado;
void setup() {
  renglones = loadStrings("textos/texto.txt");

  imagenes = new PImage[3];

  for (int i = 0; i < imagenes.length; i++) {
    if (i == 0) {
      imagenes[i] = loadImage(i+".jpeg");
    } else {
      imagenes[i] = loadImage(i +".jpg");
    }
  }
  size(400, 400);

  image(imagenes[0], 0, 0);
  println(imagenes.length);
  textSize(48);
  
}

void draw() {
  background(0);
  dibujarFondo(pantalla);
  dibujarTexto(pantalla);
  
  
    text(resultado,width/2, height/2);

}
