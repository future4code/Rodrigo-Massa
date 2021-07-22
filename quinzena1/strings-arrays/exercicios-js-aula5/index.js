// EXERCÍCIOS DE INTERPRETAÇÃO

/* Exercício 1:
a. Retornará como undefined, pois a array não foi declarada.
b. Retornará o valor "null".
c. Irá retornar o valor 11, que é o tamanho da array (posições 0 a 10).
d. Irá retornar o valor da posição 0 da array, que é 3.
e. Irá retornar a array completa, mas substituirá o valor da posição 1 por 19.
f. Irá retornar o valor da posição 6 da array, que é 9.*/

/*Exercício 2:
O console irá imprimir: SUBI NUM ÔNIBUS EM MIRROCOS 27*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// Exercício 1:
const usuario = prompt("Digite seu nome")
const emailUsuario = prompt("Digite seu email")

console.log(`O email ${emailUsuario} foi cadastrado com sucesso. Seja bem-vindo(a), ${usuario}!`)

// Exercício 2:
const comidasFavoritas = [ "Pizza", "Hamburguer", "Churrasco", "Sushi", "Feijoada" ]

// a. Imprima na tela o array completo:
console.log(comidasFavoritas)

// b.Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma 
//das comidas, uma embaixo da outra:
console.log(`Essas são as minhas comidas preferidas:
    ${[comidasFavoritas[0]]},
    ${[comidasFavoritas[1]]},
    ${[comidasFavoritas[2]]},
    ${[comidasFavoritas[3]]},
    ${[comidasFavoritas[4]]}.`)

// c.Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da 
//sua lista pela inserida pelo usuário. Imprima na tela a nova lista:
let i = 0
comidasFavoritas[i+1] = prompt("Qual a sua comida favorita?")
console.log(comidasFavoritas)

// Exercício 3:
// a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
const listaDeTarefas = [ ]

// b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, 
// no array
listaDeTarefas.push(prompt("Diga uma tarefa do seu dia."))
listaDeTarefas.push(prompt("Diga mais uma tarefa do seu dia."))
listaDeTarefas.push(prompt("Diga uma última tarefa do seu dia."))

// c) Imprima o array na tela
console.log(listaDeTarefas)

// d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
tarefaRealizada = prompt("Digite o número da tarefa que você já terminou hoje.")

// e) Remova da lista o item de índice que o usuário escolheu.
listaDeTarefas.splice(tarefaRealizada -1, 1)

// f) Imprima o array na tela
console.log(listaDeTarefas)

//DESAFIOS
// 1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da 
// frase, ignorando os espaços:
const frase = prompt("Digite uma frase")
const fraseArray = frase.split(" ", )

console.log(fraseArray)

// 2. Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], faça um 
// programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array:
const frutas = [ "Banana", "Morango", "Abacaxi", "Laranja", "Ameixa" ]

// FAZENDO A BUSCA DIRETA PELO CÓDIGO
const busca = frutas.indexOf("Abacaxi")

console.log(`O Abacaxi está na posição ${busca} do índice, que possui ${frutas.length} elementos.`)

// FAZENDO A BUSCA PELO PROMPT
// const posicao = [ ]
// const busca = prompt("Digite o nome de uma fruta.")

// let index = frutas.indexOf(busca)
// while (index != -1) {
//     posicao.push(index)
//     index = frutas.indexOf(busca, index + 1)
// }

// console.log(`A fruta ${busca} está na posição ${posicao} da lista, que possui ${frutas.length} posições.`)