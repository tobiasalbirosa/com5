let textos = [] //ESTE ARREGLO CONTENE TODO EL ARCHIVO DE TEXTO
  let textoAGraficar = [] //ESTE ARREGLOS SERVIRA EN CASO DE QUE UN RENGLO DEBA CONTENR UN SALTO DE LINEA
  let altoDelTexto = 48 //ESTO ES EL TAMAÑO DEL TEXTO, ES IMPORTANTE
  let indice = 0 //ESTO REPRESENTARIA COMO LA "PANTALLA" EN LA QUE ESTAMOS
  //SERIA EL INDICE DE LA LINEA DE TEXTO QUE QUEREMOS GRAFICAR

  function preload() {
  textos = loadStrings('texto.txt') //CARGAMOS EL TEXTO QUE TIENE TODAS NUESTRAS LINEAS
}
function setup() {

  createCanvas(windowWidth, windowHeight)
    background(120)
    textSize(altoDelTexto) //IMPORTANTE TRABAJAR CON EL TAMAÑO DEL TEXTO
}

function draw() {

  background(255)
    //A la variable ´indice´ la modificamos con el click
    //hace referencia a la pantalla en la que estamos

    if (textos[indice].includes("/n") != -1) {
    //Si nuestro renglon contiene '/n', debemos generar el salto de línea
    //utilizando otro arreglo y un for anidado
    textoAGraficar = textos[indice].split("/n") //AQUI LE DECIMOS CON 'split'
      //QUE TRANSFORME A LA VARIABLE 'textoAGraficar' en un arreglo


      for (let j = 0; j < textoAGraficar.length; j++) {
      //EL MAXIMO DE j, será igual que la cantidad de ´/n´
      text(textoAGraficar[j], mouseX, mouseY + j * altoDelTexto)
        //*IMPORTANTE, sumamos la posición en X ´j * altoDelTexto´
        //por ende siempre que exista una /n, generaremos un salto
    }
  }
}

function mouseClicked() {

  indice++
    if (indice >= textos.length-1) {
      
    indice = 0
    
  }
}
