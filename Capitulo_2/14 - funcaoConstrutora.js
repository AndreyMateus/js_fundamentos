// Função seria uma CLASSE no C#
// Função CONSTRUTORA é um MOLDE dos OBJETOS
function Carro(velocidadeMaxima = 200, delta = 5) {
  // Se não colocar o THIS, a variável será privada por PADRÃO

  // atributo privado
  let velocidadeAtual = 0

  // método público
  this.acelerar = function () {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta
    } else {
      velocidadeAtual = velocidadeMaxima
    }

    // método público por causa do THIS
    this.getVelocidadeAtual = function () {
      return velocidadeAtual
    }
  }
}

const uno = new Carro()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
