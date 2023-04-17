const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}
// Acessando a "CLASSE" pai do Objeto, o .__proto__ é o BASE do C#
// um objeto só tem a propriedade .__proto__
// já uma função tem a propriedade prototype
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)

console.log(Object.prototype.__proto__)

function MeuObjeto() {
}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)

