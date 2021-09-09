```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let array = arrayDeNumeros
  let i = 0;

  for (let numero of array) {
    if (numero === numeroEscolhido) {
      i++;
    };
  };
  if (i > 0) {
    return `O número ${numeroEscolhido} aparece ${i}x`;
  };
  return `Número não encontrado`;
};```