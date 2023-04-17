function Pessoa() {
  this.idade = 0

  // 1 - Exemplo : usando Bind para vincular a PROPRIEDADE IDADE a função ANÔNIMA, pois caso não tenhao bind, quando o SetInterval DISPARAR/EXECUTAR a função anônima, o contexto do THIS irá procurar a propriedade idade DENTRO do SetInterval.
  setInterval(
    function () {
      this.idade++
      console.log(this.idade)
    }.bind(this),
    1000,
  )
}

new Pessoa()

// Usando a GAMBIARRA DA CONST SELF

function Pessoa2() {
  this.idade = 0

  // 2 - Basicamente consiste em você armazenar a referência do THIS que vai APONTAR para o OBJETO/PROPRIEDADE no MOMENTO em que foi DECLARADO
  const self = this

  setInterval(function () {
    self.idade++
    console.log(self.idade)
  }, 1000)
}

new Pessoa2()
