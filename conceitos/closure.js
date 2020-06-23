function init() {
    const exemplo = 'essa variável';

    return function() {
        console.log('1 - o valor da variável exemplo é: ', exemplo);

        return function() {
            console.log('2 - o valor da variável exemplo é: ', exemplo);

            return function() {
                console.log('1 - o valor da variável exemplo é: ', exemplo);
            }
        }
    }
}

init()()()();