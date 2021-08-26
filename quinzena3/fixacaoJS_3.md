function calculaNota(ex, p1, p2) {
  let primeiraNota = p1;
  let segundaNota = p2;
  let exerciciosNota = ex;
  
  let notaMedia = (p1 + p2 + ex) / 3;
  let media = 0
  if (notaMedia >= 9){
    media = "A"
  } else if (notaMedia < 9 && notaMedia >= 7.5) {
    media = "B"
  } else if (notaMedia < 7.5 && notaMedia >= 6) {
    media = "C"
  } else { 
    media = "D"
  }
  return media
}