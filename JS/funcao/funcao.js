//funções q não tem *return* são chamadas de VOID
var num1 = 2;
var num2 = 3;
var num3 = 4;
var num4 = 5;
var num5 = 8;
var num6 = 21;

console.log(soma(num1, num2));
console.log(soma(num3, num4));
console.log(soma(num5, num6));

console.log(subtracao(num1, num2));
console.log(subtracao(num3, num4));
console.log(subtracao(num5, num6));

console.log(divisao(num6, num2))

function soma(numero1, numero2) {
    return numero1 + numero2;
}

function subtracao(numero1, numero2){
    return numero1 - numero2;
}

function divisao(numero1, numero2){
    return numero1 / numero2;
}

console.log(qualquerCoisa('Eli Gabilon')[1])

function qualquerCoisa(nome){
    return nome.split(' ')
}

console.log(concatenar(' programação ', ' do zero '))

function concatenar(texto1, texto2){
    return `${texto1}${texto2}`.replaceAll(' ', '');
}

var aparelhos = ['celular', 'calculadora', 'tv', 'monitor', 'microondas']

insere(aparelhos, 'notebook')
insere(aparelhos, 'controle')
console.log(aparelhos);

function insere(array, valor) {
    var ret = array.push(valor)
    return ret;
}