//slice retorna novo array 'fatiando' 
//o array de acordo com o inicio e fim
const comidas = ['melancia', 'banana', 'manga', 'pera', 'chocolate', 'pudim'];

const frutas = comidas.slice(0, 4)
const doces = comidas.slice(-2)

console.log('frutas:', frutas);
console.log('doces:', doces);