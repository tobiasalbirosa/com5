//PRACTICA DE COORDENDAS POLARES
// CON MOUSEX REGULAMOS LA ROTACION
// CON MOUSEY REGULAMOS LA LONGITUD
let x, y, longitud, angulo, tam, centrar
  function setup() {
  createCanvas(200, 200)
    rectMode(CENTER)
    centrar = true
}
function draw() {
  
    background(80)

    tam = width/4
    if (centrar) {
    translate(width/2, height/2)
  }

  //-> ANGULO DE MI VECTOR DE A,B a C,D:
  // Necesitamos que vaya de 0 a 360 para pasarlo a radians
  angulo = int(map(mouseX, 0, width, 0, 360))

    //-> LONGITUD DE VECTOR DE A,B a C,D
    //Medirá la distancia entre el 0,0 y el x,y
    longitud = int(mouseY)

    //->Obtención de X e Y en coordenadas polares:
    //1 - Se toma el coseno de X, el coseno deY
    //2 - Se multiplica por la longitud deseada
    x = cos(radians(angulo)) * longitud
    y = sin(radians(angulo)) * longitud

    line(0, 0, x, y)
    text("Longitud: "+longitud + "px", x/2, y/2)
    push()

    translate(x, y)
    rotate(radians(angulo))

    rect(0, 0, tam, tam)
    pop()
    
    text("Angulo: º"+angulo,0,0)
}
function mouseClicked() {
  centrar =! centrar;
}
