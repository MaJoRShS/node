const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const calc = require("./server/functionsMath");

const app = express();
app.use(express.static("./cliente"));

//Inicializa um servidor HTTP orquestrado pelo express
const server = http.createServer(app);

//Inicializa um instancia de servidor websocket a partir do servidor http
const wss = new WebSocket.Server({
  server
});


// Função responsável por manusear a conexão websocket
wss.on("connection", (ws) => {
  // Função que trata as mensagens recebidas pelo servidor
  ws.on("message", (message) => {
    console.log("Mensagem recebida: ", message);
    var rows = message.split('\n');
    var count = rows.length;

    // if (count === 0) {
    //   rows = message.split(' ');
    //   if (rows[1] === '+') {
    //     const result = calc.add(parseInt(rows[0]), parseInt(rows[2]));
    //     console.log(result);
    //     message = String(result);
    //   } else if (rows[1] === '-') {
    //     result = calc.sub(parseInt(rows[0]), parseInt(rows[2]));
    //     console.log(result);
    //     message = String(result);
    //   } else if (rows[1] === '*') {
    //     result = calc.multi(parseInt(rows[0]), parseInt(rows[2]));
    //     console.log(result);
    //     message = String(result);
    //   } else if (rows[1] === '/') {
    //     result = calc.div(parseInt(rows[0]), parseInt(rows[2]));
    //     console.log(result);
    //     message = String(result);
    //   }
    // } else {

    for (var row = 0; row = count; row++) {
      rows = message.split('\n');
      rows = message.split(' ');
      for (var field = 0; field = count; field++) {
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
        rows.shift();
      }
    }
    // }
    ws.send(message);
  });
});

//Inicia o servidor
server.listen(process.env.PORT || 9898, () => {
  console.log("Servidor conectado na porta:", server.address().port);
});