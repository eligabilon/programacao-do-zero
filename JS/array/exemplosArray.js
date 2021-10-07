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
