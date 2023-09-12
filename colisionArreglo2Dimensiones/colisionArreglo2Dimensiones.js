//Ejemplo de arreglo de 2 dimensiones
//Primer dimension, necesitaremos 2 arreglos, uno para las X, y otro para las Y
let arregloX = []
let arregloY = []

//Tamaño de los objetivos
let tam

function setup() {

  tam = width/10
  createCanvas(900, 900)

  for (let i = 0; i < 3; i++) {
    //Debemos asignar previamente la 2da dimension
    arregloX[i] = []
    arregloY[i] = []


      for (let j = 0; j < 3; j++) {
        
      //Asignamos el valor a cada X y a cada Y
      
      arregloX[i][j] = i * width/3
      arregloY[i][j] = j * height/3
    
    }
  }
}


function draw() {

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (mouseX > arregloX[i][j] && mouseX < arregloX[i][j] + tam &&
      mouseY > arregloY[i][j] && mouseY < arregloY[i][j] + tam ) {
        fill(0)
      } else {
        fill(255)
      }
      rect(arregloX[i][j], arregloY[i][j], tam, tam)
    }
  }
}
