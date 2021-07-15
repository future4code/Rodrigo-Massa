//Exercícios de Interpretação de Código
/*Pergunta 1:
console.log(b) -> irá apresentar o valor 10 (number).
console.log(a, b) -> irá apresentar os resultados 10 e 5 (já que a variável b foi
    declarada novamente.)*/

/*Pergunta 2:
Todos as variáveis apresentarão o valor 10. Como as variáveis são declaradas novamente,
elas assumem o valor da variável indicada. Como b irá ter seu valor alterado antes de a = b, ela
terá o valor 10 na hora da execução.*/

/*Pergunta 3:
Melhores nomes para variáveis seriam:
horasTrabalhoDia
salarioDia*/

//Exercícios de Escrita de Código

//Exercício 1:
let nome
let idade

console.log(typeof nome)
console.log(typeof idade)
// //Ambas retornam como undefined, pois o tipo de variável (String, number, etc) não foi indicado.

nome = prompt("Qual o seu nome?")
idade = Number(prompt("Qual a sua idade?"))

console.log(typeof nome)
console.log(typeof idade)
// /*Agora que o tipo foi definido, nome retornou como String, e idade como Number (devido a sintaxe
//     utilizada, mas poderia ter voltado como String caso Number() não tivesse sido utilizado.)*/

console.log("Olá", nome, ", você tem", idade, "anos.")

//Exercício 2:
const roupaSocial = true
const relogio = false
const tenis = false

console.log("Você está usando terno?", roupaSocial)
console.log("Você está usando relógio também?", relogio)
console.log("Você não está de tênis, está?", tenis)

//Exercício 3:
let a = 10
let b = 25
let c

c = a
a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

//DESAFIO
const primeiroNumero = Number(prompt("Digite algum número."))
const segundoNumero = Number(prompt("Agora some a outro número"))

let x = primeiroNumero + segundoNumero
let y = primeiroNumero * segundoNumero

console.log("A soma dos valores é igual a", x)
console.log("A multiplicação dos valores é igual a", y)

/*Para não utilizar outras duas variáveis (x e y), o resultado também pode ser solicitado direto
na impressão, conforme exemplo abaixo.*/

console.log("A soma dos valores é igual a", primeiroNumero + segundoNumero)
console.log("A multiplicação dos valores é igual a", primeiroNumero * segundoNumero)