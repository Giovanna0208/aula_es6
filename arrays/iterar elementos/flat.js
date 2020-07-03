//flat retorna um novo array com todos os 
//elementos de um sub-array concatenados de forma
//recursiva de acordo com a profundidade expecificada
const num = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];

console.log(num);
console.log(num.flat());
console.log(num.flat(2));