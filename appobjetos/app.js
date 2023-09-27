class App {

  constructor(nombre) {
    //Las propiedades son variables
    //de la clase. las podemos llamar
    //como querramos
    this.nombre = nombre
      this.estado = new Estado()
      this.cursor = new Cursor()
      this.nombreDeEstado = this.estado.obtenerEstado()
  }
  //Los demás métodos que no son constructor
  //también los podemos llamar como querramos
  dibujar() {

    this.cursor.dibujar()

      print(this.nombreDeEstado)
  }

  mouseClicked() {
    print("Click")
    this.estado.cambiarEstado("Click")
    this.nombreDeEstado = this.estado.obtenerEstado()
  }

  keyPressed() {
    
    this.estado.cambiarEstado("Inicio")
    this.nombreDeEstado = this.estado.obtenerEstado()
      
  }
}
