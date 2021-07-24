//criar um programa para calcula a média do aluno = ok

//um aluno tem 4 provas - ok
//formula para calcular a média: (prova1+prova2+prova3+prova4)/4 - ok
//vamos colocar o nome do aluno - ok

//se o aluno tirou igual ou mais que 7 = APROVADO - ok

//se o aluno tirou 5 ou menor que 7 ele está de = EXAME -ok
//todos que tiraram menos que 5 estão = REPROVADOS

var nome = prompt("Digite o nome do aluno");
var prova1 = prompt("Digite a nota da prova 1");
var prova2 = prompt("Digite a nota da prova 2");
var prova3 = prompt("Digite a nota da prova 3");
var prova4 = prompt("Digite a nota da prova 4");

var media = (parseFloat(prova1) + parseFloat(prova2) + parseFloat(prova3) + parseFloat(prova4)) / 4;

alert(media);

if (media >= 7) {
  alert("O aluno " + nome + " foi APROVADO.");
} else if (media >= 5 && media < 7) {
  alert("O aluno " + nome + " foi EXAME.");
} else {
  alert("O aluno " + nome + " foi REPROVADO.");
}