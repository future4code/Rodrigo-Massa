// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
/*1.a) O teste verifica se o valor digitado é divisível ou não por 2.
b) Qualquer valor par, pois qualquer número par é divisível por 2 sem deixar resto.
c) Números ímpares não passariam, por não serem divisíveis por 2.*/

/*2.a) O código faz a verificação do preço de cada fruta de acordo com o digitado no prompt.
b) O console irá imprimir "O preço da fruta Maça é R$2.25".
c) O console imprimiria o valor solicitado, pois a solicitação do console.log não trará os outros valores
do switch case, mesmo que o código execute completamente.*/

/*3.a) A primeira linha solicita o dado para a variável via prompt ao usuário.
b) Se o usuário digitar 10, o console trará o aviso configurado no if, "Esse número passou no teste". Se o
usuário digitar -10, o console não retornará nada além do erro da variável mensagem.
c) O console irá apresentar um erro indicando que a "mensagem" não foi definida, pois a mesma foi declarada
dentro do bloco, mas não é acessível de fora do bloco.*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
/* 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode 
dirigir (apenas maiores de idade).

a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.*/
// b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
const idadeUsuario = Number(prompt("Qual a sua idade?"))

/*c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima 
no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."*/

if(idadeUsuario >= 18) {
    console.log("Parabéns, você já pode dirigir!")
} else {
    console.log("Ops, você ainda é muito novo!")
}

/*2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) 
ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". 
Utilize o bloco if/else.*/
const turnoDia = prompt("Você estuda de manhã, tarde ou noite? Responda com M (Matutino), V (Vespertino) ou N (Noturno).").toLowerCase()

if (turnoDia === "m") {
    console.log("Bom dia!")
} else if (turnoDia === "v") {
    console.log("Boa tarde!")
} else if (turnoDia === "n") {
    console.log("Boa noite!")
} else {
    console.log("Digite um valor dentro dos indicados. M (Matutino), V (Vespertino) ou N (Noturno).")
}

// 3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.
const turnoDia = prompt("Você estuda de manhã, tarde ou noite? Responda com M (Matutino), V (Vespertino) ou N (Noturno).").toLowerCase()

switch (turnoDia) {
    case "m":
        console.log("Bom dia!")
        break
    case "v":
        console.log("Boa tarde!")
        break
    case "n":
        console.log("Boa noite!")
        break
    default:
        console.log("Digite um valor dentro dos indicados. M (Matutino), V (Vespertino) ou N (Noturno).")
        break
}

/*4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme 
com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta 
ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique 
se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", 
caso contrário, imprima "Escolha outro filme :("*/
const generoFilme = prompt("Qual o gênero do filme que você vai assistir?").toLowerCase()
const precoIngresso = Number(prompt("Qual o preço do ingresso para a sessão?"))

if (generoFilme === "fantasia" && precoIngresso < 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}

// DESAFIOS
/*1.Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", 
pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima 
no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário 
colocou no input.*/
const generoFilme = prompt("Qual o gênero do filme que você vai assistir?").toLowerCase()
const precoIngresso = Number(prompt("Qual o preço do ingresso para a sessão?"))
const lanchinho = prompt("Qual lanchinho você vai comprar para acompanhar o filme?")

if (generoFilme === "fantasia" && precoIngresso < 15) {
    console.log(`Bom filme! Aproveite seu/sua ${lanchinho}!`)
} else {
    console.log("Escolha outro filme :(")
}

/*2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. 
Para esta compra, o usuário deve fornecer algumas informações:*/
// - Nome completo;
// - Tipo de jogo: IN indica internacional; e DO indica doméstico;
// - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
// - Categoria: pode ser as opções 1, 2, 3 ou 4;
// - Quantidade de ingressos;

/*O seu sistema deve solicitar estas informações ao usuário, através do prompt . Além disso, ele deve 
imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou 
    seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores 
    de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é 
    o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar 
        o dólar = R$4,10)*/

/*---Dados da compra--- 
Nome do cliente:  Soter Padua 
Tipo do jogo:  Nacional 
Etapa do jogo:  Final 
Categoria:  1 
Quantidade de Ingressos:  10 ingressos 
---Valores--- 
Valor do ingresso:  R$ 1980
Valor total:  R$ 19800*/

// DADOS INGRESSOS
// const nomeCompleto = prompt("Qual o seu nome completo?")
// const tipoJogo = prompt("Qual tipo de jogo você irá assistir? Digite IN para Internacional, ou DO para Doméstico.").toLowerCase()
// const etapaJogo = prompt("Qual etapa você irá assistir? Digite SF para Semi-final, DT para Terceiro Lugar ou FI para Final.").toLowerCase()
// const categoriaIngresso = Number(prompt("Qual a categoria do seu ingresso? 1, 2, 3 ou 4?"))
// const quantidadeIngressos = Number(prompt("Quantos ingressos você comprou?"))