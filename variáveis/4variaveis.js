(() => {
    const test = 'example';

    console.log(`valor dentro da função: ${test}`);

    if(true) {
        const test = 'example if'
        console.log(`valor dentro do if: ${test}`);
    }

    console.log(`valor após a execução do if: ${test}`);
})()

//o valor do const é imutável
//só pode trocar as propriedades do objeto

const name = 'Giovanna';
//name = 'Other name';
//erro

const user = {
    name: 'Giovanna'
};
console.log(user);

user.name = 'Other name' 
console.log(user);