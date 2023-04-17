const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// callback é uma função que é chamada para cada elemento, o FOREACH nada mais faz do que ACEITAR uma CALLBACK como parâmetro e executá-la para cada índice da coleção que foi passada.

// AUTOMATICAMENTE o forEach pegará o INDICE e o PROPRIO elemento, caso você passe 2 parâmetros para representar esses valores, independente do nome que eles tenham, mas caso você passe só 1, ele pegará somente o ELEMENTO
// OBS: o FOREACH também aceita um 3 PARÂMETRO, que nada mais é do que PASSAR  o PRÓPRIO ARRAY
aprovados.forEach(function(elemento,indice){
    console.log(`${indice} => ${elemento}`)
})

// a mesma coisa, só que com uma expressão lambda
aprovados.forEach(elemento => console.log(elemento))


// também posso ARMAZENAR  a FUNÇÃO em uma VARIÁVEL e PASSAR para o FOREACH
const exibirAprovados = elemento => console.log(elemento)
aprovados.forEach(exibirAprovados)
