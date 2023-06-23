//COMPARA VALORES DE MOUSE X CON LOS DE LA FIGURA EN CUESTIÓN
boolean sobreCuadro (float mX, float x, float ancho) {
  if (mX > x && mX < x + ancho) {
    return true;
  } else {
    return false;
  }
}

void dibujar() {

  for (int i = 0; i < cantidad; i++) {
    dibujarImage(i);
  }
}

void dibujarImage(int indice) {

  if (sobreCuadro(mouseX, ancho *indice, ancho)) {
    colorDeCuadro =  color(255, 80);
    colorDeTexto = color(255, 255, 0);
  } else {
    colorDeCuadro =  color(0, 220);
    colorDeTexto = color(0);
  }
  image( imagenes[indice], indice * ancho, 0);

  fill(colorDeCuadro);
  rect(ancho*indice, 0, ancho, height);

  fill(colorDeTexto);
  text(textos[indice], ancho*indice, 48);
}
