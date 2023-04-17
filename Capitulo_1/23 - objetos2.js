// Comparando OBJETO e FUNÇÃO
console.log(typeof Object) // Função

console.log(typeof new Object()) // Objeto - Instância da função

//------------------

// Por debaixo dos PANOS a CLASSE é uma FUNÇÃO, e será INTERPRETADA COMO UMA.
const Cliente = function () {}

console.log(typeof Cliente)

console.log(typeof new Cliente()) // Podemos ABSTRAIR os PARÊNTESES do CONSTRUTOR se quisermos.

//------------------

// Por debaixo dos PANOS a CLASSE é uma FUNÇÃO, e será INTERPRETADA COMO UMA
class Produto {} // ES 2015 (ES)

console.log(typeof Produto)

console.log(typeof new Produto()) // Podemos ABSTRAIR os PARÊNTESES do CONSTRUTOR se quisermos.
