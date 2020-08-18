function add(n1, n2) {
    const result = n1 + n2;
    return result;
}

function sub(n1, n2) {
    const result = n1 - n2;
    return result;
}

function multi(n1, n2) {
    const result = n1 * n2;
    return result;
}

function div(n1, n2) {
    const result = n1 / n2;
    return result;
}

module.exports = {
    add: add,
    sub: sub,
    multi: multi,
    div: div,
}