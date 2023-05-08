// CAMBIO DE PANTALLAS
//LOGICA DE ESTADOS

String pantalla;
//int pantalla;
float posXDelBoton, posYDelBoton, tamBoton;
float posXDelBotonRect, posYDelBotonRect, tamBotonRect;


float posXDelTexto, posYDelTexto;

color colorDelBoton;
color colorDelBotonRect;

color colorDelTexto;

boolean presionable, presionable2;

int contador;

void setup() {
  size(640, 480);
  pantalla = "ultima";
  textSize(24);
  textAlign(LEFT);

  posXDelBoton = 200;
  posYDelBoton = 200;
  tamBoton = 150;

  posXDelBotonRect = 200;
  posYDelBotonRect = 200;
  tamBotonRect = 150;

  colorDelBoton = 255;
  colorDelBotonRect = 255;
  colorDelTexto = 0;

  posXDelTexto = posXDelBoton - 50;
  posYDelTexto = posYDelBoton;
}

void draw() {
  strokeWeight(1);
  if (pantalla == "inicio") {
    contador++;
    background(255, 255, 0);
    line(posXDelBoton, posYDelBoton, mouseX, mouseY);
    fill(colorDelBoton);
    circle(posXDelBoton, posYDelBoton, tamBoton);
    fill(colorDelTexto);
    text("Ir a principal", posXDelTexto, posYDelTexto);
    if (contador >= 250) {
      contador = 0;
      pantalla = "principal";
    }
  } else if (pantalla == "principal") {
    contador++;
    background(0);
    fill(colorDelBotonRect);
    rect(posXDelBotonRect, posYDelBotonRect, tamBotonRect, tamBotonRect*0.3);
    if (contador >= 250) {
      contador = 0;
      pantalla = "secundaria";
    }
  } else if (pantalla == "secundaria") {
    /*
    etc etc
     */
    contador++;

    println(contador);
    background(255, 127, 0);
    if (contador >= 250) {
      contador = 0;
      pantalla = "ultima";
    }
  } else if (pantalla == "ultima") {

    contador++;

    if (frameCount % 2 == 0) {
      strokeWeight( random(12));

      // line(0, 0, random(width), random(height));
      fill(0);
      stroke(0, 0, random(127, 255));
      strokeWeight( random(120));
      point(random(width), random(height));
    }

    fill(120, 255, 120, 1);
    strokeWeight(0);
    rect(0, 0, width, height);
    if (mousePressed || keyPressed) {
      contador = 0;
      pantalla = "inicio";
    }
    if (contador >= 1000) {
      contador = 0;
      pantalla = "inicio";
    }
  }
}

void mouseMoved() {
  if (pantalla.equals("inicio")) {

    if (dist(posXDelBoton, posYDelBoton, mouseX, mouseY)
      < tamBoton/2) {
      colorDelBoton = color(255, 0, 0);
      presionable = true;
    } else {
      colorDelBoton = 255;
      presionable = false;
    }
  } else if (pantalla.equals("principal")) {
    if (mouseX > posXDelBotonRect &&
      mouseX < posXDelBotonRect + tamBotonRect &&
      mouseY > posYDelBotonRect &&
      mouseY < posYDelBotonRect + tamBotonRect * 0.3) {
      colorDelBotonRect = color(255, 127, 0);
      presionable2 = true;
      println("RECTANGULO");
    } else {
      colorDelBotonRect = 255;
      presionable2 = false;
      println(" ");
    }
  }
}

void mousePressed() {

  if (pantalla.equals("inicio")) {
    if (presionable == true) {
      colorDelBoton = 255;
      pantalla = "principal";
    }
  } else if (pantalla.equals("principal")) {

    if (presionable2 == true) {
      pantalla = "secundaria";
    }
  }
}
