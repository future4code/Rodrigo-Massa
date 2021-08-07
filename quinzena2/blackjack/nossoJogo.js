/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo de Blackjack!")
if (confirm("Bem vindo! Gostaria de iniciar uma nova partida?")) {
   const carta1Player = comprarCarta()
   const carta2Player = comprarCarta()
   const carta1PC = comprarCarta()
   const carta2PC = comprarCarta()
   const pontuacaoPlayer = carta1Player.valor + carta2Player.valor
   const pontuacaoPC = carta1PC.valor + carta2PC.valor
   console.log(`Jogador - cartas: ${carta1Player.texto} ${carta2Player.texto} - pontuação ${pontuacaoPlayer}`)
   console.log(`Mesa - cartas: ${carta1PC.texto} ${carta2PC.texto} - pontuação ${pontuacaoPC}`)
   if (pontuacaoPlayer > pontuacaoPC || pontuacaoPC > 21) {
      console.log("O jogador ganhou!")
   } else if (pontuacaoPlayer < pontuacaoPC || pontuacaoPlayer > 21) {
      console.log("A mesa ganhou!")
   } else if (pontuacaoPlayer === pontuacaoPC)
      console.log("Empate!")
} else {
   console.log("O jogo acabou!")
}