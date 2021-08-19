// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
/*1. O código irá imprimir todos os dados do array. Primeiramente os dados de nome e apelido, e por final o
array completo.*/

/*2. O código irá imprimir apenas os nomes do array.*/

/*3. O código irá imprimir qualquer apelido, exceto o apelido "Chijo".*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

// a) Crie um novo array que contenha apenas o nome dos doguinhos
function extrairNome(objeto) {
    return objeto.nome
}

const nomesPets = pets.map(extrairNome)
console.log(nomesPets)

// b) Crie um novo array apenas com os cachorros salsicha
function extrairRacaSalsicha(objeto) {
    return objeto.raca === "Salsicha"
}

const petsSalsicha = pets.filter(extrairRacaSalsicha)
console.log(petsSalsicha)

/*c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem
deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"*/
const poodles = pets.filter((pet) => {
    if (pet.raca === "Poodle")
    return pet
})

function chamadaTosa (pet) {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`
}

const fraseTosa = poodles.map(chamadaTosa)
console.log(fraseTosa)


/*2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as 
funções de array map e filter:*/
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// a) Crie um novo array que contenha apenas o nome de cada item
const arrayNomes = produtos.map(extrairNome)
console.log(arrayNomes)

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto 
// em todos eles
const produtosComDesconto = produtos.map(function (item) {
    return { 
            nome: item.nome,
            preco: (item.preco * 0.05 - item.preco) * -1}
})

console.log(produtosComDesconto)

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
function extrairBebidas(objeto) {
    return objeto.categoria === "Bebidas"
}

const arrayBebidas = produtos.filter(extrairBebidas)
console.log(arrayBebidas)

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
const produtosYpe = produtos.filter((produto) => {
    if (produto.nome.includes("Ypê") === true)
        return produto
})

console.log(produtosYpe)

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases 
// apenas dos itens cujo nome contenha a palavra "Ypê"
function gerarFrase(produto) {
    return `Compre ${produto.nome} por ${produto.preco}.`
}

const arrayFrases = produtosYpe.map(gerarFrase)
console.log(arrayFrases)