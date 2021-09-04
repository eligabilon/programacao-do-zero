var zipCodeField = document.querySelector("#app form input");
var submitButton = document.querySelector("#app form button");
var content = document.querySelector("#app main");

submitButton.addEventListener("click", run);

function run(event) {
  event.preventDefault();

  var zipCode = zipCodeField.value;
  zipCode = zipCode.trim();
  zipCode = zipCode.replace(" ", "");
  zipCode = zipCode.replace(".", "");

  axios
    .get(`https://viacep.com.br/ws/${zipCode}/json/`)
    .then(function (response) {
      content.innerHTML = "";

      if (response.data.erro) {          
        createLine("Cep Inválido");
        return;
      }

      createLine("Rua: " + response.data.logradouro);
      createLine("Bairro: " + response.data.bairro);
      createLine("Cidade: " + response.data.localidade);
      createLine("Estado: " + response.data.uf);
      createLine("DDD: " + response.data.ddd);
    })
    .catch(function (erro) {
        content.innerHTML = "";
        console.log(erro);
        createLine("Digite um CEP válido");
    });
}

function createLine(text) {
  var line = document.createElement("p");
  var text = document.createTextNode(text);
  line.appendChild(text);
  content.appendChild(line);
}
