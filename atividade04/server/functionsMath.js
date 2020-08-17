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

function string(message) {
    var count = message.length;
    for (let row = 0; row <= count; row++) {
        var rows = message[row].split(" ", 3);
        for (var field = 0; field <= count; field++) {
            if (rows[1] === '+') {
                const result = calc.add(parseInt(rows[0]), parseInt(rows[2]));
                console.log(result);
                message = String(result);
            } else if (rows[1] === '-') {
                result = calc.sub(parseInt(rows[0]), parseInt(rows[2]));
                console.log(result);
                message = String(result);
            } else if (rows[1] === '*') {
                result = calc.multi(parseInt(rows[0]), parseInt(rows[2]));
                console.log(result);
                message = String(result);
            } else if (rows[1] === '/') {
                result = calc.div(parseInt(rows[0]), parseInt(rows[2]));
                console.log(result);
                message = String(result);
            }
            // rows.shift();
        }
    }
}

module.exports = {
    add: add,
    sub: sub,
    multi: multi,
    div: div,
    string: string,

}