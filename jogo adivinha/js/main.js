function mostrar(frase) {
    document.write(frase);
}

function jogar() {

let tentativa = 1;
let palpite = document.querySelectorAll('.entrada_numero').value

while (tentativa <= 3) {
    let numero = Math.round(Math.random() * 10);
        tentativa ++

    let resposta = document.querySelector('.resposta')


    if (palpite == numero) {
        
        resposta.innerHTML = 'Você acertou miserávi!'

    } else if (tentativa <=3 ){
        resposta.innerHTML = ' Errou! Tente novamente!'

    } else if (tentativa > 3) {
        resposta.innerHTML = 'Errou! Fim de Jogo!'
    }
}
}
