var chave = prompt('Escolha uma opção do menu: \n 1 - Somar \n 2 - Dividir \n 3 - Multiplicar \n 4 - Sair');


while(chave !== 4){
    var num= chave

    if(num == 1){
        var num1 = prompt('Digite um número: ');
        var num2 = prompt('Digite outro número: ');
        alert(num1 + num2);
    } else if (num == 2){
        var num1 = prompt("Digite um número: ");
        var num2 = prompt("Digite outro número: ");
        alert(num1 / num2);
    } else if (num == 3){
        var num1 = prompt("Digite um número: ");
        var num2 = prompt("Digite outro número: ");
        alert(num1 * num2);
    } else {
        alert('Opção inválida.');
    }
}

