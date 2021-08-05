// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
/*1. O código está fazendo um laço for, onde enquanto ir for menor que 5 (indicado em "i < 5"), ele deverá 
acrescentar 1 ao valor de i (indicado em "i++""), e após isso deverá acrescentar o valor de i atual a variável
valor (indicado por "valor += i"). Ao final ele irá imprimir o console com o valor final de valor, que será
igual a 10.*/

/*2.a) O código irá imprimir os valores que sejam maiores que 18, conforme indicado no bloco if.
b) O for...of... também pode ser usado para imprimir o índice de um array, mas para isso é necessário indicar
que o dado desejado é o índice através do uso do "index.Of()". Um exemplo de aplicação pode ser visto no 
exercício "2.D" abaixo.*/

/*3. O resultado impresso seriam 4 asteriscos. O que o codigo faz é solicitar uma entrada de dados via
prompt ao usuário. O código então irá, no bloco while, comparar a entrada com a variável "quantidadeAtual" e,
enquanto "quantidadeTotal" for maior, irá executar o laço for, que irá acrescentar um asterisco a variável
"linha" enquanto "quantidadeAtual" for menor que "quantidadeTotal". Ao final de cada rotação do laço, o código
também irá acrescentar o valor 1 a "quantidadeAtual", representado por "quantidadeAtual++".*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
const quantidadePets = Number(prompt("Quantos bichinhos de estimação você tem?"))

// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
if (quantidadePets === 0) {
    console.log("Que pena! Você pode adotar um pet!")
} else if (quantidadePets > 0){ // b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
    let nomePets = []
    for (let pets = 0; pets < quantidadePets; pets++)
        nomePets.push(prompt("Digite o nome do seu pet!"))
        console.log(nomePets) // c) Por fim, imprima o array com os nomes dos bichinhos no console
}

// 2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de 
// números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//     a) Escreva um programa que **imprime** cada um dos valores do array original.
for (let arrayGeral of arrayOriginal) {
    console.log(arrayGeral)
}

//     b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
for (let arrayGeral of arrayOriginal) {
    console.log(arrayGeral / 10)
}

//     c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array 
//     original e **imprima** esse novo array
function imprimeArrayPar(array) {
    let arrayPar = []
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0)
        arrayPar.push(array[i])
    }
    return arrayPar
}
console.log(imprimeArrayPar(arrayOriginal))

// d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento 
// do índex `i` é: `numero`". Depois, **imprima** este novo array.

for (let valor of arrayOriginal) {
    let posicao = arrayOriginal.indexOf(valor)
    console.log(`O elemento do índex ${posicao + 1} é: ${valor}`)
}


//     e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
function retornaMaiorValorArray(array) {
    let maiorNumero = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i]
        }
    }
    return maiorNumero
}

function retornaMenorValorArray(array) {
    let menorNumero = 1000
    for (let i = 0; i < array.length; i++) {
        if (array[i] < menorNumero) {
            menorNumero = array[i]
        }
    }
    return menorNumero
}

console.log(`O maior número do array é ${retornaMaiorValorArray(arrayOriginal)} e o menor é ${retornaMenorValorArray(arrayOriginal)}.`)