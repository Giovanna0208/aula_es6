const num = [1, 2, 3, 4, 5, 6];

//flatMap retorna um novo array assim como a função
//map e retorna um flat de profundidade 1
console.log(num.flatMap(value => [value * 2]));
console.log(num.flatMap(value => [[value * 2]]));