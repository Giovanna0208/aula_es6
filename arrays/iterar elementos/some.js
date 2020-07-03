//some retorna um booleano verificando se pelo 
//menos um item de um array satisfaz a condição
const num = [1, 3, 5, 7, 9];
const some = num.some(value => value % 3 === 0);
const some2 = num.some(value => value % 2 === 0);

console.log(some);
console.log(some2);