// o fato da linguagem NÃO SER TIPADA, não significa que a linguagem NÃO TENHA TIPOS, apenas que a MESMA variável possa trocar seu TIPO, imagine o DYNAMIC no C#

let qualquer = 'Legal'
console.log(qualquer)
// aqui é um TIPO
console.log(typeof qualquer)

qualquer = 2

// aqui já é OUTRO TIPO
console.log(typeof qualquer)
