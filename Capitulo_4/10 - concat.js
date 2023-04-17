// o método concat mescla/junta arrays

const filhas = ['Ualeska', 'Cibalena']
const filhos = ['Uoxiton','Uesclei']

// juntando os array e armazenando na constante
const todos = filhas.concat(filhos)

// exibindo a constante que armaena a junção dos arrays
console.log(todos)

// também podemos acrescentar algumas coisas na hora
// OBS: vale lembrar que concat retira-rá escopos desnecessários
console.log([].concat( [1,2], [3,4], 5, [ [6, 7] ] ))