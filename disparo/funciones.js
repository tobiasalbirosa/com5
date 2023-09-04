function funciones() {
  //PINTAMOS EL FONDO Y LLAMAMOS A LA FUNCION DISPARO
  //ESTA FUNCION DISPARO, CONTROLARA LA LOGICA
  //DE NUESTROS PROYECTILES
  background(0)
    disparo()
}

function disparo() {

  if (disparar == true && recarga == true) {

    //SI PRESIONO Y ESTA RECARGADA EL ARMA,
    //AGREGO VALORES AL ARREGLO CON 'push'
    // arreglo.push(valor)
    balasY.push(windowHeight) //AQUI AGREGAMOS OTRA CASILLA AL ARREGLO
      // 'balasY' , con el valor que querramos para el proximo proyectil

      cuenta = 0 // reiniciamos cuenta de recarga
      recarga = false //le 'recarga' sea 'false', para que no se pueda volver a disparar
  }

  // HACEMOS FOR PARA ANIMAR TODAS LAS balas
  for (let i = 0; i < balasY.length; i++) {
    // 10, podria ser velocidad de la bala, en una variable
    balasY[i]-=   10

      //Si la bala ya cumple su trayectoria, con splice() borramos ese casillero

      if (balasY[i] <= 0) {
      // arreglo.splice('desde qué casillero' ,'cantidad de casilleros que quiero borrar')
      // borramos con splice desde ese casillero, sólo 1 casillero (osea el mismo)
      balasY.splice(i, 1)
    }
    
   //dibujamos con circle los proyectiles correspondientes
    circle(width/2, balasY[i], 20)
  }
  //Sumamos cuenta para poder volver a recargar 
  cuenta++
    if (cuenta >= 30) {
    recarga = true
  }
  // a modo de debug
  //imprimimos en consola la cantidad de balas existentes en nuetro arreglo
  print("Cantidad de balas:", balasY.length)
}
