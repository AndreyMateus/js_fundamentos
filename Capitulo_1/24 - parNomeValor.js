// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
  // por estarmos em contexto diferentes, não gerará conflito
  const saudacao = 'Falaaa' // contexto léxico 2
  return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  endereco: {
    logradouro: 'Rua muito legal',
    numero: 123,
  },
}

// Contexto 1
console.log(saudacao)

// Contexto 2
console.log(exec())
