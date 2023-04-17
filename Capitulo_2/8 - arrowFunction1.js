// A arrow function tem duas funcionalidades, ENCURTAR o tamanho da função, E fazer com que o THIS NÃO VARIE, irá continuar APONTANDO para o OBJETO de quando ELE foi USADO/CRIADO.

let dobro = function (a) {
  return 2 * a
}

dobro = (a) => {
  return 2 * a
}

dobro = (a) => 2 * a // return ímplicito
console.log(dobro(Math.PI))

let ola = function () {
  return 'Olá'
}

ola = () => 'Olá'
