// Também podemos criar o nosso próprio For Each

// Usamos o prototype para que o método fique como nativo para os arrays, e também porque o THIS será o próprio array de Array.prototype
Array.prototype.forEach2 = function (callback){
    for (let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(elemento,indice){
    console.log(`${indice} => ${elemento}`)
})

