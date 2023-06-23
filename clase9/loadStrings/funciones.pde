void dibujarTexto(int renglon) {


  text(renglones[renglon], mouseX, mouseY);
}
void dibujarFondo (int imagen) {

  image(imagenes[imagen], 0, 0);
}

void mousePressed() {

  pantalla++;

  if (pantalla >= 3) {
    pantalla  = 0;
  }

  resultado = retornarValor();


}



int retornarValor () {
  if (frameCount % 2 == 0) {
    return  0;
  } else {
    return 1;
  }
}
