float PJx, PJy;
float velocidad;
PImage imagen0, imagen1;
int contar = 1;
float botonX, botonY, botonTamX, botonTamY;
void setup() {
  size(640, 480);
  velocidad = 10;
  imagen0 = loadImage("0.png");
  imagen1 = loadImage("1.png");
}

void draw() {
  background(0);
  //rect(PJx, PJy, width/10, height/10);
  if (keyPressed && contar > -12) {
    contar--;
  } else if (contar < 12) {
    contar++;
  }
  if (contar <= 0) {
    image(imagen1, PJx, PJy, width/10, height/10);
  }
  if (contar >= 0) {

    image(imagen0, PJx, PJy, width/10, height/10);
  }
}

void keyPressed() {
  if (keyCode == UP) {
    PJy= PJy-velocidad;
  } else if (keyCode == DOWN) {
    PJy= PJy+velocidad;
  } else if (keyCode == LEFT) {
    PJx= PJx-velocidad;
  } else if (keyCode == RIGHT) {
    PJx= PJx+velocidad;
  }
  if (PJx < -width/10) {
    PJx = width;
  } else if (PJx > width + width/10) {
    PJx = -width/10;
  }

  if (PJy < -height/10) {
    PJy = height;
  } else if (PJy > height + height/10) {
    PJy = -height/10;
  }
}

void mouseMoved(){
  
}
