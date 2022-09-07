/////////////////////FUNCAO/////////////////////////////////

const somar = (valor1, valor2) => {
    return valor1 + valor2;
}

const subtrair = (num1, num2) => {
    return num1-num2;
}

const dividir = (num1, num2) => {
    return num1/num2;
}

const multiplicar = (num1, num2) => {
    return num1*num2;
}

const resto = (num1, num2) => {
    return num1%num2;
}

/*
console.log(dividir(55,804550), "Valor 1");
console.log(somar(58,8100), "Valor 2");
console.log(subtrair(551,2180), "Valor 3");
console.log(multiplicar(515,2280), "Valor 4");
console.log(somar(5215,280), "Valor 5");
console.log(resto(505,180), "Valor 6");
*/


const nomeParaArray = (param1, param2, param3, param4, param5) => {
    const nomes = [];
    nomes.push(param1,param2,param3, param4, param5);
    return nomes;
}

//console.log(nomeParaArray("Otavio", "Eli", "Liliane", "Natanael"), "Grupo de farofa");

//console.log(nomeParaArray("Luiz", "Elias", "Lili", "Bia", "Nata"), "Grupo de Melancia");

let animais = ["Leao", "Pechano"];

const semParametros = () => {
    animais.splice(animais.indexOf("Pechano") ,1);
    return animais;
}

//console.log(semParametros())

const login = (user, password) => {
    if (user == "Eli" && password == "Pechano"){
        return `Usuario logado com sucesso, ${user}`;        
    }
    return `Sai fora... ${user}`
}

function loginOld(user, password){
    if (user == "Eli" && password == "Pechano"){
        return `Usuario logado com sucesso, ${user}`;        
    }
    return `Sai fora... ${user}`
}

console.log(loginOld("Otavio", "blabla"));

console.log(login("Eli", "Pechano"));