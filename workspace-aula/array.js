/////////////////////////ARRAY/////////////////////////////////
                // 0          1         2       3      4   
const carros = ["fusca", "brasilia", "corsa", "s10", "gol"];

//console.log(carros);

const posicao = carros.indexOf("s10");

//console.log(posicao);

//console.log(carros.splice(posicao, 1)); 

//console.log(carros);

carros.push("chevete");

//console.log(carros);

//////////////////////////////////////////////////////////////

const cadeira = {
    tipo: "Plastico",
    estofado: "nao tem",
    cor: "Branco",
    tamanho: "1M",
    preco: 50
}

const cadeira1 = {
    tipo: "Madeira",
    estofado: "madeira",
    cor: "marrom",
    tamanho: "80M",
    preco:35
}

const cadeira2 = {
    tipo: "Madeira",
    estofado: "Espuma",
    cor: "Beje",
    tamanho: "1.10M",
    preco: 90
}

const cadeiras = [cadeira, cadeira1, cadeira2];

//console.log(cadeiras);

const filtrarPorPreco = cadeiras.filter((item) => {
    return item.tipo == "Plastico"
});

//console.log(filtrarPorPreco)
