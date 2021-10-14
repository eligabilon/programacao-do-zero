var a = ""; //usado para mostrar na tela div 'screen' o que foi digitado
var b = "";
var num = []; //usado para guardar todos os valores digitados

function sendChar(digit) { //função que recebe o que foi digitado no html
  num.push(digit); //coloco valores dentro do meu array

  if (num.length != 1) { //caso a qtd seja diferente de 1 limpo a minha var 'a'
    a = "";
    document.getElementById("screen").innerHTML = a; //limpo a minha div
  }

  for (i = 0; i < num.length; i++) { //faço um for para pegar todos os itens do meu array
    a = a + num[i]; //pego item a item e coloco na variavel 'a'
  }

  document.getElementById("screen").innerHTML = a; //imprimo na tela div 'screen' o valor de 'a', no caso o que foi digitado
}

function equalTo() { //função que calcula o que foi digitado
  document.getElementById("screen").innerHTML = '';

  b = '';
  
  for (i = 0; i < num.length; i++) {
    b =b + num[i];    
  }

  var ans = eval(b)

  document.getElementById("screen").innerHTML = ans;

  while(num.length > 0){
    num.pop();
  }
  
  num.push(ans.toString()); //TODO - RESOLVER BUG
}

function clearAC() { //função que limpa os valores apresentados na div 'screen'
  document.getElementById("screen").innerHTML = "";

    while (num.length > 0) {
      num.pop();
    }

    a = '';
    b = '';
}