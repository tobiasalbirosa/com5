class Estado {

  constructor() {
    this.estado = "Inicio"
  }

  obtenerEstado() {
    
    return this.estado
    
  }

  cambiarEstado(nuevoEstado) {
    
    print("Cambiando estado", nuevoEstado, this.estado)
    this.estado = nuevoEstado
  }
}
