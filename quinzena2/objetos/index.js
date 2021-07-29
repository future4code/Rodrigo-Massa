// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
/* 1.a) console.log(filme.elenco[0]) - Irá imprimir a 1ª posição da array de elenco, nesse caso o nome
Matheus Nachtergaele.
console.log(filme.elenco[filme.elenco.length - 1]) - Irá imprimir a última posição do array, nesse caso o nome
Virginia Cavendish.
console.log(filme.transmissoesHoje[2]) - Irá imprimir os dados na posição 2 do array, que serão os dados
de transmissão na Globo, às 14h.*/

/*2.a) - console.log(cachorro) - Irá imprimir o objeto completo, com nome, idade e raça.
console.log(gato) - Irá imprimir o objeto completo, mas agora com o nome Juba (inserido pela const gato).
console.log(tartaruga) - Irá imprimir o objeto completo, mas com o nome Jubo, alterado na const tartaruga.

b) - Os três pontos - também chamado de spread - serve para fazer o espalhamento do objeto indicado, nesse
caso o objeto cachorro. Através dele, podemos espalhar os outros elementos do objeto para outros objetos (neste
caso, os objetos "gato" e "tartaruga"). Desse modo podemos alterar um ou mais elementos, trazendo também os
outros elementos.*/

/*3. a) - console.log(minhaFuncao(pessoa, "backender")) - Irá trazer o boolean do elemento backender, neste
caso sendo false.
console.log(minhaFuncao(pessoa, "altura")) - Irá voltar um valor "undefined".
b) - O valor false do primeiro console voltou correto, de acordo com o elemento do objeto.
     No caso do segundo console, o valor retornou como "undefined" pois não existe o elemento altura no objeto.
Para voltar outro resultado, o elemento precisaria ser incluído no objeto.*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
/*1.a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá 
    exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma 
    mensagem no modelo abaixo:
    
Exemplo de saída
"Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi".*/

const pessoa = {
    nome: "Raphael",
    apelidos: [ "Rapha", "Goiaba", "Goiabinha" ]
}

function saidaPessoal (pessoa) {
    console.log(`Eu sou o ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}.`)
}

saidaPessoal(pessoa)

// /*) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma 
// nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo 
// objeto.*/

const novaPessoa = {
    ...pessoa,
    apelidos: [ "Japa", "Garrincha", "Jalha" ]
}

saidaPessoal(novaPessoa)

/*2.a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.*/
const pessoa1 = {
    nome: "César",
    idade: 27,
    profissao: "Engenheiro"
}

const pessoa2 = {
    nome: "Caio",
    idade: 32,
    profissao: "Advogado"
}

// // b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
function arrayPessoas (pessoa1, pessoa2) {
    const pessoas = { ...pessoa1, ...pessoa2 }
    const arraySaida = [ pessoas.nome, pessoas.nome.length, pessoas.idade, pessoas.profissao,
                            pessoas.profissao.length ]
    console.log(arraySaida)
}

arrayPessoas(pessoa1)
arrayPessoas(pessoa2)

// 3. a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho:
const carrinho = []

// /*b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes 
// propriedades: nome (string) e disponibilidade (boolean - devem começar como true)*/
const fruta1 = {
    nome: "Maça",
    disponivel: true
}

const fruta2 = {
    nome: "Abacaxi",
    disponivel: true
}

const fruta3 = {
    nome: "Melancia",
    disponivel: true
}

// /*c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. 
// Invoque essa função passando os três objetos criados.*/

function incluirCarrinho(fruta1, fruta2, fruta3) {
    carrinho.push(fruta1, fruta2, fruta3)
    return carrinho
}

// //d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. 

const carrinhoFechado = incluirCarrinho(fruta1, fruta2, fruta3)
console.log(carrinhoFechado)

// MÉTODO 2 USANDO SPREAD (COMO VISTO EM AULA)
function adicionarAoCarrinho(inputCarrinho) {
    const novoCarrinho = {
        ...carrinho,
        frutas: [ fruta1, fruta2, fruta3 ]
    }
    return novoCarrinho
}

const compras = adicionarAoCarrinho(fruta1, fruta2, fruta3)
console.log(compras)

// DESAFIOS
/*1. Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console 
um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir 
que é um objeto.*/

// PRIMEIRO MODO - DENTRO DA FUNÇÃO
// function entradaUsuario() {
//     const inputUsuario = {
//         nome: prompt("Qual o seu nome?"),
//         idade: Number(prompt("Qual sua idade?")),
//         profissao: prompt("Qual sua profissão?")
//     }
//     return inputUsuario
// }

// const userObj = entradaUsuario()
// console.log(userObj)
// console.log(typeof userObj)

// SEGUNDO MODO - PARAMETROS DE FORA DA FUNÇÃO
function entradaUsuario(nome, idade, profissao) {
    const inputUsuario = {
        nome: nome,
        idade: idade,
        profissao: profissao
    }
    return inputUsuario
}

const nomeUsuario = prompt("Insira o seu nome.")
const idadeUsuario = Number(prompt("Insira a sua idade."))
const profissaoUsuario = prompt("Insira a sua profissão.")

const userObj = entradaUsuario(nomeUsuario, idadeUsuario, profissaoUsuario)
console.log(userObj)
console.log(typeof userObj)

/*2. Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano 
de lançamento e nome. A função deve retornar uma mensagem no seguinte modelo:
"O primeiro filme foi lançado antes do segundo? false"
"O primeiro filme foi lançado no mesmo ano do segundo? true"*/

function comparaFilmes (inputFilmes) {
    const filme1 = {
        nome: "Matrix",
        anoLancamento: 1999
    }
    const filme2 = {
        nome: "Interstellar",
        anoLancamento: 2014
    }
    const comparaAno = filme1.anoLancamento <= filme2.anoLancamento
    const mesmoAno = filme1.anoLancamento === filme2.anoLancamento
    console.log(`O primeiro filme foi lançado antes do segundo? ${comparaAno}`)
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${mesmoAno}`)
}

comparaFilmes()

/*3. Crie uma função a mais pro exercício 3 de escrita de código. Essa função vai auxiliar o controle 
de estoque do sacolão: ela deve receber por parâmetro uma das frutas e retornar esse mesmo objeto com a 
propriedade disponibilidade com o valor invertido.*/

function controleEstoque(inputFruta) {
    const frutaDisponivel = fruta1.disponivel
    return frutaDisponivel
}

const temFruta = controleEstoque(fruta1)
console.log(`Controle de estoque. Temos a fruta em estoque? ${!temFruta}.`)