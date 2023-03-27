//COMENTARIOS
/*
Tobías Albirosa
 COM 5
 TP 0
 */

color colorDeFondo = color(0, 200, 200);
int cuadrosPorSegundo = 60;

void setup() {

  colorMode(HSB);
  size(720, 480);
  background(colorDeFondo);
  frameRate(cuadrosPorSegundo);
}

void draw() {

  background(colorDeFondo);
  
  circle(60, 120, 20);
  circle(120, 120, 80);
  
  rect(300, 200, 50, 100);

  line(0,0,width, height);
  line(width,0, 0, height);

}
