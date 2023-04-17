// Array de objetos JSON
const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

// Criando a callback que será chamada pelo map personalizado
// OBS: esse será o método que será executado para cada elemento do array
const funcNum = function (json){
    let obj = JSON.parse(json)
    return obj.preco
}

// Criando o Map personalizado
Array.prototype.map2 = function (callback){
    const newArray = []

    for (let i = 0; i < this.length; i++){
        newArray.push(callback(this[i]))
    }
   return newArray
}

// Armazenando e exibindo
const result = carrinho.map2(funcNum)
console.log(result)
