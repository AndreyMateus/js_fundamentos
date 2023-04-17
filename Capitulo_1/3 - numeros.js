// Tanto o TIPO INT como o DOUBLE, são considerados DOUBLE.

const peso1 = 1.0

// Criando um valor através da classe estática
const peso2 = Number('2.0')

console.log(peso1,peso2); 

// Verificando se o número é um INTEGER, um número que NÃO POSSUI FRAÇÃO.
// OBS: e o número possuir FRAÇÃO IGUAL A 0, será reconhecido como INT, EXEMPLO: 2.0, 15.0 e etc...
console.log(Number.isInteger(peso2)); // Dará true

const media = 7.871
// Fixando o número de casas decimais
console.log(media.toFixed(2)); // Passando o número de casas após a vírgula

// Exbibindo um valor em uma BASE diferente, nesse caso em BINÁRIO
console.log(media.toString(2));



