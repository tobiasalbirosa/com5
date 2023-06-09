//ESTO EMPIEZA A SER IMPORTANTE
//COMENTAR EN LAS PRIMERAS LINEAS:
/*
COM 5
 NOMBRE Y LEGAJO
 LINK AL VIDEO EXPLICANDO EL CODIGO
 */
int ancho;
int alto;
int posX = 0;
int posY = 0;
int cantidadX = 10;
int cantidadY = 5;
color relleno = 255;
void setup() {
  ancho = width/cantidadX;
  alto = height/cantidadY;

  size(800, 400);
}
void draw() {
  background(0);
  //iteraciones

  for (int i = 0; i  < cantidadX; i++) {

    for (int j = 0; j  < cantidadY; j++) {
      if(mouseX > i * ancho && mouseX < i * ancho + ancho
      && mouseY > j * alto && mouseY < j * alto + alto){
        fill(0);
      }else{
        fill(255);
      }
      rect(ancho * i, alto * j, ancho, alto );
    }
  }
}
void mousePressed() {

  //  cantidad++;
}
void mouseMoved(){
 for (int i = 0; i  < cantidadX; i++) {

    for (int j = 0; j  < cantidadY; j++) {
      if(mouseX > i * ancho && mouseX < i * ancho + ancho
      && mouseY > j * alto && mouseY < j * alto + alto){
          relleno  = 0;
      }else{
        relleno = 255;
      }
    }
  }
}
