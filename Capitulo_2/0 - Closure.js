const array = []

for (var i = 0; i < 10; i++) {
  array.push(() => console.log(i))
}

for (let i in array) {
  // Pegará o Endereço de mrmória de onde o "i" está, em tempo real
  array[i]()
}
