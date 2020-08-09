//Modulo 01
const x = 1 + 1;

console.log("O valor de 1 + 1 é: ",x);

//Modulo 02
const fs = require("fs");

fs.mkdir("./testeModuloII",function(){
    console.log("Criei o Diretório : testeModuloII");
});

fs.writeFile("./testeModuloII/ArquivoViaCode.txt","Olá Mundo,\n Arquivo criado via Código com node.js",function(){
    console.log("Criei o Arquivo : ArquivoViaCode.txt");
});


fs.readFile("./testeModuloII/ArquivoViaCode.txt",function(error,data){
    if (error === null) {
        console.log("Conteúdo do Arquivo que foi recuperado :", data.toString());
    }else(
        console.log("Erro Gerado ao ler o Arquivo: ",error.toString())
    )
});


const calc = require("./myModule/functionsMath");

console.log(calc.add(6,8));
console.log(calc.sub(6,8));
console.log(calc.multi(6,8));
console.log(calc.div(6,8));