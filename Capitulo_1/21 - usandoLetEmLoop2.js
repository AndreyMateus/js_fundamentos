// criando um array
const funcs = []

// Adicionando uma função dentro dos índices do array
for (let i = 0; i < 10; i++) {
  funcs.push(function (){
    console.log(i)
  })
}

// invocando a função que está dentro do array, através do índice do array
funcs[2]()

// invocando OUTRA função que está dentro do array, através do índice do array
funcs[8]()
