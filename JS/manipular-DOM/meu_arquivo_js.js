// Captura o evento load da página
window.onload = function () {
  // Localiza o elemento com id id_p
  var p = document.getElementById("id_p");

  // Localiza os elementos a (links) dentro do p
  var links = p.getElementsByTagName("a");

  // Alerta o atributo href do primeiro link
  alert(links[0].href);

  ////////////////////////////////////////////////////////////////

  // Localiza os elementos p
  var p = document.getElementsByTagName("p");

  // Altera o background do primeiro elemento da coleção [0]
  p[0].style.backgroundColor = "red";

  ////////////////////////////////////////////////////////////////

  // Localiza os elementos com o nome imagem
  var img = document.getElementsByName("imagem");

  // Altera o src do primeiro elemento da coleção [0]
  img.item(0).src = "http://bit.ly/1udSyQN";

  ////////////////////////////////////////////////////////////////

  // Laço para percorrer as imagens
  for (var i = 0; i < img.length; i++) {
    // Altera a url de todas as imagens
    img[i].src = "./img/cadeira.jpg";
  }

  ////////////////////////////////////////////////////////////////

  // Localiza um elemento com o id #id_imagem
  var img = document.querySelector("#id_imagem");

  // Altera o src do elemento
  img.src = "./img/banco.jpg";

  ////////////////////////////////////////////////////////////////

  // Localiza os elementos com a classe .classe_imagem
  var img = document.querySelectorAll(".classe_imagem");

  // Altera o src do primeiro elemento da coleção [0]
  img[0].src = "./img/banco.jpg";

  ////////////////////////////////////////////////////////////////

  // Método para localizar um objeto
  var p = document.getElementsByTagName("p");

  // Alterando a propriedade innerHTML
  p.item(0).innerHTML = "Todo o HTML de p será substituído!";

  ////////////////////////////////////////////////////////////////

  // Seleciona a div do documento
  var a_div = document.getElementById("a-div");

  // Altera o valor do primeiro nó de a-div (set)
  a_div.childNodes[0].nodeValue = "Mamma mia!";

  ////////////////////////////////////////////////////////////////

  // Seleciona a div do documento
  var a_div = document.getElementById("a-div");

  // Altera a largura da DIV
  a_div.style.width = "500px";

  // Altera a altura da DIV
  a_div.style.height = "500px";

  // Altera a cor de fundo da DIV
  a_div.style.background = "red";
};
