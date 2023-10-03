class App {

  constructor() {

    this.fondoSonoro = loadSound('assets/fondoSonoro.wav')
  }

  actualizar() {
   // background(0)
      

   


    if (!this.fondoSonoro.isPlaying()) {

      this.fondoSonoro.play()
    } else {
        //print( this.fondoSonoro.getPeaks())

        background(this.fondoSonoro.getPan()*255, 20)

      rect(mouseX, mouseY, 20, height)

        this.fondoSonoro.setVolume(map(mouseY, 0, height, 1, 0))
        this.fondoSonoro.pan(map(mouseX, 0, width, -1, 1))
    }
  }
}
