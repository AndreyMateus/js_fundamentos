// Filtrando somente as PROPRIEDADES preco do array
const carrinho = [
    '{ "nome": "Borracha", "preco":3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}',
]

// vou converter o JSON para objeto
const paraObjeto = json => JSON.parse(json)

// após a conversão eu terei poder de manipulação das propriedades
const apenasPreco = produto => produto.preco

// Agora é só passar as funções callback para o map
const resultadoConvertido = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultadoConvertido)



