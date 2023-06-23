String [] textos;
int numero;
void setup() {
  size(400, 400);

  textos = new String[31];

  textos[0] = "hola";
  textos[1] = "que tal?";
  textos[2] = "chau";

  textSize(72);

  println( textos.length);
}



void draw() {
  background(0);

  text(textos[numero], mouseX, mouseY);
 
}

void mouseClicked() {

  numero++;
  if (numero >= 3) {

    numero = 0;
  }
}
