//if - else
//else if
//switch
//for
//while

const nome = "Joaninha";

/////////////////////////////////////////////if - else//////////////////////////////////
//1 - Joaninha quer sair de casa, ela so saira se estiver sol, MAS caso esteja chovendo ela pegara o guarda chuva da sua vo e vai p caso do tio dela.
let tempo = "Sol";
let pegarGuardaChuva = false;

if (tempo == "Sol"){
   // console.log(`${nome} vai sair de casa`);
}else {
    if(pegarGuardaChuva) {
       // return console.log(`${nome} vai para a casa do tio dela.`);    
    }
    //console.log(`${nome} vai ficar em casa.`);
}

/////////////////////////////////////////////else if//////////////////////////////////
//2 - Joaninha tem conta em 3 banco, ela pode logar somente em 1 conta por vez, itau, inter, c6

const login = "joaninha";
const senha = "nhaniajo";
const banco = "c66";

if (login == "joaninha" && senha == "nhaniajo" && banco == "itau") {
    console.log(`${nome} esta logado no ${banco}`);
} else if (login == "joaninha" && senha == "nhaniajo" && banco == "inter") {
    console.log(`${nome} esta logado no ${banco}`);
} else if (login == "joaninha" && senha == "nhaniajo" && banco == "c6") {
    console.log(`${nome} esta logado no ${banco}`);
} else {
    console.log(`${nome} NAO esta logado em nenhum banco.`);
}
