const array1 = ['1','2','3','4','5']
console.log(array1)


// o MAP serve para criar uma cópia de do ARRAY original, e assim possamos modificá-lo, para que não modifiquemos o array original.
const array2 = array1.map(function(e){
    return e * 2
})
console.log(array2)

// o método você passa para o MAP, deve sempre ter um RETORNO
const somarDez = e => e + 10
const resultado = array1.map(somarDez)
console.log(resultado)


// também posso usar vários MAPS seguidos
const triplo = e => e * 10
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`
console.log(array1.map(triplo).map(paraDinheiro))
