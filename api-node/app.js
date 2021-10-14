const http = require("http");
const express = require("express");
const { response } = require("express");
const { v4 } = require("uuid");
var cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());

const todos = [
  {
    text: "Fazer compra",
    done: true,
    id: v4(),
  },
];

app.get("/todos", (request, response) => {
  return response.json(todos);
});

app.get("/todos/:id", (request, response) => {
  const { id } = request.params;

  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex < 0) {
    return response.status(404).json("Usuário não encontrado");
  }

  todos[todoIndex] = { id, text, done };

  return response.json({ id, text, done });
});

app.post("/todos", (request, response) => {
  const { text, done } = request.body;

  const todo = { id: v4(), text, done };

  todos.push(todo);

  return response.json(todo);
});

app.put("/todos/:id", (request, response) => {
  const { id } = request.params;
  const { text, done } = request.body;

  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex < 0) {
    return response.status(404).json("Usuário não encontrado");
  }

  todos[todoIndex] = { id, text, done };

  return response.json({ id, text, done });
});

app.delete("/todos/:id", function (request, response) {
  const { id } = request.params;

  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex < 0) {
    return response.status(404).json("Usuário não encontrado");
  }

  todos.splice(todoIndex, 1);

  return response.status(204).send();
});

http
  .createServer(app)
  .listen(3232, () => console.log("Servidor rodando na porta 3232"));
