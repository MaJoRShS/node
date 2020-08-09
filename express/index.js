const express = require('express');
const app = express();
const port = 3000;


//Exemplo de um middleware customizado, aqui eu to criando um middleware que simplesmente vai apresentar uma mensagem no console sempre que uma chamada for feita para a aplicação.
const logMiddleware = function(req, res, next){
    console.log("API recebeu uma chamada.");
    //Uma coisa que não pode ser esquecida é o comando "next();" se não a aplicação não vai pra o próximo passo da execução do seu pipeline.
    next();
}

//Aqui ele ta fazendo com que a API devolva uma pagina estática sempre que ela for chamada.
app.use(express.static("./site"));

//Aqui é o código do middleware que vai logar todas as vezes que alguma chamada for feita para a aplicação.
app.use(logMiddleware);


//Essa aqui é uma outra forma de declarar uma função js , bem menos verbosa e mais simples, claro que para quem não manja ou nao ta acostumado pode ser estranho
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//Aqui eu ainda criei uma nova rota mesmo usando o get é possivel criar uma API rapidamente usando o ExpressJs
app.get('/pt', (req, res) => {
    res.send('Olá Mundo!');
  });


//Aqui é o método POST não tem diferença do GET, claro que na teoria o POST devolve mais dados, mais é tranquilo também de criar uma rota com outros verbos HTTP
// app.post('/post', (req, res) => {
//     res.send({status : "OK"});
//   });


//Esse cara aqui é o responsável por fazer tudo rodar e a magica acontecer sem ele não tem servidor ativado e não tem como fazer as requisições
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});