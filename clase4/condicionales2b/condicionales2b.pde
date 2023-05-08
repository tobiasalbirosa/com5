float PJPosX, PJPosY, tamPJX, tamPJY;
float obstaculoPX, obstaculoPY, diametro;
float velocidad;
float velocidadO;
PImage imagen0, imagen1;
int vidas = 3;
boolean colisionable = true;
int cuentaColision = 0;

int pantalla = 0;
void setup() {
  size(1080, 720);
  tamPJX = width/10;
  tamPJY = height/10;
  velocidad = 100;
  velocidadO = 100;
  obstaculoPX = width/2;
  rectMode(CENTER);
  diametro = tamPJX/2;
  imageMode(CENTER);
  imagen0 = loadImage("0.png");
  imagen1 = loadImage("1.png");
  textSize(72);
}

void draw() {

  if (vidas <= 0) {
    pantalla = 2;
    vidas = 3;
    PJPosX = 0;
    PJPosY = 0;
  }

  switch (pantalla) {
    case(0):
    background(0);

    if (mousePressed) {
      pantalla = 1;
    }

    text("Click para iniciar", width/2, height/2);
    break;

    case(1):


    background(0);


    if (dist(obstaculoPX, obstaculoPY, PJPosX, PJPosY) < diametro
      && colisionable) {
      image(imagen1, PJPosX, PJPosY, tamPJX, tamPJY);

      vidas--;
      colisionable = false;
    } else {
      image(imagen0, PJPosX, PJPosY, tamPJX, tamPJY);
    }
    //rect(PJPosX, PJPosY, tamPJX, tamPJY);

    fill(255, 0, 0);


    obstaculoPY+=velocidadO/10;
    if (obstaculoPY > height || obstaculoPY < 0) {
      //obstaculoPY = 0;
      //obstaculoPX = random(width);
      //velocidadO = velocidadO*-1;

      velocidadO *= -1;
    }
    circle(obstaculoPX, obstaculoPY, diametro);

    text("Vidas "+ vidas, 0, 72);
    if (!colisionable) {
      text("AUCH!!!", PJPosX, PJPosY);

      if (dist(obstaculoPX, obstaculoPY, PJPosX, PJPosY)  > diametro*3) {

        colisionable = true;
      }
    }

    break;

    case (2):
    background(0);

    text("PERDISTE! : (", width/2, height/2);
    break;

    case (3):
    background(0);

    text("GANASTE! : D", width/2, height/2);
    break;
  }

  text("Esto fue la \nclase de \n condicionales II\n "+ frameRate + "\n PFS", 0, 144);
}


void keyPressed() {
  //char =! String
  // println(key);
  //codigo numerico de la tecla
  //  println(keyCode);
  if (keyCode == UP) {
    PJPosY -= velocidad;
  } else if (keyCode == DOWN) {
    PJPosY += velocidad;
    //PJPosY = PJPosY + velocidad;
  } else if (keyCode == LEFT) {
    PJPosX -= velocidad;
  } else if (keyCode == RIGHT) {
    PJPosX += velocidad;
  }


  if (PJPosY < -tamPJY) {
    PJPosY = height;
  } else if (PJPosY > height) {
    PJPosY = -tamPJY;
  } else if (PJPosX < -tamPJX) {
    PJPosX = 0;
  } else if (PJPosX > width) {
    // PJPosX = -tamPJY;
    pantalla = 3;
    PJPosX = 0;
    PJPosY = 0;
    vidas = 3;
  }
}

void mouseClicked() {

  if (pantalla == 2) {
    pantalla = 0;
  }

  if (pantalla == 3) {
    pantalla = 0;
  }
}
