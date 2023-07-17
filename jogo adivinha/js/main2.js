let botao = document.querySelector(".botao__jogar");
botao.onclick = jogar;

function jogar() {
  let tentativa = 1;
  
  let palpite = document.querySelectorAll(".entrada_numero").value;
  let resposta = document.querySelector(".resposta");

  while (tentativa <= 3) {
    let numero = Math.round(Math.random() * 10);
    tentativa++;

    if (numero == palpite) {
        resposta.innerHTML = "Você acertou miserávi!";
        break;
    } else if ( numero != palpite ){
        resposta.innerHTML = " Erroooooou! Tente novamente. " + "</br> O número secreto era " + numero + '.';
    } else {
        resposta.innerHTML = "Fim de jogo! </br> O número secreto era " + numero + "." + "</br> Máximo de 3 tentativas."
    }

  }
}
    