alert("Boas vindas ao jogo do número secreto!");

// valorMaximo é o valor máximo que o número secreto pode ter
let valorMaximo = 1000;
let chute;
let tentativas = 1

let numeroSecreto = parseInt(Math.random() * valorMaximo + 1);

// enquanto o número secreto for diferente do chute, o usuário deve continuar tentando
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${valorMaximo}`);

// se o número for igual ao chute, o usuário acertou o número secreto
if (numeroSecreto == chute) {
    break;
} else {
    if (numeroSecreto < chute) {
        alert("O número secreto é menor que o chute");
    } else {
        alert("O número secreto é maior que o chute");
    }
    tentativas += 1;
}
}

 let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
 alert(`acetou o número secreto! (${numeroSecreto}) em ${tentativas} ${palavraTentativa}.`);