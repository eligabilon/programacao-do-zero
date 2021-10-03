var frutas = ["Maçã", "Banana"]; //defino o array

console.log(frutas.length); // conto qtos registro tenho no array

var ultimo = frutas[frutas.length - 100]; // faço a subtração e pego a posição e imprimo o valor

console.log(ultimo);

var adicionarPrimeiro = frutas.unshift("Morango"); //adicionar na primeira posição do array

console.log(frutas);

var adicionar = frutas.push("Laranja"); //adicionar em última posição no array

console.log(frutas);

var primeiro = frutas.shift(); //remover a primeira posição do array

var ultimo = frutas.pop(); //remover a última posição do array

var posicao = frutas.indexOf("Banana"); //retorna a posição do item do array

console.log(posicao);

var removerPosicao = frutas.splice(posicao, 1); //remove a posição que foi passada como parametro

var frutasCopia = frutas.slice(); //copiar um array para um novo array
