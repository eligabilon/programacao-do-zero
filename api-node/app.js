const http = require("http");
const express = require("express");
const { response } = require("express");
const { v4 } = require("uuid");

const app = express();

app.use(express.json());

const users = [];

app.get("/users", (request, response) => {
  return response.json(users);
});

app.get("/users/:id", (request, response) => {
  const { id } = request.params;

  const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex < 0) {
      return response.status(404).json("Usuário não encontrado");
    }

    users[userIndex] = { id, name, email };

  return response.json({ id, name, email });
});

app.post("/users", (request, response) => {
  const { name, email } = request.body;

  const user = { id: v4(), name, email };

  users.push(user);

  return response.json(user);
});

app.put("/users/:id", (request, response) => {
  const { id } = request.params;
  const { name, email } = request.body;

  const userIndex = users.findIndex((user) => user.id === id );

  if (userIndex < 0) {
    return response.status(404).json("Usuário não encontrado");
  }

  users[userIndex] = { id, name, email };

  return response.json({ id, name, email });
});

app.delete("/users/:id", function (request, response) {
  const { id } = request.params;

  const userIndex = users.findIndex((user) => user.id === id );

  if (userIndex < 0) {
    return response.status(404).json("Usuário não encontrado");
  }

  users.splice(userIndex, 1)

  return response.status(204).send();
});

http
  .createServer(app)
  .listen(3232, () => console.log("Servidor rodando na porta 3232"));
