              // 0         1      2      3       4       5        6       7    
var carros = ['fusca', 'corsa', 'bmw', 'audi', 's10', 'ranger', 'gol', 'hilux']
var carros2 = ['carroça', 'carro de boi', 'carro de chinês']

var posicao = carros.indexOf('audi') // busco por indice
carros.splice(posicao, 1) // remove uma posição do meu array

carros.push("brasilia"); // insere a *brasilia* na última posição do meu array


console.log("Meu carro: " + carros.filter("corsa"));

console.log(carros);

carros.pop()

console.log(carros);



