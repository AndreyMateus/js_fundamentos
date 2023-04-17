let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

// Transformando para BOOLEANO através da NEGAÇÃO
// Ele pegará o 0 e fará um PARSE para o BOOL, assim o 0 se transformará em FALSE, e a mesma coisa serve para o número 1, onde ele será true
// Porém ele já irá transformar o VALOR e JÁ APLICARÁ a NEGAÇÃO, ou seja: o 0 é considerado FALSE, porém já terá seu VALOR NEGADO e se TORNARÁ TRUE
isAtivo = 0
console.log(!isAtivo)

// Após transformar em um TIPO BOOL, podemos TROCAR o valor do TIPO BOOLEANO através da NEGAÇÃO
// Pegando o valor TRUE e transformando em FALSE
console.log(!!isAtivo)

// Negações que RESULTARÃO em TRUE
console.log('Verdadeiros')
// Tod@s os números INTEIROS são consideraods TRUE, com EXCEÇÃO DO '0'
console.log(!!3)
console.log(!!-1)
console.log(!!' ') // ' ' -> string não vazia
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) // Ele vai pegar o VALOR PASSADO, e não se a tribuição deu certo

// Negações que RESULTARÃO em FALSE
console.log('os falsos')
console.log(!!0)
console.log(!!'') // '' -> strinb vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false)) // Ele vai pegar o VALOR PASSADO, e não se a tribuição deu certo

console.log('para finalizar')
console.log(!!('' || null || 0 || ' '))

let nome = ''
console.log(nome || 'Desconhecido')

nome = 'Lucas'
console.log(nome || 'Desconhecido')
