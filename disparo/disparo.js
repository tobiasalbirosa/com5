//LOGICA DE DISPAROS CON JS
//USAREMOS pop() y slice()
//PARA CONTROLAR EL ARREGLO DE PROYECTILES

//ESTAS SON LAS VARIABLES A USAR, LAS DESCRIBIREMOS
let disparar // PARA SABER SI ESTOY APRETANDO O NO LA TECLA ESPACIO
  let recarga = true // PARA SABER SI EL ARMA ESTA "CARGADA"
  let cuenta // CUENTA PARA EL TIEMPO ENTRE LOS PROYECTILES
  let balasY = [] // ARREGLO PARA TODAS LAS Y's DE BALAS
  //SI QUEREMOS PODEMOS ARREGLAR MAS VARIABLES PARA COMBINAR CON EL ARREGLO Y EL FOR,
  //POR EJEMPLO  let balasX = [], let balasTamanio = [], let balasColor = []

  function setup() {
  createCanvas(windowWidth, windowHeight)
    background(120)

    //ASIGANMOS EL PRIMER VALOR EN Y
    // YA QUE COMENZAMOS CON "recarga" EN TRUE, POR ENDE SE PUEDE DISPARAR
    for (let i = 0; i < balasY.length; i++) {
    balasY[i]= windowHeight
  }
}


function draw() {
  //LAMAMOS A NUESTRAS FUNCIONES
  funciones()
}

function keyPressed() {
  //SI PRESIONAMOS ESPACIO, DISPARAR ES 'true'
  if (key == " ") {
    disparar = true
  }
}

function keyReleased() {
  //CUANDOS SOLTAMOS ESPACIO, DISPARAR ES 'false'
  if (key == " ") {
    disparar = false
  }
}
