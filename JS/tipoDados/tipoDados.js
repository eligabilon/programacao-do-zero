var nome = "Eli"; //string
var idade = 33; //integer
var altura = 1.78; //float / double
var vivo = true; //boolean
var fome = null; //null
var time = undefined; //undefined -> linguagem javascript
              //  0       1           2         3           4
var frutas = ['maçã', 'melão', 'melancia', 'morango', 'goiaba'];
          //  0       1     2      3      4      5    6
var tudo = [frutas, nome, idade, altura, vivo, fome, time];
//console.log(tudo[0][5]);

var pessoa = {
  altura: 1.79,
  calcado: 42,
  cor_cabelo: 'Preto',
  familia: true,
  peso: 150.99,
  cor_olho: 'Castanho'
}


var cidade = {
  populacao: 800000,
  nome: 'Ubenlândia',
  estado: 'MG'
}

var endereco = {
  rua: 'Paulo de Abreu',
  numero: 456,
  bairro: 'União',
  cep: 7909000,
  cidade: cidade
}

var clientes = {
  name: nome,
  age: idade,
  heith: altura,
  life: vivo,
  hangry: fome,
  player: time,
  fruta: frutas,
  endereco: endereco
} 

/console.log(clientes)



/*
if (vivo === true) {
  console.log("blabla");
}

var sobrenome = 'Gabilon';

console.log(sobrenome.toLocaleUpperCase());

var sobrenome1 = "Gabilon Fernandes";

console.log(sobrenome1.startsWith('G'));

if(sobrenome1.startsWith('G')){
  console.log(sobrenome1.toLocaleUpperCase())
}

var code = "dfkjsf-3243-32-fdj2-kkk";

console.log(code.toLocaleUpperCase().replaceAll('-', ''))
*/
var cidade = {
  populacao: 800000,
  nome: "Ubenlândia",
  estado: "MG",
};

var endereco = {
  rua: "Paulo de Abreu",
  numero: 456,
  bairro: "União",
  cep: 7909000,
  cidade: cidade,
};

var enderecoSocio = {
  rua: "Paulo de Caetano",
  numero: 4565,
  bairro: "Centro",
  cep: 7909054,
  cidade: cidade,
};

var socio = {
  nome: "sdfs",
  idade: 23,
  endereco: enderecoSocio,
};

var autorizadora = {
  cnpj: '32132131321321',
  razao_social: 'Visa',
  socio: socio,
  endereco: endereco
}

var cartao = {
  numero: '34234 234234 234234 23424',
  cvc: 234,
  validade: '03/24',
  autorizadora: autorizadora
}

var cliente = {
  nome: 'sdafasdf',
  cartao: cartao,
}

//console.log(cliente.cartao.autorizadora.socio.endereco.cidade.nome);


var objeto = {} 
           //   0           1           2
var arrayy = [cidade, endereco, enderecoSocio]

console.log(arrayy[1].cep);