// criando uma FUNÇÃO que ESPERA um OBJETO como PARÂMETRO
function rand({ min, max }) {
  // Assim podemos ACESSAR os VALORES do OBJETO, SEM precisar da NOTAÇÃO PONTO "objeto.propriedade"
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

const obj = { min: 2, max: 10 }
// invocando a função e passando um OBJETO para ela
console.log(rand(obj))
