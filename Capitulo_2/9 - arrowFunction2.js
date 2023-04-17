function Pessoa() {
  this.idade = 0

  // por ser uma ARROW FUNCTION, o THIS apontará SEMPRE para IDADE de PESSOA, pois o THIS da ARROW NÃO VARIA.
  setInterval(() => {
    this.idade++
    console.log(this.idade)
  }, 1000)
}

new Pessoa()
