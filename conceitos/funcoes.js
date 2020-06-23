function getName() {
    return 'Giovanna';    
}

function logfn(fn) {
    console.log(fn());    
}

const logfnresult = logfn;
logfnresult(getName)