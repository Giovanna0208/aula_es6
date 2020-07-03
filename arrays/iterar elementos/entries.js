//entries retorna um array iterator que contém os
//pares chave/valor para cada elemento do array
const num = [1, 2, 3, 4, 5, 'hello'];
const arriterator = num.entries();

console.log(arriterator.next());
console.log(arriterator.next());
console.log(arriterator.next());
console.log(arriterator.next());
console.log(arriterator.next());
console.log(arriterator.next());
console.log(arriterator.next());