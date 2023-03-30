PImage imagen;

void setup() {
  size(800, 400);
  imagen = loadImage("imagen.jpg");
  imagen.resize(400, 400);
}

void draw() {
  // nombre de la variable de la imagen, x , y

  image(imagen, 0, 0);

  image(imagen, width/2, 0);

}
