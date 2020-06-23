(() => {
    let test = 'example';

    console.log(`valor dentro da função: ${test}`);

    if(true) {
        let test = 'example if'
        console.log(`valor dentro do if: ${test}`);
    }

    console.log(`valor após a execução do if: ${test}`);
})()