/*
VARIABLES
 
 Podríamos suponer que la "vida"
 de una variable conlleva 3 instancias:
 
 1 - DECLARACION
 2 - ASIGNACION
 3 - UTILIZACION Y/O MODIFICACION
 
 
 */

//CONTAMOS CON DIFERENTES TIPOS DE VARIABLES

//NUMERICAS (ENTEROS Y FLOTANTES)

int variableEntera;
int otraVariableEntera;
int resultado;

float variableFlotante;
float otraVariableFlotante;
float velocidad;
float posicionInicialEnX;
float posicionDelTextEnX;
float posicionDelText2EnX;

// CADENAS DE TEXTO
String variableDeTexto;
String otraVariableDeTexto;
String resultadoDeTexto;


//VARIABLES DE COLOR
color colorDeFondo;

//VARIABLES DE TIPO DE TEXTO
PFont miFuente;
PFont miFuente2;

//VARIABLES DE IMAGEN
PImage variableImagen;

//VARIABLES BOOLEANAS

boolean texto2Avanza = true;
float texto2AvanzaFloat = 1;

void setup() {

  size(800, 800);

  variableEntera = 70;
  otraVariableEntera = 15;


  variableFlotante = 70;
  otraVariableFlotante = 15;
  resultado = 2;
  posicionInicialEnX = width;
  posicionDelTextEnX = posicionInicialEnX;
  posicionDelText2EnX = -width;


  variableDeTexto = "Hola soy un texto. ";
  otraVariableDeTexto = "Chau soy otro texto";

  resultadoDeTexto = resultado + variableDeTexto + otraVariableDeTexto;

  colorDeFondo = color(255, 255, 255);

  velocidad = 5;

  // ESTO ES CON LA HERRAMIENTA DE PROCESSING
  miFuente = loadFont("fuentes/Apple-Chancery-72.vlw");

  // ESTO ES CON UNA FUENTE QUE DESCARGUE DE INTERNET
  miFuente2 = createFont("fuentes/varsity_regular.ttf", 72);


  //IMAGEN

  variableImagen = loadImage("imagenes/imagen.png");

  noCursor();
}

void draw() {

  // println(int(variableFlotante / otraVariableFlotante));
  // println(resultadoDeTexto);
  background(colorDeFondo);
  fill(0);
  posicionDelTextEnX = posicionDelTextEnX - velocidad;


  if (texto2AvanzaFloat == 1) {

    posicionDelText2EnX = posicionDelText2EnX + velocidad;
    println(posicionDelText2EnX);
    if (posicionDelText2EnX >= width) {
      texto2AvanzaFloat = 0;
    }
  } else if (texto2AvanzaFloat == 0) {
    posicionDelText2EnX = posicionDelText2EnX - velocidad;

    if (posicionDelText2EnX <= -width) {
      texto2AvanzaFloat = 1;
    }
  }

  textFont(miFuente);
  text(variableDeTexto, posicionDelTextEnX, height/2);
  textFont(miFuente2);
  fill(0, posicionDelText2EnX, 0 );

  text(otraVariableDeTexto, posicionDelText2EnX, height/3);
  text("Texto Variable", 0, 50);
  image(variableImagen, mouseX, mouseY, 40, 40);
}
