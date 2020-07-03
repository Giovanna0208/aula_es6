//criar variável e separar por colchetes
const arr = [1, 2, 3, 'numbers', 'and', 'strings'];

//instânciar um array com new
const arr1 = new Array(1, 2, 3, 'numbers', 'and', 'strings');

//array.of cria nova instância de array a 
//partir do número de parâmetros informados
const arr2 = Array.of(1, 2, 3, 'numbers', 'and', 'strings');

//Array cria instância de array de acordo com
//os parâmetros informados
const arr3 = Array(4); //cria um array com n posições vazias
const arr4 = Array(1, 2, 3, 'numbers', 'and', 'strings');

//Array.from cria uma nova instância de array a 
//partir de um parâmetro array-like ou iterable object
const divs = document.querySelectorAll('div');
const arr5 = Array.from(divs);