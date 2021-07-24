// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  const altura = Number(prompt("Digite a altura de um retângulo."))
  const largura = Number(prompt("Digite a largura de um retângulo."))

  console.log(altura * largura)
}

// Exercício 2
function imprimeIdade() {
  const anoNascimento = Number(prompt("Digite o ano em que você nasceu."))
  const anoAtual = Number(prompt("Digite o ano atual."))

  console.log(anoNascimento - anoAtual)
}

// Exercício 3
function calculaIMC() {
  const peso = Number(prompt("Digite o seu peso."))
  const altura = Number(prompt("Digite a sua altura."))
  const imc = peso / ( altura * altura )

  console.log(imc)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  const nome = prompt("Me diga o seu nome.")
  const idade = Number(prompt("Agora me diga a sua idade."))
  const email = prompt("Por último, qual o seu email?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Me diga uma cor que você gosta.")
  const cor2 = prompt("Me diga outra cor que você gosta.")
  const cor3 = prompt("Me diga uma terceira cor que você gosta.")

  const cores = [ cor1, cor2, cor3 ]

  console.log(cores)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  const string = prompt("Digite uma frase.")
  const maiuscula = string.toUpperCase()

  console.log(maiuscula)
}

// Exercício 7
function calculaIngressosEspetaculo() {
  const custoEspetaculo = Number(prompt("Quanto custará o espetáculo?"))
  const ingresso = Number(prompt("Qual o preço do ingresso?"))

  console.log(custoEspetaculo / ingresso)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  const string1 = prompt("Digite uma frase.")
  const string2 = prompt("Digite outra frase.")

  console.log(string1.length === string2.length)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  const string1 = prompt("Digite uma frase.")
  const string2 = prompt("Digite outra frase.")

  const igualar1 = string1.toLowerCase()
  const igualar2 = string2.toLowerCase()

  console.log(igualar1 === igualar2)
}

// Exercício 10
function checaRenovacaoRG() {
  let anoAtual = Number(prompt("Digite o ano atual."))
  let anoNascimento = Number(prompt("Digite o seu ano de nascimento."))
  let anoRg = Number(prompt("Em que ano seu RG foi emitido?"))

  let renovacao20Anos = anoAtual - anoNascimento <= 20 && anoAtual - anoRg >= 5
  let renovacao50Anos = anoAtual - anoNascimento > 20 && anoAtual - anoNascimento <= 50 && anoAtual - anoRg >= 10
  let renovacao50AnosMais = anoAtual - anoNascimento > 50 && anoAtual - anoRg >= 15
  
  console.log(renovacao20Anos || renovacao50Anos || renovacao50AnosMais)
}

// Exercício 11
function checaAnoBissexto() {
  const entradaAno = Number(prompt("Digite um ano para verificar se é ano bissexto."))
  const anoBissexto = entradaAno % 4 === 0 && entradaAno % 100 !== 0 || entradaAno % 400 === 0

  console.log(anoBissexto)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  const idade = prompt("Você é maior de idade?")
  const ensinoMedio = prompt("Você se formou no ensino médio?")
  const disponibilidadeHorario = prompt("Você tem disponibilidade de horário para as aulas?")
  
  console.log(idade === "sim" && ensinoMedio === "sim" && disponibilidadeHorario === "sim")
}