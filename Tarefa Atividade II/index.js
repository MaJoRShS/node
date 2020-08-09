const calc = require("./myModule/functionsMath");


// a) 1 + 1
// b) -123 + 123123
// c) 8 * 0
// d) 1239123 * 12313
// e) 123 / -12
// f) 313123 / 0

console.log("Resposta do Calculo A",calc.add(1,1));
console.log("Resposta do Calculo B",calc.add(-123,123123));
console.log("Resposta do Calculo C",calc.multi(8,0));
console.log("Resposta do Calculo D",calc.multi(1239123,12313));
console.log("Resposta do Calculo E",calc.div(123,-12));
console.log("Resposta do Calculo F",calc.div(313123,0));