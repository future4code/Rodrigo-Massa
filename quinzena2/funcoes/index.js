// EXERCÍCIOS DE INTERPRETAÇÃO
/*1.a) Serão impressos os valores 10 e 50, pois é uma função de multiplicação.
b) Sem o console.log, os valores não serão exibidos, pois eles não foram utilizados dentro da 
função.*/

/*2.a) Essa função servirá para transformar o texto inserido pelo usuário em minúsculas, e irá
procurar a palavra "cenoura" no texto, indicando se ela existe ou não por true ou false.
b) i.) true
   ii.) true
   iii.) false */

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

/*1. a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando 
algumas informações sobre você, como: 
```"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."```*/

function imprimeInfos() {
    console.log("Eu sou Rodrigo, tenho 32 anos, moro em São Paulo e sou estudante.")
}

imprimeInfos()

/*b) Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: 
o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve 
retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:
```Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].```*/

function imprimeNovasInfos(nome, idade, cidade, profissao) {
    console.log(`Eu sou ${nome}, tenho ${idade}, moro em ${cidade} e sou ${profissao}.`)
}

imprimeNovasInfos("Rodrigo", 32, "São Paulo", "estudante")

/*2. a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma 
das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.*/

function somaNumeros(numero1, numero2) {
    const soma = numero1 + numero2
    console.log(soma)
}

somaNumeros(2, 3)

/*b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número 
é **maior ou igual** ao segundo.*/

function maiorIgual(numero1, numero2) {
    const resultado = numero1 >= numero2
    console.log(resultado)
}

maiorIgual(5, 1)

// c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

function parOuImpar(numero) {
    const valor = numero % 2 === 0
    console.log(valor)
}

parOuImpar(3)

/*d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho 
dessa mensagem, juntamente com uma versão dela em letras maiúsculas.*/

function imprimeMensagem(mensagem) {
    const tamanho = mensagem.length
    const frase = mensagem.toUpperCase()
    console.log(tamanho, frase)
}

imprimeMensagem(prompt("Insira uma mensagem."))

/*3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores 
inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:*/
const firstNumber = Number(prompt("Insira um número."))
const secondNumber = Number(prompt("Insira outro número."))

function somaNumeros(numero1, numero2) {
    const soma = numero1 + numero2
    return soma
}
console.log(`Soma: ${somaNumeros(firstNumber, secondNumber)}`)

function subtraiNumeros(numero1, numero2) {
    const subtracao = numero1 - numero2
    return subtracao
}
console.log(`Subtração: ${subtraiNumeros(firstNumber, secondNumber)}`)

function multiplicaNumeros(numero1, numero2) {
    const multiplicacao = numero1 * numero2
    return multiplicacao
}
console.log(`Multiplicação: ${multiplicaNumeros(firstNumber, secondNumber)}`)

function divideNumeros(numero1, numero2) {
    const divisao = numero1 / numero2
    return divisao
}
console.log(`Divisão: ${divideNumeros(firstNumber, secondNumber)}`)

// DESAFIOS
/*1. Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez 
ao longo do código através de invocações/chamadas. Então, funções podem chamar/invocar outras funções 
também. Sua tarefa é escrever duas funções*/

// a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro.
const primeiroValor = (valor1) => {
    const resultado = valor1
    console.log(resultado)
}

/*b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** 
Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como 
entrada para imprimi-lo.*/
const somaValores = (valor2, valor3) => {
    const soma = valor2 + valor3
    return soma
}

primeiroValor(somaValores(7, 2))

/*2. Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o 
valor da hipotenusa. Retorne este valor, invoque a função e imprima o resultado no console.*/
const cateto1 = Number(prompt("Insira o valor do primeiro cateto."))
const cateto2 = Number(prompt("Insira o valor do segundo cateto."))

function valorHipotenusa(cateto1, cateto2) {
    const cateto1Quadrado = cateto1 * cateto1
    const cateto2Quadrado = cateto2 * cateto2
    const hipotenusa = (cateto1Quadrado + cateto2Quadrado)
    console.log(`O valor da hipotenusa é ${hipotenusa} = √(${cateto1}² + ${cateto2}²).`)
    // OU USANDO MATH.SQRT()
    console.log(`O valor da hipotenusa é ${Math.sqrt(hipotenusa)}² = ${cateto1}² + ${cateto2}².`)
}

valorHipotenusa(cateto1, cateto2)