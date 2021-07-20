//Exercícios de Interpretação
//1. a. - false
//b. - false
//c. - true
//d. - boolean

/*2. O código não contém Number(), que irá classificar os valores como numeros. Ao realizar a soma,
o programa simplesmente junta os números, mas não realiza a soma.*/

/*3. A solução ideal para o código anterior seria a utilização de Number() junto aos prompts, como
mostrado abaixo:

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)*/

//Exercícios de Escrita de Código
/*1.
a) Pergunte a idade do usuário
b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", 
seguido pela resposta (`true` ou `false`)
d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)*/

const idadeUsuario = Number(prompt("Me diga a sua idade"))
const idadeAmigo = Number(prompt("Me diga a idade do seu melhor amigo"))

let maisVelho = idadeUsuario > idadeAmigo
let diferencaIdade = idadeUsuario - idadeAmigo

console.log("Sua idade é maior que a do seu amigo?", maisVelho)
console.log("A diferença de idade entre vocês é de:", diferencaIdade, "anos.")

/*2. Faça um programa que:
a) Peça ao usuário que insira um número **par**
b) Imprima na console **o resto da divisão** desse número por 2.
c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário 
de código.
d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código.*/

const numeroPar = Number(prompt("Insira um número par"))
console.log("Resto:", numeroPar % 2)
//O resto da divisão por 2 sempre será 0, pois qualquer número par pode ser dividido igualmente por 2.
//Ao inserir um número ímpar, restará sempre o valor 1, independente do valor utilizado.

/*3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
a) A idade do usuário em meses;
b) A idade do usuário em dias;
c) A idade do usuário em horas;*/

let idadeUsuario = Number(prompt("Quantos anos você tem?"))

console.log("Idade em meses:", idadeUsuario * 12)
console.log("Idade em dias:", idadeUsuario * 365)

let horasAno = 24 * 365
console.log("Idade em horas:", idadeUsuario * horasAno)

/*4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e 
imprima no console as seguintes mensagens:
O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true*/

const numero1 = Number(prompt("Digite um número"))
const numero2 = Number(prompt("Digite outro número"))

console.log("O primeiro número é maior que o segundo?", numero1 > numero2)
console.log("O primeiro numero é igual ao segundo?", numero1 === numero2)
console.log("O primeiro número é divisível pelo segundo?", numero1 % numero2 === 0)
console.log("O segundo número é divisível pelo primeiro?", numero2 % numero1 === 0)