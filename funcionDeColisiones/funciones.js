function juego(){
    dibujarRect(200,200,500,100)
    personaje()
}

function personaje(){
    circle(x,y,tam)
}

function dibujarRect(rectX,rectY,tamX, tamY){
  if(x + tam / 2 > rectX &&  x - tam / 2 < rectX + tamX
    && y + tam / 2 > rectY &&  y - tam / 2 < rectY + tamY){
    fill(255,0,0)
  } else {
    fill(255)
  }
  rect(rectX,rectY,tamX, tamY)
}
