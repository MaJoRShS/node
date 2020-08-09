function add(n1 ,n2){
    const result = n1 + n2;
    return "O valor da Soma é : " + result;
}

function sub(n1 ,n2){
    const result = n1 - n2;
    return "O valor da Subtração é : " + result;
}

function multi(n1 ,n2){
    const result = n1 * n2;
    return "O valor da Multiplicação é : " + result;
}

function div(n1 ,n2){
    const result = n1 / n2;
    return "O valor da Divisão é : " + result;
}

module.exports = {
    add : add,
    sub : sub,
    multi : multi,
    div : div,

}