const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/api/hello/:kk", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.status(200).send("Hello from the server!");
});

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  // Aqui você pode implementar a lógica de autenticação
  // Se o usuário e senha estiverem corretos, gera o token JWT e retorna para o cliente

  res.send({ token: "meu-token-jwt" });
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
