const http = require("http");
const express = require("express");
const { response } = require("express");
const { v4 } =require("uuid");
const app = express();

app.use(express.json());

//simulando um banco de dados com um array de obj
const todos = [
  {
    text: "Fazer compras",
    done: true,
    id: v4(),
    user:{
      name: "eli",
      password: "kj3ldk3==3k4",
      mail: "eligabilon@gmail.com"
    }
  },
  {
    text: "Levar o carro no mecânico",
    done: false,
    id: v4(),
  },
  {
    text: "Levar louça",
    done: false,
    id: v4(),
  },
];

//GET - Listar todos os registros
app.get("/todos", (request, response) =>{
console.log("GET-todos");
  return response.json(todos);
});

//GET - Listar um registro
app.get("/todos/:id", (request, response) => {
console.log("GET-único");

  const { id } = request.params

  const todoFind = todos.find((todo)=>{
    return todo.id === id
  })

  if (todoFind === undefined) {
    return response.json("Registro não encontrado.");
  }

  return response.json(todoFind);
});

//PUT - alterar/atualiza registros
app.put("/todos/:id", (request, response) => {
  console.log("PUT");
  const { id } = request.params;
  const { text, done } = request.body;

  const todoIndex = todos.findIndex((todo)=> todo.id === id);

console.log(todoIndex)

  if (todoIndex < 0) {
    return response.json("Registro não encontrado.");
  }

  todos[todoIndex] = { id, text, done };

  return response.json(todos[todoIndex]);
});

//POST - insere um registro
app.post("/todos", (request, response) => {
const { text, done } = request.body;

const todo = {id: v4(), text, done};

todos.push(todo);

return response.json(`Usuário inserido com sucesso. Com o id: ${todo.id}`);
});

//DELETE - remove um registro
app.delete("/todos/:id", (resquest, response) => {
  const { id } = resquest.params;

  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if(todoIndex < 0){
    return response.status(404).json("Registro não foi encontrado.")
  }

  todos.splice(todoIndex, 1);

  return response.status(204);
});


const port = 4040

http
.createServer(app)
.listen(port, () => console.log(`Servidor Rodando na porta ${port}`));