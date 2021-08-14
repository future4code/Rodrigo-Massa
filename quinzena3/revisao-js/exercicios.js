// EXERCÍCIO 01
function inverteArray(array) {
  let novoArray = []
  for (let i = array.length - 1; i >= 0; i--)
    novoArray.push(array[i])
  return novoArray
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let arrayPares = []
  for (let i = 0; i < array.length; i++)
    if (array[i] % 2 === 0) {
      arrayPares.push(array[i] * array[i])
    }
  return arrayPares
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let arrayPar = []
  for (let i = 0; i <= array.length; i++)
    if (array[i] % 2 === 0) {
      arrayPar.push(array[i])
    }
  return arrayPar
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let i = 0
  let maiorNumero = -Infinity
  while (i < array.length) {
    if (array[i] > maiorNumero) {
      maiorNumero = array[i]
    }
    i++
  }
  return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2
  const booleano4 = !booleano3

  let valorA = booleano1 && booleano2 && !booleano4
  let valorB = (booleano1 && booleano2) || !booleano3
  let valorC = (booleano2 || booleano3) && (booleano4 || booleano1)
  let valorD = !(booleano2 && booleano3) || !(booleano1 && booleano3)
  let valorE = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)

  let arrayBooleanos = [valorA, valorB, valorC, valorD, valorE]
  return arrayBooleanos
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let nNumerosPares = []
  for (let i = 0; nNumerosPares.length < n; i += 2)
    nNumerosPares.push(i)
  return nNumerosPares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a === b && b === c) {
    return 'Equilátero'
  } else if (a !== b && b !== c) {
    return 'Escaleno'
  } else {
    return 'Isósceles'
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  let comparador = {
    maiorNumero: 0,
    maiorDivisivelPorMenor: 0,
    diferenca: 0
  }

  if (num1 > num2) {
    comparador.maiorNumero = num1
    if (comparador.maiorNumero % num2 === 0) {
      comparador.maiorDivisivelPorMenor = true
    } else {
      comparador.maiorDivisivelPorMenor = false
    }
    comparador.diferenca = comparador.maiorNumero - num2
  } else {
    comparador.maiorNumero = num2
    if (comparador.maiorNumero % num1 === 0) {
      comparador.maiorDivisivelPorMenor = true
    } else {
      comparador.maiorDivisivelPorMenor = false
    }
    comparador.diferenca = comparador.maiorNumero - num1
  }

  return comparador
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let maiorValor = [-Infinity]
  let segundoMaiorValor = maiorValor
  for (let i = 0; i < array.length; i++)
    if (array[i] > maiorValor) {
      segundoMaiorValor = maiorValor
      maiorValor = array[i]
    } //else if - verficar se elemento é maior que o segundo maior

  let menorValor = [+Infinity]
  let segundoMenorValor = menorValor
  for (let i = array.length - 1; i >= 0; i--)
    if (array[i] < menorValor) {
      segundoMenorValor = menorValor
      menorValor = array[i]
    } //else if - verficar se elemento é menor que o segundo menor

  let valores = [segundoMaiorValor, segundoMenorValor]
  return valores
}

// EXERCÍCIO 11 - REVISAR NO PLANTÃO
function ordenaArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let arrayTemp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = arrayTemp
      }
    }
  }
  return array
}

// EXERCÍCIO 12
function filmeFavorito() {
  const filmeFavorito = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }

  return filmeFavorito
}

// EXERCÍCIO 13
function imprimeChamada() {
  const filmeFavorito = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", " Anne Hathaway", " Emily Blunt", " Stanley Tucci"]
  }

  return `Venha assistir ao filme ${filmeFavorito.nome}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.atores}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  let retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: (2 * (lado1 + lado2)),
    area: lado1 * lado2
  }

  return retangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  let pessoaAnonima = pessoa
  if (pessoaAnonima.nome !== "") {
    pessoaAnonima.nome = "ANÔNIMO"
  }

  return pessoaAnonima
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  let maioresDeIdade = []
  for (let pessoa of arrayDePessoas) {
    if (pessoa.idade >= 18) {
      maioresDeIdade.push(pessoa)
    }
  }
  return maioresDeIdade
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  let menoresDeIdade = []
  for (let pessoa of arrayDePessoas) {
    if (pessoa.idade < 18) {
      menoresDeIdade.push(pessoa)
    }
  }
  return menoresDeIdade
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  let arrayMultiplicado = []
  for (let i of array) {
    arrayMultiplicado.push(i * 2)
  }
  return arrayMultiplicado
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  let arrayMultiplicado = []
  for (let i of array) {
    arrayMultiplicado.push(i * 2)
  }
  return arrayMultiplicado.toString()
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  let arrayParidades = []
  for (let numero of array) {
    if (numero % 2 === 0) {
      arrayParidades.push(`${numero} é par`)
    } else {
      arrayParidades.push(`${numero} é ímpar`)
    }
  }
  return arrayParidades
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  let pessoasAutorizadas = []
  for (let pessoa of pessoas) {
    if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60)
      pessoasAutorizadas.push(pessoa)
  }

  return pessoasAutorizadas
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  let pessoasNaoAutorizadas = []
  for (let pessoa of pessoas) {
    if (pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60)
      pessoasNaoAutorizadas.push(pessoa)
  }

  return pessoasNaoAutorizadas
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
