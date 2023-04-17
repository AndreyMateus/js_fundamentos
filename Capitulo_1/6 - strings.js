const escola = 'Cod3r'

// Acessando um índice específico da STRING que é um array de caractere
// Porém aqui se tentarmos acessar um índice que não existe, será retornado UNDEFINED
console.log(escola[4])

// também poderíamos fazer assim:

// Já aqui se tentarmos acessar um índice que não existe, será retornado uma STRING VAZIA
console.log(escola.charAt(4))

// Pegando um valor BASEADO NA TABELA ASCII
console.log(escola.charCodeAt(3))

// Pegando o ÍNDICE do VALOR dentro da STRING
console.log(escola.indexOf(2))

// Pega todas as LETRAS de um índice até o outro índice
// OBS: ele não pega o ÚLTIMO ÍNDICE que foi dado como PONTO FINAL
console.log(escola.substring(2, 4)) // só pegará do índice 2 até o 3

// Concatenando/Juntando uma NOVA STRING em determinada STRING
console.log(escola.concat('!'))

// Também poderíamos fazer isso através de um valor LITERAL, valor que não foi armazenado em uma VARIÁVEL
console.log('Escola '.concat(escola).concat('!'))
// OU
console.log('Escola ' + escola + ' !')

// Substituindo um VALOR por OUTRO
// pegará o valor que vai estar no ÍNDICE passado, e substituirá pelo VALOR passado
console.log(escola.replace(0, 'A'))

// Transformando uma STRING em um ARRAY
// será transformado em um ARRAY através de um "SEPARADOR" que você pode definir, nesse casso a cada vírgula ele quebrará a string e colocará esse pedaço quebrado em uma nova string.
console.log('Ana,Maria,Pedro'.split(','))
