//Criar um array de objetos(nomes) contendo:
//Nome; Sobrenome; Idade; Sexo; Nacionalidade
//interagir com while pela quantidade de posições do array
//printar o nome e sobrenome de todos no array
//somar as idades e fazer uma media aritmetica
//substituir as letras 'E' por '3'
//concatene o sexo e a nacionalidade sem usar +

var cliente1 = {
    nome:'Antonio',
        sobrenome :'Da Mata',
            idade:74,
                    sexo:'Masculino',
                        nacionalidade:'Paraguaio'
};

var cliente2 = {
    nome:'Mirtes',
            sobrenome :'Correa',
                idade:35,
                    sexo:'Mulher',
                        nacionalidade: 'Haitiana'
};

var cliente3 = {
        nome:'Euclides',
            sobrenome :'Da Mata Correa',
                idade:22,
                    sexo:'Indefinido',
                        nacionalidade: 'Sirio Libanes',
};


var clientes = [cliente1, cliente2, cliente3];
var nomesgeral = clientes
// Printar nome e sobrenome
console.log(`${'O nome do 1º cliente é'}`,`${clientes[0].nome};`,`${'E seu sobrenome é '}`,clientes[0].sobrenome);


console.log(`${'O nome do 2º cliente é'}`,`${clientes[1].nome.replace('e','3')};`,`${'E seu sobrenome é '}`,clientes[1].sobrenome.replace('e','3'));


console.log(`${'O nome do 3º cliente é'}`,`${clientes[2].nome.replace('e','3').replace('E','3')};`,`${'E seu sobrenome é '}`,clientes[2].sobrenome.replace('e','3'));

// Média aritmética 
var mediaA = ((clientes[0].idade + clientes[1].idade + clientes[2].idade)/3)

console.log('A media aritmetica das idades é: ' + parseInt(mediaA))

// Sexo e Nacionalidade contatenados 
    console.log (`${'Sexo e nacionalidade do cliente 1: '}`,`${clientes[0].sexo}`, clientes[0].nacionalidade)
        console.log (`${'Sexo e nacionalidade do cliente 2: '}`,`${clientes[1].sexo}`, clientes[1].nacionalidade)
    console.log (`${'Sexo e nacionalidade do cliente 3: '}`,`${clientes[2].sexo}`, clientes[2].nacionalidade)


/*while(nomesgeral==clientes){


    if(clientes[0].nome == 'Julio')
    console.log("O nome do cliente esta errado")

    else if(clientes[1].nome == 'Mirtes')
    console.log('O nome deste cliente esta errado')

    else if(clientes[2].nome == 'Carlos')
    console.log('Este clientes esta errado')

    else {
        console.log("nenhum cliente esta com o nome correto")
    }
}*/



var B = 'Bruno'
var C = 'Carlos'

console.log('Made by ', `${B}`, `${'&'}`, `${C}`);