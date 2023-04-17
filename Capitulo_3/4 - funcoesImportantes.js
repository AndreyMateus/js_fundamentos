const obj = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}
// OBS: Lembre-se que OBJ é uma coleção de CHAVE: VALOR

// Pegando TODAS as CHAVES do OBJETO
console.log(Object.keys(obj))

// Pegando TODOS os VALORES do OBJETO
console.log(Object.values(obj))

// Pegando a CHAVE e o VALOR junto, é importante lembrar que ele gera um SUB ARRAY contendo o VALOR em um ÍNDICE e a CHAVE em OUTRO ÍNDICE
console.log(Object.entries(obj))

Object.defineProperties()
