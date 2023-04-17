//
let comparaComThis = function (param) {
  console.log(this === param)
}

comparaComThis(global)

// o This de uma função Arrow, NÃO SOFRE VARIÁÇÃO, ele sempre apontará para o mesmo objet/propriedade de QUANDO ele foi CHAMADO/USADO

const obj = {}

comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // comparando o objeto GLOBAL
comparaComThis(obj) // comparando com o próprio objeto

//
comparaComThis = (param) => console.log(this === param)
comparaComThis(global)
comparaComThis(module.exports)

// nem usando o BIND, você consegue mudar para onde o THIS APONTA
comparaComThis = comparaComThis.bind(obj)
comparaComThis(obj)
console.log(module.exports)
