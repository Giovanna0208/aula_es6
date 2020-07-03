//splice altera um array adicionando novos 
//elementos enquanto remove antigos
const comidas = ['melancia', 'banana', 'manga', 'pera', 'chocolate', 'pudim'];

const spliceremove = comidas.splice(0, 1);
console.log(spliceremove);
console.log(comidas);

//arr.splice(posição, remover, add)
const spliceadd = comidas.splice(3, 0, 'caqui');
console.log(spliceadd);
console.log(comidas);