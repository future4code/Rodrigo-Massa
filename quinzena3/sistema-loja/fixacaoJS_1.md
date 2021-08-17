```function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  const salarioFixo = 2000
  const comissao = (qtdeCarrosVendidos * 100) + (valorTotalVendas * 0.05)
  const salarioTotal = comissao + salarioFixo
  
  return salarioTotal
}```