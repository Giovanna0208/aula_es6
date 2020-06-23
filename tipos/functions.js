function fn() {
    return 'Code here';
};

const arrowfn = () => 'Code here';
const arrowfn2 = () => {
    //mais de uma expressão
    return 'code here';
};

//funções são objetos
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

//receber parâmetros
const logvalue = value => console.log(value);
const logfnresult = fnparam => console.log(fnparam());

logfnresult(fn);

function controlfnexec(fnparam) {
    return function(allowed) {
        if (allowed) {
            fnparam();
        }
    }
};