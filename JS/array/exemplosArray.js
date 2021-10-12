const items = [
	{name: "pizza", 	price: 100 },
	{name: "churrasco", price: 87  },
	{name: "arroz", 	price: 150 },
	{name: "ovo", 		price: 500 },
	{name: "lasanha", 	price: 10  },
	{name: "bolo", 		price: 50  },
]

const filteredItems = items.filter((item) => { //filtrando valores
	return item.price <= 100
})

console.log(items)
console.log(filteredItems)


const itemNames = items.map((item) => { //manipular um array, no nosso estamos add um atributo locate
	return { name: item.name, price: item.price, locate: 'pt_BR'}
})

console.log(itemNames)


const foundItem = items.find((item) => { //buscando uma palavra dentro do array
	return item.name === 'eli'
})
console.log(foundItem)


items.forEach((item) => { //iterando valores do array
	console.log(item.name)
})


const hasInexpensiveItems = items.some((item) => { //verifica se existe algum item passado como referência
	return item.price <= 100
})

console.log(hasInexpensiveItems)


const hasItems = items.every((item) => { //valida se TODOS os itens são menores do que 100 no nosso caso
	return item.price <= 100
})

console.log(hasItems)



const total = items.reduce((currentTotal, item) => { //reduce o valor a um total no nosso caso, faz a soma de todos os valores
	return item.price + curentTotal
}, 0)

console.log(total)



const numbers = [1, 2, 3, 4, 5]

const includesTwo = numbers.includes(2) // valida se o 2 está incluido no array

console.log(includesTwo)


const numeros = [5, 12, 30, 10, 99, 4];

const multiMap = numeros.map(function(valor) { //trabalhando com map, multiplicando valores
	return valor * 2;
})

console.log(multiMap);



const multiReduce = numeros.reduce(function(acumulador, valorAtual) { // usando o reduce para trabalhar com array
	acumulador.push(valorAtual * 2);
	return acumulador;
}, []);

console.log(multiReduce);



const multi2Reduce = numeros.reduce(function(acumulador, valorAtual) { // usando o reduce spread para trabalhar com array	
	return [...acumulador, valorAtual * 2];
}, []);

console.log(multi2Reduce);



function ordenar (a, b){
    return a - b;
}

console.log(numeros.sort(ordenar)); //ordenar em ordem crescente

numeros.reverse(); //inverter um array



var textos = ['b', 'z', 'a', 'd', 'q', 'e'];

textos.sort(); //ordenando textos

textos.forEach(element => {
  console.log(element)
});



let a = [1, 2, 3, 4, 4, 5, 7, 1, 0, 0, 10];

let b = new Set(a); //remove itens duplicados do array

console.log(b);