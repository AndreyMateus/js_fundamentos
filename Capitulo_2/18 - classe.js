// uma CLASSE no JS é convertida para FUNÇÃO

// Então aqui equivale a mesma coisa que a FUNÇÃO CONTRUTORA
class Pessoa {
  constructor(nome) {
    this.nome = nome
  }
  falar() {
    console.log(`Meu nome é: ${this.nome}`)
  }
}

const p1 = new Pessoa('Andrey')
p1.falar()

//---------------------------

// função construtora
function Pessoa2(nome) {
  this.nome = nome

  this.falar = () => {
    console.log(`Meu nome é: ${this.nome}`)
  }
}

const pFunc = new Pessoa2('Andrey')
pFunc.falar()

//---------------------------

// AQUI o OBJETO NÃO PODERÁ SER MODIFICADO
// função factory
const criarPessoa = (nome) => {
  return
  {
    falar: () => {
      console.log(`Meu nome é ${nome}`)
    }
  }
}

const p2 = criarPessoa('João')
