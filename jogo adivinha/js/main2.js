let botao = document.querySelector(".botao__jogar");
botao.onclick = jogar;

function jogar() {
  let tentativa = 1;

  let palpite = document.querySelector("#entrada_numero");
  let resposta = document.querySelector(".resposta");

  while (tentativa <= 3) {
    let numero = Math.round(Math.random() * 10);
    

    if (palpite.value == numero) {
        
      resposta.innerHTML = `Você acertou miserávi! </br> A resposta era ${numero}.`
      break

    } else {
      resposta.innerHTML = `Errou! Tente novamente! A resposta era ${numero}.`
    } 
    tentativa++;
    palpite.focus()
  }
}
