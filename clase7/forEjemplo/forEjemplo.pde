//ESTO EMPIEZA A SER IMPORTANTE
//COMENTAR EN LAS PRIMERAS LINEAS:
/*
COM 5
 NOMBRE Y LEGAJO
 LINK AL VIDEO EXPLICANDO EL CODIGO
 */
int diametro;
int posX = 0;
int posY = 0;
int cantidad = 10;
void setup() {
  diametro = width/cantidad;
  size(800, 400);
}
void draw() {
  background(0);
  //iteraciones

  for (int i = 0; i  < cantidad; i++) {
    if(mouseX > posX + diametro * i
    && mouseX < posX + diametro * i + diametro){ 
      fill(0);
    } else{
      fill(255);
      }
    rect(posX + diametro * i, posY, diametro, height);
    circle(posX + diametro * i, posY, diametro);
  }
}
void mousePressed() {

  cantidad++;
  diametro = width/cantidad;
}
