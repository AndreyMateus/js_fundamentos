// ARRAYS em JS são OBJETOS, NÃO EXISTE O TIPO ARRAY EM JS, o OBJETO apenas se COMPORTA como um.
// OBS: Mesmo o array NÃO TENDO CHAVES, ele é um OBJETO.

console.log(typeof Array, typeof new Array(), typeof [])

// Criando um array
const aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

// Criando um array com NOTAÇÃO literal
const aprovados2 = ['Bia','Carlos', 'Ana']
console.log(aprovados2)

// cuidado com o DELETE, pois ele APAGA o VALOR do ÍNDICE, mas NÃO APAGA O ÍNDICE
// ou seja: ela não reordena o array, só remove o dado, então o índice ficará lá, mas VAZIO
delete aprovados[0]
console.log(aprovados)


// A função SPLICE serve também para EXCLUIR ITENS em um ÍNDICE quanto para ADICIONAR ITENS em um ÍNDICE

// Removendo baseado no índice
aprovados.splice(1,1)
console.log(aprovados)

// Adicionando baseado no índice
aprovados.splice(1,0,'Elemento1')
console.log(aprovados)

// Removendo e após a REMOÇÃO, ADICIONANDO baseado no índice
aprovados.splice(1,1, 'Elemento1','Elemento2')
console.log(aprovados)
