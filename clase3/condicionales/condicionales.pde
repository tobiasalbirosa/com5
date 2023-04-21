int pantalla = 0;
int contador = 0;
int posicionXBoton = 200;
int posicionYBoton = 100;
int tamanioEnXBoton = 200;
int tamanioEnYBoton = 100;
color colorDeFondo = 0;
color colorDeTexto = 200;
color colorDeLineaDeBoton = 255;
color colorDeBoton = 255;
boolean botonOk  = false;
//PImage imagen1, imagen2, imagen3;
void setup() {

  size(640, 480);
  textSize(48);
  //imagen1 = loadImage(nombreDelArchivo1.ext);
  //imagen2 = loadImage(nombreDelArchivo2.ext);
  //imagen3 = loadImage(nombreDelArchivo3.ext);
}

void draw() {
  background(colorDeFondo);
  switch (pantalla) {
  case 0:
    //image(image1, 0,0);
    colorDeFondo = 0;
    contador++;
    println("Estado 0 ", contador);
    if (contador >= 500) {
      contador = 0;
      pantalla = 1;
    }
    //VALOR ALPHA
    fill(255, 0, 0, contador);

    text("HOLA TP1", width/2, height/2);

    break;
    ///////
  case 1:
    //image(image2, 0,0);
    colorDeFondo = 255;
    contador++;
    println("Estado 1 ", contador);
    if (contador >= 500) {
      contador = 0;
      pantalla = 2;
    }

    break;

  case 2:
    //image(imagen3,0,0);
    contador++;
    colorDeFondo = 127;
    stroke(colorDeLineaDeBoton);
    fill(colorDeBoton);
    rect(posicionXBoton, posicionYBoton, tamanioEnXBoton, tamanioEnYBoton);
    fill(colorDeTexto);
    text("Reiniciar", posicionXBoton + tamanioEnXBoton/12, posicionYBoton + tamanioEnYBoton / 2);
    println("Estado 2 ", contador);

    break;
  }
}

void mouseMoved() {

  if (mouseX > posicionXBoton && mouseX < posicionXBoton + tamanioEnXBoton
    && mouseY > posicionYBoton && mouseY < posicionYBoton + tamanioEnYBoton) {
    colorDeLineaDeBoton = color(0, 255, 0);
    colorDeBoton = color(255, 255, 0);
    colorDeTexto = color(0, 255, 255);
    botonOk = true;
  } else {
    colorDeLineaDeBoton  = 255;
    colorDeBoton = 255;
    colorDeTexto = 200;
    botonOk = false;
  }
}

void mouseClicked() {
  if (botonOk == true) {
    pantalla = 0;
  }
}
